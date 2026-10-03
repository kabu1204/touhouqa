from touhouqa.benchmark.grading import is_answer_correct


def test_exact_match_on_canonical_answer():
    assert is_answer_correct(prediction="博丽灵梦", gold={"answer_canonical": "博丽灵梦"})


def test_wrong_answer_is_rejected():
    assert not is_answer_correct(prediction="雾雨魔理沙", gold={"answer_canonical": "博丽灵梦"})
