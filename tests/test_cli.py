import json

import pytest

from touhouqa.cli import COMMANDS, main


def test_help_lists_all_commands(capsys):
    main([])
    out = capsys.readouterr().out
    for name in COMMANDS:
        assert name in out


def test_unknown_command_exits_with_usage_error():
    with pytest.raises(SystemExit) as exc:
        main(["no-such-command"])
    assert exc.value.code == 2


@pytest.mark.parametrize("command", sorted(COMMANDS))
def test_every_command_has_help(command, capsys):
    with pytest.raises(SystemExit) as exc:
        main([command, "--help"])
    assert exc.value.code == 0
    assert f"touhouqa {command}" in capsys.readouterr().out


def _write_jsonl(path, rows):
    path.write_text("".join(json.dumps(r, ensure_ascii=False) + "\n" for r in rows), encoding="utf-8")


def test_pipeline_end_to_end(tmp_path, monkeypatch, capsys):
    monkeypatch.chdir(tmp_path)
    (tmp_path / "data").mkdir()
    pages = [
        {
            "pageid": 1000 + i,
            "title": f"人物{i}",
            "revid": 5000 + i,
            "timestamp": "2024-01-01T00:00:00Z",
            "categories": ["分类:人物"],
            "wikitext": f";本名: 真名{i}\n;出生地: 幻想乡{i}号\n",
        }
        for i in range(10)
    ]
    _write_jsonl(tmp_path / "data" / "ns_0.jsonl", pages)

    main(["extract"])
    main(["split", "--test-ratio", "0.5"])
    gold = [json.loads(line) for line in (tmp_path / "output/splits/test.jsonl").read_text(encoding="utf-8").splitlines()]
    assert gold

    _write_jsonl(tmp_path / "preds.jsonl", [{"id": g["id"], "answer": g["answer_canonical"]} for g in gold])
    capsys.readouterr()
    main(["eval", "--gold", "output/splits/test.jsonl", "--predictions", "preds.jsonl"])
    report = json.loads(capsys.readouterr().out)
    assert report["total"] == len(gold)
    assert report["accuracy"] == 1.0
