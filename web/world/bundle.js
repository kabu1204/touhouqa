var TQ=(()=>{var ff=Object.defineProperty;var sv=Object.getOwnPropertyDescriptor;var rv=Object.getOwnPropertyNames;var av=Object.prototype.hasOwnProperty;var Np=(n,e)=>{for(var t in e)ff(n,t,{get:e[t],enumerable:!0})},ov=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of rv(e))!av.call(n,s)&&s!==t&&ff(n,s,{get:()=>e[s],enumerable:!(i=sv(e,s))||i.enumerable});return n};var lv=n=>ov(ff({},"__esModule",{value:!0}),n);var C1={};Np(C1,{MapControls:()=>hf,THREE:()=>ao,createDanmaku:()=>iv,createPetals:()=>nv,createPost:()=>j0,createWorld:()=>G0,smoothCards:()=>k0});var ao={};Np(ao,{ACESFilmicToneMapping:()=>Oh,AddEquation:()=>Ys,AddOperation:()=>Rd,AdditiveAnimationBlendMode:()=>Qh,AdditiveBlending:()=>Wa,AgXToneMapping:()=>zh,AlphaFormat:()=>Zh,AlwaysCompare:()=>kd,AlwaysDepth:()=>or,AlwaysStencilFunc:()=>Bd,AmbientLight:()=>Tl,AnimationAction:()=>Nl,AnimationClip:()=>Vs,AnimationLoader:()=>Yu,AnimationMixer:()=>rh,AnimationObjectGroup:()=>sh,AnimationUtils:()=>Xu,ArcCurve:()=>Jo,ArrayCamera:()=>Il,ArrowHelper:()=>Th,AttachedBindMode:()=>Tu,Audio:()=>Ll,AudioAnalyser:()=>nh,AudioContext:()=>za,AudioListener:()=>th,AudioLoader:()=>$u,AxesHelper:()=>wh,BackSide:()=>ui,BasicDepthPacking:()=>Vn,BasicShadowMap:()=>Qm,BatchedMesh:()=>Xo,BezierInterpolant:()=>yl,Bone:()=>Ma,BooleanKeyframeTrack:()=>$n,Box2:()=>Fl,Box3:()=>Ei,Box3Helper:()=>Ah,BoxGeometry:()=>Fn,BoxHelper:()=>Mh,BufferAttribute:()=>ht,BufferGeometry:()=>nt,BufferGeometryLoader:()=>Dl,ByteType:()=>Vh,Cache:()=>In,Camera:()=>wr,CameraHelper:()=>Sh,CanvasTexture:()=>Hs,CapsuleGeometry:()=>Qo,CatmullRomCurve3:()=>jn,CineonToneMapping:()=>Fh,CircleGeometry:()=>ps,ClampToEdgeWrapping:()=>Qi,Clock:()=>uh,Color:()=>pe,ColorKeyframeTrack:()=>Ba,ColorManagement:()=>Bt,Compatibility:()=>Ng,CompressedArrayTexture:()=>ku,CompressedCubeTexture:()=>Gu,CompressedTexture:()=>gr,CompressedTextureLoader:()=>Zu,ConeGeometry:()=>On,ConstantAlphaFactor:()=>wd,ConstantColorFactor:()=>Ed,Controls:()=>Ga,CubeCamera:()=>Pl,CubeDepthTexture:()=>qo,CubeReflectionMapping:()=>kn,CubeRefractionMapping:()=>vs,CubeTexture:()=>Os,CubeTextureLoader:()=>qu,CubeUVReflectionMapping:()=>Pr,CubicBezierCurve:()=>Ea,CubicBezierCurve3:()=>jo,CubicInterpolant:()=>xl,CullFaceBack:()=>Dh,CullFaceFront:()=>ld,CullFaceFrontBack:()=>qm,CullFaceNone:()=>od,Curve:()=>tn,CurvePath:()=>el,CustomBlending:()=>ud,CustomToneMapping:()=>Hh,CylinderGeometry:()=>fi,Cylindrical:()=>hh,Data3DTexture:()=>hr,DataArrayTexture:()=>ur,DataTexture:()=>Ui,DataTextureLoader:()=>Qu,DataUtils:()=>Du,DecrementStencilOp:()=>dg,DecrementWrapStencilOp:()=>mg,DefaultLoadingManager:()=>Yd,DepthFormat:()=>Un,DepthStencilFormat:()=>Gn,DepthTexture:()=>cn,DetachedBindMode:()=>Dd,DirectionalLight:()=>br,DirectionalLightHelper:()=>yh,DiscreteInterpolant:()=>_l,DodecahedronGeometry:()=>vr,DoubleSide:()=>Jt,DstAlphaFactor:()=>_d,DstColorFactor:()=>Sd,DynamicCopyUsage:()=>Dg,DynamicDrawUsage:()=>Eg,DynamicReadUsage:()=>bg,EdgesGeometry:()=>Ko,EllipseCurve:()=>xr,EqualCompare:()=>Od,EqualDepth:()=>Uo,EqualStencilFunc:()=>_g,EquirectangularReflectionMapping:()=>Ya,EquirectangularRefractionMapping:()=>Za,Euler:()=>_n,EventDispatcher:()=>Ai,ExternalTexture:()=>Aa,ExtrudeGeometry:()=>ks,FileLoader:()=>Mn,Float16BufferAttribute:()=>Nu,Float32BufferAttribute:()=>ke,FloatType:()=>Di,Fog:()=>zo,FogExp2:()=>Ho,FramebufferTexture:()=>zu,FrontSide:()=>hn,Frustum:()=>Jn,FrustumArray:()=>Wo,GLBufferAttribute:()=>ch,GLSL1:()=>Ig,GLSL3:()=>Jh,GreaterCompare:()=>Hd,GreaterDepth:()=>Bo,GreaterEqualCompare:()=>Ac,GreaterEqualDepth:()=>Lo,GreaterEqualStencilFunc:()=>Ag,GreaterStencilFunc:()=>Sg,GridHelper:()=>xh,Group:()=>Si,HTMLTexture:()=>Vu,HalfFloatType:()=>Ji,HemisphereLight:()=>Ml,HemisphereLightHelper:()=>vh,IcosahedronGeometry:()=>sl,ImageBitmapLoader:()=>ju,ImageLoader:()=>Ws,ImageUtils:()=>Oo,IncrementStencilOp:()=>fg,IncrementWrapStencilOp:()=>pg,InstancedBufferAttribute:()=>ds,InstancedBufferGeometry:()=>Rl,InstancedInterleavedBuffer:()=>lh,InstancedMesh:()=>yn,Int16BufferAttribute:()=>Lu,Int32BufferAttribute:()=>Bu,Int8BufferAttribute:()=>Pu,IntType:()=>Hl,InterleavedBuffer:()=>pr,InterleavedBufferAttribute:()=>Ls,Interpolant:()=>gs,InterpolateBezier:()=>wu,InterpolateDiscrete:()=>pa,InterpolateLinear:()=>Fo,InterpolateSmooth:()=>To,InterpolationSamplingMode:()=>Bg,InterpolationSamplingType:()=>Lg,InvertStencilOp:()=>gg,KeepStencilOp:()=>wo,KeyframeTrack:()=>Ki,LOD:()=>ko,LatheGeometry:()=>rl,Layers:()=>fr,LessCompare:()=>Fd,LessDepth:()=>Io,LessEqualCompare:()=>Mc,LessEqualDepth:()=>lr,LessEqualStencilFunc:()=>yg,LessStencilFunc:()=>xg,Light:()=>zn,LightProbe:()=>bl,LightShadow:()=>Tr,Line:()=>Nn,Line3:()=>dh,LineBasicMaterial:()=>Ii,LineCurve:()=>Ta,LineCurve3:()=>$o,LineDashedMaterial:()=>vl,LineLoop:()=>Yo,LineSegments:()=>ln,LinearFilter:()=>Ht,LinearInterpolant:()=>La,LinearMipMapLinearFilter:()=>eg,LinearMipMapNearestFilter:()=>$m,LinearMipmapLinearFilter:()=>fn,LinearMipmapNearestFilter:()=>qa,LinearSRGBColorSpace:()=>Kn,LinearToneMapping:()=>Bh,LinearTransfer:()=>ga,Loader:()=>Bi,LoaderUtils:()=>Ha,LoadingManager:()=>Fa,LoopOnce:()=>Pd,LoopPingPong:()=>Ud,LoopRepeat:()=>Id,MOUSE:()=>un,Material:()=>ci,MaterialBlending:()=>Km,MaterialLoader:()=>Cl,MathUtils:()=>wn,Matrix2:()=>fh,Matrix3:()=>xt,Matrix4:()=>pt,MaxEquation:()=>pd,Mesh:()=>Pt,MeshBasicMaterial:()=>Li,MeshDepthMaterial:()=>Gs,MeshDistanceMaterial:()=>Ua,MeshLambertMaterial:()=>ml,MeshMatcapMaterial:()=>gl,MeshNormalMaterial:()=>pl,MeshPhongMaterial:()=>fl,MeshPhysicalMaterial:()=>hl,MeshStandardMaterial:()=>Ia,MeshToonMaterial:()=>dl,MinEquation:()=>dd,MirroredRepeatWrapping:()=>da,MixOperation:()=>Cd,MultiplyBlending:()=>Ih,MultiplyOperation:()=>Xa,NearestFilter:()=>mi,NearestMipMapLinearFilter:()=>jm,NearestMipMapNearestFilter:()=>Jm,NearestMipmapLinearFilter:()=>Ir,NearestMipmapNearestFilter:()=>Gh,NeutralToneMapping:()=>kh,NeverCompare:()=>Nd,NeverDepth:()=>Po,NeverStencilFunc:()=>vg,NoBlending:()=>di,NoColorSpace:()=>nn,NoNormalPacking:()=>og,NoToneMapping:()=>Tn,NormalAnimationBlendMode:()=>Sc,NormalBlending:()=>Dr,NormalGAPacking:()=>cg,NormalRGPacking:()=>lg,NotEqualCompare:()=>zd,NotEqualDepth:()=>No,NotEqualStencilFunc:()=>Mg,NumberKeyframeTrack:()=>Ar,Object3D:()=>Mt,ObjectLoader:()=>Ju,ObjectSpaceNormalMap:()=>Ld,OctahedronGeometry:()=>Da,OneFactor:()=>gd,OneMinusConstantAlphaFactor:()=>bd,OneMinusConstantColorFactor:()=>Td,OneMinusDstAlphaFactor:()=>yd,OneMinusDstColorFactor:()=>Md,OneMinusSrcAlphaFactor:()=>Lh,OneMinusSrcColorFactor:()=>xd,OrthographicCamera:()=>An,PCFShadowMap:()=>Va,PCFSoftShadowMap:()=>cd,PMREMGenerator:()=>Rc,Path:()=>zs,PerspectiveCamera:()=>li,Plane:()=>ki,PlaneGeometry:()=>Gi,PlaneHelper:()=>Eh,PointLight:()=>El,PointLightHelper:()=>gh,Points:()=>Fs,PointsMaterial:()=>Ns,PolarGridHelper:()=>_h,PolyhedronGeometry:()=>ms,PositionalAudio:()=>ih,PropertyBinding:()=>qt,PropertyMixer:()=>Bl,QuadraticBezierCurve:()=>wa,QuadraticBezierCurve3:()=>ba,Quaternion:()=>xi,QuaternionKeyframeTrack:()=>Er,QuaternionLinearInterpolant:()=>Sl,R11_EAC_Format:()=>jl,RED_GREEN_RGTC2_Format:()=>to,RED_RGTC1_Format:()=>xc,REVISION:()=>Xs,RG11_EAC_Format:()=>eo,RGBADepthPacking:()=>Kh,RGBAFormat:()=>Pi,RGBAIntegerFormat:()=>Wl,RGBA_ASTC_10x10_Format:()=>fc,RGBA_ASTC_10x5_Format:()=>cc,RGBA_ASTC_10x6_Format:()=>uc,RGBA_ASTC_10x8_Format:()=>hc,RGBA_ASTC_12x10_Format:()=>dc,RGBA_ASTC_12x12_Format:()=>pc,RGBA_ASTC_4x4_Format:()=>tc,RGBA_ASTC_5x4_Format:()=>ic,RGBA_ASTC_5x5_Format:()=>nc,RGBA_ASTC_6x5_Format:()=>sc,RGBA_ASTC_6x6_Format:()=>rc,RGBA_ASTC_8x5_Format:()=>ac,RGBA_ASTC_8x6_Format:()=>oc,RGBA_ASTC_8x8_Format:()=>lc,RGBA_BPTC_Format:()=>mc,RGBA_ETC2_EAC_Format:()=>Jl,RGBA_PVRTC_2BPPV1_Format:()=>ql,RGBA_PVRTC_4BPPV1_Format:()=>Zl,RGBA_S3TC_DXT1_Format:()=>Ja,RGBA_S3TC_DXT3_Format:()=>ja,RGBA_S3TC_DXT5_Format:()=>$a,RGBDepthPacking:()=>rg,RGBFormat:()=>qh,RGBIntegerFormat:()=>tg,RGB_BPTC_SIGNED_Format:()=>gc,RGB_BPTC_UNSIGNED_Format:()=>vc,RGB_ETC1_Format:()=>Ql,RGB_ETC2_Format:()=>Kl,RGB_PVRTC_2BPPV1_Format:()=>Yl,RGB_PVRTC_4BPPV1_Format:()=>Xl,RGB_S3TC_DXT1_Format:()=>Ka,RGDepthPacking:()=>ag,RGFormat:()=>_s,RGIntegerFormat:()=>Vl,RawShaderMaterial:()=>Pa,Ray:()=>Bn,Raycaster:()=>ka,RectAreaLight:()=>wl,RedFormat:()=>Gl,RedIntegerFormat:()=>Qa,ReinhardToneMapping:()=>Nh,RenderObjectRefreshType:()=>Fg,RenderTarget:()=>_a,RenderTarget3D:()=>ah,RepeatWrapping:()=>fa,ReplaceStencilOp:()=>hg,ReverseSubtractEquation:()=>fd,RingGeometry:()=>al,SIGNED_R11_EAC_Format:()=>$l,SIGNED_RED_GREEN_RGTC2_Format:()=>yc,SIGNED_RED_RGTC1_Format:()=>_c,SIGNED_RG11_EAC_Format:()=>ec,SRGBColorSpace:()=>Ct,SRGBTransfer:()=>Yt,Scene:()=>Ln,ShaderChunk:()=>Rt,ShaderLib:()=>Wn,ShaderMaterial:()=>wt,ShadowMaterial:()=>ul,Shape:()=>Sn,ShapeGeometry:()=>yr,ShapePath:()=>bh,ShapeUtils:()=>xn,ShortType:()=>Wh,Skeleton:()=>Vo,SkeletonHelper:()=>mh,SkinnedMesh:()=>Go,Source:()=>bu,Sphere:()=>Mi,SphereGeometry:()=>Hn,Spherical:()=>Cr,SphericalHarmonics3:()=>Oa,SplineCurve:()=>Ca,SpotLight:()=>Al,SpotLightHelper:()=>ph,Sprite:()=>mr,SpriteMaterial:()=>Bs,SrcAlphaFactor:()=>Uh,SrcAlphaSaturateFactor:()=>Ad,SrcColorFactor:()=>vd,StaticCopyUsage:()=>Rg,StaticDrawUsage:()=>Ec,StaticReadUsage:()=>wg,StereoCamera:()=>eh,StreamCopyUsage:()=>Pg,StreamDrawUsage:()=>Tg,StreamReadUsage:()=>Cg,StringKeyframeTrack:()=>es,SubtractEquation:()=>hd,SubtractiveBlending:()=>Ph,TOUCH:()=>En,TangentSpaceNormalMap:()=>ts,TetrahedronGeometry:()=>ol,Texture:()=>ri,TextureLoader:()=>Ku,TextureSource:()=>vn,TextureUtils:()=>Ch,Timer:()=>Ul,TimestampQuery:()=>Ug,TorusGeometry:()=>Sr,TorusKnotGeometry:()=>ll,Triangle:()=>Pn,TriangleFanDrawMode:()=>sg,TriangleStripDrawMode:()=>ng,TrianglesDrawMode:()=>ig,TubeGeometry:()=>Mr,UVMapping:()=>Ol,Uint16BufferAttribute:()=>ya,Uint32BufferAttribute:()=>Sa,Uint8BufferAttribute:()=>Iu,Uint8ClampedBufferAttribute:()=>Uu,Uniform:()=>st,UniformsGroup:()=>oh,UniformsLib:()=>Fe,UniformsUtils:()=>Tc,UnsignedByteType:()=>jt,UnsignedInt101111Type:()=>Yh,UnsignedInt248Type:()=>xs,UnsignedInt5999Type:()=>Xh,UnsignedIntType:()=>dn,UnsignedShort4444Type:()=>zl,UnsignedShort5551Type:()=>kl,UnsignedShortType:()=>Ur,VSMShadowMap:()=>Rr,Vector2:()=>J,Vector3:()=>w,Vector4:()=>Ft,VectorKeyframeTrack:()=>Na,VideoFrameTexture:()=>Hu,VideoTexture:()=>Zo,WebGL3DRenderTarget:()=>Ru,WebGLArrayRenderTarget:()=>Cu,WebGLCoordinateSystem:()=>en,WebGLCubeRenderTarget:()=>Dc,WebGLRenderTarget:()=>It,WebGLRenderer:()=>mp,WebGLUtils:()=>b0,WebGPUCoordinateSystem:()=>Is,WebXRController:()=>dr,WireframeGeometry:()=>cl,WrapAroundEnding:()=>ma,ZeroCurvatureEnding:()=>Ds,ZeroFactor:()=>md,ZeroSlopeEnding:()=>Ps,ZeroStencilOp:()=>ug,createCanvasElement:()=>Gd,error:()=>$e,getConsoleFunction:()=>zg,log:()=>xa,setConsoleFunction:()=>Hg,warn:()=>Le,warnOnce:()=>Qn});var Xs="186",un={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},En={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},od=0,Dh=1,ld=2,qm=3,Qm=0,Va=1,cd=2,Rr=3,hn=0,ui=1,Jt=2,di=0,Dr=1,Wa=2,Ph=3,Ih=4,ud=5,Km=6,Ys=100,hd=101,fd=102,dd=103,pd=104,md=200,gd=201,vd=202,xd=203,Uh=204,Lh=205,_d=206,yd=207,Sd=208,Md=209,Ad=210,Ed=211,Td=212,wd=213,bd=214,Po=0,or=1,Io=2,lr=3,Uo=4,Lo=5,Bo=6,No=7,Xa=0,Cd=1,Rd=2,Tn=0,Bh=1,Nh=2,Fh=3,Oh=4,Hh=5,zh=6,kh=7,Tu="attached",Dd="detached",Ol=300,kn=301,vs=302,Ya=303,Za=304,Pr=306,fa=1e3,Qi=1001,da=1002,mi=1003,Gh=1004,Jm=1004,Ir=1005,jm=1005,Ht=1006,qa=1007,$m=1007,fn=1008,eg=1008,jt=1009,Vh=1010,Wh=1011,Ur=1012,Hl=1013,dn=1014,Di=1015,Ji=1016,zl=1017,kl=1018,xs=1020,Xh=35902,Yh=35899,Zh=1021,qh=1022,Pi=1023,Un=1026,Gn=1027,Gl=1028,Qa=1029,_s=1030,Vl=1031,tg=1032,Wl=1033,Ka=33776,Ja=33777,ja=33778,$a=33779,Xl=35840,Yl=35841,Zl=35842,ql=35843,Ql=36196,Kl=37492,Jl=37496,jl=37488,$l=37489,eo=37490,ec=37491,tc=37808,ic=37809,nc=37810,sc=37811,rc=37812,ac=37813,oc=37814,lc=37815,cc=37816,uc=37817,hc=37818,fc=37819,dc=37820,pc=37821,mc=36492,gc=36494,vc=36495,xc=36283,_c=36284,to=36285,yc=36286,Pd=2200,Id=2201,Ud=2202,pa=2300,Fo=2301,To=2302,wu=2303,Ds=2400,Ps=2401,ma=2402,Sc=2500,Qh=2501,ig=0,ng=1,sg=2,Vn=3200,Kh=3201,rg=3202,ag=3203,ts=0,Ld=1,nn="",Ct="srgb",Kn="srgb-linear",ga="linear",Yt="srgb",og="",lg="rg",cg="ga",ug=0,wo=7680,hg=7681,fg=7682,dg=7683,pg=34055,mg=34056,gg=5386,vg=512,xg=513,_g=514,yg=515,Sg=516,Mg=517,Ag=518,Bd=519,Nd=512,Fd=513,Od=514,Mc=515,Hd=516,zd=517,Ac=518,kd=519,Ec=35044,Eg=35048,Tg=35040,wg=35045,bg=35049,Cg=35041,Rg=35046,Dg=35050,Pg=35042,Ig="100",Jh="300 es",en=2e3,Is=2001,Ug={COMPUTE:"compute",RENDER:"render"},Lg={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Bg={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Ng={TEXTURE_COMPARE:"depthTextureCompare"},Fg={NONE:0,SHARED:1,FULL:2};function cv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}var uv={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ua(n,e){return new uv[n](e)}function Og(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gd(){let n=va("canvas");return n.style.display="block",n}var Fp={},Us=null;function Hg(n){Us=n}function zg(){return Us}function xa(...n){let e="THREE."+n.shift();Us?Us("log",e,...n):console.log(e,...n)}function kg(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=kg(n);let e="THREE."+n.shift();if(Us)Us("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function $e(...n){n=kg(n);let e="THREE."+n.shift();if(Us)Us("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Qn(...n){let e=n.join(" ");e in Fp||(Fp[e]=!0,Le(...n))}function Gg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Vg={[Po]:or,[Io]:Bo,[Uo]:No,[lr]:Lo,[or]:Po,[Bo]:Io,[No]:Uo,[Lo]:lr},Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Oi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Op=1234567,ar=Math.PI/180,cr=180/Math.PI;function on(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oi[n&255]+Oi[n>>8&255]+Oi[n>>16&255]+Oi[n>>24&255]+"-"+Oi[e&255]+Oi[e>>8&255]+"-"+Oi[e>>16&15|64]+Oi[e>>24&255]+"-"+Oi[t&63|128]+Oi[t>>8&255]+"-"+Oi[t>>16&255]+Oi[t>>24&255]+Oi[i&255]+Oi[i>>8&255]+Oi[i>>16&255]+Oi[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function Vd(n,e){return(n%e+e)%e}function hv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function fv(n,e,t){return n!==e?(t-n)/(e-n):0}function bo(n,e,t){return(1-t)*n+t*e}function dv(n,e,t,i){return bo(n,e,1-Math.exp(-t*i))}function pv(n,e=1){return e-Math.abs(Vd(n,e*2)-e)}function mv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function gv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function vv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function xv(n,e){return n+Math.random()*(e-n)}function _v(n){return n*(.5-Math.random())}function yv(n){n!==void 0&&(Op=n);let e=Op+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sv(n){return n*ar}function Mv(n){return n*cr}function Av(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Ev(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Tv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wv(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),f=r((e-i)/2),h=a((e-i)/2),d=r((i-e)/2),p=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*p,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*p,o*c);break;case"ZYZ":n.set(l*p,l*d,o*u,o*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var wn={DEG2RAD:ar,RAD2DEG:cr,generateUUID:on,clamp:dt,euclideanModulo:Vd,mapLinear:hv,inverseLerp:fv,lerp:bo,damp:dv,pingpong:pv,smoothstep:mv,smootherstep:gv,randInt:vv,randFloat:xv,randFloatSpread:_v,seededRandom:yv,degToRad:Sv,radToDeg:Mv,isPowerOfTwo:Av,ceilPowerOfTwo:Ev,floorPowerOfTwo:Tv,setQuaternionFromProperEuler:wv,normalize:Tt,denormalize:qi},Qd=class Qd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qd.prototype.isVector2=!0;var J=Qd,xi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],d=r[a+1],p=r[a+2],v=r[a+3];if(f!==v||l!==h||c!==d||u!==p){let g=l*h+c*d+u*p+f*v;g<0&&(h=-h,d=-d,p=-p,v=-v,g=-g);let m=1-o;if(g<.9995){let x=Math.acos(g),M=Math.sin(x);m=Math.sin(m*x)/M,o=Math.sin(o*x)/M,l=l*m+h*o,c=c*m+d*o,u=u*m+p*o,f=f*m+v*o}else{l=l*m+h*o,c=c*m+d*o,u=u*m+p*o,f=f*m+v*o;let x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-o*d,e[t+2]=c*p+u*d+o*h-l*f,e[t+3]=u*p-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Kd=class Kd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return df.copy(this).projectOnVector(e),this.sub(df)}reflect(e){return this.sub(df.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kd.prototype.isVector3=!0;var w=Kd,df=new w,Hp=new xi,Jd=class Jd{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],p=i[8],v=s[0],g=s[3],m=s[6],x=s[1],M=s[4],y=s[7],T=s[2],E=s[5],C=s[8];return r[0]=a*v+o*x+l*T,r[3]=a*g+o*M+l*E,r[6]=a*m+o*y+l*C,r[1]=c*v+u*x+f*T,r[4]=c*g+u*M+f*E,r[7]=c*m+u*y+f*C,r[2]=h*v+d*x+p*T,r[5]=h*g+d*M+p*E,r[8]=h*m+d*y+p*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,p=t*f+i*h+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Qn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pf.makeScale(e,t)),this}rotate(e){return Qn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pf.makeRotation(-e)),this}translate(e,t){return Qn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jd.prototype.isMatrix3=!0;var xt=Jd,pf=new xt,zp=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kp=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bv(){let n={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Yt&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Yt&&(s.r=ha(s.r),s.g=ha(s.g),s.b=ha(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===nn?ga:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Kn]:{primaries:e,whitePoint:i,transfer:ga,toXYZ:zp,fromXYZ:kp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:i,transfer:Yt,toXYZ:zp,fromXYZ:kp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),n}var Bt=bv();function fs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ha(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Wr,Oo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wr===void 0&&(Wr=va("canvas")),Wr.width=e.width,Wr.height=e.height;let s=Wr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Wr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=va("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fs(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fs(t[i]/255)*255):t[i]=fs(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cv=0,vn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=on(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mf(s[a].image)):r.push(mf(s[a]))}else r=mf(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function mf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Oo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var bu=class extends vn{constructor(e=null){Qn('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(e),this.isSource=!0}},Rv=0,gf=new w,ri=class n extends Ai{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Qi,s=Qi,r=Ht,a=fn,o=Pi,l=jt,c=n.DEFAULT_ANISOTROPY,u=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=on(),this.name="",this.source=new vn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gf).x}get height(){return this.source.getSize(gf).y}get depth(){return this.source.getSize(gf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fa:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fa:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=Ol;ri.DEFAULT_ANISOTROPY=1;var jd=class jd{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(d+1)/2,T=(m+1)/2,E=(u+h)/4,C=(f+v)/4,_=(p+g)/4;return M>y&&M>T?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=E/i,r=C/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=_/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=C/r,s=_/r),this.set(i,s,r,t),this}let x=Math.sqrt((g-p)*(g-p)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(f-v)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jd.prototype.isVector4=!0;var Ft=jd,_a=class extends Ai{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new ri(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new vn(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},It=class extends _a{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ur=class extends ri{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mi,this.minFilter=mi,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Cu=class extends It{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new ur(null,e,t,i),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}},hr=class extends ri{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mi,this.minFilter=mi,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ru=class extends It{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new hr(null,e,t,i),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}},Rh=class Rh{constructor(e,t,i,s,r,a,o,l,c,u,f,h,d,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,h,d,p,v,g)}set(e,t,i,s,r,a,o,l,c,u,f,h,d,p,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rh().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Xr.setFromMatrixColumn(e,0).length(),r=1/Xr.setFromMatrixColumn(e,1).length(),a=1/Xr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,d=a*f,p=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,p=c*u,v=c*f;t[0]=h+v*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-p,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,p=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,d=a*f,p=o*u,v=o*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,d=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=p*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-v*f}else if(e.order==="XZY"){let h=a*l,d=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dv,e,Pv)}lookAt(e,t,i){let s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Es.crossVectors(i,rn),Es.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Es.crossVectors(i,rn)),Es.normalize(),Nc.crossVectors(rn,Es),s[0]=Es.x,s[4]=Nc.x,s[8]=rn.x,s[1]=Es.y,s[5]=Nc.y,s[9]=rn.y,s[2]=Es.z,s[6]=Nc.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],p=i[2],v=i[6],g=i[10],m=i[14],x=i[3],M=i[7],y=i[11],T=i[15],E=s[0],C=s[4],_=s[8],b=s[12],D=s[1],I=s[5],O=s[9],X=s[13],F=s[2],k=s[6],ee=s[10],z=s[14],fe=s[3],j=s[7],te=s[11],ue=s[15];return r[0]=a*E+o*D+l*F+c*fe,r[4]=a*C+o*I+l*k+c*j,r[8]=a*_+o*O+l*ee+c*te,r[12]=a*b+o*X+l*z+c*ue,r[1]=u*E+f*D+h*F+d*fe,r[5]=u*C+f*I+h*k+d*j,r[9]=u*_+f*O+h*ee+d*te,r[13]=u*b+f*X+h*z+d*ue,r[2]=p*E+v*D+g*F+m*fe,r[6]=p*C+v*I+g*k+m*j,r[10]=p*_+v*O+g*ee+m*te,r[14]=p*b+v*X+g*z+m*ue,r[3]=x*E+M*D+y*F+T*fe,r[7]=x*C+M*I+y*k+T*j,r[11]=x*_+M*O+y*ee+T*te,r[15]=x*b+M*X+y*z+T*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],v=e[7],g=e[11],m=e[15],x=l*d-c*h,M=o*d-c*f,y=o*h-l*f,T=a*d-c*u,E=a*h-l*u,C=a*f-o*u;return t*(v*x-g*M+m*y)-i*(p*x-g*T+m*E)+s*(p*M-v*T+m*C)-r*(p*y-v*E+g*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],v=e[13],g=e[14],m=e[15],x=t*o-i*a,M=t*l-s*a,y=t*c-r*a,T=i*l-s*o,E=i*c-r*o,C=s*c-r*l,_=u*v-f*p,b=u*g-h*p,D=u*m-d*p,I=f*g-h*v,O=f*m-d*v,X=h*m-d*g,F=x*X-M*O+y*I+T*D-E*b+C*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/F;return e[0]=(o*X-l*O+c*I)*k,e[1]=(s*O-i*X-r*I)*k,e[2]=(v*C-g*E+m*T)*k,e[3]=(h*E-f*C-d*T)*k,e[4]=(l*D-a*X-c*b)*k,e[5]=(t*X-s*D+r*b)*k,e[6]=(g*y-p*C-m*M)*k,e[7]=(u*C-h*y+d*M)*k,e[8]=(a*O-o*D+c*_)*k,e[9]=(i*D-t*O-r*_)*k,e[10]=(p*E-v*y+m*x)*k,e[11]=(f*y-u*E-d*x)*k,e[12]=(o*b-a*I-l*_)*k,e[13]=(t*I-i*b+s*_)*k,e[14]=(v*M-p*T-g*x)*k,e[15]=(u*T-f*M+h*x)*k,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,p=r*f,v=a*u,g=a*f,m=o*f,x=l*c,M=l*u,y=l*f,T=i.x,E=i.y,C=i.z;return s[0]=(1-(v+m))*T,s[1]=(d+y)*T,s[2]=(p-M)*T,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(h+m))*E,s[6]=(g+x)*E,s[7]=0,s[8]=(p+M)*C,s[9]=(g-x)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Xr.set(s[0],s[1],s[2]).length(),o=Xr.set(s[4],s[5],s[6]).length(),l=Xr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),bn.copy(this);let c=1/a,u=1/o,f=1/l;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,t.setFromRotationMatrix(bn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=en,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s),p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(o===en)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Is)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=en,l=!1){let c=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s),p,v;if(l)p=1/(a-r),v=a/(a-r);else if(o===en)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===Is)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Rh.prototype.isMatrix4=!0;var pt=Rh,Xr=new w,bn=new pt,Dv=new w(0,0,0),Pv=new w(1,1,1),Es=new w,Nc=new w,rn=new w,Gp=new pt,Vp=new xi,_n=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vp.setFromEuler(this),this.setFromQuaternion(Vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var fr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Iv=0,Wp=new w,Yr=new xi,rs=new pt,Fc=new w,uo=new w,Uv=new w,Lv=new xi,Xp=new w(1,0,0),Yp=new w(0,1,0),Zp=new w(0,0,1),qp={type:"added"},Bv={type:"removed"},Zr={type:"childadded",child:null},vf={type:"childremoved",child:null},Mt=class n extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new w,t=new _n,i=new xi,s=new w(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new xt}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis(Yp,e)}rotateZ(e){return this.rotateOnAxis(Zp,e)}translateOnAxis(e,t){return Wp.copy(e).applyQuaternion(this.quaternion),this.position.add(Wp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis(Yp,e)}translateZ(e){return this.translateOnAxis(Zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fc.copy(e):Fc.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(uo,Fc,this.up):rs.lookAt(Fc,uo,this.up),this.quaternion.setFromRotationMatrix(rs),s&&(rs.extractRotation(s.matrixWorld),Yr.setFromRotationMatrix(rs),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qp),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bv),vf.child=e,this.dispatchEvent(vf),vf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rs.multiply(e.parent.matrixWorld)),e.applyMatrix4(rs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qp),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,Uv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,Lv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mt.DEFAULT_UP=new w(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Si=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nv={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Wg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function xf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Bt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Bt.workingColorSpace){if(e=Vd(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=xf(a,r,e+1/3),this.g=xf(a,r,e),this.b=xf(a,r,e-1/3)}return Bt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ct){function i(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let i=Wg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Bt.workingToColorSpace(Hi.copy(this),e),Math.round(dt(Hi.r*255,0,255))*65536+Math.round(dt(Hi.g*255,0,255))*256+Math.round(dt(Hi.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(Hi.copy(this),t);let i=Hi.r,s=Hi.g,r=Hi.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(Hi.copy(this),t),e.r=Hi.r,e.g=Hi.g,e.b=Hi.b,e}getStyle(e=Ct){Bt.workingToColorSpace(Hi.copy(this),e);let t=Hi.r,i=Hi.g,s=Hi.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ts),this.setHSL(Ts.h+e,Ts.s+t,Ts.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ts),e.getHSL(Oc);let i=bo(Ts.h,Oc.h,t),s=bo(Ts.s,Oc.s,t),r=bo(Ts.l,Oc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hi=new pe;pe.NAMES=Wg;var Ho=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},zo=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new pe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ln=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Cn=new w,as=new w,_f=new w,os=new w,qr=new w,Qr=new w,Qp=new w,yf=new w,Sf=new w,Mf=new w,Af=new Ft,Ef=new Ft,Tf=new Ft,Pn=class n{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),as.subVectors(i,t),_f.subVectors(e,t);let a=Cn.dot(Cn),o=Cn.dot(as),l=Cn.dot(_f),c=as.dot(as),u=as.dot(_f),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-o*u)*h,p=(a*u-o*l)*h;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,os)===null?!1:os.x>=0&&os.y>=0&&os.x+os.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,os)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,os.x),l.addScaledVector(a,os.y),l.addScaledVector(o,os.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Af.setScalar(0),Ef.setScalar(0),Tf.setScalar(0),Af.fromBufferAttribute(e,t),Ef.fromBufferAttribute(e,i),Tf.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Af,r.x),a.addScaledVector(Ef,r.y),a.addScaledVector(Tf,r.z),a}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),as.subVectors(e,t),Cn.cross(as).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),as.subVectors(this.a,this.b),Cn.cross(as).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;qr.subVectors(s,i),Qr.subVectors(r,i),yf.subVectors(e,i);let l=qr.dot(yf),c=Qr.dot(yf);if(l<=0&&c<=0)return t.copy(i);Sf.subVectors(e,s);let u=qr.dot(Sf),f=Qr.dot(Sf);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(qr,a);Mf.subVectors(e,r);let d=qr.dot(Mf),p=Qr.dot(Mf);if(p>=0&&d<=p)return t.copy(r);let v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Qr,o);let g=u*p-d*f;if(g<=0&&f-u>=0&&d-p>=0)return Qp.subVectors(r,s),o=(f-u)/(f-u+(d-p)),t.copy(s).addScaledVector(Qp,o);let m=1/(g+v+h);return a=v*m,o=h*m,t.copy(i).addScaledVector(qr,a).addScaledVector(Qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ei=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hc.copy(i.boundingBox)),Hc.applyMatrix4(e.matrixWorld),this.union(Hc)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),zc.subVectors(this.max,ho),Kr.subVectors(e.a,ho),Jr.subVectors(e.b,ho),jr.subVectors(e.c,ho),ws.subVectors(Jr,Kr),bs.subVectors(jr,Jr),qs.subVectors(Kr,jr);let t=[0,-ws.z,ws.y,0,-bs.z,bs.y,0,-qs.z,qs.y,ws.z,0,-ws.x,bs.z,0,-bs.x,qs.z,0,-qs.x,-ws.y,ws.x,0,-bs.y,bs.x,0,-qs.y,qs.x,0];return!wf(t,Kr,Jr,jr,zc)||(t=[1,0,0,0,1,0,0,0,1],!wf(t,Kr,Jr,jr,zc))?!1:(kc.crossVectors(ws,bs),t=[kc.x,kc.y,kc.z],wf(t,Kr,Jr,jr,zc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ls),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ls=[new w,new w,new w,new w,new w,new w,new w,new w],Rn=new w,Hc=new Ei,Kr=new w,Jr=new w,jr=new w,ws=new w,bs=new w,qs=new w,ho=new w,zc=new w,kc=new w,Qs=new w;function wf(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Qs.fromArray(n,r);let o=s.x*Math.abs(Qs.x)+s.y*Math.abs(Qs.y)+s.z*Math.abs(Qs.z),l=e.dot(Qs),c=t.dot(Qs),u=i.dot(Qs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var hs=Fv();function Fv(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function $i(n){Math.abs(n)>65504&&Le("DataUtils.toHalfFloat(): Value out of range."),n=dt(n,-65504,65504),hs.floatView[0]=n;let e=hs.uint32View[0],t=e>>23&511;return hs.baseTable[t]+((e&8388607)>>hs.shiftTable[t])}function Ao(n){let e=n>>10;return hs.uint32View[0]=hs.mantissaTable[hs.offsetTable[e]+(n&1023)]+hs.exponentTable[e],hs.floatView[0]}var Du=class{static toHalfFloat(e){return $i(e)}static fromHalfFloat(e){return Ao(e)}},yi=new w,Gc=new J,Ov=0,ht=class extends Ai{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ov++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ec,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gc.fromBufferAttribute(this,t),Gc.applyMatrix3(e),this.setXY(t,Gc.x,Gc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yi.fromBufferAttribute(this,t),yi.applyMatrix3(e),this.setXYZ(t,yi.x,yi.y,yi.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yi.fromBufferAttribute(this,t),yi.applyMatrix4(e),this.setXYZ(t,yi.x,yi.y,yi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yi.fromBufferAttribute(this,t),yi.applyNormalMatrix(e),this.setXYZ(t,yi.x,yi.y,yi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yi.fromBufferAttribute(this,t),yi.transformDirection(e),this.setXYZ(t,yi.x,yi.y,yi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Pu=class extends ht{constructor(e,t,i){super(new Int8Array(e),t,i)}},Iu=class extends ht{constructor(e,t,i){super(new Uint8Array(e),t,i)}},Uu=class extends ht{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}},Lu=class extends ht{constructor(e,t,i){super(new Int16Array(e),t,i)}},ya=class extends ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Bu=class extends ht{constructor(e,t,i){super(new Int32Array(e),t,i)}},Sa=class extends ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Nu=class extends ht{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Ao(this.array[e*this.itemSize]);return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=$i(t),this}getY(e){let t=Ao(this.array[e*this.itemSize+1]);return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=$i(t),this}getZ(e){let t=Ao(this.array[e*this.itemSize+2]);return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=$i(t),this}getW(e){let t=Ao(this.array[e*this.itemSize+3]);return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=$i(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=$i(t),this.array[e+1]=$i(i),this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=$i(t),this.array[e+1]=$i(i),this.array[e+2]=$i(s),this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=$i(t),this.array[e+1]=$i(i),this.array[e+2]=$i(s),this.array[e+3]=$i(r),this}},ke=class extends ht{constructor(e,t,i){super(new Float32Array(e),t,i)}},Hv=new Ei,fo=new w,bf=new w,Mi=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Hv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);let t=fo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(fo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(bf)),this.expandByPoint(fo.copy(e.center).sub(bf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zv=0,gn=new pt,Cf=new Mt,$r=new w,an=new Ei,po=new Ei,Ri=new w,nt=class n extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cv(e)?Sa:ya)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new xt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return Cf.lookAt(e),Cf.updateMatrix(),this.applyMatrix4(Cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ke(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ri.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ri),Ri.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ri)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];po.setFromBufferAttribute(o),this.morphTargetsRelative?(Ri.addVectors(an.min,po.min),an.expandByPoint(Ri),Ri.addVectors(an.max,po.max),an.expandByPoint(Ri)):(an.expandByPoint(po.min),an.expandByPoint(po.max))}an.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ri.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ri));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ri.fromBufferAttribute(o,c),l&&($r.fromBufferAttribute(e,c),Ri.add($r)),s=Math.max(s,i.distanceToSquared(Ri))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ht(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new w,l[_]=new w;let c=new w,u=new w,f=new w,h=new J,d=new J,p=new J,v=new w,g=new w;function m(_,b,D){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,D),h.fromBufferAttribute(r,_),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,D),u.sub(c),f.sub(c),d.sub(h),p.sub(h);let I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(I),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(I),o[_].add(v),o[b].add(v),o[D].add(v),l[_].add(g),l[b].add(g),l[D].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let _=0,b=x.length;_<b;++_){let D=x[_],I=D.start,O=D.count;for(let X=I,F=I+O;X<F;X+=3)m(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let M=new w,y=new w,T=new w,E=new w;function C(_){T.fromBufferAttribute(s,_),E.copy(T);let b=o[_];M.copy(b),M.sub(T.multiplyScalar(T.dot(b))).normalize(),y.crossVectors(E,b);let I=y.dot(l[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,I)}for(let _=0,b=x.length;_<b;++_){let D=x[_],I=D.start,O=D.count;for(let X=I,F=I+O;X<F;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let s=new w,r=new w,a=new w,o=new w,l=new w,c=new w,u=new w,f=new w;if(e)for(let h=0,d=e.count;h<d;h+=3){let p=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ri.fromBufferAttribute(e,t),Ri.normalize(),e.setXYZ(t,Ri.x,Ri.y,Ri.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),d=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let m=0;m<u;m++)h[p++]=c[d++]}return new ht(h,u,f)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},pr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ec,this.updateRanges=[],this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Zi=new w,Ls=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Zi.fromBufferAttribute(this,t),Zi.applyMatrix4(e),this.setXYZ(t,Zi.x,Zi.y,Zi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zi.fromBufferAttribute(this,t),Zi.applyNormalMatrix(e),this.setXYZ(t,Zi.x,Zi.y,Zi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zi.fromBufferAttribute(this,t),Zi.transformDirection(e),this.setXYZ(t,Zi.x,Zi.y,Zi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=qi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){xa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){xa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rf=new w,kv=new w,Gv=new xt,ki=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Rf.subVectors(i,t).cross(kv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Rf),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Gv.getNormalMatrix(e),s=this.coplanarPoint(Rf).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Vv=0,ci=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=on(),this.name="",this.type="Material",this.blending=Dr,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Lh,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ki().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new J().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Bs=class extends ci{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ea,mo=new w,ta=new w,ia=new w,na=new J,go=new J,Xg=new pt,Vc=new w,vo=new w,Wc=new w,Kp=new J,Df=new J,Jp=new J,mr=class extends Mt{constructor(e=new Bs){if(super(),this.isSprite=!0,this.type="Sprite",ea===void 0){ea=new nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new pr(t,5);ea.setIndex([0,1,2,0,2,3]),ea.setAttribute("position",new Ls(i,3,0,!1)),ea.setAttribute("uv",new Ls(i,2,3,!1))}this.geometry=ea,this.material=e,this.center=new J(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ta.setFromMatrixScale(this.matrixWorld),Xg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ia.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ta.multiplyScalar(-ia.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Xc(Vc.set(-.5,-.5,0),ia,a,ta,s,r),Xc(vo.set(.5,-.5,0),ia,a,ta,s,r),Xc(Wc.set(.5,.5,0),ia,a,ta,s,r),Kp.set(0,0),Df.set(1,0),Jp.set(1,1);let o=e.ray.intersectTriangle(Vc,vo,Wc,!1,mo);if(o===null&&(Xc(vo.set(-.5,.5,0),ia,a,ta,s,r),Df.set(0,1),o=e.ray.intersectTriangle(Vc,Wc,vo,!1,mo),o===null))return;let l=e.ray.origin.distanceTo(mo);l<e.near||l>e.far||t.push({distance:l,point:mo.clone(),uv:Pn.getInterpolation(mo,Vc,vo,Wc,Kp,Df,Jp,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Xc(n,e,t,i,s,r){na.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(go.x=r*na.x-s*na.y,go.y=s*na.x+r*na.y):go.copy(na),n.copy(e),n.x+=go.x,n.y+=go.y,n.applyMatrix4(Xg)}var Yc=new w,jp=new w,ko=class extends Mt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let i=0,s=t.length;i<s;i++){let r=t[i];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);let s=this.levels,r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){let s=t.splice(i,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let i,s;for(i=1,s=t.length;i<s;i++){let r=t[i].distance;if(t[i].object.visible&&(r-=r*t[i].hysteresis),e<r)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Yc.setFromMatrixPosition(this.matrixWorld);let s=e.ray.origin.distanceTo(Yc);this.getObjectForDistance(s).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Yc.setFromMatrixPosition(e.matrixWorld),jp.setFromMatrixPosition(this.matrixWorld);let i=Yc.distanceTo(jp)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let a=t[s].distance;if(t[s].object.visible&&(a-=a*t[s].hysteresis),i>=a)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){let t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];let i=this.levels;for(let s=0,r=i.length;s<r;s++){let a=i[s];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}},cs=new w,Pf=new w,Zc=new w,qc=new w,Bn=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cs.copy(this.origin).addScaledVector(this.direction,t),cs.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Pf.copy(e).add(t).multiplyScalar(.5),Zc.copy(t).sub(e).normalize(),qc.copy(this.origin).sub(Pf);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Zc),o=qc.dot(this.direction),l=-qc.dot(Zc),c=qc.lengthSq(),u=Math.abs(1-a*a),f,h,d,p;if(u>0)if(f=a*l-o,h=a*o-l,p=r*u,f>=0)if(h>=-p)if(h<=p){let v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Pf).addScaledVector(Zc,h),d}intersectSphere(e,t){if(e.radius<0)return null;cs.subVectors(e.center,this.origin);let i=cs.dot(this.direction),s=cs.dot(cs)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,cs)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,p=t.x-a.x,v=t.y-a.y,g=t.z-a.z,m=i.x-a.x,x=i.y-a.y,M=i.z-a.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(u),C,_,b,D,I,O,X,F,k,ee,z,fe;if(y>=T&&y>=E?(b=l,O=f,k=p,fe=m,l>=0?(C=c,_=u,D=h,I=d,X=v,F=g,ee=x,z=M):(C=u,_=c,D=d,I=h,X=g,F=v,ee=M,z=x)):T>=E?(b=c,O=h,k=v,fe=x,c>=0?(C=u,_=l,D=d,I=f,X=g,F=p,ee=M,z=m):(C=l,_=u,D=f,I=d,X=p,F=g,ee=m,z=M)):(b=u,O=d,k=g,fe=M,u>=0?(C=l,_=c,D=f,I=h,X=p,F=v,ee=m,z=x):(C=c,_=l,D=h,I=f,X=v,F=p,ee=x,z=m)),b===0)return null;let j=C/b,te=_/b,ue=1/b,oe=D-j*O,He=I-te*O,At=X-j*k,Dt=F-te*k,Lt=ee-j*fe,ne=z-te*fe,le=Lt*Dt-ne*At,ze=oe*ne-He*Lt,ct=At*He-Dt*oe;if(s){if(le<0||ze<0||ct<0)return null}else if((le<0||ze<0||ct<0)&&(le>0||ze>0||ct>0))return null;let We=le+ze+ct;if(We===0)return null;let ft=ue*(le*O+ze*k+ct*fe);return(We>0?ft<0:ft>0)?null:this.at(ft/We,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Li=class extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$p=new pt,Ks=new Bn,Qc=new Mi,em=new w,Kc=new w,Jc=new w,jc=new w,If=new w,$c=new w,tm=new w,eu=new w,Pt=class extends Mt{constructor(e=new nt,t=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){$c.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(If.fromBufferAttribute(f,e),a?$c.addScaledVector(If,u):$c.addScaledVector(If.sub(t),u))}t.add($c)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qc.copy(i.boundingSphere),Qc.applyMatrix4(r),Ks.copy(e.ray).recast(e.near),!(Qc.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(Qc,em)===null||Ks.origin.distanceToSquared(em)>(e.far-e.near)**2))&&($p.copy(r).invert(),Ks.copy(e.ray).applyMatrix4($p),!(i.boundingBox!==null&&Ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ks)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){let g=h[p],m=a[g.materialIndex],x=Math.max(g.start,d.start),M=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,T=M;y<T;y+=3){let E=o.getX(y),C=o.getX(y+1),_=o.getX(y+2);s=tu(this,m,e,i,c,u,f,E,C,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let x=o.getX(g),M=o.getX(g+1),y=o.getX(g+2);s=tu(this,a,e,i,c,u,f,x,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){let g=h[p],m=a[g.materialIndex],x=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,T=M;y<T;y+=3){let E=y,C=y+1,_=y+2;s=tu(this,m,e,i,c,u,f,E,C,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let x=g,M=g+1,y=g+2;s=tu(this,a,e,i,c,u,f,x,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Wv(n,e,t,i,s,r,a,o){let l;if(e.side===ui?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===hn,o),l===null)return null;eu.copy(o),eu.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(eu);return c<t.near||c>t.far?null:{distance:c,point:eu.clone(),object:n}}function tu(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Kc),n.getVertexPosition(l,Jc),n.getVertexPosition(c,jc);let u=Wv(n,e,t,i,Kc,Jc,jc,tm);if(u){let f=new w;Pn.getBarycoord(tm,Kc,Jc,jc,f),s&&(u.uv=Pn.getInterpolatedAttribute(s,o,l,c,f,new J)),r&&(u.uv1=Pn.getInterpolatedAttribute(r,o,l,c,f,new J)),a&&(u.normal=Pn.getInterpolatedAttribute(a,o,l,c,f,new w),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new w,materialIndex:0};Pn.getNormal(Kc,Jc,jc,h.normal),u.face=h,u.barycoord=f}return u}var xo=new Ft,im=new Ft,nm=new Ft,Xv=new Ft,sm=new pt,iu=new w,Uf=new Mi,rm=new pt,Lf=new Bn,Go=class extends Pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tu,this.bindMatrix=new pt,this.bindMatrixInverse=new pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ei),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,iu),this.boundingBox.expandByPoint(iu)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,iu),this.boundingSphere.expandByPoint(iu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uf.copy(this.boundingSphere),Uf.applyMatrix4(s),e.ray.intersectsSphere(Uf)!==!1&&(rm.copy(s).invert(),Lf.copy(e.ray).applyMatrix4(rm),!(this.boundingBox!==null&&Lf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Lf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ft,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;im.fromBufferAttribute(s.attributes.skinIndex,e),nm.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(xo.copy(t),t.set(0,0,0,0)):(xo.set(...t,1),t.set(0,0,0)),xo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=nm.getComponent(r);if(a!==0){let o=im.getComponent(r);sm.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Xv.copy(xo).applyMatrix4(sm),a)}}return t.isVector4&&(t.w=xo.w),t.applyMatrix4(this.bindMatrixInverse)}},Ma=class extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ui=class extends ri{constructor(e=null,t=1,i=1,s,r,a,o,l,c=mi,u=mi,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},am=new pt,Yv=new pt,Vo=class n{constructor(e=[],t=[]){this.uuid=on(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new pt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new pt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Yv;am.multiplyMatrices(o,t[r]),am.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ui(t,e,e,Pi,Di);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(Le("Skeleton: No bone found with UUID:",r),a=new Ma),this.bones.push(a),this.boneInverses.push(new pt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},ds=class extends ht{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sa=new pt,om=new pt,nu=[],lm=new Ei,Zv=new pt,_o=new Pt,yo=new Mi,yn=class extends Pt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ds(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Zv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sa),lm.copy(e.boundingBox).applyMatrix4(sa),this.boundingBox.union(lm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sa),yo.copy(e.boundingSphere).applyMatrix4(sa),this.boundingSphere.union(yo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(i),e.ray.intersectsSphere(yo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sa),om.multiplyMatrices(i,sa),_o.matrixWorld=om,_o.raycast(e,nu);for(let a=0,o=nu.length;a<o;a++){let l=nu[a];l.instanceId=r,l.object=this,t.push(l)}nu.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ds(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ui(new Float32Array(s*this.count),s,this.count,Gl,Di));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Js=new Mi,qv=new J(.5,.5),su=new w,Jn=class{constructor(e=new ki,t=new ki,i=new ki,s=new ki,r=new ki,a=new ki){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=en,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],v=r[9],g=r[10],m=r[11],x=r[12],M=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,d-u,m-p,T-x).normalize(),s[1].setComponents(c+a,d+u,m+p,T+x).normalize(),s[2].setComponents(c+o,d+f,m+v,T+M).normalize(),s[3].setComponents(c-o,d-f,m-v,T-M).normalize(),i)s[4].setComponents(l,h,g,y).normalize(),s[5].setComponents(c-l,d-h,m-g,T-y).normalize();else if(s[4].setComponents(c-l,d-h,m-g,T-y).normalize(),t===en)s[5].setComponents(c+l,d+h,m+g,T+y).normalize();else if(t===Is)s[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){Js.center.set(0,0,0);let t=qv.distanceTo(e.center);return Js.radius=.7071067811865476+t,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(su.x=s.normal.x>0?e.max.x:e.min.x,su.y=s.normal.y>0?e.max.y:e.min.y,su.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(su)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},cm=new pt,Wo=class n{constructor(){this.coordinateSystem=en,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];cm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Jn),i[s].setFromProjectionMatrix(cm,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Jn),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};function Bf(n,e){return n-e}function Qv(n,e){return n.z-e.z}function Kv(n,e){return e.z-n.z}var Qf=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,s){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=s}reset(){this.list.length=0,this.index=0}},ji=new pt,Jv=new pe(1,1,1),jv=new Jn,$v=new Wo,ru=new Ei,js=new Mi,So=new w,um=new w,ex=new w,Nf=new Qf,zi=new Pt,au=[];function tx(n,e,t=0){let i=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){let s=n.count;for(let r=0;r<s;r++)for(let a=0;a<i;a++)e.setComponent(r+t,a,n.getComponent(r,a))}else e.array.set(n.array,t*i);e.needsUpdate=!0}function $s(n,e){if(n.constructor!==e.constructor){let t=Math.min(n.length,e.length);for(let i=0;i<t;i++)e[i]=n[i]}else{let t=Math.min(n.length,e.length);e.set(new n.constructor(n.buffer,0,t))}}var Xo=class extends Pt{constructor(e,t,i=t*2,s){super(new nt,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),i=new Ui(t,e,e,Pi,Di);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),i=new Ui(t,e,e,Qa,dn);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),i=new Ui(t,e,e,Pi,Di);i.colorSpace=Bt.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){let t=this.geometry,i=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,u=new o.constructor(i*l),f=new ht(u,l,c);t.setAttribute(r,f)}if(e.getIndex()!==null){let r=i>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new ht(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);let s=e.getAttribute(i),r=t.getAttribute(i);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,s=t.length;i<s;i++){if(t[i].active===!1)continue;let r=t[i].geometryIndex;this.getMatrixAt(i,ji),this.getBoundingBoxAt(r,ru).applyMatrix4(ji),e.union(ru)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,s=t.length;i<s;i++){if(t[i].active===!1)continue;let r=t[i].geometryIndex;this.getMatrixAt(i,ji),this.getBoundingSphereAt(r,js).applyMatrix4(ji),e.union(js)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let i={visible:!0,active:!0,geometryIndex:e},s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Bf),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=i):(s=this._instanceInfo.length,this._instanceInfo.push(i));let r=this._matricesTexture;ji.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&(Jv.toArray(a.image.data,s*4),a.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);let s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let a=e.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=i===-1?a.count:i),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Bf),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let i=this.geometry,s=i.getIndex()!==null,r=i.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(s&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(let u in i.attributes){let f=t.getAttribute(u),h=i.getAttribute(u);tx(f,h,l);let d=f.itemSize;for(let p=f.count,v=c;p<v;p++){let g=l+p;for(let m=0;m<d;m++)h.setComponent(g,m,0)}h.needsUpdate=!0,h.addUpdateRange(l*d,c*d)}if(s){let u=o.indexStart,f=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let h=0;h<a.count;h++)r.setX(u+h,l+a.getX(h));for(let h=a.count,d=f;h<d;h++)r.setX(u+h,l);r.needsUpdate=!0,r.addUpdateRange(u,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let i=this._instanceInfo;for(let s=0,r=i.length;s<r;s++)i[s].active&&i[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,i=this._geometryInfo,s=i.map((a,o)=>o).sort((a,o)=>i[a].vertexStart-i[o].vertexStart),r=this.geometry;for(let a=0,o=i.length;a<o;a++){let l=s[a],c=i[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){let{indexStart:u,vertexStart:f,reservedIndexCount:h}=c,d=r.index,p=d.array,v=e-f;for(let g=u;g<u+h;g++)p[g]=p[g]+v;d.array.copyWithin(t,u,u+h),d.addUpdateRange(t,h),d.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){let{vertexStart:u,reservedVertexCount:f}=c,h=r.attributes;for(let d in h){let p=h[d],{array:v,itemSize:g}=p;v.copyWithin(e*g,u*g,(u+f)*g),p.addUpdateRange(e*g,f*g),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){let r=new Ei,a=i.index,o=i.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let u=l;a&&(u=a.getX(u)),r.expandByPoint(So.fromBufferAttribute(o,u))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){let r=new Mi;this.getBoundingBoxAt(e,ru),ru.getCenter(r.center);let a=i.index,o=i.attributes.position,l=0;for(let c=s.start,u=s.start+s.count;c<u;c++){let f=c;a&&(f=a.getX(f)),So.fromBufferAttribute(o,f),l=Math.max(l,r.center.distanceToSquared(So))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let i=this._matricesTexture,s=this._matricesTexture.image.data;return t.toArray(s,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){let t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(Bf);t[t.length-1]===i.length-1;)i.pop(),t.pop();if(e<i.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let s=new Int32Array(e),r=new Int32Array(e);$s(this._multiDrawCounts,s),$s(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;let a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),$s(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),$s(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),$s(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let i=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...i.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new nt,this._initializeGeometry(r));let a=this.geometry;r.index&&$s(r.index.array,a.index.array);for(let o in r.attributes)$s(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){let i=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,a=this.geometry;zi.material=this.material,zi.geometry.index=a.index,zi.geometry.attributes=a.attributes,zi.geometry.boundingBox===null&&(zi.geometry.boundingBox=new Ei),zi.geometry.boundingSphere===null&&(zi.geometry.boundingSphere=new Mi);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;let c=i[o].geometryIndex,u=s[c];zi.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,zi.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,zi.geometry.boundingBox),this.getBoundingSphereAt(c,zi.geometry.boundingSphere),zi.raycast(e,au);for(let f=0,h=au.length;f<h;f++){let d=au[f];d.object=this,d.batchId=o,t.push(d)}au.length=0}zi.material=null,zi.geometry.index=null,zi.geometry.attributes={},zi.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,i,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=s.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=s.attributes.position.count>65535?4:2);let c=this._instanceInfo,u=this._multiDrawStarts,f=this._multiDrawCounts,h=this._geometryInfo,d=this.perObjectFrustumCulled,p=this._indirectTexture,v=p.image.data,g=i.isArrayCamera?$v:jv;d&&(i.isArrayCamera?g.setFromArrayCamera(i):(ji.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),g.setFromProjectionMatrix(ji,i.coordinateSystem,i.reversedDepth)));let m=0;if(this.sortObjects){ji.copy(this.matrixWorld).invert(),So.setFromMatrixPosition(i.matrixWorld).applyMatrix4(ji),um.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(ji);for(let y=0,T=c.length;y<T;y++)if(c[y].visible&&c[y].active){let E=c[y].geometryIndex;this.getMatrixAt(y,ji),this.getBoundingSphereAt(E,js).applyMatrix4(ji);let C=!1;if(d&&(C=!g.intersectsSphere(js)),!C){let _=h[E],b=ex.subVectors(js.center,So).dot(um);Nf.push(_.start,_.count,b,y)}}let x=Nf.list,M=this.customSort;M===null?x.sort(r.transparent?Kv:Qv):M.call(this,x,i);for(let y=0,T=x.length;y<T;y++){let E=x[y];u[m]=E.start*o*l,f[m]=E.count*l,v[m]=E.index,m++}Nf.reset()}else for(let x=0,M=c.length;x<M;x++)if(c[x].visible&&c[x].active){let y=c[x].geometryIndex,T=!1;if(d&&(this.getMatrixAt(x,ji),this.getBoundingSphereAt(y,js).applyMatrix4(ji),T=!g.intersectsSphere(js)),!T){let E=h[y];u[m]=E.start*o*l,f[m]=E.count*l,v[m]=x,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeShadow(e,t,i,s,r,a){this.onBeforeRender(e,null,s,r,a)}},Ii=class extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fu=new w,Ou=new w,hm=new pt,Mo=new Bn,ou=new Mi,Ff=new w,fm=new w,Nn=class extends Mt{constructor(e=new nt,t=new Ii){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Fu.fromBufferAttribute(t,s-1),Ou.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Fu.distanceTo(Ou);e.setAttribute("lineDistance",new ke(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ou.copy(i.boundingSphere),ou.applyMatrix4(s),ou.radius+=r,e.ray.intersectsSphere(ou)===!1)return;hm.copy(s).invert(),Mo.copy(e.ray).applyMatrix4(hm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=d,g=p-1;v<g;v+=c){let m=u.getX(v),x=u.getX(v+1),M=lu(this,e,Mo,l,m,x,v);M&&t.push(M)}if(this.isLineLoop){let v=u.getX(p-1),g=u.getX(d),m=lu(this,e,Mo,l,v,g,p-1);m&&t.push(m)}}else{let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=d,g=p-1;v<g;v+=c){let m=lu(this,e,Mo,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=lu(this,e,Mo,l,p-1,d,p-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lu(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(Fu.fromBufferAttribute(o,s),Ou.fromBufferAttribute(o,r),t.distanceSqToSegment(Fu,Ou,Ff,fm)>i)return;Ff.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ff);if(!(c<e.near||c>e.far))return{distance:c,point:fm.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var dm=new w,pm=new w,ln=class extends Nn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)dm.fromBufferAttribute(t,s),pm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+dm.distanceTo(pm);e.setAttribute("lineDistance",new ke(i,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Yo=class extends Nn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ns=class extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mm=new pt,Kf=new Bn,cu=new Mi,uu=new w,Fs=class extends Mt{constructor(e=new nt,t=new Ns){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cu.copy(i.boundingSphere),cu.applyMatrix4(s),cu.radius+=r,e.ray.intersectsSphere(cu)===!1)return;mm.copy(s).invert(),Kf.copy(e.ray).applyMatrix4(mm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=h,v=d;p<v;p++){let g=c.getX(p);uu.fromBufferAttribute(f,g),gm(uu,g,l,s,e,t,this)}}else{let h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=h,v=d;p<v;p++)uu.fromBufferAttribute(f,p),gm(uu,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function gm(n,e,t,i,s,r,a){let o=Kf.distanceSqToPoint(n);if(o<t){let l=new w;Kf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Zo=class extends ri{constructor(e,t,i,s,r=Ht,a=Ht,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let u=this;function f(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},Hu=class extends Zo{constructor(e,t,i,s,r,a,o,l){super({},e,t,i,s,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},zu=class extends ri{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=mi,this.minFilter=mi,this.generateMipmaps=!1,this.needsUpdate=!0}},gr=class extends ri{constructor(e,t,i,s,r,a,o,l,c,u,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},ku=class extends gr{constructor(e,t,i,s,r,a){super(e,t,i,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=Qi,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Gu=class extends gr{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,kn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},Os=class extends ri{constructor(e=[],t=kn,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hs=class extends ri{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vu=class extends ri{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let u=e?e.parentNode:null;u!==null&&"requestPaint"in u&&(u.onpaint=()=>{this.needsUpdate=!0},u.requestPaint())}dispose(){let e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}},cn=class extends ri{constructor(e,t,i=dn,s,r,a,o=mi,l=mi,c,u=Un,f=1){if(u!==Un&&u!==Gn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},qo=class extends cn{constructor(e,t=dn,i=kn,s,r,a=mi,o=mi,l,c=Un){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Aa=class extends ri{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fn=class n extends nt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,d=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(f,2));function p(v,g,m,x,M,y,T,E,C,_,b){let D=y/C,I=T/_,O=y/2,X=T/2,F=E/2,k=C+1,ee=_+1,z=0,fe=0,j=new w;for(let te=0;te<ee;te++){let ue=te*I-X;for(let oe=0;oe<k;oe++){let He=oe*D-O;j[v]=He*x,j[g]=ue*M,j[m]=F,c.push(j.x,j.y,j.z),j[v]=0,j[g]=0,j[m]=E>0?1:-1,u.push(j.x,j.y,j.z),f.push(oe/C),f.push(1-te/_),z+=1}}for(let te=0;te<_;te++)for(let ue=0;ue<C;ue++){let oe=h+ue+k*te,He=h+ue+k*(te+1),At=h+(ue+1)+k*(te+1),Dt=h+(ue+1)+k*te;l.push(oe,He,Dt),l.push(He,At,Dt),fe+=6}o.addGroup(d,fe,b),d+=fe,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Qo=class n extends nt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=t/2,f=Math.PI/2*e,h=t,d=2*f+h,p=i*2+r,v=s+1,g=new w,m=new w;for(let x=0;x<=p;x++){let M=0,y=0,T=0,E=0;if(x<=i){let b=x/i,D=b*Math.PI/2;y=-u-e*Math.cos(D),T=e*Math.sin(D),E=-e*Math.cos(D),M=b*f}else if(x<=i+r){let b=(x-i)/r;y=-u+b*t,T=e,E=0,M=f+b*h}else{let b=(x-i-r)/i,D=b*Math.PI/2;y=u+e*Math.sin(D),T=e*Math.cos(D),E=e*Math.sin(D),M=f+h+b*f}let C=Math.max(0,Math.min(1,M/d)),_=0;x===0?_=.5/s:x===p&&(_=-.5/s);for(let b=0;b<=s;b++){let D=b/s,I=D*Math.PI*2,O=Math.sin(I),X=Math.cos(I);m.x=-T*X,m.y=y,m.z=T*O,o.push(m.x,m.y,m.z),g.set(-T*X,E,T*O),g.normalize(),l.push(g.x,g.y,g.z),c.push(D+_,C)}if(x>0){let b=(x-1)*v;for(let D=0;D<s;D++){let I=b+D,O=b+D+1,X=x*v+D,F=x*v+D+1;a.push(I,O,X),a.push(O,F,X)}}}this.setIndex(a),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ps=class n extends nt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new w,u=new J;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){let d=i+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(o,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},fi=class n extends nt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],p=0,v=[],g=i/2,m=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ke(f,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(d,2));function x(){let y=new w,T=new w,E=0,C=(t-e)/i;for(let _=0;_<=r;_++){let b=[],D=_/r,I=D*(t-e)+e;for(let O=0;O<=s;O++){let X=O/s,F=X*l+o,k=Math.sin(F),ee=Math.cos(F);T.x=I*k,T.y=-D*i+g,T.z=I*ee,f.push(T.x,T.y,T.z),y.set(k,C,ee).normalize(),h.push(y.x,y.y,y.z),d.push(X,1-D),b.push(p++)}v.push(b)}for(let _=0;_<s;_++)for(let b=0;b<r;b++){let D=v[b][_],I=v[b+1][_],O=v[b+1][_+1],X=v[b][_+1];(e>0||b!==0)&&(u.push(D,I,X),E+=3),(t>0||b!==r-1)&&(u.push(I,O,X),E+=3)}c.addGroup(m,E,0),m+=E}function M(y){let T=p,E=new J,C=new w,_=0,b=y===!0?e:t,D=y===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,g*D,0),h.push(0,D,0),d.push(.5,.5),p++;let I=p;for(let O=0;O<=s;O++){let F=O/s*l+o,k=Math.cos(F),ee=Math.sin(F);C.x=b*ee,C.y=g*D,C.z=b*k,f.push(C.x,C.y,C.z),h.push(0,D,0),E.x=k*.5+.5,E.y=ee*.5*D+.5,d.push(E.x,E.y),p++}for(let O=0;O<s;O++){let X=T+O,F=I+O;y===!0?u.push(F,F+1,X):u.push(F+1,F,X),_+=3}c.addGroup(m,_,y===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},On=class n extends fi{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ms=class n extends nt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(r.slice(),3)),this.setAttribute("uv",new ke(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let M=new w,y=new w,T=new w;for(let E=0;E<t.length;E+=3)d(t[E+0],M),d(t[E+1],y),d(t[E+2],T),l(M,y,T,x)}function l(x,M,y,T){let E=T+1,C=[];for(let _=0;_<=E;_++){C[_]=[];let b=x.clone().lerp(y,_/E),D=M.clone().lerp(y,_/E),I=E-_;for(let O=0;O<=I;O++)O===0&&_===E?C[_][O]=b:C[_][O]=b.clone().lerp(D,O/I)}for(let _=0;_<E;_++)for(let b=0;b<2*(E-_)-1;b++){let D=Math.floor(b/2);b%2===0?(h(C[_][D+1]),h(C[_+1][D]),h(C[_][D])):(h(C[_][D+1]),h(C[_+1][D+1]),h(C[_+1][D]))}}function c(x){let M=new w;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(x),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function u(){let x=new w;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];let y=g(x)/2/Math.PI+.5,T=m(x)/Math.PI+.5;a.push(y,1-T)}p(),f()}function f(){for(let x=0;x<a.length;x+=6){let M=a[x+0],y=a[x+2],T=a[x+4],E=Math.max(M,y,T),C=Math.min(M,y,T);E>.9&&C<.1&&(M<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),T<.2&&(a[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function d(x,M){let y=x*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function p(){let x=new w,M=new w,y=new w,T=new w,E=new J,C=new J,_=new J;for(let b=0,D=0;b<r.length;b+=9,D+=6){x.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),E.set(a[D+0],a[D+1]),C.set(a[D+2],a[D+3]),_.set(a[D+4],a[D+5]),T.copy(x).add(M).add(y).divideScalar(3);let I=g(T);v(E,D+0,x,I),v(C,D+2,M,I),v(_,D+4,y,I)}}function v(x,M,y,T){T<0&&x.x===1&&(a[M]=x.x-1),y.x===0&&y.z===0&&(a[M]=T/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},vr=class n extends ms{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},hu=new w,fu=new w,Of=new w,du=new Pn,Ko=class extends nt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(ar*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:v,b:g,c:m}=du;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),du.getNormal(Of),f[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,f[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){let M=(x+1)%3,y=f[x],T=f[M],E=du[u[x]],C=du[u[M]],_=`${y}_${T}`,b=`${T}_${y}`;b in h&&h[b]?(Of.dot(h[b].normal)<=r&&(d.push(E.x,E.y,E.z),d.push(C.x,C.y,C.z)),h[b]=null):_ in h||(h[_]={index0:c[x],index1:c[M],normal:Of.clone()})}}for(let p in h)if(h[p]){let{index0:v,index1:g}=h[p];hu.fromBufferAttribute(o,v),fu.fromBufferAttribute(o,g),d.push(hu.x,hu.y,hu.z),d.push(fu.x,fu.y,fu.z)}this.setAttribute("position",new ke(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],h=i[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new J:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new w,s=[],r=[],a=[],o=new w,l=new pt;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new w)}r[0]=new w,a[0]=new w;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(dt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(dt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xr=class extends tn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new J){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Jo=class extends xr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Wd(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var vm=new w,xm=new w,Hf=new Wd,zf=new Wd,kf=new Wd,jn=class extends tn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new w){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(xm.subVectors(s[0],s[1]).add(s[0]),c=xm);let f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(vm.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=vm),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Hf.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,p,v,g),zf.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,p,v,g),kf.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(Hf.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),zf.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),kf.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Hf.calc(l),zf.calc(l),kf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function _m(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function ix(n,e){let t=1-n;return t*t*e}function nx(n,e){return 2*(1-n)*n*e}function sx(n,e){return n*n*e}function Co(n,e,t,i){return ix(n,e)+nx(n,t)+sx(n,i)}function rx(n,e){let t=1-n;return t*t*t*e}function ax(n,e){let t=1-n;return 3*t*t*n*e}function ox(n,e){return 3*(1-n)*n*n*e}function lx(n,e){return n*n*n*e}function Ro(n,e,t,i,s){return rx(n,e)+ax(n,t)+ox(n,i)+lx(n,s)}var Ea=class extends tn{constructor(e=new J,t=new J,i=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new J){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ro(e,s.x,r.x,a.x,o.x),Ro(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jo=class extends tn{constructor(e=new w,t=new w,i=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new w){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ro(e,s.x,r.x,a.x,o.x),Ro(e,s.y,r.y,a.y,o.y),Ro(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ta=class extends tn{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends tn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends tn{constructor(e=new J,t=new J,i=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Co(e,s.x,r.x,a.x),Co(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends tn{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Co(e,s.x,r.x,a.x),Co(e,s.y,r.y,a.y),Co(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(_m(o,l.x,c.x,u.x,f.x),_m(o,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new J().fromArray(s))}return this}},Wu=Object.freeze({__proto__:null,ArcCurve:Jo,CatmullRomCurve3:jn,CubicBezierCurve:Ea,CubicBezierCurve3:jo,EllipseCurve:xr,LineCurve:Ta,LineCurve3:$o,QuadraticBezierCurve:wa,QuadraticBezierCurve3:ba,SplineCurve:Ca}),el=class extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Wu[s.type]().fromJSON(s))}return this}},zs=class extends el{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ta(this.currentPoint.clone(),new J(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new wa(this.currentPoint.clone(),new J(e,t),new J(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Ea(this.currentPoint.clone(),new J(e,t),new J(i,s),new J(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ca(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new xr(e,t,i,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Sn=class extends zs{constructor(e){super(e),this.uuid=on(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new zs().fromJSON(s))}return this}};function cx(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Yg(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=px(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let u=o,f=l;for(let h=t;h<s;h+=t){let d=n[h],p=n[h+1];d<o&&(o=d),p<l&&(l=p),d>u&&(u=d),p>f&&(f=p)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return tl(r,a,t,o,l,c,0),a}function Yg(n,e,t,i,s){let r;if(s===Tx(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=ym(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=ym(a/i|0,n[a],n[a+1],r);return r&&Ra(r,r.next)&&(nl(r),r=r.next),r}function _r(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ra(t,t.next)||hi(t.prev,t,t.next)===0)){if(nl(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function tl(n,e,t,i,s,r,a){if(!n)return;!a&&r&&_x(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?hx(n,i,s,r):ux(n)){e.push(l.i,n.i,c.i),nl(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=fx(_r(n),e),tl(n,e,t,i,s,r,2)):a===2&&dx(n,e,t,i,s,r):tl(_r(n),e,t,i,s,r,1);break}}}function ux(n){let e=n.prev,t=n,i=n.next;if(hi(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=f&&p.y<=d&&Eo(s,o,r,l,a,c,p.x,p.y)&&hi(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function hx(n,e,t,i){let s=n.prev,r=n,a=n.next;if(hi(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,l,c),p=Math.min(u,f,h),v=Math.max(o,l,c),g=Math.max(u,f,h),m=Jf(d,p,e,t,i),x=Jf(v,g,e,t,i),M=n.prevZ,y=n.nextZ;for(;M&&M.z>=m&&y&&y.z<=x;){if(M.x>=d&&M.x<=v&&M.y>=p&&M.y<=g&&M!==s&&M!==a&&Eo(o,u,l,f,c,h,M.x,M.y)&&hi(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=d&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Eo(o,u,l,f,c,h,y.x,y.y)&&hi(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=v&&M.y>=p&&M.y<=g&&M!==s&&M!==a&&Eo(o,u,l,f,c,h,M.x,M.y)&&hi(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Eo(o,u,l,f,c,h,y.x,y.y)&&hi(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function fx(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Ra(i,s)&&qg(i,t,t.next,s)&&il(i,s)&&il(s,i)&&(e.push(i.i,t.i,s.i),nl(t),nl(t.next),t=n=s),t=t.next}while(t!==n);return _r(t)}function dx(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Mx(a,o)){let l=Qg(a,o);a=_r(a,a.next),l=_r(l,l.next),tl(a,e,t,i,s,r,0),tl(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function px(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Yg(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Sx(c))}s.sort(mx);for(let r=0;r<s.length;r++)t=gx(s[r],t);return t}function mx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function gx(n,e){let t=vx(n,e);if(!t)return e;let i=Qg(t,n);return _r(i,i.next),_r(t,t.next)}function vx(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(Ra(n,t))return t;do{if(Ra(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Zg(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);il(t,n)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&xx(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function xx(n,e){return hi(n.prev,n,e.prev)<0&&hi(e.next,n,n.next)<0}function _x(n,e,t,i){let s=n;do s.z===0&&(s.z=Jf(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,yx(s)}function yx(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Jf(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Sx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Zg(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Eo(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Zg(n,e,t,i,s,r,a,o)}function Mx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Ax(n,e)&&(il(n,e)&&il(e,n)&&Ex(n,e)&&(hi(n.prev,n,e.prev)||hi(n,e.prev,e))||Ra(n,e)&&hi(n.prev,n,n.next)>0&&hi(e.prev,e,e.next)>0)}function hi(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ra(n,e){return n.x===e.x&&n.y===e.y}function qg(n,e,t,i){let s=mu(hi(n,e,t)),r=mu(hi(n,e,i)),a=mu(hi(t,i,n)),o=mu(hi(t,i,e));return!!(s!==r&&a!==o||s===0&&pu(n,t,e)||r===0&&pu(n,i,e)||a===0&&pu(t,n,i)||o===0&&pu(t,e,i))}function pu(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function mu(n){return n>0?1:n<0?-1:0}function Ax(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&qg(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function il(n,e){return hi(n.prev,n,n.next)<0?hi(n,e,n.next)>=0&&hi(n,n.prev,e)>=0:hi(n,e,n.prev)<0||hi(n,n.next,e)<0}function Ex(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Qg(n,e){let t=jf(n.i,n.x,n.y),i=jf(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ym(n,e,t,i){let s=jf(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function nl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function jf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Tx(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var $f=class{static triangulate(e,t,i=2){return cx(e,t,i)}},xn=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Sm(e),Mm(i,e);let a=e.length;t.forEach(Sm);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Mm(i,t[l]);let o=$f.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Sm(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Mm(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ks=class n extends nt{constructor(e=new Sn([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:wx,M,y=!1,T,E,C,_;if(m){M=m.getSpacedPoints(u),y=!0,h=!1;let ce=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(u,ce),E=new w,C=new w,_=new w}h||(g=0,d=0,p=0,v=0);let b=o.extractPoints(c),D=b.shape,I=b.holes;if(!xn.isClockWise(D)){D=D.reverse();for(let ce=0,me=I.length;ce<me;ce++){let Ae=I[ce];xn.isClockWise(Ae)&&(I[ce]=Ae.reverse())}}function X(ce){let Ae=10000000000000001e-36,Ee=ce[0];for(let De=1;De<=ce.length;De++){let lt=De%ce.length,it=ce[lt],ut=it.x-Ee.x,gt=it.y-Ee.y,L=ut*ut+gt*gt,Ot=Math.max(Math.abs(it.x),Math.abs(it.y),Math.abs(Ee.x),Math.abs(Ee.y)),_t=Ae*Ot*Ot;if(L<=_t){ce.splice(lt,1),De--;continue}Ee=it}}X(D),I.forEach(X);let F=I.length,k=D;for(let ce=0;ce<F;ce++){let me=I[ce];D=D.concat(me)}function ee(ce,me,Ae){return me||$e("ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(me,Ae)}let z=D.length;function fe(ce,me,Ae){let Ee,De,lt,it=ce.x-me.x,ut=ce.y-me.y,gt=Ae.x-ce.x,L=Ae.y-ce.y,Ot=it*it+ut*ut,_t=it*L-ut*gt;if(Math.abs(_t)>Number.EPSILON){let R=Math.sqrt(Ot),S=Math.sqrt(gt*gt+L*L),G=me.x-ut/R,Y=me.y+it/R,K=Ae.x-L/S,ye=Ae.y+gt/S,Ce=((K-G)*L-(ye-Y)*gt)/(it*L-ut*gt);Ee=G+it*Ce-ce.x,De=Y+ut*Ce-ce.y;let ie=Ee*Ee+De*De;if(ie<=2)return new J(Ee,De);lt=Math.sqrt(ie/2)}else{let R=!1;it>Number.EPSILON?gt>Number.EPSILON&&(R=!0):it<-Number.EPSILON?gt<-Number.EPSILON&&(R=!0):Math.sign(ut)===Math.sign(L)&&(R=!0),R?(Ee=-ut,De=it,lt=Math.sqrt(Ot)):(Ee=it,De=ut,lt=Math.sqrt(Ot/2))}return new J(Ee/lt,De/lt)}let j=[];for(let ce=0,me=k.length,Ae=me-1,Ee=ce+1;ce<me;ce++,Ae++,Ee++)Ae===me&&(Ae=0),Ee===me&&(Ee=0),j[ce]=fe(k[ce],k[Ae],k[Ee]);let te=[],ue,oe=j.concat();for(let ce=0,me=F;ce<me;ce++){let Ae=I[ce];ue=[];for(let Ee=0,De=Ae.length,lt=De-1,it=Ee+1;Ee<De;Ee++,lt++,it++)lt===De&&(lt=0),it===De&&(it=0),ue[Ee]=fe(Ae[Ee],Ae[lt],Ae[it]);te.push(ue),oe=oe.concat(ue)}let He;if(g===0)He=xn.triangulateShape(k,I);else{let ce=[],me=[];for(let Ae=0;Ae<g;Ae++){let Ee=Ae/g,De=d*Math.cos(Ee*Math.PI/2),lt=p*Math.sin(Ee*Math.PI/2)+v;for(let it=0,ut=k.length;it<ut;it++){let gt=ee(k[it],j[it],lt);ze(gt.x,gt.y,-De),Ee===0&&ce.push(gt)}for(let it=0,ut=F;it<ut;it++){let gt=I[it];ue=te[it];let L=[];for(let Ot=0,_t=gt.length;Ot<_t;Ot++){let R=ee(gt[Ot],ue[Ot],lt);ze(R.x,R.y,-De),Ee===0&&L.push(R)}Ee===0&&me.push(L)}}He=xn.triangulateShape(ce,me)}let At=He.length,Dt=p+v;for(let ce=0;ce<z;ce++){let me=h?ee(D[ce],oe[ce],Dt):D[ce];y?(C.copy(T.normals[0]).multiplyScalar(me.x),E.copy(T.binormals[0]).multiplyScalar(me.y),_.copy(M[0]).add(C).add(E),ze(_.x,_.y,_.z)):ze(me.x,me.y,0)}for(let ce=1;ce<=u;ce++)for(let me=0;me<z;me++){let Ae=h?ee(D[me],oe[me],Dt):D[me];y?(C.copy(T.normals[ce]).multiplyScalar(Ae.x),E.copy(T.binormals[ce]).multiplyScalar(Ae.y),_.copy(M[ce]).add(C).add(E),ze(_.x,_.y,_.z)):ze(Ae.x,Ae.y,f/u*ce)}for(let ce=g-1;ce>=0;ce--){let me=ce/g,Ae=d*Math.cos(me*Math.PI/2),Ee=p*Math.sin(me*Math.PI/2)+v;for(let De=0,lt=k.length;De<lt;De++){let it=ee(k[De],j[De],Ee);ze(it.x,it.y,f+Ae)}for(let De=0,lt=I.length;De<lt;De++){let it=I[De];ue=te[De];for(let ut=0,gt=it.length;ut<gt;ut++){let L=ee(it[ut],ue[ut],Ee);y?ze(L.x,L.y+M[u-1].y,M[u-1].x+Ae):ze(L.x,L.y,f+Ae)}}}Lt(),ne();function Lt(){let ce=s.length/3;if(h){let me=0,Ae=z*me;for(let Ee=0;Ee<At;Ee++){let De=He[Ee];ct(De[2]+Ae,De[1]+Ae,De[0]+Ae)}me=u+g*2,Ae=z*me;for(let Ee=0;Ee<At;Ee++){let De=He[Ee];ct(De[0]+Ae,De[1]+Ae,De[2]+Ae)}}else{for(let me=0;me<At;me++){let Ae=He[me];ct(Ae[2],Ae[1],Ae[0])}for(let me=0;me<At;me++){let Ae=He[me];ct(Ae[0]+z*u,Ae[1]+z*u,Ae[2]+z*u)}}i.addGroup(ce,s.length/3-ce,0)}function ne(){let ce=s.length/3,me=0;le(k,me),me+=k.length;for(let Ae=0,Ee=I.length;Ae<Ee;Ae++){let De=I[Ae];le(De,me),me+=De.length}i.addGroup(ce,s.length/3-ce,1)}function le(ce,me){let Ae=ce.length;for(;--Ae>=0;){let Ee=Ae,De=Ae-1;De<0&&(De=ce.length-1);for(let lt=0,it=u+g*2;lt<it;lt++){let ut=z*lt,gt=z*(lt+1),L=me+Ee+ut,Ot=me+De+ut,_t=me+De+gt,R=me+Ee+gt;We(L,Ot,_t,R)}}}function ze(ce,me,Ae){l.push(ce),l.push(me),l.push(Ae)}function ct(ce,me,Ae){ft(ce),ft(me),ft(Ae);let Ee=s.length/3,De=x.generateTopUV(i,s,Ee-3,Ee-2,Ee-1);Xt(De[0]),Xt(De[1]),Xt(De[2])}function We(ce,me,Ae,Ee){ft(ce),ft(me),ft(Ee),ft(me),ft(Ae),ft(Ee);let De=s.length/3,lt=x.generateSideWallUV(i,s,De-6,De-3,De-2,De-1);Xt(lt[0]),Xt(lt[1]),Xt(lt[3]),Xt(lt[1]),Xt(lt[2]),Xt(lt[3])}function ft(ce){s.push(l[ce*3+0]),s.push(l[ce*3+1]),s.push(l[ce*3+2])}function Xt(ce){r.push(ce.x),r.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return bx(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wu[s.type]().fromJSON(s)),new n(i,e.options)}},wx={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new J(r,a),new J(o,l),new J(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[s*3],d=e[s*3+1],p=e[s*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new J(a,1-l),new J(c,1-f),new J(h,1-p),new J(v,1-m)]:[new J(o,1-l),new J(u,1-f),new J(d,1-p),new J(g,1-m)]}};function bx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var sl=class n extends ms{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},rl=class n extends nt{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=dt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,f=new w,h=new J,d=new w,p=new w,v=new w,g=0,m=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,d.x=m*1,d.y=-g,d.z=m*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(p)}for(let x=0;x<=t;x++){let M=i+x*u*s,y=Math.sin(M),T=Math.cos(M);for(let E=0;E<=e.length-1;E++){f.x=e[E].x*y,f.y=e[E].y,f.z=e[E].x*T,a.push(f.x,f.y,f.z),h.x=x/t,h.y=E/(e.length-1),o.push(h.x,h.y);let C=l[3*E+0]*y,_=l[3*E+1],b=l[3*E+0]*T;c.push(C,_,b)}}for(let x=0;x<t;x++)for(let M=0;M<e.length-1;M++){let y=M+x*e.length,T=y,E=y+e.length,C=y+e.length+1,_=y+1;r.push(T,E,_),r.push(C,_,E)}this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("uv",new ke(o,2)),this.setAttribute("normal",new ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Da=class n extends ms{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Gi=class n extends nt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],p=[],v=[],g=[];for(let m=0;m<u;m++){let x=m*h-a;for(let M=0;M<c;M++){let y=M*f-r;p.push(y,-x,0),v.push(0,0,1),g.push(M/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){let M=x+c*m,y=x+c*(m+1),T=x+1+c*(m+1),E=x+1+c*m;d.push(M,y,E),d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(v,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},al=class n extends nt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],f=e,h=(t-e)/s,d=new w,p=new J;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){let m=r+g/i*a;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}f+=h}for(let v=0;v<s;v++){let g=v*(i+1);for(let m=0;m<i;m++){let x=m+g,M=x,y=x+i+1,T=x+i+2,E=x+1;o.push(M,y,E),o.push(y,T,E)}}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},yr=class n extends nt{constructor(e=new Sn([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(a,2));function c(u){let f=s.length/3,h=u.extractPoints(t),d=h.shape,p=h.holes;xn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let x=p[g];xn.isClockWise(x)===!0&&(p[g]=x.reverse())}let v=xn.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let x=p[g];d=d.concat(x)}for(let g=0,m=d.length;g<m;g++){let x=d[g];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let g=0,m=v.length;g<m;g++){let x=v[g],M=x[0]+f,y=x[1]+f,T=x[2]+f;i.push(M,y,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Cx(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function Cx(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Hn=class n extends nt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new w,h=new w,d=[],p=[],v=[],g=[];for(let m=0;m<=i;m++){let x=[],M=m/i,y=a+M*o,T=e*Math.cos(y),E=Math.sqrt(e*e-T*T),C=0;m===0&&a===0?C=.5/t:m===i&&l===Math.PI&&(C=-.5/t);for(let _=0;_<=t;_++){let b=_/t,D=s+b*r;f.x=-E*Math.cos(D),f.y=T,f.z=E*Math.sin(D),p.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),g.push(b+C,1-M),x.push(c++)}u.push(x)}for(let m=0;m<i;m++)for(let x=0;x<t;x++){let M=u[m][x+1],y=u[m][x],T=u[m+1][x],E=u[m+1][x+1];(m!==0||a>0)&&d.push(M,y,E),(m!==i-1||l<Math.PI)&&d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(v,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ol=class n extends ms{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Sr=class n extends nt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=new w,d=new w,p=new w;for(let v=0;v<=i;v++){let g=a+v/i*o;for(let m=0;m<=s;m++){let x=m/s*r;d.x=(e+t*Math.cos(g))*Math.cos(x),d.y=(e+t*Math.cos(g))*Math.sin(x),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),p.subVectors(d,h).normalize(),u.push(p.x,p.y,p.z),f.push(m/s),f.push(v/i)}}for(let v=1;v<=i;v++)for(let g=1;g<=s;g++){let m=(s+1)*v+g-1,x=(s+1)*(v-1)+g-1,M=(s+1)*(v-1)+g,y=(s+1)*v+g;l.push(m,x,y),l.push(x,M,y)}this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},ll=class n extends nt{constructor(e=1,t=.4,i=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:r,q:a},i=Math.floor(i),s=Math.floor(s);let o=[],l=[],c=[],u=[],f=new w,h=new w,d=new w,p=new w,v=new w,g=new w,m=new w;for(let M=0;M<=i;++M){let y=M/i*r*Math.PI*2;x(y,r,a,e,d),x(y+.01,r,a,e,p),g.subVectors(p,d),m.addVectors(p,d),v.crossVectors(g,m),m.crossVectors(v,g),v.normalize(),m.normalize();for(let T=0;T<=s;++T){let E=T/s*Math.PI*2,C=-t*Math.cos(E),_=t*Math.sin(E);f.x=d.x+(C*m.x+_*v.x),f.y=d.y+(C*m.y+_*v.y),f.z=d.z+(C*m.z+_*v.z),l.push(f.x,f.y,f.z),h.subVectors(f,d).normalize(),c.push(h.x,h.y,h.z),u.push(M/i),u.push(T/s)}}for(let M=1;M<=i;M++)for(let y=1;y<=s;y++){let T=(s+1)*(M-1)+(y-1),E=(s+1)*M+(y-1),C=(s+1)*M+y,_=(s+1)*(M-1)+y;o.push(T,E,_),o.push(E,C,_)}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(u,2));function x(M,y,T,E,C){let _=Math.cos(M),b=Math.sin(M),D=T/y*M,I=Math.cos(D);C.x=E*(2+I)*.5*_,C.y=E*(2+I)*b*.5,C.z=E*Math.sin(D)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Mr=class n extends nt{constructor(e=new ba(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,l=new w,c=new J,u=new w,f=[],h=[],d=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new ke(f,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(d,2));function v(){for(let M=0;M<t;M++)g(M);g(r===!1?t:0),x(),m()}function g(M){u=e.getPointAt(M/t,u);let y=a.normals[M],T=a.binormals[M];for(let E=0;E<=s;E++){let C=E/s*Math.PI*2,_=Math.sin(C),b=-Math.cos(C);l.x=b*y.x+_*T.x,l.y=b*y.y+_*T.y,l.z=b*y.z+_*T.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let M=1;M<=t;M++)for(let y=1;y<=s;y++){let T=(s+1)*(M-1)+(y-1),E=(s+1)*M+(y-1),C=(s+1)*M+y,_=(s+1)*(M-1)+y;p.push(T,E,_),p.push(E,C,_)}}function x(){for(let M=0;M<=t;M++)for(let y=0;y<=s;y++)c.x=M/t,c.y=y/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Wu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},cl=class extends nt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new w,r=new w;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let f=l[c],h=f.start,d=f.count;for(let p=h,v=h+d;p<v;p+=3)for(let g=0;g<3;g++){let m=o.getX(p+g),x=o.getX(p+(g+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,x),Am(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let u=3*o+c,f=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,f),Am(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new ke(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Am(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var Em=Object.freeze({__proto__:null,BoxGeometry:Fn,CapsuleGeometry:Qo,CircleGeometry:ps,ConeGeometry:On,CylinderGeometry:fi,DodecahedronGeometry:vr,EdgesGeometry:Ko,ExtrudeGeometry:ks,IcosahedronGeometry:sl,LatheGeometry:rl,OctahedronGeometry:Da,PlaneGeometry:Gi,PolyhedronGeometry:ms,RingGeometry:al,ShapeGeometry:yr,SphereGeometry:Hn,TetrahedronGeometry:ol,TorusGeometry:Sr,TorusKnotGeometry:ll,TubeGeometry:Mr,WireframeGeometry:cl}),ul=class extends ci{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new pe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Lr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Tm(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Tm(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Vi(n){let e={};for(let t=0;t<n.length;t++){let i=Lr(n[t]);for(let s in i)e[s]=i[s]}return e}function Tm(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Rx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}var Tc={clone:Lr,merge:Vi},Dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wt=class extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dx,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=Rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new pe().setHex(s.value);break;case"v2":this.uniforms[i].value=new J().fromArray(s.value);break;case"v3":this.uniforms[i].value=new w().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[i].value=new xt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Pa=class extends wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ia=class extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ts,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hl=class extends Ia{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},fl=class extends ci{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pe(16777215),this.specular=new pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ts,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Xa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dl=class extends ci{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ts,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pl=class extends ci{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ts,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},ml=class extends ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ts,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Xa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gs=class extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ua=class extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},gl=class extends ci{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new pe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ts,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}},vl=class extends Ii{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Dn(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Do(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Kg(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function ed(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function Jg(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}function Ix(n,e,t,i,s=30){let r=n.clone();r.name=e;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],u=c.getValueSize(),f=[],h=[];for(let d=0;d<c.times.length;++d){let p=c.times[d]*s;if(!(p<t||p>=i)){f.push(c.times[d]);for(let v=0;v<u;++v)h.push(c.values[d*u+v])}}f.length!==0&&(c.times=Dn(f,c.times.constructor),c.values=Dn(h,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function Ux(n,e=0,t=n,i=30){i<=0&&(i=30);let s=t.tracks.length,r=e/i;for(let a=0;a<s;++a){let o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=n.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0,f=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);let h=0,d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let p=o.times.length-1,v;if(r<=o.times[0]){let m=u,x=f-u;v=o.values.slice(m,x)}else if(r>=o.times[p]){let m=p*f+u,x=m+f-u;v=o.values.slice(m,x)}else{let m=o.createInterpolant(),x=u,M=f-u;m.evaluate(r),v=m.resultBuffer.slice(x,M)}l==="quaternion"&&new xi().fromArray(v).normalize().conjugate().toArray(v);let g=c.times.length;for(let m=0;m<g;++m){let x=m*d+h;if(l==="quaternion")xi.multiplyQuaternionsFlat(c.values,x,v,0,c.values,x);else{let M=d-h*2;for(let y=0;y<M;++y)c.values[x+y]-=v[y]}}}return n.blendMode=Qh,n}var Xu=class{static convertArray(e,t){return Dn(e,t)}static isTypedArray(e){return Og(e)}static hasTangents(e){return Do(e)}static getKeyframeOrder(e){return Kg(e)}static sortedArray(e,t,i){return ed(e,t,i)}static flattenJSON(e,t,i,s){Jg(e,t,i,s)}static subclip(e,t,i,s,r=30){return Ix(e,t,i,s,r)}static makeClipAdditive(e,t=0,i=e,s=30){return Ux(e,t,i,s)}},gs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;i:{n:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break i}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break i}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xl=class extends gs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ds,endingEnd:Ds}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ps:r=e,o=2*t-i;break;case ma:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ps:a=e,l=2*i-t;break;case ma:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),v=p*p,g=v*p,m=-h*g+2*h*v-h*p,x=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*p+1,M=(-1-d)*g+(1.5+d)*v+.5*p,y=d*g-d*v;for(let T=0;T!==o;++T)r[T]=m*a[u+T]+x*a[c+T]+M*a[l+T]+y*a[f+T];return r}},La=class extends gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},_l=class extends gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yl=class extends gs{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(i-t)/(s-t),v=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*v+a[l+g]*p;return r}let h=o*2,d=e-1;for(let p=0;p!==o;++p){let v=a[c+p],g=a[l+p],m=d*h+p*2,x=f[m],M=f[m+1],y=e*h+p*2,T=u[y],E=u[y+1],C=Bx(i,t,x,T,s);r[p]=jg(C,v,M,E,g)}return r}};function jg(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Lx(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Bx(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=jg(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Lx(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ki=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dn(t,this.TimeBufferType),this.values=Dn(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Dn(e.times,Array),values:Dn(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Do(e.settings)&&(i.settings={inTangents:Dn(e.settings.inTangents,Array),outTangents:Dn(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new yl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case Fo:t=this.InterpolantFactoryMethodLinear;break;case To:t=this.InterpolantFactoryMethodSmooth;break;case wu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Le("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return Fo;case this.InterpolantFactoryMethodSmooth:return To;case this.InterpolantFactoryMethodBezier:return wu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Do(this.settings)&&(wm(this.settings.inTangents,e),wm(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){$e("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Og(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===To,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*i,h=f-i,d=f+i;for(let p=0;p!==i;++p){let v=t[f+p];if(v!==t[h+p]||v!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,h=a*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Do(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function wm(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Ki.prototype.ValueTypeName="";Ki.prototype.TimeBufferType=Float32Array;Ki.prototype.ValueBufferType=Float32Array;Ki.prototype.DefaultInterpolation=Fo;var $n=class extends Ki{constructor(e,t,i){super(e,t,i)}};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=pa;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}};Ba.prototype.ValueTypeName="color";var Ar=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}};Ar.prototype.ValueTypeName="number";var Sl=class extends gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)xi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Er=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Sl(this.times,this.values,this.getValueSize(),e)}};Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Ki{constructor(e,t,i){super(e,t,i)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=pa;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}};Na.prototype.ValueTypeName="vector";var Vs=class{constructor(e="",t=-1,i=[],s=Sc){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=on(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Fx(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(Ki.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=Kg(l);l=ed(l,1,u),c=ed(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ar(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let f=u[1],h=s[f];h||(s[f]=h=[]),h.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Nx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ar;case"vector":case"vector2":case"vector3":case"vector4":return Na;case"color":return Ba;case"quaternion":return Er;case"bool":case"boolean":return $n;case"string":return es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Fx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Nx(n.type);if(n.times===void 0){let i=[],s=[];Jg(n.keys,i,s,"value"),n.times=i,n.values=s}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),Do(n.settings)&&(t.settings={inTangents:Dn(n.settings.inTangents,Float32Array),outTangents:Dn(n.settings.outTangents,Float32Array)}),t}var In={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(bm(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!bm(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function bm(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Fa=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yd=new Fa,Bi=class{constructor(e){this.manager=e!==void 0?e:Yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var us={},td=class extends Error{constructor(e,t){super(e),this.response=t}},Mn=class extends Bi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=In.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(us[e]!==void 0){us[e].push({onLoad:t,onProgress:i,onError:s});return}us[e]=[],us[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=us[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,p=d!==0,v=0,g=new ReadableStream({start(m){x();function x(){f.read().then(({done:M,value:y})=>{if(M)m.close();else{v+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let E=0,C=u.length;E<C;E++){let _=u[E];_.onProgress&&_.onProgress(T)}m.enqueue(y),x()}},M=>{m.error(M)})}}});return new Response(g)}else throw new td(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{In.add(`file:${e}`,c);let u=us[e];delete us[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=us[e];if(u===void 0)throw this.manager.itemError(e),c;delete us[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Yu=class extends Bi{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new Mn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):$e(l),r.manager.itemError(e)}},i,s)}parse(e){let t=[];for(let i=0;i<e.length;i++){let s=Vs.parse(e[i]);t.push(s)}return t}},Zu=class extends Bi{constructor(e){super(e)}load(e,t,i,s){let r=this,a=[],o=new gr,l=new Mn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function u(f){l.load(e[f],function(h){let d=r.parse(h,!0);a[f]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=Ht),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},i,s)}if(Array.isArray(e))for(let f=0,h=e.length;f<h;++f)u(f);else l.load(e,function(f){let h=r.parse(f,!0);if(h.isCubemap){let d=h.mipmaps.length/h.mipmapCount;for(let p=0;p<d;p++){a[p]={mipmaps:[]};for(let v=0;v<h.mipmapCount;v++)a[p].mipmaps.push(h.mipmaps[p*h.mipmapCount+v]),a[p].format=h.format,a[p].width=h.width,a[p].height=h.height}o.image=a}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=Ht),o.format=h.format,o.needsUpdate=!0,t&&t(o)},i,s);return o}},ra=new WeakMap,Ws=class extends Bi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=In.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=ra.get(a);f===void 0&&(f=[],ra.set(a,f)),f.push({onLoad:t,onError:s})}return a}let o=va("img");function l(){u(),t&&t(this);let f=ra.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}ra.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),In.remove(`image:${e}`);let h=ra.get(this)||[];for(let d=0;d<h.length;d++){let p=h[d];p.onError&&p.onError(f)}ra.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),In.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},qu=class extends Bi{constructor(e){super(e)}load(e,t,i,s){let r=new Os;r.colorSpace=Ct;let a=new Ws(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}},Qu=class extends Bi{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new Ui,o=new Mn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){s!==void 0?s(u):$e(u);return}r._applyTexData(a,c),t&&t(a,c)},i,s),a}createDataTexture(e){let t=new Ui;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Qi,e.wrapT=t.wrapT!==void 0?t.wrapT:Qi,e.magFilter=t.magFilter!==void 0?t.magFilter:Ht,e.minFilter=t.minFilter!==void 0?t.minFilter:Ht,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=fn),t.mipmapCount===1&&(e.minFilter=Ht),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Ku=class extends Bi{constructor(e){super(e)}load(e,t,i,s){let r=new ri,a=new Ws(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},zn=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ml=class extends zn{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Gf=new pt,Cm=new w,Rm=new w,Tr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jn,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Cm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cm),Rm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Gf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Gf,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Is||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Gf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gu=new w,vu=new xi,qn=new w,wr=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=en,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gu,vu,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gu,vu,qn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(gu,vu,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gu,vu,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cs=new w,Dm=new J,Pm=new J,li=class extends wr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,t){return this.getViewBounds(e,Dm,Pm),t.subVectors(Pm,Dm)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ar*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},id=class extends Tr{constructor(){super(new li(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Al=class extends zn{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new id}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},nd=class extends Tr{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}},El=class extends zn{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new nd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},An=class extends wr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sd=class extends Tr{constructor(){super(new An(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},br=class extends zn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new sd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Tl=class extends zn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},wl=class extends zn{constructor(e,t,i=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},Oa=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let i=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*s),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],1.092548*(i*s)),t.addScaledVector(a[5],1.092548*(s*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(i*r)),t.addScaledVector(a[8],.546274*(i*i-s*s)),t}getIrradianceAt(e,t){let i=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*s),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*i),t.addScaledVector(a[4],2*.429043*i*s),t.addScaledVector(a[5],2*.429043*s*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*i*r),t.addScaledVector(a[8],.429043*(i*i-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let i=this.coefficients;for(let s=0;s<9;s++)i[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){let i=this.coefficients;for(let s=0;s<9;s++)i[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){let i=e.x,s=e.y,r=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*r,t[3]=.488603*i,t[4]=1.092548*i*s,t[5]=1.092548*s*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*i*r,t[8]=.546274*(i*i-s*s)}},bl=class extends zn{constructor(e=new Oa,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},Im={},Cl=class n extends Bi{constructor(e){super(e),this.textures={}}load(e,t,i,s){let r=this,a=new Mn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):$e(l),r.manager.itemError(e)}},i,s)}parse(e){let t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return n.createMaterialFromType(e)}static createMaterialFromType(e){let i={ShadowMaterial:ul,SpriteMaterial:Bs,RawShaderMaterial:Pa,ShaderMaterial:wt,PointsMaterial:Ns,MeshPhysicalMaterial:hl,MeshStandardMaterial:Ia,MeshPhongMaterial:fl,MeshToonMaterial:dl,MeshNormalMaterial:pl,MeshLambertMaterial:ml,MeshDepthMaterial:Gs,MeshDistanceMaterial:Ua,MeshBasicMaterial:Li,MeshMatcapMaterial:gl,LineDashedMaterial:vl,LineBasicMaterial:Ii,Material:ci,...Im}[e],s;return i===void 0?(Qn(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),s=new ci):s=new i,s}static registerMaterial(e,t){Im[e]=t}},Ha=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Rl=class extends nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Dl=class extends Bi{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new Mn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):$e(l),r.manager.itemError(e)}},i,s)}parse(e){let t={},i={};function s(d,p){if(t[p]!==void 0)return t[p];let g=d.interleavedBuffers[p],m=r(d,g.buffer),x=ua(g.type,m),M=new pr(x,g.stride);return M.uuid=g.uuid,g.usage!==void 0&&M.setUsage(g.usage),t[p]=M,M}function r(d,p){if(i[p]!==void 0)return i[p];let g=d.arrayBuffers[p],m=new Uint32Array(g).buffer;return i[p]=m,m}let a=e.isInstancedBufferGeometry?new Rl:new nt,o=e.data.index;if(o!==void 0){let d=ua(o.type,o.array);a.setIndex(new ht(d,1))}let l=e.data.attributes;for(let d in l){let p=l[d],v;if(p.isInterleavedBufferAttribute){let g=s(e.data,p.data);v=new Ls(g,p.itemSize,p.offset,p.normalized)}else{let g=ua(p.type,p.array),m=p.isInstancedBufferAttribute?ds:ht;v=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),p.gpuType!==void 0&&(v.gpuType=p.gpuType),a.setAttribute(d,v)}let c=e.data.morphAttributes;if(c)for(let d in c){let p=c[d],v=[];for(let g=0,m=p.length;g<m;g++){let x=p[g],M;if(x.isInterleavedBufferAttribute){let y=s(e.data,x.data);M=new Ls(y,x.itemSize,x.offset,x.normalized)}else{let y=ua(x.type,x.array);M=new ht(y,x.itemSize,x.normalized)}x.name!==void 0&&(M.name=x.name),x.usage!==void 0&&M.setUsage(x.usage),x.gpuType!==void 0&&(M.gpuType=x.gpuType),v.push(M)}a.morphAttributes[d]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let d=0,p=f.length;d!==p;++d){let v=f[d];a.addGroup(v.start,v.count,v.materialIndex)}let h=e.data.boundingSphere;return h!==void 0&&(a.boundingSphere=new Mi().fromJSON(h)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}},Vf={},Ju=class extends Bi{constructor(e){super(e)}load(e,t,i,s){let r=this,a=this.path===""?Ha.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;let o=new Mn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(f){s!==void 0&&s(f),$e("ObjectLoader: Can't parse "+e+".",f.message);return}let u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+e)),$e("ObjectLoader: Can't load "+e);return}r.parse(c,t)},i,s)}async loadAsync(e,t){let i=this,s=this.path===""?Ha.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;let r=new Mn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=await r.loadAsync(e,t),o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+c.message)}let l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(o)}parse(e,t){let i=this.parseAnimations(e.animations),s=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,s),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,i),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let f=!1;for(let h in a)if(a[h].data instanceof HTMLImageElement){f=!0;break}f===!1&&t(c)}return c}async parseAsync(e){let t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(e,t){Vf[e]=t}parseShapes(e){let t={};if(e!==void 0)for(let i=0,s=e.length;i<s;i++){let r=new Sn().fromJSON(e[i]);t[r.uuid]=r}return t}parseSkeletons(e,t){let i={},s={};if(t.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=new Vo().fromJSON(e[r],s);i[o.uuid]=o}return i}parseGeometries(e,t){let i={};if(e!==void 0){let s=new Dl;for(let r=0,a=e.length;r<a;r++){let o,l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=s.parse(l);break;default:l.type in Em?o=Em[l.type].fromJSON(l,t):l.type in Vf?o=Vf[l.type].fromJSON(l,t):Le(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(e,t){let i={},s={};if(e!==void 0){let r=new Cl;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){let l=e[a];i[l.uuid]===void 0&&(i[l.uuid]=r.parse(l)),s[l.uuid]=i[l.uuid]}}return s}parseAnimations(e){let t={};if(e!==void 0)for(let i=0;i<e.length;i++){let s=e[i],r=Vs.parse(s);t[r.uuid]=r}return t}parseImages(e,t){let i=this,s={},r;function a(l){return l=i.manager.resolveURL(l),i.manager.itemStart(l),r.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){let c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return a(u)}else return l.data?{data:ua(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){let l=new Fa(t);r=new Ws(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){let f=e[c],h=f.url;if(Array.isArray(h)){let d=[];for(let p=0,v=h.length;p<v;p++){let g=h[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?d.push(m):d.push(new Ui(m.data,m.width,m.height)))}s[f.uuid]=new vn(d)}else{let d=o(f.url);s[f.uuid]=new vn(d)}}}return s}async parseImagesAsync(e){let t=this,i={},s;async function r(a){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await s.loadAsync(l)}else return a.data?{data:ua(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){s=new Ws(this.manager),s.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){let l=e[a],c=l.url;if(Array.isArray(c)){let u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f],p=await r(d);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new Ui(p.data,p.width,p.height)))}i[l.uuid]=new vn(u)}else{let u=await r(l.url);i[l.uuid]=new vn(u)}}}return i}parseTextures(e,t){function i(r,a){return typeof r=="number"?r:(Le("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let s={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=e[r];o.image===void 0&&Le('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&Le("ObjectLoader: Undefined image",o.image);let l=t[o.image],c=l.data,u;Array.isArray(c)?(u=new Os,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new Ui:u=new ri,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=i(o.mapping,Ox)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=i(o.wrap[0],Um),u.wrapT=i(o.wrap[1],Um)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=i(o.minFilter,Lm)),o.magFilter!==void 0&&(u.magFilter=i(o.magFilter,Lm)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.normalized!==void 0&&(u.normalized=o.normalized),o.userData!==void 0&&(u.userData=o.userData),s[o.uuid]=u}return s}parseObject(e,t,i,s,r){let a;function o(h){return t[h]===void 0&&Le("ObjectLoader: Undefined geometry",h),t[h]}function l(h){if(h!==void 0){if(Array.isArray(h)){let d=[];for(let p=0,v=h.length;p<v;p++){let g=h[p];i[g]===void 0&&Le("ObjectLoader: Undefined material",g),d.push(i[g])}return d}return i[h]===void 0&&Le("ObjectLoader: Undefined material",h),i[h]}}function c(h){return s[h]===void 0&&Le("ObjectLoader: Undefined texture",h),s[h]}let u,f;switch(e.type){case"Scene":a=new Ln,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new pe(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new zo(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Ho(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new li(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new An(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Tl(e.color,e.intensity);break;case"DirectionalLight":a=new br(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new El(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new wl(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Al(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new Ml(e.color,e.groundColor,e.intensity);break;case"LightProbe":let h=new Oa().fromArray(e.sh);a=new bl(h,e.intensity);break;case"SkinnedMesh":u=o(e.geometry),f=l(e.material),a=new Go(u,f),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),f=l(e.material),a=new Pt(u,f);break;case"InstancedMesh":u=o(e.geometry),f=l(e.material);let d=e.count,p=e.instanceMatrix,v=e.instanceColor;a=new yn(u,f,d),a.instanceMatrix=new ds(new Float32Array(p.array),16),v!==void 0&&(a.instanceColor=new ds(new Float32Array(v.array),v.itemSize));break;case"BatchedMesh":u=o(e.geometry),f=l(e.material),a=new Xo(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,f),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(g=>{let m=null,x=null;return g.boundingBox!==void 0&&(m=new Ei().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(x=new Mi().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:x}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new Mi().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new Ei().fromJSON(e.boundingBox));break;case"LOD":a=new ko;break;case"Line":a=new Nn(o(e.geometry),l(e.material));break;case"LineLoop":a=new Yo(o(e.geometry),l(e.material));break;case"LineSegments":a=new ln(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new Fs(o(e.geometry),l(e.material));break;case"Sprite":a=new mr(l(e.material));break;case"Group":a=new Si;break;case"Bone":a=new Ma;break;default:a=new Mt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.pivot!==void 0&&(a.pivot=new w().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.blurSamples!==void 0&&(a.shadow.blurSamples=e.shadow.blurSamples),e.shadow.focus!==void 0&&(a.shadow.focus=e.shadow.focus),e.shadow.aspect!==void 0&&(a.shadow.aspect=e.shadow.aspect),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.static!==void 0&&(a.static=e.static),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){let h=e.children;for(let d=0;d<h.length;d++)a.add(this.parseObject(h[d],t,i,s,r))}if(e.animations!==void 0){let h=e.animations;for(let d=0;d<h.length;d++){let p=h[d];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);let h=e.levels;for(let d=0;d<h.length;d++){let p=h[d],v=a.getObjectByProperty("uuid",p.object);v!==void 0&&a.addLevel(v,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){let s=t[i.skeleton];s===void 0?Le("ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(s,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){let i=t.target,s=e.getObjectByProperty("uuid",i);s!==void 0?t.target=s:t.target=new Mt}})}},Ox={UVMapping:Ol,CubeReflectionMapping:kn,CubeRefractionMapping:vs,EquirectangularReflectionMapping:Ya,EquirectangularRefractionMapping:Za,CubeUVReflectionMapping:Pr},Um={RepeatWrapping:fa,ClampToEdgeWrapping:Qi,MirroredRepeatWrapping:da},Lm={NearestFilter:mi,NearestMipmapNearestFilter:Gh,NearestMipmapLinearFilter:Ir,LinearFilter:Ht,LinearMipmapNearestFilter:qa,LinearMipmapLinearFilter:fn},Wf=new WeakMap,ju=class extends Bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=In.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Wf.has(a)===!0?(s&&s(Wf.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return In.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Wf.set(l,c),In.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});In.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},xu,za=class{static getContext(){return xu===void 0&&(xu=new(window.AudioContext||window.webkitAudioContext)),xu}static setContext(e){xu=e}},$u=class extends Bi{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new Mn(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{let c=l.slice(0),u=za.getContext(),f=e+"#decode";r.manager.itemStart(f),u.decodeAudioData(c,function(h){t(h),r.manager.itemEnd(f)}).catch(function(h){o(h),r.manager.itemEnd(f)})}catch(c){o(c)}},i,s);function o(l){s?s(l):$e(l),r.manager.itemError(e)}}},Bm=new pt,Nm=new pt,er=new pt,eh=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new li,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new li,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,er.copy(e.projectionMatrix);let s=t.eyeSep/2,r=s*t.near/t.focus,a=t.near*Math.tan(ar*t.fov*.5)/t.zoom,o,l;Nm.elements[12]=-s,Bm.elements[12]=s,o=-a*t.aspect+r,l=a*t.aspect+r,er.elements[0]=2*t.near/(l-o),er.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(er),o=-a*t.aspect-r,l=a*t.aspect-r,er.elements[0]=2*t.near/(l-o),er.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(er)}this.cameraL.matrix.copy(e.matrixWorld).multiply(Nm),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(Bm),this.cameraR.matrixWorldNeedsUpdate=!0}},aa=-90,oa=1,Pl=class extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new li(aa,oa,e,t);s.layers=this.layers,this.add(s);let r=new li(aa,oa,e,t);r.layers=this.layers,this.add(r);let a=new li(aa,oa,e,t);a.layers=this.layers,this.add(a);let o=new li(aa,oa,e,t);o.layers=this.layers,this.add(o);let l=new li(aa,oa,e,t);l.layers=this.layers,this.add(l);let c=new li(aa,oa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===en)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Is)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Il=class extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ul=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Hx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Hx(){this._document.hidden===!1&&this.reset()}var tr=new w,Xf=new xi,zx=new w,ir=new w,nr=new w,th=class extends Mt{constructor(){super(),this.type="AudioListener",this.context=za.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Ul}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();let t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(tr,Xf,zx),ir.set(0,0,-1).applyQuaternion(Xf),nr.set(0,1,0).applyQuaternion(Xf),t.positionX){let i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(tr.x,i),t.positionY.linearRampToValueAtTime(tr.y,i),t.positionZ.linearRampToValueAtTime(tr.z,i),t.forwardX.linearRampToValueAtTime(ir.x,i),t.forwardY.linearRampToValueAtTime(ir.y,i),t.forwardZ.linearRampToValueAtTime(ir.z,i),t.upX.linearRampToValueAtTime(nr.x,i),t.upY.linearRampToValueAtTime(nr.y,i),t.upZ.linearRampToValueAtTime(nr.z,i)}else t.setPosition(tr.x,tr.y,tr.z),t.setOrientation(ir.x,ir.y,ir.z,nr.x,nr.y,nr.z)}},Ll=class extends Mt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Le("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Le("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Le("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Le("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Le("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Le("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Le("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Le("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},sr=new w,Fm=new xi,kx=new w,rr=new w,ih=class extends Ll{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(sr,Fm,kx),rr.set(0,0,1).applyQuaternion(Fm);let t=this.panner;if(t.positionX){let i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(sr.x,i),t.positionY.linearRampToValueAtTime(sr.y,i),t.positionZ.linearRampToValueAtTime(sr.z,i),t.orientationX.linearRampToValueAtTime(rr.x,i),t.orientationY.linearRampToValueAtTime(rr.y,i),t.orientationZ.linearRampToValueAtTime(rr.z,i)}else t.setPosition(sr.x,sr.y,sr.z),t.setOrientation(rr.x,rr.y,rr.z)}},nh=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},Bl=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,a=s;r!==a;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){xi.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){let a=this._workIndex*r;xi.multiplyQuaternionsFlat(e,a,e,t,e,i),xi.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[i+a]*s}}},Zd="\\[\\]\\.:\\/",Gx=new RegExp("["+Zd+"]","g"),qd="[^"+Zd+"]",Vx="[^"+Zd.replace("\\.","")+"]",Wx=/((?:WC+[\/:])*)/.source.replace("WC",qd),Xx=/(WCOD+)?/.source.replace("WCOD",Vx),Yx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qd),Zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qd),qx=new RegExp("^"+Wx+Xx+Yx+Zx+"$"),Qx=["material","materials","bones","map"],rd=class{constructor(e,t,i){let s=i||qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},qt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gx,"")}static parseTrackName(e){let t=qx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Qx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qt.Composite=rd;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sh=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=on(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let i=0,s=arguments.length;i!==s;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,i=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length,o,l=e.length,c=this.nCachedObjects_;for(let u=0,f=arguments.length;u!==f;++u){let h=arguments[u],d=h.uuid,p=t[d];if(p===void 0){p=l++,t[d]=p,e.push(h);for(let v=0,g=a;v!==g;++v)r[v].push(new qt(h,i[v],s[v]))}else if(p<c){o=e[p];let v=--c,g=e[v];t[g.uuid]=p,e[p]=g,t[d]=v,e[v]=h;for(let m=0,x=a;m!==x;++m){let M=r[m],y=M[v],T=M[p];M[p]=y,T===void 0&&(T=new qt(h,i[m],s[m])),M[v]=T}}else e[p]!==o&&$e("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,s=i.length,r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,u=t[c];if(u!==void 0&&u>=r){let f=r++,h=e[f];t[h.uuid]=u,e[u]=h,t[c]=f,e[f]=l;for(let d=0,p=s;d!==p;++d){let v=i[d],g=v[f],m=v[u];v[u]=g,v[f]=m}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,s=i.length,r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o],u=c.uuid,f=t[u];if(f!==void 0)if(delete t[u],f<r){let h=--r,d=e[h],p=--a,v=e[p];f!==h&&(t[d.uuid]=f),e[f]=d,h!==p&&(t[v.uuid]=h),e[h]=v,e.pop();for(let g=0,m=s;g!==m;++g){let x=i[g],M=x[h],y=x[p];x[f]=M,x[h]=y,x.pop()}}else{let h=--a,d=e[h];f!==h&&(t[d.uuid]=f),e[f]=d,e.pop();for(let p=0,v=s;p!==v;++p){let g=i[p];g[f]=g[h],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let i=this._bindingsIndicesByPath,s=i[e],r=this._bindings;if(s!==void 0)return r[s];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,f=new Array(c);s=r.length,i[e]=s,a.push(e),o.push(t),r.push(f);for(let h=u,d=l.length;h!==d;++h){let p=l[h];f[h]=new qt(p,e,t)}return f}unsubscribe_(e){let t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){let s=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=s[o];t[c]=i,a[i]=l,a.pop(),r[i]=r[o],r.pop(),s[i]=s[o],s.pop()}}},Nl=class{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Ds,endingEnd:Ds};for(let c=0;c!==a;++c){let u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Id,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Qh:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Sc:default:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,s=this.time+e,r=this._loopCount,a=i===Ud;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(i===Pd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){let s=this._interpolantSettings;i?(s.endingStart=Ps,s.endingEnd=Ps):(e?s.endingStart=this.zeroSlopeAtStart?Ps:Ds:s.endingStart=ma,t?s.endingEnd=this.zeroSlopeAtEnd?Ps:Ds:s.endingEnd=ma)}_scheduleFading(e,t,i){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}},Kx=new Float32Array(1),rh=class extends Ai{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let f=0;f!==r;++f){let h=s[f],d=h.name,p=u[d];if(p!==void 0)++p.referenceCount,a[f]=p;else{if(p=a[f],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}let v=t&&t._propertyBindings[f].binding.parsedPath;p=new Bl(qt.create(i,d,v),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),a[f]=p}o[f].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let f=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete f[h],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new La(new Float32Array(2),new Float32Array(2),1,Kx),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let s=t||this._root,r=s.uuid,a=typeof e=="string"?Vs.findByName(s,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Sc),l!==void 0){let f=l.actionByRoot[r];if(f!==void 0&&f.blendMode===i)return f;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let u=new Nl(this,a,t,i);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){let i=t||this._root,s=i.uuid,r=typeof e=="string"?Vs.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let u=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=u,t[u]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let a in i){let o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}},ah=class extends _a{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isRenderTarget3D=!0,this.depth=i;for(let r=0;r<this.textures.length;r++){let a=new hr(null,e,t,i);a.isRenderTargetTexture=!0,a.renderTarget=this,this.textures[r]=a}this._setTextureOptions(s)}},st=class n{constructor(e){this.value=e}clone(){return new n(this.value.clone===void 0?this.value:this.value.clone())}},Jx=0,oh=class extends Ai{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Jx++}),this.name="",this.usage=Ec,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let i=0,s=t.length;i<s;i++){let r=Array.isArray(t[i])?t[i]:[t[i]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}},lh=class extends pr{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},ch=class{constructor(e,t,i,s,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=s,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},Om=new pt,ka=class{constructor(e,t,i=0,s=1/0){this.ray=new Bn(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):$e("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Om.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Om),this}intersectObject(e,t=!0,i=[]){return ad(e,this,i,t),i.sort(Hm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ad(e[s],this,i,t);return i.sort(Hm),i}};function Hm(n,e){return n.distance-e.distance}function ad(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)ad(r[a],e,t,!0)}}var uh=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Le("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Cr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},hh=class{constructor(e=1,t=0,i=0){this.radius=e,this.theta=t,this.y=i}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}},$d=class $d{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};$d.prototype.isMatrix2=!0;var fh=$d,zm=new J,Fl=class{constructor(e=new J(1/0,1/0),t=new J(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=zm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},km=new w,_u=new w,la=new w,ca=new w,Yf=new w,jx=new w,$x=new w,dh=class{constructor(e=new w,t=new w){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){km.subVectors(e,this.start),_u.subVectors(this.end,this.start);let i=_u.dot(_u);if(i===0)return 0;let r=_u.dot(km)/i;return t&&(r=dt(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=jx,i=$x){let s=10000000000000001e-32,r,a,o=this.start,l=e.start,c=this.end,u=e.end;la.subVectors(c,o),ca.subVectors(u,l),Yf.subVectors(o,l);let f=la.dot(la),h=ca.dot(ca),d=ca.dot(Yf);if(f<=s&&h<=s)return t.copy(o),i.copy(l),t.sub(i),t.dot(t);if(f<=s)r=0,a=d/h,a=dt(a,0,1);else{let p=la.dot(Yf);if(h<=s)a=0,r=dt(-p/f,0,1);else{let v=la.dot(ca),g=f*h-v*v;g!==0?r=dt((v*d-p*h)/g,0,1):r=0,a=(v*r+d)/h,a<0?(a=0,r=dt(-p/f,0,1)):a>1&&(a=1,r=dt((v-p)/f,0,1))}}return t.copy(o).addScaledVector(la,r),i.copy(l).addScaledVector(ca,a),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Gm=new w,ph=class extends Mt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let i=new nt,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,u=o/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}i.setAttribute("position",new ke(s,3));let r=new Ii({fog:!1,toneMapped:!1});this.cone=new ln(i,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Gm.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Gm),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Rs=new w,yu=new pt,Zf=new pt,mh=class extends ln{constructor(e){let t=$g(e),i=new nt,s=[],r=[];for(let c=0;c<t.length;c++){let u=t[c];u.parent&&u.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}i.setAttribute("position",new ke(s,3)),i.setAttribute("color",new ke(r,3));let a=new Ii({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;let o=new pe(255),l=new pe(65280);this.setColors(o,l)}updateMatrixWorld(e){let t=this.bones,i=this.geometry,s=i.getAttribute("position");Zf.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){let o=t[r];o.parent&&o.parent.isBone&&(yu.multiplyMatrices(Zf,o.matrixWorld),Rs.setFromMatrixPosition(yu),s.setXYZ(a,Rs.x,Rs.y,Rs.z),yu.multiplyMatrices(Zf,o.parent.matrixWorld),Rs.setFromMatrixPosition(yu),s.setXYZ(a+1,Rs.x,Rs.y,Rs.z),a+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){let s=this.geometry.getAttribute("color");for(let r=0;r<s.count;r+=2)s.setXYZ(r,e.r,e.g,e.b),s.setXYZ(r+1,t.r,t.g,t.b);return s.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function $g(n){let e=[];n.isBone===!0&&e.push(n);for(let t=0;t<n.children.length;t++)e.push(...$g(n.children[t]));return e}var gh=class extends Pt{constructor(e,t,i){let s=new Hn(t,4,2),r=new Li({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},e_=new w,Vm=new pe,Wm=new pe,vh=class extends Mt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";let s=new Da(t);s.rotateY(Math.PI*.5),this.material=new Li({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=s.getAttribute("position"),a=new Float32Array(r.count*3);s.setAttribute("color",new ht(a,3)),this.add(new Pt(s,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");Vm.copy(this.light.color),Wm.copy(this.light.groundColor);for(let i=0,s=t.count;i<s;i++){let r=i<s/2?Vm:Wm;t.setXYZ(i,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(e_.setFromMatrixPosition(this.light.matrixWorld).negate())}},xh=class extends ln{constructor(e=10,t=10,i=4473924,s=8947848){i=new pe(i),s=new pe(s);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,d=0,p=-o;h<=t;h++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let v=h===r?i:s;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}let u=new nt;u.setAttribute("position",new ke(l,3)),u.setAttribute("color",new ke(c,3));let f=new Ii({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},_h=class extends ln{constructor(e=10,t=16,i=8,s=64,r=4473924,a=8947848){r=new pe(r),a=new pe(a);let o=[],l=[];if(t>1)for(let f=0;f<t;f++){let h=f/t*(Math.PI*2),d=Math.sin(h)*e,p=Math.cos(h)*e;o.push(0,0,0),o.push(d,0,p);let v=f&1?r:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let f=0;f<i;f++){let h=f&1?r:a,d=e-e/i*f;for(let p=0;p<s;p++){let v=p/s*(Math.PI*2),g=Math.sin(v)*d,m=Math.cos(v)*d;o.push(g,0,m),l.push(h.r,h.g,h.b),v=(p+1)/s*(Math.PI*2),g=Math.sin(v)*d,m=Math.cos(v)*d,o.push(g,0,m),l.push(h.r,h.g,h.b)}}let c=new nt;c.setAttribute("position",new ke(o,3)),c.setAttribute("color",new ke(l,3));let u=new Ii({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Xm=new w,Su=new w,Ym=new w,yh=class extends Mt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new nt;s.setAttribute("position",new ke([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let r=new Ii({fog:!1,toneMapped:!1});this.lightPlane=new Nn(s,r),this.add(this.lightPlane),s=new nt,s.setAttribute("position",new ke([0,0,0,0,0,1],3)),this.targetLine=new Nn(s,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Xm.setFromMatrixPosition(this.light.matrixWorld),Su.setFromMatrixPosition(this.light.target.matrixWorld),Ym.subVectors(Su,Xm),this.lightPlane.lookAt(Su),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Su),this.targetLine.scale.z=Ym.length()}},Mu=new w,pi=new wr,Sh=class extends ln{constructor(e){let t=new nt,i=new Ii({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,v){l(p),l(v)}function l(p){s.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(s.length/3-1)}t.setAttribute("position",new ke(s,3)),t.setAttribute("color",new ke(r,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new pe(16755200),u=new pe(16711680),f=new pe(43775),h=new pe(16777215),d=new pe(3355443);this.setColors(c,u,f,h,d)}setColors(e,t,i,s,r){let o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,i.r,i.g,i.b),o.setXYZ(33,i.r,i.g,i.b),o.setXYZ(34,i.r,i.g,i.b),o.setXYZ(35,i.r,i.g,i.b),o.setXYZ(36,i.r,i.g,i.b),o.setXYZ(37,i.r,i.g,i.b),o.setXYZ(38,s.r,s.g,s.b),o.setXYZ(39,s.r,s.g,s.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){let e=this.geometry,t=this.pointMap,i=1,s=1,r,a;if(pi.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===en)r=-1,a=1;else if(this.camera.coordinateSystem===Is)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);vi("c",t,e,pi,0,0,r),vi("t",t,e,pi,0,0,a),vi("n1",t,e,pi,-i,-s,r),vi("n2",t,e,pi,i,-s,r),vi("n3",t,e,pi,-i,s,r),vi("n4",t,e,pi,i,s,r),vi("f1",t,e,pi,-i,-s,a),vi("f2",t,e,pi,i,-s,a),vi("f3",t,e,pi,-i,s,a),vi("f4",t,e,pi,i,s,a),vi("u1",t,e,pi,i*.7,s*1.1,r),vi("u2",t,e,pi,-i*.7,s*1.1,r),vi("u3",t,e,pi,0,s*2,r),vi("cf1",t,e,pi,-i,0,a),vi("cf2",t,e,pi,i,0,a),vi("cf3",t,e,pi,0,-s,a),vi("cf4",t,e,pi,0,s,a),vi("cn1",t,e,pi,-i,0,r),vi("cn2",t,e,pi,i,0,r),vi("cn3",t,e,pi,0,-s,r),vi("cn4",t,e,pi,0,s,r),e.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function vi(n,e,t,i,s,r,a){Mu.set(s,r,a).unproject(i);let o=e[n];if(o!==void 0){let l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],Mu.x,Mu.y,Mu.z)}}var Au=new Ei,Mh=class extends ln{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new nt;r.setIndex(new ht(i,1)),r.setAttribute("position",new ht(s,3)),super(r,new Ii({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Au.setFromObject(this.object),Au.isEmpty())return;let e=Au.min,t=Au.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Ah=class extends ln{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new nt;r.setIndex(new ht(i,1)),r.setAttribute("position",new ke(s,3)),super(r,new Ii({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Eh=class extends Nn{constructor(e,t=1,i=16776960){let s=i,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new nt;a.setAttribute("position",new ke(r,3)),a.computeBoundingSphere(),super(a,new Ii({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new nt;l.setAttribute("position",new ke(o,3)),l.computeBoundingSphere(),this.add(new Pt(l,new Li({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Zm=new w,Eu,qf,Th=class extends Mt{constructor(e=new w(0,0,1),t=new w(0,0,0),i=1,s=16776960,r=i*.2,a=r*.2){super(),this.type="ArrowHelper",Eu===void 0&&(Eu=new nt,Eu.setAttribute("position",new ke([0,0,0,0,1,0],3)),qf=new On(.5,1,5,1),qf.translate(0,-.5,0)),this.position.copy(t),this.line=new Nn(Eu,new Ii({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Pt(qf,new Li({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Zm.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Zm,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},wh=class extends ln{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new nt;s.setAttribute("position",new ke(t,3)),s.setAttribute("color",new ke(i,3));let r=new Ii({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){let s=new pe,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},bh=class{constructor(){this.type="ShapePath",this.color=new pe,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new zs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,a){return this.currentPath.bezierCurveTo(e,t,i,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1,f=c.length;for(let h=0,d=f-1;h<f;d=h++){let p=c[h],v=c[d];p.y>l.y!=v.y>l.y&&l.x<(v.x-p.x)*(l.y-p.y)/(v.y-p.y)+p.x&&(u=!u)}return u}function t(l,c){let u=c.getCenter(new J);if(e(u,l))return u;let f=u.y,h=[],d=l.length;for(let p=0;p<d;p++){let v=l[p],g=l[(p+1)%d];if(v.y>f!=g.y>f){let m=v.x+(f-v.y)*(g.x-v.x)/(g.y-v.y);h.push(m)}}return h.length>1&&(h.sort((p,v)=>p-v),u.x=(h[0]+h[1])/2),u}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(Le('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");let s=i==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let u=xn.area(c);if(u===0)continue;let f=new Fl;for(let h=0;h<c.length;h++)f.expandByPoint(c[h]);r.push({subPath:l,points:c,boundingBox:f,interiorPoint:t(c,f),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],u=0;for(let f=l-1;f>=0;f--){let h=r[f];if(h.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,h.points)){c.container=h.exclude?h.container:h,u=h.winding,c.winding+=u;break}}s(c.winding)===s(u)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new Sn;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let u=new zs;u.curves=l.subPath.curves,c.holes.push(u)}return a}},Ga=class extends Ai{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function t_(n,e){let t=n.image&&n.image.width?n.image.width/n.image.height:1;return t>e?(n.repeat.x=1,n.repeat.y=t/e,n.offset.x=0,n.offset.y=(1-n.repeat.y)/2):(n.repeat.x=e/t,n.repeat.y=1,n.offset.x=(1-n.repeat.x)/2,n.offset.y=0),n}function i_(n,e){let t=n.image&&n.image.width?n.image.width/n.image.height:1;return t>e?(n.repeat.x=e/t,n.repeat.y=1,n.offset.x=(1-n.repeat.x)/2,n.offset.y=0):(n.repeat.x=1,n.repeat.y=t/e,n.offset.x=0,n.offset.y=(1-n.repeat.y)/2),n}function n_(n){return n.repeat.x=1,n.repeat.y=1,n.offset.x=0,n.offset.y=0,n}function jh(n,e,t,i){let s=s_(i);switch(t){case Zh:return n*e;case Gl:return n*e/s.components*s.byteLength;case Qa:return n*e/s.components*s.byteLength;case _s:return n*e*2/s.components*s.byteLength;case Vl:return n*e*2/s.components*s.byteLength;case qh:return n*e*3/s.components*s.byteLength;case Pi:return n*e*4/s.components*s.byteLength;case Wl:return n*e*4/s.components*s.byteLength;case Ka:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ja:case $a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yl:case ql:return Math.max(n,16)*Math.max(e,8)/4;case Xl:case Zl:return Math.max(n,8)*Math.max(e,8)/2;case Ql:case Kl:case jl:case $l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jl:case eo:case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mc:case gc:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xc:case _c:return Math.ceil(n/4)*Math.ceil(e/4)*8;case to:case yc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function s_(n){switch(n){case jt:case Vh:return{byteLength:1,components:1};case Ur:case Wh:case Ji:return{byteLength:2,components:1};case zl:case kl:return{byteLength:2,components:4};case dn:case Hl:case Di:return{byteLength:4,components:1};case Xh:case Yh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var Ch=class{static contain(e,t){return t_(e,t)}static cover(e,t){return i_(e,t)}static fill(e){return n_(e)}static getByteLength(e,t,i,s){return jh(e,t,i,s)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function S0(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function r_(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){let p=f[h],v=f[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){let v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var a_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,l_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,d_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,m_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,__=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,y_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,w_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,b_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,C_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,R_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,D_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,P_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,I_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N_="gl_FragColor = linearToOutputTexel( gl_FragColor );",F_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,H_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,V_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,j_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ey=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ny=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ry=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ay=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ly=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,my=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_y=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ry=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ly=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,By=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$y=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,aS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_S=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,US=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rt={alphahash_fragment:a_,alphahash_pars_fragment:o_,alphamap_fragment:l_,alphamap_pars_fragment:c_,alphatest_fragment:u_,alphatest_pars_fragment:h_,aomap_fragment:f_,aomap_pars_fragment:d_,batching_pars_vertex:p_,batching_vertex:m_,begin_vertex:g_,beginnormal_vertex:v_,bsdfs:x_,iridescence_fragment:__,bumpmap_pars_fragment:y_,clipping_planes_fragment:S_,clipping_planes_pars_fragment:M_,clipping_planes_pars_vertex:A_,clipping_planes_vertex:E_,color_fragment:T_,color_pars_fragment:w_,color_pars_vertex:b_,color_vertex:C_,common:R_,cube_uv_reflection_fragment:D_,defaultnormal_vertex:P_,displacementmap_pars_vertex:I_,displacementmap_vertex:U_,emissivemap_fragment:L_,emissivemap_pars_fragment:B_,colorspace_fragment:N_,colorspace_pars_fragment:F_,envmap_fragment:O_,envmap_common_pars_fragment:H_,envmap_pars_fragment:z_,envmap_pars_vertex:k_,envmap_physical_pars_fragment:j_,envmap_vertex:G_,fog_vertex:V_,fog_pars_vertex:W_,fog_fragment:X_,fog_pars_fragment:Y_,gradientmap_pars_fragment:Z_,lightmap_pars_fragment:q_,lights_lambert_fragment:Q_,lights_lambert_pars_fragment:K_,lights_pars_begin:J_,lights_toon_fragment:$_,lights_toon_pars_fragment:ey,lights_phong_fragment:ty,lights_phong_pars_fragment:iy,lights_physical_fragment:ny,lights_physical_pars_fragment:sy,lights_fragment_begin:ry,lights_fragment_maps:ay,lights_fragment_end:oy,lightprobes_pars_fragment:ly,logdepthbuf_fragment:cy,logdepthbuf_pars_fragment:uy,logdepthbuf_pars_vertex:hy,logdepthbuf_vertex:fy,map_fragment:dy,map_pars_fragment:py,map_particle_fragment:my,map_particle_pars_fragment:gy,metalnessmap_fragment:vy,metalnessmap_pars_fragment:xy,morphinstance_vertex:_y,morphcolor_vertex:yy,morphnormal_vertex:Sy,morphtarget_pars_vertex:My,morphtarget_vertex:Ay,normal_fragment_begin:Ey,normal_fragment_maps:Ty,normal_pars_fragment:wy,normal_pars_vertex:by,normal_vertex:Cy,normalmap_pars_fragment:Ry,clearcoat_normal_fragment_begin:Dy,clearcoat_normal_fragment_maps:Py,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Uy,opaque_fragment:Ly,packing:By,premultiplied_alpha_fragment:Ny,project_vertex:Fy,dithering_fragment:Oy,dithering_pars_fragment:Hy,roughnessmap_fragment:zy,roughnessmap_pars_fragment:ky,shadowmap_pars_fragment:Gy,shadowmap_pars_vertex:Vy,shadowmap_vertex:Wy,shadowmask_pars_fragment:Xy,skinbase_vertex:Yy,skinning_pars_vertex:Zy,skinning_vertex:qy,skinnormal_vertex:Qy,specularmap_fragment:Ky,specularmap_pars_fragment:Jy,tonemapping_fragment:jy,tonemapping_pars_fragment:$y,transmission_fragment:eS,transmission_pars_fragment:tS,uv_pars_fragment:iS,uv_pars_vertex:nS,uv_vertex:sS,worldpos_vertex:rS,background_vert:aS,background_frag:oS,backgroundCube_vert:lS,backgroundCube_frag:cS,cube_vert:uS,cube_frag:hS,depth_vert:fS,depth_frag:dS,distance_vert:pS,distance_frag:mS,equirect_vert:gS,equirect_frag:vS,linedashed_vert:xS,linedashed_frag:_S,meshbasic_vert:yS,meshbasic_frag:SS,meshlambert_vert:MS,meshlambert_frag:AS,meshmatcap_vert:ES,meshmatcap_frag:TS,meshnormal_vert:wS,meshnormal_frag:bS,meshphong_vert:CS,meshphong_frag:RS,meshphysical_vert:DS,meshphysical_frag:PS,meshtoon_vert:IS,meshtoon_frag:US,points_vert:LS,points_frag:BS,shadow_vert:NS,shadow_frag:FS,sprite_vert:OS,sprite_frag:HS},Fe={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new w},probesMax:{value:new w},probesResolution:{value:new w}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Wn={basic:{uniforms:Vi([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Vi([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Vi([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Vi([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Vi([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new pe(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Vi([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Vi([Fe.points,Fe.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Vi([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Vi([Fe.common,Fe.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Vi([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Vi([Fe.sprite,Fe.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distance:{uniforms:Vi([Fe.common,Fe.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distance_vert,fragmentShader:Rt.distance_frag},shadow:{uniforms:Vi([Fe.lights,Fe.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};Wn.physical={uniforms:Vi([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};var $h={r:0,b:0,g:0},zS=new pt,M0=new xt;M0.set(-1,0,0,0,1,0,0,0,1);function kS(n,e,t,i,s,r){let a=new pe(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){let y=x.backgroundBlurriness>0;M=e.get(M,y)}return M}function p(x){let M=!1,y=d(x);y===null?g(a,o):y&&y.isColor&&(g(y,1),M=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(x,M){let y=d(M);y&&(y.isCubeTexture||y.mapping===Pr)?(c===void 0&&(c=new Pt(new Fn(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:Lr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zS.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(M0),c.material.toneMapped=Bt.getTransfer(y.colorSpace)!==Yt,(u!==y||f!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Pt(new Gi(2,2),new wt({name:"BackgroundMaterial",uniforms:Lr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Bt.getTransfer(y.colorSpace)!==Yt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,M){x.getRGB($h,Xd(n)),t.buffers.color.setClear($h.r,$h.g,$h.b,M,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:p,addToRenderList:v,dispose:m}}function GS(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(I,O,X,F,k){let ee=!1,z=f(I,F,X,O);r!==z&&(r=z,c(r.object)),ee=d(I,F,X,k),ee&&p(I,F,X,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,y(I,O,X,F),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function u(I){return n.deleteVertexArray(I)}function f(I,O,X,F){let k=F.wireframe===!0,ee=i[O.id];ee===void 0&&(ee={},i[O.id]=ee);let z=I.isInstancedMesh===!0?I.id:0,fe=ee[z];fe===void 0&&(fe={},ee[z]=fe);let j=fe[X.id];j===void 0&&(j={},fe[X.id]=j);let te=j[k];return te===void 0&&(te=h(l()),j[k]=te),te}function h(I){let O=[],X=[],F=[];for(let k=0;k<t;k++)O[k]=0,X[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:F,object:I,attributes:{},index:null}}function d(I,O,X,F){let k=r.attributes,ee=O.attributes,z=0,fe=X.getAttributes();for(let j in fe)if(fe[j].location>=0){let ue=k[j],oe=ee[j];if(oe===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor)),ue===void 0||ue.attribute!==oe||oe&&ue.data!==oe.data)return!0;z++}return r.attributesNum!==z||r.index!==F}function p(I,O,X,F){let k={},ee=O.attributes,z=0,fe=X.getAttributes();for(let j in fe)if(fe[j].location>=0){let ue=ee[j];ue===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor));let oe={};oe.attribute=ue,ue&&ue.data&&(oe.data=ue.data),k[j]=oe,z++}r.attributes=k,r.attributesNum=z,r.index=F}function v(){let I=r.newAttributes;for(let O=0,X=I.length;O<X;O++)I[O]=0}function g(I){m(I,0)}function m(I,O){let X=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;X[I]=1,F[I]===0&&(n.enableVertexAttribArray(I),F[I]=1),k[I]!==O&&(n.vertexAttribDivisor(I,O),k[I]=O)}function x(){let I=r.newAttributes,O=r.enabledAttributes;for(let X=0,F=O.length;X<F;X++)O[X]!==I[X]&&(n.disableVertexAttribArray(X),O[X]=0)}function M(I,O,X,F,k,ee,z){z===!0?n.vertexAttribIPointer(I,O,X,k,ee):n.vertexAttribPointer(I,O,X,F,k,ee)}function y(I,O,X,F){v();let k=F.attributes,ee=X.getAttributes(),z=O.defaultAttributeValues;for(let fe in ee){let j=ee[fe];if(j.location>=0){let te=k[fe];if(te===void 0&&(fe==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),fe==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),te!==void 0){let ue=te.normalized,oe=te.itemSize,He=e.get(te);if(He===void 0)continue;let At=He.buffer,Dt=He.type,Lt=He.bytesPerElement,ne=Dt===n.INT||Dt===n.UNSIGNED_INT||te.gpuType===Hl;if(te.isInterleavedBufferAttribute){let le=te.data,ze=le.stride,ct=te.offset;if(le.isInstancedInterleavedBuffer){for(let We=0;We<j.locationSize;We++)m(j.location+We,le.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let We=0;We<j.locationSize;We++)g(j.location+We);n.bindBuffer(n.ARRAY_BUFFER,At);for(let We=0;We<j.locationSize;We++)M(j.location+We,oe/j.locationSize,Dt,ue,ze*Lt,(ct+oe/j.locationSize*We)*Lt,ne)}else{if(te.isInstancedBufferAttribute){for(let le=0;le<j.locationSize;le++)m(j.location+le,te.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let le=0;le<j.locationSize;le++)g(j.location+le);n.bindBuffer(n.ARRAY_BUFFER,At);for(let le=0;le<j.locationSize;le++)M(j.location+le,oe/j.locationSize,Dt,ue,oe*Lt,oe/j.locationSize*le*Lt,ne)}}else if(z!==void 0){let ue=z[fe];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(j.location,ue);break;case 3:n.vertexAttrib3fv(j.location,ue);break;case 4:n.vertexAttrib4fv(j.location,ue);break;default:n.vertexAttrib1fv(j.location,ue)}}}}x()}function T(){b();for(let I in i){let O=i[I];for(let X in O){let F=O[X];for(let k in F){let ee=F[k];for(let z in ee)u(ee[z].object),delete ee[z];delete F[k]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;let O=i[I.id];for(let X in O){let F=O[X];for(let k in F){let ee=F[k];for(let z in ee)u(ee[z].object),delete ee[z];delete F[k]}}delete i[I.id]}function C(I){for(let O in i){let X=i[O];for(let F in X){let k=X[F];if(k[I.id]===void 0)continue;let ee=k[I.id];for(let z in ee)u(ee[z].object),delete ee[z];delete k[I.id]}}}function _(I){for(let O in i){let X=i[O],F=I.isInstancedMesh===!0?I.id:0,k=X[F];if(k!==void 0){for(let ee in k){let z=k[ee];for(let fe in z)u(z[fe].object),delete z[fe];delete k[ee]}delete X[F],Object.keys(X).length===0&&delete i[O]}}}function b(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:D,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function VS(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function WS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Pi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==jt&&C!==Di&&!_&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Le("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:y,maxSamples:T,samples:E}}function XS(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ki,o=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let p=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,m=n.get(f);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let x=r?0:i,M=x*4,y=m.clippingState||null;l.value=y,y=u(p,h,M,d);for(let T=0;T!==M;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,p){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=d+v*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,y=d;M!==v;++M,y+=4)a.copy(f[M]).applyMatrix4(x,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var no=4,YS=6,ZS=20,qS=256,wc=new An,e0=new pe,ep=null,tp=0,ip=0,np=!1,QS=new w,Br=new w,Rc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=QS}=r;ep=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ep,tp,ip),this._renderer.xr.enabled=np,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kn||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ep=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Ji,format:Pi,colorSpace:Kn,depthBuffer:!1},s=t0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t0(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=KS(r)),this._blurMaterial=jS(r,e,t),this._ggxMaterial=JS(r,e,t)}return s}_compileMaterial(e){let t=new Pt(new nt,e);this._renderer.compile(t,wc)}_sceneToCubeUV(e,t,i,s,r){let l=new li(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(e0),f.toneMapping=Tn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Fn,new Li({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,m=!1,x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,m=!0):(g.color.copy(e0),m=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));let T=this._cubeSize;io(s,y*T,M>2?T:0,T,T),f.setRenderTarget(s),m&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=x}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===kn||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=n0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i0());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;io(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,wc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:p}=this,v=this._sizeLods[i],g=3*v*(i>p-no?i-p+no:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,io(r,g,m,3*v,2*v),s.setRenderTarget(r),s.render(o,wc),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,io(e,g,m,3*v,2*v),s.setRenderTarget(e),s.render(o,wc)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-no?s-this._lodMax+no:0),h=4*(this._cubeSize-u);io(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,wc)}};function KS(n){let e=[],t=[],i=n,s=n-no+1+YS;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,p=new Float32Array(d*h*f),v=new Float32Array(d*h*f);for(let m=0;m<f;m++){let x=m%3*2/3-1,M=m>2?0:-1,y=[x,M,0,x+2/3,M,0,x+2/3,M+1,0,x,M,0,x+2/3,M+1,0,x,M+1,0];p.set(y,d*h*m);for(let T=0;T<h;T++){let E=u[T*2]*2-1,C=u[T*2+1]*2-1;m===0?Br.set(1,C,E):m===1?Br.set(-E,1,-C):m===2?Br.set(-E,C,1):m===3?Br.set(-1,C,-E):m===4?Br.set(-E,-1,C):Br.set(E,C,-1),Br.toArray(v,(m*h+T)*d)}}let g=new nt;g.setAttribute("position",new ht(p,d)),g.setAttribute("outputDirection",new ht(v,d)),t.push(new Pt(g,null)),i>no&&i--}return{lodMeshes:t,sizeLods:e}}function t0(n,e,t){let i=new It(n,e,t);return i.texture.mapping=Pr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function io(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function JS(n,e,t){return new wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function jS(n,e,t){return new wt({name:"SphericalGaussianBlur",defines:{SAMPLES:ZS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function i0(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function n0(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function tf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Dc=class extends It{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Os(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fn(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:Lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ui,blending:di});r.uniforms.tEquirect.value=t;let a=new Pt(s,r),o=t.minFilter;return t.minFilter===fn&&(t.minFilter=Ht),new Pl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function $S(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Ya||d===Za)if(e.has(h)){let p=e.get(h).texture;return o(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let v=new Dc(p.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,p=d===Ya||d===Za,v=d===kn||d===vs;if(p||v){let g=t.get(h),m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new Rc(n)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let x=h.image;return p&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new Rc(n)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,d){return d===Ya?h.mapping=kn:d===Za&&(h.mapping=vs),h}function l(h){let d=0,p=6;for(let v=0;v<p;v++)h[v]!==void 0&&d++;return d===p}function c(h){let d=h.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function eM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Qn("WebGLRenderer: "+i+" extension not supported."),s}}}function tM(n,e,t,i){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,p=f.attributes.position,v=0;if(p===void 0)return;if(d!==null){let x=d.array;v=d.version;for(let M=0,y=x.length;M<y;M+=3){let T=x[M+0],E=x[M+1],C=x[M+2];h.push(T,E,E,C,C,T)}}else{let x=p.array;v=p.version;for(let M=0,y=x.length/3-1;M<y;M+=3){let T=M+0,E=M+1,C=M+2;h.push(T,E,E,C,C,T)}}let g=new(p.count>=65535?Sa:ya)(h,1);g.version=v;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function iM(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*a),t.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,f*a,d),t.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let v=0;for(let g=0;g<d;g++)v+=h[g];t.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function nM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function sM(n,e,t){let i=new WeakMap,s=new Ft;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==f){let b=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),v===!0&&(M=3);let y=o.attributes.position.count*M,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*T*4*f),C=new ur(E,y,T,f);C.type=Di,C.needsUpdate=!0;let _=M*4;for(let D=0;D<f;D++){let I=g[D],O=m[D],X=x[D],F=y*T*4*D;for(let k=0;k<I.count;k++){let ee=k*_;d===!0&&(s.fromBufferAttribute(I,k),E[F+ee+0]=s.x,E[F+ee+1]=s.y,E[F+ee+2]=s.z,E[F+ee+3]=0),p===!0&&(s.fromBufferAttribute(O,k),E[F+ee+4]=s.x,E[F+ee+5]=s.y,E[F+ee+6]=s.z,E[F+ee+7]=0),v===!0&&(s.fromBufferAttribute(X,k),E[F+ee+8]=s.x,E[F+ee+9]=s.y,E[F+ee+10]=s.z,E[F+ee+11]=X.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new J(y,T)},i.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function rM(n,e,t,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var aM={[Bh]:"LINEAR_TONE_MAPPING",[Nh]:"REINHARD_TONE_MAPPING",[Fh]:"CINEON_TONE_MAPPING",[Oh]:"ACES_FILMIC_TONE_MAPPING",[zh]:"AGX_TONE_MAPPING",[kh]:"NEUTRAL_TONE_MAPPING",[Hh]:"CUSTOM_TONE_MAPPING"};function oM(n,e,t,i,s,r){let a=new It(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new nt;c.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ke([0,2,0,0,2,0],2));let u=new Pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Pt(c,u),h=new An(-1,1,1,-1,0,1),d=null,p=null,v=!1,g,m=null,x=[],M=!1;this.setSize=function(y,T){a.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let E=0;E<x.length;E++){let C=x[E];C.setSize&&C.setSize(y,T)}},this.setEffects=function(y){x=y,M=x.length>0&&x[0].isRenderPass===!0;let T=a.width,E=a.height;x.length>0&&o===null&&(o=new It(T,E,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),l=new It(T,E,{type:Ji,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<x.length;C++){let _=x[C];_.setSize&&_.setSize(T,E)}},this.begin=function(y,T){if(v||y.toneMapping===Tn&&x.length===0)return!1;if(m=T,T!==null){let E=T.width,C=T.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return M===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Tn,!0},this.hasRenderPass=function(){return M},this.end=function(y,T){y.toneMapping=g,v=!0;let E=a,C=o;for(let _=0;_<x.length;_++){let b=x[_];b.enabled!==!1&&(b.render(y,C,E,T),b.needsSwap!==!1&&(E=C,C=C===o?l:o))}if(d!==y.outputColorSpace||p!==y.toneMapping){d=y.outputColorSpace,p=y.toneMapping,u.defines={},Bt.getTransfer(d)===Yt&&(u.defines.SRGB_TRANSFER="");let _=aM[p];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(m),y.render(f,h),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var A0=new ri,ap=new cn(1,1),E0=new ur,T0=new hr,w0=new Os,s0=[],r0=[],a0=new Float32Array(16),o0=new Float32Array(9),l0=new Float32Array(4);function ro(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=s0[s];if(r===void 0&&(r=new Float32Array(s),s0[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ti(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wi(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function nf(n,e){let t=r0[e];t===void 0&&(t=new Int32Array(e),r0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ti(t,e))return;n.uniform2fv(this.addr,e),wi(t,e)}}function uM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ti(t,e))return;n.uniform3fv(this.addr,e),wi(t,e)}}function hM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ti(t,e))return;n.uniform4fv(this.addr,e),wi(t,e)}}function fM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ti(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wi(t,e)}else{if(Ti(t,i))return;l0.set(i),n.uniformMatrix2fv(this.addr,!1,l0),wi(t,i)}}function dM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ti(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wi(t,e)}else{if(Ti(t,i))return;o0.set(i),n.uniformMatrix3fv(this.addr,!1,o0),wi(t,i)}}function pM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ti(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wi(t,e)}else{if(Ti(t,i))return;a0.set(i),n.uniformMatrix4fv(this.addr,!1,a0),wi(t,i)}}function mM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ti(t,e))return;n.uniform2iv(this.addr,e),wi(t,e)}}function vM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ti(t,e))return;n.uniform3iv(this.addr,e),wi(t,e)}}function xM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ti(t,e))return;n.uniform4iv(this.addr,e),wi(t,e)}}function _M(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ti(t,e))return;n.uniform2uiv(this.addr,e),wi(t,e)}}function SM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ti(t,e))return;n.uniform3uiv(this.addr,e),wi(t,e)}}function MM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ti(t,e))return;n.uniform4uiv(this.addr,e),wi(t,e)}}function AM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ap.compareFunction=t.isReversedDepthBuffer()?Ac:Mc,r=ap):r=A0,t.setTexture2D(e||r,s)}function EM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||T0,s)}function TM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||w0,s)}function wM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||E0,s)}function bM(n){switch(n){case 5126:return lM;case 35664:return cM;case 35665:return uM;case 35666:return hM;case 35674:return fM;case 35675:return dM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return vM;case 35669:case 35673:return xM;case 5125:return _M;case 36294:return yM;case 36295:return SM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return wM}}function CM(n,e){n.uniform1fv(this.addr,e)}function RM(n,e){let t=ro(e,this.size,2);n.uniform2fv(this.addr,t)}function DM(n,e){let t=ro(e,this.size,3);n.uniform3fv(this.addr,t)}function PM(n,e){let t=ro(e,this.size,4);n.uniform4fv(this.addr,t)}function IM(n,e){let t=ro(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function UM(n,e){let t=ro(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function LM(n,e){let t=ro(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function BM(n,e){n.uniform1iv(this.addr,e)}function NM(n,e){n.uniform2iv(this.addr,e)}function FM(n,e){n.uniform3iv(this.addr,e)}function OM(n,e){n.uniform4iv(this.addr,e)}function HM(n,e){n.uniform1uiv(this.addr,e)}function zM(n,e){n.uniform2uiv(this.addr,e)}function kM(n,e){n.uniform3uiv(this.addr,e)}function GM(n,e){n.uniform4uiv(this.addr,e)}function VM(n,e,t){let i=this.cache,s=e.length,r=nf(t,s);Ti(i,r)||(n.uniform1iv(this.addr,r),wi(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ap:a=A0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function WM(n,e,t){let i=this.cache,s=e.length,r=nf(t,s);Ti(i,r)||(n.uniform1iv(this.addr,r),wi(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||T0,r[a])}function XM(n,e,t){let i=this.cache,s=e.length,r=nf(t,s);Ti(i,r)||(n.uniform1iv(this.addr,r),wi(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||w0,r[a])}function YM(n,e,t){let i=this.cache,s=e.length,r=nf(t,s);Ti(i,r)||(n.uniform1iv(this.addr,r),wi(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||E0,r[a])}function ZM(n){switch(n){case 5126:return CM;case 35664:return RM;case 35665:return DM;case 35666:return PM;case 35674:return IM;case 35675:return UM;case 35676:return LM;case 5124:case 35670:return BM;case 35667:case 35671:return NM;case 35668:case 35672:return FM;case 35669:case 35673:return OM;case 5125:return HM;case 36294:return zM;case 36295:return kM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return YM}}var op=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bM(t.type)}},lp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZM(t.type)}},cp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},sp=/(\w+)(\])?(\[|\.)?/g;function c0(n,e){n.seq.push(e),n.map[e.id]=e}function qM(n,e,t){let i=n.name,s=i.length;for(sp.lastIndex=0;;){let r=sp.exec(i),a=sp.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){c0(t,c===void 0?new op(o,n,e):new lp(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new cp(o),c0(t,f)),t=f}}}var so=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);qM(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function u0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var QM=37297,KM=0;function JM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var h0=new xt;function jM(n){Bt._getMatrix(h0,Bt.workingColorSpace,n);let e=`mat3( ${h0.elements.map(t=>t.toFixed(4))} )`;switch(Bt.getTransfer(n)){case ga:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function f0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+JM(n.getShaderSource(e),o)}else return r}function $M(n,e){let t=jM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var eA={[Bh]:"Linear",[Nh]:"Reinhard",[Fh]:"Cineon",[Oh]:"ACESFilmic",[zh]:"AgX",[kh]:"Neutral",[Hh]:"Custom"};function tA(n,e){let t=eA[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ef=new w;function iA(){Bt.getLuminanceCoefficients(ef);let n=ef.x.toFixed(4),e=ef.y.toFixed(4),t=ef.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cc).join(`
`)}function sA(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rA(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Cc(n){return n!==""}function d0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var aA=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(n){return n.replace(aA,lA)}var oA=new Map;function lA(n,e){let t=Rt[e];if(t===void 0){let i=oA.get(e);if(i!==void 0)t=Rt[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return up(t)}var cA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m0(n){return n.replace(cA,uA)}function uA(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function g0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var hA={[Va]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};function fA(n){return hA[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var dA={[kn]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE_UV"};function pA(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":dA[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var mA={[vs]:"ENVMAP_MODE_REFRACTION"};function gA(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":mA[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vA={[Xa]:"ENVMAP_BLENDING_MULTIPLY",[Cd]:"ENVMAP_BLENDING_MIX",[Rd]:"ENVMAP_BLENDING_ADD"};function xA(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":vA[n.combine]||"ENVMAP_BLENDING_NONE"}function _A(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function yA(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=fA(t),c=pA(t),u=gA(t),f=xA(t),h=_A(t),d=nA(t),p=sA(r),v=s.createProgram(),g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Cc).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Cc).join(`
`),m.length>0&&(m+=`
`)):(g=[g0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cc).join(`
`),m=[g0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?Rt.tonemapping_pars_fragment:"",t.toneMapping!==Tn?tA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,$M("linearToOutputTexel",t.outputColorSpace),iA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cc).join(`
`)),a=up(a),a=d0(a,t),a=p0(a,t),o=up(o),o=d0(o,t),o=p0(o,t),a=m0(a),o=m0(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=x+g+a,y=x+m+o,T=u0(s,s.VERTEX_SHADER,M),E=u0(s,s.FRAGMENT_SHADER,y);s.attachShader(v,T),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(I){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(v)||"",X=s.getShaderInfoLog(T)||"",F=s.getShaderInfoLog(E)||"",k=O.trim(),ee=X.trim(),z=F.trim(),fe=!0,j=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(fe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,T,E);else{let te=f0(s,T,"vertex"),ue=f0(s,E,"fragment");$e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+te+`
`+ue)}else k!==""?Le("WebGLProgram: Program Info Log:",k):(ee===""||z==="")&&(j=!1);j&&(I.diagnostics={runnable:fe,programLog:k,vertexShader:{log:ee,prefix:g},fragmentShader:{log:z,prefix:m}})}s.deleteShader(T),s.deleteShader(E),_=new so(s,v),b=rA(s,v)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(v,QM)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=KM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}var SA=0,hp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new fp(e),t.set(e,i)),i}},fp=class{constructor(e){this.id=SA++,this.code=e,this.usedTimes=0}};function MA(n){return n===_s||n===eo||n===to}function AA(n,e,t,i,s,r){let a=new fr,o=new hp,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,h=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,b,D,I,O,X){let F=I.fog,k=O.geometry,ee=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,fe=e.get(_.envMap||ee,z),j=fe&&fe.mapping===Pr?fe.image.height:null,te=d[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Le("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let ue=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,oe=ue!==void 0?ue.length:0,He=0;k.morphAttributes.position!==void 0&&(He=1),k.morphAttributes.normal!==void 0&&(He=2),k.morphAttributes.color!==void 0&&(He=3);let At,Dt,Lt,ne;if(te){let B=Wn[te];At=B.vertexShader,Dt=B.fragmentShader}else{At=_.vertexShader,Dt=_.fragmentShader;let B=o.getVertexShaderStage(_),N=o.getFragmentShaderStage(_);o.update(_,B,N),Lt=B.id,ne=N.id}let le=n.getRenderTarget(),ze=n.state.buffers.depth.getReversed(),ct=O.isInstancedMesh===!0,We=O.isBatchedMesh===!0,ft=!!_.map,Xt=!!_.matcap,ce=!!fe,me=!!_.aoMap,Ae=!!_.lightMap,Ee=!!_.bumpMap&&_.wireframe===!1,De=!!_.normalMap,lt=!!_.displacementMap,it=!!_.emissiveMap,ut=!!_.metalnessMap,gt=!!_.roughnessMap,L=_.anisotropy>0,Ot=_.clearcoat>0,_t=_.dispersion>0,R=_.retroreflectivity>0,S=_.iridescence>0,G=_.sheen>0,Y=_.transmission>0,K=L&&!!_.anisotropyMap,ye=Ot&&!!_.clearcoatMap,Ce=Ot&&!!_.clearcoatNormalMap,ie=Ot&&!!_.clearcoatRoughnessMap,ae=S&&!!_.iridescenceMap,Pe=S&&!!_.iridescenceThicknessMap,Qe=G&&!!_.sheenColorMap,Oe=G&&!!_.sheenRoughnessMap,Be=!!_.specularMap,et=!!_.specularColorMap,ot=!!_.specularIntensityMap,yt=Y&&!!_.transmissionMap,H=Y&&!!_.thicknessMap,Ie=!!_.gradientMap,re=!!_.alphaMap,Ne=_.alphaTest>0,Ge=!!_.alphaHash,de=!!_.extensions,tt=Tn;_.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(tt=n.toneMapping);let Ke={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:At,fragmentShader:Dt,defines:_.defines,customVertexShaderID:Lt,customFragmentShaderID:ne,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:We,batchingColor:We&&O._colorsTexture!==null,instancing:ct,instancingColor:ct&&O.instanceColor!==null,instancingMorph:ct&&O.morphTexture!==null,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ft,matcap:Xt,envMap:ce,envMapMode:ce&&fe.mapping,envMapCubeUVHeight:j,aoMap:me,lightMap:Ae,bumpMap:Ee,normalMap:De,displacementMap:lt,emissiveMap:it,normalMapObjectSpace:De&&_.normalMapType===Ld,normalMapTangentSpace:De&&_.normalMapType===ts,packedNormalMap:De&&_.normalMapType===ts&&MA(_.normalMap.format),metalnessMap:ut,roughnessMap:gt,anisotropy:L,anisotropyMap:K,clearcoat:Ot,clearcoatMap:ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ie,dispersion:_t,retroreflection:R,iridescence:S,iridescenceMap:ae,iridescenceThicknessMap:Pe,sheen:G,sheenColorMap:Qe,sheenRoughnessMap:Oe,specularMap:Be,specularColorMap:et,specularIntensityMap:ot,transmission:Y,transmissionMap:yt,thicknessMap:H,gradientMap:Ie,opaque:_.transparent===!1&&_.blending===Dr&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:Ne,alphaHash:Ge,combine:_.combine,mapUv:ft&&p(_.map.channel),aoMapUv:me&&p(_.aoMap.channel),lightMapUv:Ae&&p(_.lightMap.channel),bumpMapUv:Ee&&p(_.bumpMap.channel),normalMapUv:De&&p(_.normalMap.channel),displacementMapUv:lt&&p(_.displacementMap.channel),emissiveMapUv:it&&p(_.emissiveMap.channel),metalnessMapUv:ut&&p(_.metalnessMap.channel),roughnessMapUv:gt&&p(_.roughnessMap.channel),anisotropyMapUv:K&&p(_.anisotropyMap.channel),clearcoatMapUv:ye&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&p(_.sheenRoughnessMap.channel),specularMapUv:Be&&p(_.specularMap.channel),specularColorMapUv:et&&p(_.specularColorMap.channel),specularIntensityMapUv:ot&&p(_.specularIntensityMap.channel),transmissionMapUv:yt&&p(_.transmissionMap.channel),thicknessMapUv:H&&p(_.thicknessMap.channel),alphaMapUv:re&&p(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(De||L),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(ft||re),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&De===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ze,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:He,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:ft&&_.map.isVideoTexture===!0&&Bt.getTransfer(_.map.colorSpace)===Yt,decodeVideoTextureEmissive:it&&_.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(_.emissiveMap.colorSpace)===Yt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Jt,flipSided:_.side===ui,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:de&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&_.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function g(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)b.push(D),b.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(m(b,_),x(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function x(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let b=d[_.type],D;if(b){let I=Wn[b];D=Tc.clone(I.uniforms)}else D=_.uniforms;return D}function y(_,b){let D=u.get(b);return D!==void 0?++D.usedTimes:(D=new yA(n,b,_,s),c.push(D),u.set(b,D)),D}function T(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:M,acquireProgram:y,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:C}}function EA(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function TA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function v0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function x0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,p,v,g,m){let x=n[e];return x===void 0?(x={id:h.id,object:h,geometry:d,material:p,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},n[e]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=p,x.materialVariant=a(h),x.groupOrder=v,x.renderOrder=h.renderOrder,x.z=g,x.group=m),e++,x}function l(h,d,p,v,g,m,x){x.reversedDepth===!0&&(g=-g);let M=o(h,d,p,v,g,m);p.transmission>0?i.push(M):p.transparent===!0?s.push(M):t.push(M)}function c(h,d,p,v,g,m){let x=o(h,d,p,v,g,m);p.transmission>0?i.unshift(x):p.transparent===!0?s.unshift(x):t.unshift(x)}function u(h,d){t.length>1&&t.sort(h||TA),i.length>1&&i.sort(d||v0),s.length>1&&s.sort(d||v0)}function f(){for(let h=e,d=n.length;h<d;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function wA(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new x0,n.set(i,[a])):s>=r.length?(a=new x0,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function bA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new w,color:new pe};break;case"SpotLight":t={position:new w,direction:new w,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new w,halfWidth:new w,halfHeight:new w};break}return n[e.id]=t,t}}}function CA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var RA=0;function DA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function PA(n){let e=new bA,t=CA(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new w);let s=new w,r=new pt,a=new pt;function o(c){let u=0,f=0,h=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let d=0,p=0,v=0,g=0,m=0,x=0,M=0,y=0,T=0,E=0,C=0,_=0,b=0,D=0;c.sort(DA);for(let O=0,X=c.length;O<X;O++){let F=c[O],k=F.color,ee=F.intensity,z=F.distance,fe=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===_s?fe=F.shadow.map.texture:fe=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=k.r*ee,f+=k.g*ee,h+=k.b*ee;else if(F.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(F.sh.coefficients[j],ee);D++}else if(F.isSunLight){let j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let te=F.shadow,ue=t.get(F);ue.shadowIntensity=te.intensity,ue.shadowBias=te.bias,ue.shadowNormalBias=te.normalBias,ue.shadowRadius=te.radius,ue.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),i.sunShadow[p]=ue,i.sunShadowMap[p]=fe;let oe=te.getViewportCount();for(let He=0;He<oe;He++)i.sunShadowMatrix[v+He]=te.getMatrix(He),i.sunShadowCascade[v+He]=te._cascadeData[He];v+=oe,p++}i.sun[d]=j,d++}else if(F.isDirectionalLight){let j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let te=F.shadow,ue=t.get(F);ue.shadowIntensity=te.intensity,ue.shadowBias=te.bias,ue.shadowNormalBias=te.normalBias,ue.shadowRadius=te.radius,ue.shadowMapSize=te.mapSize,i.directionalShadow[g]=ue,i.directionalShadowMap[g]=fe,i.directionalShadowMatrix[g]=F.shadow.matrix,T++}i.directional[g]=j,g++}else if(F.isSpotLight){let j=e.get(F);j.position.setFromMatrixPosition(F.matrixWorld),j.color.copy(k).multiplyScalar(ee),j.distance=z,j.coneCos=Math.cos(F.angle),j.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),j.decay=F.decay,i.spot[x]=j;let te=F.shadow;if(F.map&&(i.spotLightMap[_]=F.map,_++,te.updateMatrices(F),F.castShadow&&b++),i.spotLightMatrix[x]=te.matrix,F.castShadow){let ue=t.get(F);ue.shadowIntensity=te.intensity,ue.shadowBias=te.bias,ue.shadowNormalBias=te.normalBias,ue.shadowRadius=te.radius,ue.shadowMapSize=te.mapSize,i.spotShadow[x]=ue,i.spotShadowMap[x]=fe,C++}x++}else if(F.isRectAreaLight){let j=e.get(F);j.color.copy(k).multiplyScalar(ee),j.halfWidth.set(F.width*.5,0,0),j.halfHeight.set(0,F.height*.5,0),i.rectArea[M]=j,M++}else if(F.isPointLight){let j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),j.distance=F.distance,j.decay=F.decay,F.castShadow){let te=F.shadow,ue=t.get(F);ue.shadowIntensity=te.intensity,ue.shadowBias=te.bias,ue.shadowNormalBias=te.normalBias,ue.shadowRadius=te.radius,ue.shadowMapSize=te.mapSize,ue.shadowCameraNear=te.camera.near,ue.shadowCameraFar=te.camera.far,i.pointShadow[m]=ue,i.pointShadowMap[m]=fe,i.pointShadowMatrix[m]=F.shadow.matrix,E++}i.point[m]=j,m++}else if(F.isHemisphereLight){let j=e.get(F);j.skyColor.copy(F.color).multiplyScalar(ee),j.groundColor.copy(F.groundColor).multiplyScalar(ee),i.hemi[y]=j,y++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let I=i.hash;(I.sunLength!==d||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==M||I.hemiLength!==y||I.numSunShadows!==p||I.numDirectionalShadows!==T||I.numPointShadows!==E||I.numSpotShadows!==C||I.numSpotMaps!==_||I.numLightProbes!==D)&&(i.sun.length=d,i.directional.length=g,i.spot.length=x,i.rectArea.length=M,i.point.length=m,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+_-b,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=D,I.sunLength=d,I.directionalLength=g,I.pointLength=m,I.spotLength=x,I.rectAreaLength=M,I.hemiLength=y,I.numSunShadows=p,I.numDirectionalShadows=T,I.numPointShadows=E,I.numSpotShadows=C,I.numSpotMaps=_,I.numLightProbes=D,i.version=RA++)}function l(c,u){let f=0,h=0,d=0,p=0,v=0,g=0,m=u.matrixWorldInverse;for(let x=0,M=c.length;x<M;x++){let y=c[x];if(y.isSunLight){let T=i.sun[f];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),f++}else if(y.isDirectionalLight){let T=i.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),h++}else if(y.isSpotLight){let T=i.spot[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let T=i.rectArea[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let T=i.hemi[g];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function _0(n){let e=new PA(n),t=[],i=[],s=[];function r(h){f.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function IA(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new _0(n),e.set(s,[o])):r>=a.length?(o=new _0(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var UA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BA=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],NA=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],y0=new pt,bc=new w,rp=new w;function FA(n,e,t){let i=new Jn,s=new J,r=new J,a=new Ft,o=new Gs,l=new Ua,c={},u=t.maxTextureSize,f={[hn]:ui,[ui]:hn,[Jt]:Jt},h=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:UA,fragmentShader:LA}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let p=new nt;p.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Pt(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Va;let m=this.type;this.render=function(E,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===cd&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Va);let b=n.getRenderTarget(),D=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),O=n.state;O.setBlending(di),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let X=m!==this.type;X&&C.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=E.length;F<k;F++){let ee=E[F],z=ee.shadow;if(z===void 0){Le("WebGLShadowMap:",ee,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let fe=z.getFrameExtents();s.multiply(fe),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/fe.x),s.x=r.x*fe.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/fe.y),s.y=r.y*fe.y,z.mapSize.y=r.y));let j=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=j,z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Rr){if(ee.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new It(s.x,s.y,{format:_s,type:Ji,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),z.map.texture.name=ee.name+".shadowMap",z.map.depthTexture=new cn(s.x,s.y,Di),z.map.depthTexture.name=ee.name+".shadowMapDepth",z.map.depthTexture.format=Un,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=mi,z.map.depthTexture.magFilter=mi}else ee.isPointLight?(z.map=new Dc(s.x),z.map.depthTexture=new qo(s.x,dn)):(z.map=new It(s.x,s.y),z.map.depthTexture=new cn(s.x,s.y,dn)),z.map.depthTexture.name=ee.name+".shadowMap",z.map.depthTexture.format=Un,this.type===Va?(z.map.depthTexture.compareFunction=j?Ac:Mc,z.map.depthTexture.minFilter=Ht,z.map.depthTexture.magFilter=Ht):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=mi,z.map.depthTexture.magFilter=mi);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let te=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();ee.isPointLight!==!0&&z.updateMatrices(ee,_);for(let ue=0;ue<te;ue++){let oe=z.getCamera(ue);if(ee.isPointLight){let He=z.camera,At=z.matrix,Dt=ee.distance||He.far;Dt!==He.far&&(He.far=Dt,He.updateProjectionMatrix()),bc.setFromMatrixPosition(ee.matrixWorld),He.position.copy(bc),rp.copy(He.position),rp.add(BA[ue]),He.up.copy(NA[ue]),He.lookAt(rp),He.updateMatrixWorld(),At.makeTranslation(-bc.x,-bc.y,-bc.z),y0.multiplyMatrices(He.projectionMatrix,He.matrixWorldInverse),z._frustum.setFromProjectionMatrix(y0,He.coordinateSystem,He.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,ue),n.clear();else{ue===0&&(n.setRenderTarget(z.map),n.clear());let He=z.getViewport(ue);a.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),O.viewport(a)}i=z.getFrustum(ue),y(C,_,oe,ee,this.type)}z.isPointLightShadow!==!0&&this.type===Rr&&x(z,_),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(b,D,I)};function x(E,C){let _=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new It(s.x,s.y,{format:_s,type:Ji}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(C,null,_,h,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(C,null,_,d,v,null)}function M(E,C,_,b){let D=null,I=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)D=I;else if(D=_.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let O=D.uuid,X=C.uuid,F=c[O];F===void 0&&(F={},c[O]=F);let k=F[X];k===void 0&&(k=D.clone(),F[X]=k,C.addEventListener("dispose",T)),D=k}if(D.visible=C.visible,D.wireframe=C.wireframe,b===Rr?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:f[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let O=n.properties.get(D);O.light=_}return D}function y(E,C,_,b,D){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Rr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let X=e.update(E),F=E.material;if(Array.isArray(F)){let k=X.groups;for(let ee=0,z=k.length;ee<z;ee++){let fe=k[ee],j=F[fe.materialIndex];if(j&&j.visible){let te=M(E,j,b,D);E.onBeforeShadow(n,E,C,_,X,te,fe),n.renderBufferDirect(_,null,X,te,E,fe),E.onAfterShadow(n,E,C,_,X,te,fe)}}}else if(F.visible){let k=M(E,F,b,D);E.onBeforeShadow(n,E,C,_,X,k,null),n.renderBufferDirect(_,null,X,k,E,null),E.onAfterShadow(n,E,C,_,X,k,null)}}let O=E.children;for(let X=0,F=O.length;X<F;X++)y(O[X],C,_,b,D)}function T(E){E.target.removeEventListener("dispose",T);for(let _ in c){let b=c[_],D=E.target.uuid;D in b&&(b[D].dispose(),delete b[D])}}}function OA(n,e){function t(){let H=!1,Ie=new Ft,re=null,Ne=new Ft(0,0,0,0);return{setMask:function(Ge){re!==Ge&&!H&&(n.colorMask(Ge,Ge,Ge,Ge),re=Ge)},setLocked:function(Ge){H=Ge},setClear:function(Ge,de,tt,Ke,B){B===!0&&(Ge*=Ke,de*=Ke,tt*=Ke),Ie.set(Ge,de,tt,Ke),Ne.equals(Ie)===!1&&(n.clearColor(Ge,de,tt,Ke),Ne.copy(Ie))},reset:function(){H=!1,re=null,Ne.set(-1,0,0,0)}}}function i(){let H=!1,Ie=!1,re=null,Ne=null,Ge=null;return{setReversed:function(de){if(Ie!==de){let tt=e.get("EXT_clip_control");de?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),Ie=de;let Ke=Ge;Ge=null,this.setClear(Ke)}},getReversed:function(){return Ie},setTest:function(de){de?le(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(de){re!==de&&!H&&(n.depthMask(de),re=de)},setFunc:function(de){if(Ie&&(de=Vg[de]),Ne!==de){switch(de){case Po:n.depthFunc(n.NEVER);break;case or:n.depthFunc(n.ALWAYS);break;case Io:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case Uo:n.depthFunc(n.EQUAL);break;case Lo:n.depthFunc(n.GEQUAL);break;case Bo:n.depthFunc(n.GREATER);break;case No:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=de}},setLocked:function(de){H=de},setClear:function(de){Ge!==de&&(Ge=de,Ie&&(de=1-de),n.clearDepth(de))},reset:function(){H=!1,re=null,Ne=null,Ge=null,Ie=!1}}}function s(){let H=!1,Ie=null,re=null,Ne=null,Ge=null,de=null,tt=null,Ke=null,B=null;return{setTest:function(N){H||(N?le(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(N){Ie!==N&&!H&&(n.stencilMask(N),Ie=N)},setFunc:function(N,P,q){(re!==N||Ne!==P||Ge!==q)&&(n.stencilFunc(N,P,q),re=N,Ne=P,Ge=q)},setOp:function(N,P,q){(de!==N||tt!==P||Ke!==q)&&(n.stencilOp(N,P,q),de=N,tt=P,Ke=q)},setLocked:function(N){H=N},setClear:function(N){B!==N&&(n.clearStencil(N),B=N)},reset:function(){H=!1,Ie=null,re=null,Ne=null,Ge=null,de=null,tt=null,Ke=null,B=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,p=[],v=null,g=!1,m=null,x=null,M=null,y=null,T=null,E=null,C=null,_=new pe(0,0,0),b=0,D=!1,I=null,O=null,X=null,F=null,k=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,fe=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=fe>=1):j.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=fe>=2);let te=null,ue={},oe=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),At=new Ft().fromArray(oe),Dt=new Ft().fromArray(He);function Lt(H,Ie,re,Ne){let Ge=new Uint8Array(4),de=n.createTexture();n.bindTexture(H,de),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<re;tt++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ie,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,Ge):n.texImage2D(Ie+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ge);return de}let ne={};ne[n.TEXTURE_2D]=Lt(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=Lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=Lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=Lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(n.DEPTH_TEST),a.setFunc(lr),Ee(!1),De(Dh),le(n.CULL_FACE),me(di);function le(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function ze(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function ct(H,Ie){return h[H]!==Ie?(n.bindFramebuffer(H,Ie),h[H]=Ie,H===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ie),H===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ie),!0):!1}function We(H,Ie){let re=p,Ne=!1;if(H){re=d.get(Ie),re===void 0&&(re=[],d.set(Ie,re));let Ge=H.textures;if(re.length!==Ge.length||re[0]!==n.COLOR_ATTACHMENT0){for(let de=0,tt=Ge.length;de<tt;de++)re[de]=n.COLOR_ATTACHMENT0+de;re.length=Ge.length,Ne=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(re)}function ft(H){return v!==H?(n.useProgram(H),v=H,!0):!1}let Xt={[Ys]:n.FUNC_ADD,[hd]:n.FUNC_SUBTRACT,[fd]:n.FUNC_REVERSE_SUBTRACT};Xt[dd]=n.MIN,Xt[pd]=n.MAX;let ce={[md]:n.ZERO,[gd]:n.ONE,[vd]:n.SRC_COLOR,[Uh]:n.SRC_ALPHA,[Ad]:n.SRC_ALPHA_SATURATE,[Sd]:n.DST_COLOR,[_d]:n.DST_ALPHA,[xd]:n.ONE_MINUS_SRC_COLOR,[Lh]:n.ONE_MINUS_SRC_ALPHA,[Md]:n.ONE_MINUS_DST_COLOR,[yd]:n.ONE_MINUS_DST_ALPHA,[Ed]:n.CONSTANT_COLOR,[Td]:n.ONE_MINUS_CONSTANT_COLOR,[wd]:n.CONSTANT_ALPHA,[bd]:n.ONE_MINUS_CONSTANT_ALPHA};function me(H,Ie,re,Ne,Ge,de,tt,Ke,B,N){if(H===di){g===!0&&(ze(n.BLEND),g=!1);return}if(g===!1&&(le(n.BLEND),g=!0),H!==ud){if(H!==m||N!==D){if((x!==Ys||T!==Ys)&&(n.blendEquation(n.FUNC_ADD),x=Ys,T=Ys),N)switch(H){case Dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wa:n.blendFunc(n.ONE,n.ONE);break;case Ph:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ih:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$e("WebGLState: Invalid blending: ",H);break}else switch(H){case Dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ph:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ih:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",H);break}M=null,y=null,E=null,C=null,_.set(0,0,0),b=0,m=H,D=N}return}Ge=Ge||Ie,de=de||re,tt=tt||Ne,(Ie!==x||Ge!==T)&&(n.blendEquationSeparate(Xt[Ie],Xt[Ge]),x=Ie,T=Ge),(re!==M||Ne!==y||de!==E||tt!==C)&&(n.blendFuncSeparate(ce[re],ce[Ne],ce[de],ce[tt]),M=re,y=Ne,E=de,C=tt),(Ke.equals(_)===!1||B!==b)&&(n.blendColor(Ke.r,Ke.g,Ke.b,B),_.copy(Ke),b=B),m=H,D=!1}function Ae(H,Ie){H.side===Jt?ze(n.CULL_FACE):le(n.CULL_FACE);let re=H.side===ui;Ie&&(re=!re),Ee(re),H.blending===Dr&&H.transparent===!1?me(di):me(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let Ne=H.stencilWrite;o.setTest(Ne),Ne&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),it(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(H){I!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),I=H)}function De(H){H!==od?(le(n.CULL_FACE),H!==O&&(H===Dh?n.cullFace(n.BACK):H===ld?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),O=H}function lt(H){H!==X&&(z&&n.lineWidth(H),X=H)}function it(H,Ie,re){H?(le(n.POLYGON_OFFSET_FILL),(F!==Ie||k!==re)&&(F=Ie,k=re,a.getReversed()&&(Ie=-Ie),n.polygonOffset(Ie,re))):ze(n.POLYGON_OFFSET_FILL)}function ut(H){H?le(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function gt(H){H===void 0&&(H=n.TEXTURE0+ee-1),te!==H&&(n.activeTexture(H),te=H)}function L(H,Ie,re){re===void 0&&(te===null?re=n.TEXTURE0+ee-1:re=te);let Ne=ue[re];Ne===void 0&&(Ne={type:void 0,texture:void 0},ue[re]=Ne),(Ne.type!==H||Ne.texture!==Ie)&&(te!==re&&(n.activeTexture(re),te=re),n.bindTexture(H,Ie||ne[H]),Ne.type=H,Ne.texture=Ie)}function Ot(){let H=ue[te];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function _t(){try{n.compressedTexImage2D(...arguments)}catch(H){$e("WebGLState:",H)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(H){$e("WebGLState:",H)}}function S(){try{n.texSubImage2D(...arguments)}catch(H){$e("WebGLState:",H)}}function G(){try{n.texSubImage3D(...arguments)}catch(H){$e("WebGLState:",H)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(H){$e("WebGLState:",H)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(H){$e("WebGLState:",H)}}function ye(){try{n.texStorage2D(...arguments)}catch(H){$e("WebGLState:",H)}}function Ce(){try{n.texStorage3D(...arguments)}catch(H){$e("WebGLState:",H)}}function ie(){try{n.texImage2D(...arguments)}catch(H){$e("WebGLState:",H)}}function ae(){try{n.texImage3D(...arguments)}catch(H){$e("WebGLState:",H)}}function Pe(H){return f[H]!==void 0?f[H]:n.getParameter(H)}function Qe(H,Ie){f[H]!==Ie&&(n.pixelStorei(H,Ie),f[H]=Ie)}function Oe(H){At.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),At.copy(H))}function Be(H){Dt.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Dt.copy(H))}function et(H,Ie){let re=c.get(Ie);re===void 0&&(re=new WeakMap,c.set(Ie,re));let Ne=re.get(H);Ne===void 0&&(Ne=n.getUniformBlockIndex(Ie,H.name),re.set(H,Ne))}function ot(H,Ie){let Ne=c.get(Ie).get(H);l.get(Ie)!==Ne&&(n.uniformBlockBinding(Ie,Ne,H.__bindingPointIndex),l.set(Ie,Ne))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},te=null,ue={},h={},d=new WeakMap,p=[],v=null,g=!1,m=null,x=null,M=null,y=null,T=null,E=null,C=null,_=new pe(0,0,0),b=0,D=!1,I=null,O=null,X=null,F=null,k=null,At.set(0,0,n.canvas.width,n.canvas.height),Dt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:ze,bindFramebuffer:ct,drawBuffers:We,useProgram:ft,setBlending:me,setMaterial:Ae,setFlipSided:Ee,setCullFace:De,setLineWidth:lt,setPolygonOffset:it,setScissorTest:ut,activeTexture:gt,bindTexture:L,unbindTexture:Ot,compressedTexImage2D:_t,compressedTexImage3D:R,texImage2D:ie,texImage3D:ae,pixelStorei:Qe,getParameter:Pe,updateUBOMapping:et,uniformBlockBinding:ot,texStorage2D:ye,texStorage3D:Ce,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:K,scissor:Oe,viewport:Be,reset:yt}}function HA(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,u=new WeakMap,f=new Set,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,S){return p?new OffscreenCanvas(R,S):va("canvas")}function g(R,S,G){let Y=1,K=_t(R);if((K.width>G||K.height>G)&&(Y=G/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ye=Math.floor(Y*K.width),Ce=Math.floor(Y*K.height);h===void 0&&(h=v(ye,Ce));let ie=S?v(ye,Ce):h;return ie.width=ye,ie.height=Ce,ie.getContext("2d").drawImage(R,0,0,ye,Ce),Le("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ye+"x"+Ce+")."),ie}else return"data"in R&&Le("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps}function x(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,S,G,Y,K,ye=!1){if(R!==null){if(n[R]!==void 0)return n[R];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ce;Y&&(Ce=e.get("EXT_texture_norm16"),Ce||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=S;if(S===n.RED&&(G===n.FLOAT&&(ie=n.R32F),G===n.HALF_FLOAT&&(ie=n.R16F),G===n.UNSIGNED_BYTE&&(ie=n.R8),G===n.UNSIGNED_SHORT&&Ce&&(ie=Ce.R16_EXT),G===n.SHORT&&Ce&&(ie=Ce.R16_SNORM_EXT)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.R8UI),G===n.UNSIGNED_SHORT&&(ie=n.R16UI),G===n.UNSIGNED_INT&&(ie=n.R32UI),G===n.BYTE&&(ie=n.R8I),G===n.SHORT&&(ie=n.R16I),G===n.INT&&(ie=n.R32I)),S===n.RG&&(G===n.FLOAT&&(ie=n.RG32F),G===n.HALF_FLOAT&&(ie=n.RG16F),G===n.UNSIGNED_BYTE&&(ie=n.RG8),G===n.UNSIGNED_SHORT&&Ce&&(ie=Ce.RG16_EXT),G===n.SHORT&&Ce&&(ie=Ce.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.RG8UI),G===n.UNSIGNED_SHORT&&(ie=n.RG16UI),G===n.UNSIGNED_INT&&(ie=n.RG32UI),G===n.BYTE&&(ie=n.RG8I),G===n.SHORT&&(ie=n.RG16I),G===n.INT&&(ie=n.RG32I)),S===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),G===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),G===n.UNSIGNED_INT&&(ie=n.RGB32UI),G===n.BYTE&&(ie=n.RGB8I),G===n.SHORT&&(ie=n.RGB16I),G===n.INT&&(ie=n.RGB32I)),S===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),G===n.UNSIGNED_INT&&(ie=n.RGBA32UI),G===n.BYTE&&(ie=n.RGBA8I),G===n.SHORT&&(ie=n.RGBA16I),G===n.INT&&(ie=n.RGBA32I)),S===n.RGB&&(G===n.UNSIGNED_SHORT&&Ce&&(ie=Ce.RGB16_EXT),G===n.SHORT&&Ce&&(ie=Ce.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),S===n.RGBA){let ae=ye?ga:Bt.getTransfer(K);G===n.FLOAT&&(ie=n.RGBA32F),G===n.HALF_FLOAT&&(ie=n.RGBA16F),G===n.UNSIGNED_BYTE&&(ie=ae===Yt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&Ce&&(ie=Ce.RGBA16_EXT),G===n.SHORT&&Ce&&(ie=Ce.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function T(R,S){let G;return R?S===null||S===dn||S===xs?G=n.DEPTH24_STENCIL8:S===Di?G=n.DEPTH32F_STENCIL8:S===Ur&&(G=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===dn||S===xs?G=n.DEPTH_COMPONENT24:S===Di?G=n.DEPTH_COMPONENT32F:S===Ur&&(G=n.DEPTH_COMPONENT16),G}function E(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==mi&&R.minFilter!==Ht?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){let S=R.target;S.removeEventListener("dispose",C),b(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&f.delete(S)}function _(R){let S=R.target;S.removeEventListener("dispose",_),I(S)}function b(R){let S=i.get(R);if(S.__webglInit===void 0)return;let G=R.source,Y=d.get(G);if(Y){let K=Y[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&D(R),Object.keys(Y).length===0&&d.delete(G)}i.remove(R)}function D(R){let S=i.get(R);n.deleteTexture(S.__webglTexture);let G=R.source,Y=d.get(G);delete Y[S.__cacheKey],a.memory.textures--}function I(R){let S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let K=0;K<S.__webglFramebuffer[Y].length;K++)n.deleteFramebuffer(S.__webglFramebuffer[Y][K]);else n.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)n.deleteFramebuffer(S.__webglFramebuffer[Y]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=R.textures;for(let Y=0,K=G.length;Y<K;Y++){let ye=i.get(G[Y]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),a.memory.textures--),i.remove(G[Y])}i.remove(R)}let O=0;function X(){O=0}function F(){return O}function k(R){O=R}function ee(){let R=O;return R>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function z(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function fe(R,S){let G=i.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let Y=R.image;if(Y===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(G,R,S);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function j(R,S){let G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ze(G,R,S);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function te(R,S){let G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ze(G,R,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function ue(R,S){let G=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){ct(G,R,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}let oe={[fa]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[da]:n.MIRRORED_REPEAT},He={[mi]:n.NEAREST,[Gh]:n.NEAREST_MIPMAP_NEAREST,[Ir]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[qa]:n.LINEAR_MIPMAP_NEAREST,[fn]:n.LINEAR_MIPMAP_LINEAR},At={[Nd]:n.NEVER,[kd]:n.ALWAYS,[Fd]:n.LESS,[Mc]:n.LEQUAL,[Od]:n.EQUAL,[Ac]:n.GEQUAL,[Hd]:n.GREATER,[zd]:n.NOTEQUAL};function Dt(R,S){if(S.type===Di&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ht||S.magFilter===qa||S.magFilter===Ir||S.magFilter===fn||S.minFilter===Ht||S.minFilter===qa||S.minFilter===Ir||S.minFilter===fn)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,oe[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,oe[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,oe[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,He[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,He[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,At[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===mi||S.minFilter!==Ir&&S.minFilter!==fn||S.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Lt(R,S){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));let Y=S.source,K=d.get(Y);K===void 0&&(K={},d.set(Y,K));let ye=z(S);if(ye!==R.__cacheKey){K[ye]===void 0&&(K[ye]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),K[ye].usedTimes++;let Ce=K[R.__cacheKey];Ce!==void 0&&(K[R.__cacheKey].usedTimes--,Ce.usedTimes===0&&D(S)),R.__cacheKey=ye,R.__webglTexture=K[ye].texture}return G}function ne(R,S,G){return Math.floor(Math.floor(R/G)/S)}function le(R,S,G,Y){let ye=R.updateRanges;if(ye.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,G,Y,S.data);else{ye.sort((Qe,Oe)=>Qe.start-Oe.start);let Ce=0;for(let Qe=1;Qe<ye.length;Qe++){let Oe=ye[Ce],Be=ye[Qe],et=Oe.start+Oe.count,ot=ne(Be.start,S.width,4),yt=ne(Oe.start,S.width,4);Be.start<=et+1&&ot===yt&&ne(Be.start+Be.count-1,S.width,4)===ot?Oe.count=Math.max(Oe.count,Be.start+Be.count-Oe.start):(++Ce,ye[Ce]=Be)}ye.length=Ce+1;let ie=t.getParameter(n.UNPACK_ROW_LENGTH),ae=t.getParameter(n.UNPACK_SKIP_PIXELS),Pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Qe=0,Oe=ye.length;Qe<Oe;Qe++){let Be=ye[Qe],et=Math.floor(Be.start/4),ot=Math.ceil(Be.count/4),yt=et%S.width,H=Math.floor(et/S.width),Ie=ot,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,yt),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,yt,H,Ie,re,G,Y,S.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ie),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function ze(R,S,G){let Y=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=n.TEXTURE_3D);let K=Lt(R,S),ye=S.source;t.bindTexture(Y,R.__webglTexture,n.TEXTURE0+G);let Ce=i.get(ye);if(ye.version!==Ce.__version||K===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let re=Bt.getPrimaries(Bt.workingColorSpace),Ne=S.colorSpace===nn?null:Bt.getPrimaries(S.colorSpace),Ge=S.colorSpace===nn||re===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let ae=g(S.image,!1,s.maxTextureSize);ae=Ot(S,ae);let Pe=r.convert(S.format,S.colorSpace),Qe=r.convert(S.type),Oe=y(S.internalFormat,Pe,Qe,S.normalized,S.colorSpace,S.isVideoTexture);Dt(Y,S);let Be,et=S.mipmaps,ot=S.isVideoTexture!==!0,yt=Ce.__version===void 0||K===!0,H=ye.dataReady,Ie=E(S,ae);if(S.isDepthTexture)Oe=T(S.format===Gn,S.type),yt&&(ot?t.texStorage2D(n.TEXTURE_2D,1,Oe,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Oe,ae.width,ae.height,0,Pe,Qe,null));else if(S.isDataTexture)if(et.length>0){ot&&yt&&t.texStorage2D(n.TEXTURE_2D,Ie,Oe,et[0].width,et[0].height);for(let re=0,Ne=et.length;re<Ne;re++)Be=et[re],ot?H&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Be.width,Be.height,Pe,Qe,Be.data):t.texImage2D(n.TEXTURE_2D,re,Oe,Be.width,Be.height,0,Pe,Qe,Be.data);S.generateMipmaps=!1}else ot?(yt&&t.texStorage2D(n.TEXTURE_2D,Ie,Oe,ae.width,ae.height),H&&le(S,ae,Pe,Qe)):t.texImage2D(n.TEXTURE_2D,0,Oe,ae.width,ae.height,0,Pe,Qe,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ot&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Oe,et[0].width,et[0].height,ae.depth);for(let re=0,Ne=et.length;re<Ne;re++)if(Be=et[re],S.format!==Pi)if(Pe!==null)if(ot){if(H)if(S.layerUpdates.size>0){let Ge=jh(Be.width,Be.height,S.format,S.type);for(let de of S.layerUpdates){let tt=Be.data.subarray(de*Ge/Be.data.BYTES_PER_ELEMENT,(de+1)*Ge/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,de,Be.width,Be.height,1,Pe,tt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Be.width,Be.height,ae.depth,Pe,Be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Oe,Be.width,Be.height,ae.depth,0,Be.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Be.width,Be.height,ae.depth,Pe,Qe,Be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Oe,Be.width,Be.height,ae.depth,0,Pe,Qe,Be.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ot&&yt&&t.texStorage2D(n.TEXTURE_2D,Ie,Oe,et[0].width,et[0].height);for(let re=0,Ne=et.length;re<Ne;re++)Be=et[re],S.format!==Pi?Pe!==null?ot?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,Be.width,Be.height,Pe,Be.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Oe,Be.width,Be.height,0,Be.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?H&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Be.width,Be.height,Pe,Qe,Be.data):t.texImage2D(n.TEXTURE_2D,re,Oe,Be.width,Be.height,0,Pe,Qe,Be.data)}else if(S.isDataArrayTexture)if(ot){if(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Oe,ae.width,ae.height,ae.depth),H)if(S.layerUpdates.size>0){let re=jh(ae.width,ae.height,S.format,S.type);for(let Ne of S.layerUpdates){let Ge=ae.data.subarray(Ne*re/ae.data.BYTES_PER_ELEMENT,(Ne+1)*re/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ne,ae.width,ae.height,1,Pe,Qe,Ge)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Pe,Qe,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,ae.width,ae.height,ae.depth,0,Pe,Qe,ae.data);else if(S.isData3DTexture)ot?(yt&&t.texStorage3D(n.TEXTURE_3D,Ie,Oe,ae.width,ae.height,ae.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Pe,Qe,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,ae.width,ae.height,ae.depth,0,Pe,Qe,ae.data);else if(S.isFramebufferTexture){if(yt)if(ot)t.texStorage2D(n.TEXTURE_2D,Ie,Oe,ae.width,ae.height);else{let re=ae.width,Ne=ae.height;for(let Ge=0;Ge<Ie;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,Oe,re,Ne,0,Pe,Qe,null),re>>=1,Ne>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ae.parentNode!==re){re.appendChild(ae),f.add(S),re.onpaint=Ne=>{let Ge=Ne.changedElements;for(let de of f)Ge.includes(de.image)&&(de.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ae);else{let Ge=n.RGBA,de=n.RGBA,tt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ge,de,tt,ae)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(et.length>0){if(ot&&yt){let re=_t(et[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Oe,re.width,re.height)}for(let re=0,Ne=et.length;re<Ne;re++)Be=et[re],ot?H&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Pe,Qe,Be):t.texImage2D(n.TEXTURE_2D,re,Oe,Pe,Qe,Be);S.generateMipmaps=!1}else if(ot){if(yt){let re=_t(ae);t.texStorage2D(n.TEXTURE_2D,Ie,Oe,re.width,re.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Qe,ae)}else t.texImage2D(n.TEXTURE_2D,0,Oe,Pe,Qe,ae);m(S)&&x(Y),Ce.__version=ye.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ct(R,S,G){if(S.image.length!==6)return;let Y=Lt(R,S),K=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+G);let ye=i.get(K);if(K.version!==ye.__version||Y===!0){t.activeTexture(n.TEXTURE0+G);let Ce=Bt.getPrimaries(Bt.workingColorSpace),ie=S.colorSpace===nn?null:Bt.getPrimaries(S.colorSpace),ae=S.colorSpace===nn||Ce===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Pe=S.isCompressedTexture||S.image[0].isCompressedTexture,Qe=S.image[0]&&S.image[0].isDataTexture,Oe=[];for(let de=0;de<6;de++)!Pe&&!Qe?Oe[de]=g(S.image[de],!0,s.maxCubemapSize):Oe[de]=Qe?S.image[de].image:S.image[de],Oe[de]=Ot(S,Oe[de]);let Be=Oe[0],et=r.convert(S.format,S.colorSpace),ot=r.convert(S.type),yt=y(S.internalFormat,et,ot,S.normalized,S.colorSpace),H=S.isVideoTexture!==!0,Ie=ye.__version===void 0||Y===!0,re=K.dataReady,Ne=E(S,Be);Dt(n.TEXTURE_CUBE_MAP,S);let Ge;if(Pe){H&&Ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,yt,Be.width,Be.height);for(let de=0;de<6;de++){Ge=Oe[de].mipmaps;for(let tt=0;tt<Ge.length;tt++){let Ke=Ge[tt];S.format!==Pi?et!==null?H?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,tt,0,0,Ke.width,Ke.height,et,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,tt,yt,Ke.width,Ke.height,0,Ke.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,tt,0,0,Ke.width,Ke.height,et,ot,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,tt,yt,Ke.width,Ke.height,0,et,ot,Ke.data)}}}else{if(Ge=S.mipmaps,H&&Ie){Ge.length>0&&Ne++;let de=_t(Oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,yt,de.width,de.height)}for(let de=0;de<6;de++)if(Qe){H?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Oe[de].width,Oe[de].height,et,ot,Oe[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,yt,Oe[de].width,Oe[de].height,0,et,ot,Oe[de].data);for(let tt=0;tt<Ge.length;tt++){let B=Ge[tt].image[de].image;H?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,tt+1,0,0,B.width,B.height,et,ot,B.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,tt+1,yt,B.width,B.height,0,et,ot,B.data)}}else{H?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,et,ot,Oe[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,yt,et,ot,Oe[de]);for(let tt=0;tt<Ge.length;tt++){let Ke=Ge[tt];H?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,tt+1,0,0,et,ot,Ke.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,tt+1,yt,et,ot,Ke.image[de])}}}m(S)&&x(n.TEXTURE_CUBE_MAP),ye.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function We(R,S,G,Y,K,ye){let Ce=r.convert(G.format,G.colorSpace),ie=r.convert(G.type),ae=y(G.internalFormat,Ce,ie,G.normalized,G.colorSpace),Pe=i.get(S),Qe=i.get(G);if(Qe.__renderTarget=S,!Pe.__hasExternalTextures){let Oe=Math.max(1,S.width>>ye),Be=Math.max(1,S.height>>ye);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,ye,ae,Oe,Be,S.depth,0,Ce,ie,null):t.texImage2D(K,ye,ae,Oe,Be,0,Ce,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),gt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,K,Qe.__webglTexture,0,ut(S)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,K,Qe.__webglTexture,ye),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(R,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){let Y=S.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,ye=T(S.stencilBuffer,K),Ce=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;gt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut(S),ye,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut(S),ye,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ye,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,R)}else{let Y=S.textures;for(let K=0;K<Y.length;K++){let ye=Y[K],Ce=r.convert(ye.format,ye.colorSpace),ie=r.convert(ye.type),ae=y(ye.internalFormat,Ce,ie,ye.normalized,ye.colorSpace);gt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut(S),ae,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut(S),ae,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ae,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xt(R,S,G){let Y=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(S.depthTexture);if(K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y){if(K.__webglInit===void 0&&(K.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,S.depthTexture);let Pe=r.convert(S.depthTexture.format),Qe=r.convert(S.depthTexture.type),Oe;S.depthTexture.format===Un?Oe=n.DEPTH_COMPONENT24:S.depthTexture.format===Gn&&(Oe=n.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Oe,S.width,S.height,0,Pe,Qe,null)}}else fe(S.depthTexture,0);let ye=K.__webglTexture,Ce=ut(S),ie=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,ae=S.depthTexture.format===Gn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Un)gt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ie,ye,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,ae,ie,ye,0);else if(S.depthTexture.format===Gn)gt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ie,ye,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,ae,ie,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(R){let S=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){let K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=Y}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)Xt(S.__webglFramebuffer[Y],R,Y);else{let Y=R.texture.mipmaps;Y&&Y.length>0?Xt(S.__webglFramebuffer[0],R,0):Xt(S.__webglFramebuffer,R,0)}else if(G){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=n.createRenderbuffer(),ft(S.__webglDepthbuffer[Y],R,!1);else{let K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=S.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,ye),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ye)}}else{let Y=R.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ft(S.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ye),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ye)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(R,S,G){let Y=i.get(R);S!==void 0&&We(Y.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&ce(R)}function Ae(R){let S=R.texture,G=i.get(R),Y=i.get(S);R.addEventListener("dispose",_);let K=R.textures,ye=R.isWebGLCubeRenderTarget===!0,Ce=K.length>1;if(Ce||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=S.version,a.memory.textures++),ye){G.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ie]=[];for(let ae=0;ae<S.mipmaps.length;ae++)G.__webglFramebuffer[ie][ae]=n.createFramebuffer()}else G.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ie=0;ie<S.mipmaps.length;ie++)G.__webglFramebuffer[ie]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let ie=0,ae=K.length;ie<ae;ie++){let Pe=i.get(K[ie]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&gt(R)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ie=0;ie<K.length;ie++){let ae=K[ie];G.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ie]);let Pe=r.convert(ae.format,ae.colorSpace),Qe=r.convert(ae.type),Oe=y(ae.internalFormat,Pe,Qe,ae.normalized,ae.colorSpace,R.isXRRenderTarget===!0),Be=ut(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Oe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,G.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ft(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ye){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,S);for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0)for(let ae=0;ae<S.mipmaps.length;ae++)We(G.__webglFramebuffer[ie][ae],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae);else We(G.__webglFramebuffer[ie],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(S)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ie=0,ae=K.length;ie<ae;ie++){let Pe=K[ie],Qe=i.get(Pe),Oe=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Oe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Oe,Qe.__webglTexture),Dt(Oe,Pe),We(G.__webglFramebuffer,R,Pe,n.COLOR_ATTACHMENT0+ie,Oe,0),m(Pe)&&x(Oe)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ie=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,Y.__webglTexture),Dt(ie,S),S.mipmaps&&S.mipmaps.length>0)for(let ae=0;ae<S.mipmaps.length;ae++)We(G.__webglFramebuffer[ae],R,S,n.COLOR_ATTACHMENT0,ie,ae);else We(G.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,ie,0);m(S)&&x(ie),t.unbindTexture()}R.depthBuffer&&ce(R)}function Ee(R){let S=R.textures;for(let G=0,Y=S.length;G<Y;G++){let K=S[G];if(m(K)){let ye=M(R),Ce=i.get(K).__webglTexture;t.bindTexture(ye,Ce),x(ye),t.unbindTexture()}}}let De=[],lt=[];function it(R){if(R.samples>0){if(gt(R)===!1){let S=R.textures,G=R.width,Y=R.height,K=n.COLOR_BUFFER_BIT,ye=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(R),ie=S.length>1;if(ie)for(let Pe=0;Pe<S.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);let ae=R.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Pe=0;Pe<S.length;Pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Pe]);let Qe=i.get(S[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qe,0)}n.blitFramebuffer(0,0,G,Y,0,0,G,Y,K,n.NEAREST),l===!0&&(De.length=0,lt.length=0,De.push(n.COLOR_ATTACHMENT0+Pe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(De.push(ye),lt.push(ye),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let Pe=0;Pe<S.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Pe]);let Qe=i.get(S[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,Qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ut(R){return Math.min(s.maxSamples,R.samples)}function gt(R){let S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function L(R){let S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function Ot(R,S){let G=R.colorSpace,Y=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Kn&&G!==nn&&(Bt.getTransfer(G)===Yt?(Y!==Pi||K!==jt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",G)),S}function _t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=X,this.getTextureUnits=F,this.setTextureUnits=k,this.setTexture2D=fe,this.setTexture2DArray=j,this.setTexture3D=te,this.setTextureCube=ue,this.rebindTextures=me,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=We,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function b0(n,e){function t(i,s=nn){let r,a=Bt.getTransfer(s);if(i===jt)return n.UNSIGNED_BYTE;if(i===zl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vh)return n.BYTE;if(i===Wh)return n.SHORT;if(i===Ur)return n.UNSIGNED_SHORT;if(i===Hl)return n.INT;if(i===dn)return n.UNSIGNED_INT;if(i===Di)return n.FLOAT;if(i===Ji)return n.HALF_FLOAT;if(i===Zh)return n.ALPHA;if(i===qh)return n.RGB;if(i===Pi)return n.RGBA;if(i===Un)return n.DEPTH_COMPONENT;if(i===Gn)return n.DEPTH_STENCIL;if(i===Gl)return n.RED;if(i===Qa)return n.RED_INTEGER;if(i===_s)return n.RG;if(i===Vl)return n.RG_INTEGER;if(i===Wl)return n.RGBA_INTEGER;if(i===Ka||i===Ja||i===ja||i===$a)if(a===Yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xl||i===Yl||i===Zl||i===ql)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ql||i===Kl||i===Jl||i===jl||i===$l||i===eo||i===ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ql||i===Kl)return a===Yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Jl)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===jl)return r.COMPRESSED_R11_EAC;if(i===$l)return r.COMPRESSED_SIGNED_R11_EAC;if(i===eo)return r.COMPRESSED_RG11_EAC;if(i===ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===tc||i===ic||i===nc||i===sc||i===rc||i===ac||i===oc||i===lc||i===cc||i===uc||i===hc||i===fc||i===dc||i===pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tc)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ic)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nc)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sc)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rc)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ac)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oc)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lc)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uc)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hc)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fc)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dc)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pc)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mc||i===gc||i===vc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===mc)return a===Yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xc||i===_c||i===to||i===yc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===xc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var zA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,dp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new wt({vertexShader:zA,fragmentShader:kA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Gi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pp=class extends Ai{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null,v=typeof XRWebGLBinding<"u",g=new dp,m={},x=t.getContextAttributes(),M=null,y=null,T=[],E=[],C=new J,_=null,b=null,D=new li;D.viewport=new Ft;let I=new li;I.viewport=new Ft;let O=[D,I],X=new Il,F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let le=T[ne];return le===void 0&&(le=new dr,T[ne]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ne){let le=T[ne];return le===void 0&&(le=new dr,T[ne]=le),le.getGripSpace()},this.getHand=function(ne){let le=T[ne];return le===void 0&&(le=new dr,T[ne]=le),le.getHandSpace()};function ee(ne){let le=E.indexOf(ne.inputSource);if(le===-1)return;let ze=T[le];ze!==void 0&&(ze.update(ne.inputSource,ne.frame,c||a),ze.dispatchEvent({type:ne.type,data:ne.inputSource}))}function z(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",fe);for(let ne=0;ne<T.length;ne++){let le=E[ne];le!==null&&(E[ne]=null,T[ne].disconnect(le))}F=null,k=null,g.reset();for(let ne in m)delete m[ne];if(e.setRenderTarget(M),d=null,h=null,f=null,s=null,y=null,Lt.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),b!==null){let ne=b.camera;ne.fov=b.fov,ne.zoom=b.zoom,ne.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",z),s.addEventListener("inputsourceschange",fe),x.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ze=null,ct=null,We=null;x.depth&&(We=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ze=x.stencil?Gn:Un,ct=x.stencil?xs:dn);let ft={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(ft),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new It(h.textureWidth,h.textureHeight,{format:Pi,type:jt,depthTexture:new cn(h.textureWidth,h.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,ze),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ze={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ze),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new It(d.framebufferWidth,d.framebufferHeight,{format:Pi,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Lt.setContext(s),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function fe(ne){for(let le=0;le<ne.removed.length;le++){let ze=ne.removed[le],ct=E.indexOf(ze);ct>=0&&(E[ct]=null,T[ct].disconnect(ze))}for(let le=0;le<ne.added.length;le++){let ze=ne.added[le],ct=E.indexOf(ze);if(ct===-1){for(let ft=0;ft<T.length;ft++)if(ft>=E.length){E.push(ze),ct=ft;break}else if(E[ft]===null){E[ft]=ze,ct=ft;break}if(ct===-1)break}let We=T[ct];We&&We.connect(ze)}}let j=new w,te=new w;function ue(ne,le,ze){j.setFromMatrixPosition(le.matrixWorld),te.setFromMatrixPosition(ze.matrixWorld);let ct=j.distanceTo(te),We=le.projectionMatrix.elements,ft=ze.projectionMatrix.elements,Xt=We[14]/(We[10]-1),ce=We[14]/(We[10]+1),me=(We[9]+1)/We[5],Ae=(We[9]-1)/We[5],Ee=(We[8]-1)/We[0],De=(ft[8]+1)/ft[0],lt=Xt*Ee,it=Xt*De,ut=ct/(-Ee+De),gt=ut*-Ee;if(le.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(gt),ne.translateZ(ut),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),We[10]===-1)ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let L=Xt+ut,Ot=ce+ut,_t=lt-gt,R=it+(ct-gt),S=me*ce/Ot*L,G=Ae*ce/Ot*L;ne.projectionMatrix.makePerspective(_t,R,S,G,L,Ot),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function oe(ne,le){le===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(le.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let le=ne.near,ze=ne.far;g.texture!==null&&(g.depthNear>0&&(le=g.depthNear),g.depthFar>0&&(ze=g.depthFar)),X.near=I.near=D.near=le,X.far=I.far=D.far=ze,(F!==X.near||k!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),F=X.near,k=X.far),X.layers.mask=ne.layers.mask|6,D.layers.mask=X.layers.mask&-5,I.layers.mask=X.layers.mask&-3;let ct=ne.parent,We=X.cameras;oe(X,ct);for(let ft=0;ft<We.length;ft++)oe(We[ft],ct);We.length===2?ue(X,D,I):X.projectionMatrix.copy(D.projectionMatrix),b===null&&ne.isPerspectiveCamera&&(b={camera:ne,fov:ne.fov,zoom:ne.zoom}),He(ne,X,ct)};function He(ne,le,ze){ze===null?ne.matrix.copy(le.matrixWorld):(ne.matrix.copy(ze.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(le.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=cr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(X)},this.getCameraTexture=function(ne){return m[ne]};let At=null;function Dt(ne,le){if(u=le.getViewerPose(c||a),p=le,u!==null){let ze=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ct=!1;ze.length!==X.cameras.length&&(X.cameras.length=0,ct=!0);for(let ce=0;ce<ze.length;ce++){let me=ze[ce],Ae=null;if(d!==null)Ae=d.getViewport(me);else{let De=f.getViewSubImage(h,me);Ae=De.viewport,ce===0&&(e.setRenderTargetTextures(y,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(y))}let Ee=O[ce];Ee===void 0&&(Ee=new li,Ee.layers.enable(ce),Ee.viewport=new Ft,O[ce]=Ee),Ee.matrix.fromArray(me.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(me.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),ce===0&&(X.matrix.copy(Ee.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ct===!0&&X.cameras.push(Ee)}let We=s.enabledFeatures;if(We&&We.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let ce=f.getDepthInformation(ze[0]);ce&&ce.isValid&&ce.texture&&g.init(ce,s.renderState)}if(We&&We.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let ce=0;ce<ze.length;ce++){let me=ze[ce].camera;if(me){let Ae=m[me];Ae||(Ae=new Aa,m[me]=Ae);let Ee=f.getCameraImage(me);Ae.sourceTexture=Ee}}}}for(let ze=0;ze<T.length;ze++){let ct=E[ze],We=T[ze];ct!==null&&We!==void 0&&We.update(ct,le,c||a)}At&&At(ne,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),p=null}let Lt=new S0;Lt.setAnimationLoop(Dt),this.setAnimationLoop=function(ne){At=ne},this.dispose=function(){}}},GA=new pt,C0=new xt;C0.set(-1,0,0,0,1,0,0,0,1);function VA(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Xd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,x,M,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,x,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ui&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ui&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=e.get(m),M=x.envMap,y=x.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(GA.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(C0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ui&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function WA(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){let E=T.program;i.uniformBlockBinding(y,E)}function c(y,T){let E=s[y.id];E===void 0&&(g(y),E=u(y),s[y.id]=E,y.addEventListener("dispose",x));let C=T.program;i.updateUBOMapping(y,C);let _=e.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function u(y){let T=f();y.__bindingPointIndex=T;let E=n.createBuffer(),C=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let T=s[y.id],E=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let _=0,b=E.length;_<b;_++){let D=E[_];if(Array.isArray(D))for(let I=0,O=D.length;I<O;I++)d(D[I],_,I,C);else d(D,_,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,T,E,C){if(v(y,T,E,C)===!0){let _=y.__offset,b=y.value;if(Array.isArray(b)){let D=0;for(let I=0;I<b.length;I++){let O=b[I],X=m(O);p(O,y.__data,D),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function p(y,T,E){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,E)}function v(y,T,E,C){let _=y.value,b=T+"_"+E;if(C[b]===void 0)return typeof _=="number"||typeof _=="boolean"?C[b]=_:ArrayBuffer.isView(_)?C[b]=_.slice():C[b]=_.clone(),!0;{let D=C[b];if(typeof _=="number"||typeof _=="boolean"){if(D!==_)return C[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(D.equals(_)===!1)return D.copy(_),!0}}return!1}function g(y){let T=y.uniforms,E=0,C=16;for(let b=0,D=T.length;b<D;b++){let I=Array.isArray(T[b])?T[b]:[T[b]];for(let O=0,X=I.length;O<X;O++){let F=I[O],k=Array.isArray(F.value)?F.value:[F.value];for(let ee=0,z=k.length;ee<z;ee++){let fe=k[ee],j=m(fe),te=E%C,ue=te%j.boundary,oe=te+ue;E+=ue,oe!==0&&C-oe<j.storage&&(E+=C-oe),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=j.storage}}}let _=E%C;return _>0&&(E+=C-_),y.__size=E,y.__cache={},this}function m(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",y),T}function x(y){let T=y.target;T.removeEventListener("dispose",x);let E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function M(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}var XA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),is=null;function YA(){return is===null&&(is=new Ui(XA,16,16,_s,Ji),is.name="DFG_LUT",is.minFilter=Ht,is.magFilter=Ht,is.wrapS=Qi,is.wrapT=Qi,is.generateMipmaps=!1,is.needsUpdate=!0),is}var mp=class{constructor(e={}){let{canvas:t=Gd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=jt}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let v=d,g=new Set([Wl,Vl,Qa]),m=new Set([jt,dn,Ur,xs,zl,kl]),x=new Uint32Array(4),M=new Int32Array(4),y=new w,T=null,E=null,C=[],_=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,I=!1,O=null,X=null,F=null,k=null;this._outputColorSpace=Ct;let ee=0,z=0,fe=null,j=-1,te=null,ue=new Ft,oe=new Ft,He=null,At=new pe(0),Dt=0,Lt=t.width,ne=t.height,le=1,ze=null,ct=null,We=new Ft(0,0,Lt,ne),ft=new Ft(0,0,Lt,ne),Xt=!1,ce=new Jn,me=!1,Ae=!1,Ee=new pt,De=new w,lt=new Ft,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function gt(){return fe===null?le:1}let L=i;function Ot(A,U){return t.getContext(A,U)}let _t,R,S,G,Y,K,ye,Ce,ie,ae,Pe,Qe,Oe,Be,et,ot,yt,H,Ie,re,Ne,Ge,de;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",B,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",P,!1),L===null){let U="webgl2";if(L=Ot(U,A),L===null)throw Ot(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(A){throw t.removeEventListener("webglcontextlost",B,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",P,!1),$e("WebGLRenderer: "+A.message),A}function tt(){_t=new eM(L),_t.init(),Ne=new b0(L,_t),R=new WS(L,_t,e,Ne),S=new OA(L,_t),R.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),X=L.createFramebuffer(),F=L.createFramebuffer(),k=L.createFramebuffer(),G=new nM(L),Y=new EA,K=new HA(L,_t,S,Y,R,Ne,G),ye=new $S(D),Ce=new r_(L),Ge=new GS(L,Ce),ie=new tM(L,Ce,G,Ge),ae=new rM(L,ie,Ce,Ge,G),H=new sM(L,R,K),et=new XS(Y),Pe=new AA(D,ye,_t,R,Ge,et),Qe=new VA(D,Y),Oe=new wA,Be=new IA(_t),yt=new kS(D,ye,S,ae,p,l),ot=new FA(D,ae,R),de=new WA(L,G,R,S),Ie=new VS(L,_t,G),re=new iM(L,_t,G),G.programs=Pe.programs,D.capabilities=R,D.extensions=_t,D.properties=Y,D.renderLists=Oe,D.shadowMap=ot,D.state=S,D.info=G}v!==jt&&(b=new oM(v,t.width,t.height,o,s,r));let Ke=new pp(D,L);this.xr=Ke,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let A=_t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=_t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(A){A!==void 0&&(le=A,this.setSize(Lt,ne,!1))},this.getSize=function(A){return A.set(Lt,ne)},this.setSize=function(A,U,Z=!0){if(Ke.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=A,ne=U,t.width=Math.floor(A*le),t.height=Math.floor(U*le),Z===!0&&(t.style.width=A+"px",t.style.height=U+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(Lt*le,ne*le).floor()},this.setDrawingBufferSize=function(A,U,Z){Lt=A,ne=U,le=Z,t.width=Math.floor(A*Z),t.height=Math.floor(U*Z),this.setViewport(0,0,A,U)},this.setEffects=function(A){if(v===jt){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let U=0;U<A.length;U++)if(A[U].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ue)},this.getViewport=function(A){return A.copy(We)},this.setViewport=function(A,U,Z,W){A.isVector4?We.set(A.x,A.y,A.z,A.w):We.set(A,U,Z,W),S.viewport(ue.copy(We).multiplyScalar(le).round())},this.getScissor=function(A){return A.copy(ft)},this.setScissor=function(A,U,Z,W){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,U,Z,W),S.scissor(oe.copy(ft).multiplyScalar(le).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(A){S.setScissorTest(Xt=A)},this.setOpaqueSort=function(A){ze=A},this.setTransparentSort=function(A){ct=A},this.getClearColor=function(A){return A.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,Z=!0){let W=0;if(A){let V=!1;if(fe!==null){let Re=fe.texture.format;V=g.has(Re)}if(V){let Re=fe.texture.type,Ve=m.has(Re),Ue=yt.getClearColor(),Xe=yt.getClearAlpha(),Ze=Ue.r,St=Ue.g,bt=Ue.b;Ve?(x[0]=Ze,x[1]=St,x[2]=bt,x[3]=Xe,L.clearBufferuiv(L.COLOR,0,x)):(M[0]=Ze,M[1]=St,M[2]=bt,M[3]=Xe,L.clearBufferiv(L.COLOR,0,M))}else W|=L.COLOR_BUFFER_BIT}U&&(W|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),O=A},this.dispose=function(){t.removeEventListener("webglcontextlost",B,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",P,!1),yt.dispose(),Oe.dispose(),Be.dispose(),Y.dispose(),ye.dispose(),ae.dispose(),Ge.dispose(),de.dispose(),Pe.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",qe),Ke.removeEventListener("sessionend",we),be.stop()};function B(A){A.preventDefault(),xa("WebGLRenderer: Context Lost."),I=!0}function N(){xa("WebGLRenderer: Context Restored."),I=!1;let A=G.autoReset,U=ot.enabled,Z=ot.autoUpdate,W=ot.needsUpdate,V=ot.type;tt(),G.autoReset=A,ot.enabled=U,ot.autoUpdate=Z,ot.needsUpdate=W,ot.type=V}function P(A){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function q(A){let U=A.target;U.removeEventListener("dispose",q),Q(U)}function Q(A){$(A),Y.remove(A)}function $(A){let U=Y.get(A).programs;U!==void 0&&(U.forEach(function(Z){Pe.releaseProgram(Z)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,Z,W,V,Re){U===null&&(U=it);let Ve=V.isMesh&&V.matrixWorld.determinantAffine()<0,Ue=at(A,U,Z,W,V);S.setMaterial(W,Ve);let Xe=Z.index,Ze=1;if(W.wireframe===!0){if(Xe=ie.getWireframeAttribute(Z),Xe===void 0)return;Ze=2}let St=Z.drawRange,bt=Z.attributes.position,Je=St.start*Ze,Zt=(St.start+St.count)*Ze;Re!==null&&(Je=Math.max(Je,Re.start*Ze),Zt=Math.min(Zt,(Re.start+Re.count)*Ze)),Xe!==null?(Je=Math.max(Je,0),Zt=Math.min(Zt,Xe.count)):bt!=null&&(Je=Math.max(Je,0),Zt=Math.min(Zt,bt.count));let _i=Zt-Je;if(_i<0||_i===1/0)return;Ge.setup(V,W,Ue,Z,Xe);let oi,ni=Ie;if(Xe!==null&&(oi=Ce.get(Xe),ni=re,ni.setIndex(oi)),V.isMesh)W.wireframe===!0?(S.setLineWidth(W.wireframeLinewidth*gt()),ni.setMode(L.LINES)):ni.setMode(L.TRIANGLES);else if(V.isLine){let Fi=W.linewidth;Fi===void 0&&(Fi=1),S.setLineWidth(Fi*gt()),V.isLineSegments?ni.setMode(L.LINES):V.isLineLoop?ni.setMode(L.LINE_LOOP):ni.setMode(L.LINE_STRIP)}else V.isPoints?ni.setMode(L.POINTS):V.isSprite&&ni.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))ni.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Fi=V._multiDrawStarts,Ye=V._multiDrawCounts,Yi=V._multiDrawCount,Gt=Xe?Ce.get(Xe).bytesPerElement:1,mn=Y.get(W).currentProgram.getUniforms();for(let Zn=0;Zn<Yi;Zn++)mn.setValue(L,"_gl_DrawID",Zn),ni.render(Fi[Zn]/Gt,Ye[Zn])}else if(V.isInstancedMesh)ni.renderInstances(Je,_i,V.count);else if(Z.isInstancedBufferGeometry){let Fi=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ye=Math.min(Z.instanceCount,Fi);ni.renderInstances(Je,_i,Ye)}else ni.render(Je,_i)};function Me(A,U,Z,W){O!==null&&A.isNodeMaterial&&O.setObject(W,A),me===!0&&et.setState(A,Z,!1),A.transparent===!0&&A.side===Jt&&A.forceSinglePass===!1?(A.side=ui,A.needsUpdate=!0,rt(A,U,W),A.side=hn,A.needsUpdate=!0,rt(A,U,W),A.side=Jt):rt(A,U,W)}this.compile=function(A,U,Z=null){Z===null&&(Z=A),O!==null&&O.renderStart(A,U,Z),E=Be.get(Z),E.init(U),_.push(E),Z.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),A!==Z&&A.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),Ae=this.localClippingEnabled,me=et.init(this.clippingPlanes,Ae),me===!0&&et.setGlobalState(this.clippingPlanes,U),O!==null&&ot.render(E.state.shadowsArray,Z,U);let W=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Re=V.material;if(Re)if(Array.isArray(Re))for(let Ve=0;Ve<Re.length;Ve++){let Ue=Re[Ve];Me(Ue,Z,U,V),W.add(Ue)}else Me(Re,Z,U,V),W.add(Re)}),E=_.pop(),O!==null&&O.renderEnd(),W},this.compileAsync=function(A,U,Z=null){let W=this.compile(A,U,Z);return new Promise(V=>{function Re(){if(W.forEach(function(Ve){let Xe=Y.get(Ve).currentProgram;(Xe===void 0||Xe.isReady())&&W.delete(Ve)}),W.size===0){V(A);return}setTimeout(Re,10)}_t.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Te=null;function se(A){Te&&Te(A)}function qe(){be.stop()}function we(){be.start()}let be=new S0;be.setAnimationLoop(se),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(A){Te=A,Ke.setAnimationLoop(A),A===null?be.stop():be.start()},Ke.addEventListener("sessionstart",qe),Ke.addEventListener("sessionend",we),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(A,U);let Z=Ke.enabled===!0&&Ke.isPresenting===!0,W=b!==null&&(fe===null||Z)&&b.begin(D,fe);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(U),U=Ke.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,U,fe),E=Be.get(A,_.length),E.init(U),E.state.textureUnits=K.getTextureUnits(),_.push(E),Ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ce.setFromProjectionMatrix(Ee,en,U.reversedDepth),Ae=this.localClippingEnabled,me=et.init(this.clippingPlanes,Ae),T=Oe.get(A,C.length),T.init(),C.push(T),Ke.enabled===!0&&Ke.isPresenting===!0){let Ve=D.xr.getDepthSensingMesh();Ve!==null&&ge(Ve,U,-1/0,D.sortObjects)}ge(A,U,0,D.sortObjects),T.finish(),O!==null&&O.updateLights(E.state.lightsArray),D.sortObjects===!0&&T.sort(ze,ct),ut=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,ut&&yt.addToRenderList(T,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),me===!0&&et.beginShadows();let V=E.state.shadowsArray;if(ot.render(V,A,U),me===!0&&et.endShadows(),(W&&b.hasRenderPass())===!1){let Ve=T.opaque,Ue=T.transmissive;if(E.setupLights(),U.isArrayCamera){let Xe=U.cameras;if(Ue.length>0)for(let Ze=0,St=Xe.length;Ze<St;Ze++){let bt=Xe[Ze];_e(Ve,Ue,A,bt)}ut&&yt.render(A);for(let Ze=0,St=Xe.length;Ze<St;Ze++){let bt=Xe[Ze];ve(T,A,bt,bt.viewport)}}else Ue.length>0&&_e(Ve,Ue,A,U),ut&&yt.render(A),ve(T,A,U)}fe!==null&&z===0&&(K.updateMultisampleRenderTarget(fe),K.updateRenderTargetMipmap(fe)),W&&b.end(D),A.isScene===!0&&A.onAfterRender(D,A,U),Ge.resetDefaultState(),j=-1,te=null,_.pop(),_.length>0?(E=_[_.length-1],K.setTextureUnits(E.state.textureUnits),me===!0&&et.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,O!==null&&O.renderEnd()};function ge(A,U,Z,W){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLightProbeGrid)E.pushLightProbeGrid(A);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ce)){W&&lt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ee);let Ve=ae.update(A),Ue=A.material;Ue.visible&&T.push(A,Ve,Ue,Z,lt.z,null,U)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ce))){let Ve=ae.update(A),Ue=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),lt.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),lt.copy(Ve.boundingSphere.center)),lt.applyMatrix4(A.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ue)){let Xe=Ve.groups;for(let Ze=0,St=Xe.length;Ze<St;Ze++){let bt=Xe[Ze],Je=Ue[bt.materialIndex];Je&&Je.visible&&T.push(A,Ve,Je,Z,lt.z,bt,U)}}else Ue.visible&&T.push(A,Ve,Ue,Z,lt.z,null,U)}}let Re=A.children;for(let Ve=0,Ue=Re.length;Ve<Ue;Ve++)ge(Re[Ve],U,Z,W)}function ve(A,U,Z,W){let{opaque:V,transmissive:Re,transparent:Ve}=A;E.setupLightsView(Z),me===!0&&et.setGlobalState(D.clippingPlanes,Z),W&&S.viewport(ue.copy(W)),V.length>0&&xe(V,U,Z),Re.length>0&&xe(Re,U,Z),Ve.length>0&&xe(Ve,U,Z),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function _e(A,U,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let Je=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new It(1,1,{generateMipmaps:!0,type:Je?Ji:jt,minFilter:fn,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let Re=E.state.transmissionRenderTarget[W.id],Ve=W.viewport||ue;Re.setSize(Ve.z*D.transmissionResolutionScale,Ve.w*D.transmissionResolutionScale);let Ue=D.getRenderTarget(),Xe=D.getActiveCubeFace(),Ze=D.getActiveMipmapLevel();D.setRenderTarget(Re),D.getClearColor(At),Dt=D.getClearAlpha(),Dt<1&&D.setClearColor(16777215,.5),D.clear(),ut&&yt.render(Z);let St=D.toneMapping;D.toneMapping=Tn;let bt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),me===!0&&et.setGlobalState(D.clippingPlanes,W),xe(A,Z,W),K.updateMultisampleRenderTarget(Re),K.updateRenderTargetMipmap(Re),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Zt=0,_i=U.length;Zt<_i;Zt++){let oi=U[Zt],{object:ni,geometry:Fi,material:Ye,group:Yi}=oi;if(Ye.side===Jt&&ni.layers.test(W.layers)){let Gt=Ye.side;Ye.side=ui,Ye.needsUpdate=!0,Se(ni,Z,W,Fi,Ye,Yi),Ye.side=Gt,Ye.needsUpdate=!0,Je=!0}}Je===!0&&(K.updateMultisampleRenderTarget(Re),K.updateRenderTargetMipmap(Re))}D.setRenderTarget(Ue,Xe,Ze),D.setClearColor(At,Dt),bt!==void 0&&(W.viewport=bt),D.toneMapping=St}function xe(A,U,Z){let W=U.isScene===!0?U.overrideMaterial:null;for(let V=0,Re=A.length;V<Re;V++){let Ve=A[V],{object:Ue,geometry:Xe,group:Ze}=Ve,St=Ve.material;St.allowOverride===!0&&W!==null&&(St=W),Ue.layers.test(Z.layers)&&Se(Ue,U,Z,Xe,St,Ze)}}function Se(A,U,Z,W,V,Re){O!==null&&V.isNodeMaterial&&O.setObject(A,V),A.onBeforeRender(D,U,Z,W,V,Re),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(D,U,Z,W,A,Re),V.transparent===!0&&V.side===Jt&&V.forceSinglePass===!1?(V.side=ui,V.needsUpdate=!0,D.renderBufferDirect(Z,U,W,V,A,Re),V.side=hn,V.needsUpdate=!0,D.renderBufferDirect(Z,U,W,V,A,Re),V.side=Jt):D.renderBufferDirect(Z,U,W,V,A,Re),A.onAfterRender(D,U,Z,W,V,Re)}function rt(A,U,Z){U.isScene!==!0&&(U=it);let W=Y.get(A),V=E.state.lights,Re=E.state.shadowsArray,Ve=V.state.version,Ue=Pe.getParameters(A,V.state,Re,U,Z,E.state.lightProbeGridArray),Xe=Pe.getProgramCacheKey(Ue),Ze=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;let St=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=ye.get(A.envMap||W.environment,St),W.envMapRotation=W.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",q),Ze=new Map,W.programs=Ze);let bt=Ze.get(Xe);if(bt!==void 0){if(W.currentProgram===bt&&W.lightsStateVersion===Ve)return vt(A,Ue),bt}else Ue.uniforms=Pe.getUniforms(A),O!==null&&A.isNodeMaterial&&O.build(A,Z,Ue),A.onBeforeCompile(Ue,D),bt=Pe.acquireProgram(Ue,Xe),Ze.set(Xe,bt),W.uniforms=Ue.uniforms;let Je=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=et.uniform),vt(A,Ue),W.needsLights=Et(A),W.lightsStateVersion=Ve,W.needsLights&&(Je.ambientLightColor.value=V.state.ambient,Je.lightProbe.value=V.state.probe,Je.sunLights.value=V.state.sun,Je.sunLightShadows.value=V.state.sunShadow,Je.directionalLights.value=V.state.directional,Je.directionalLightShadows.value=V.state.directionalShadow,Je.spotLights.value=V.state.spot,Je.spotLightShadows.value=V.state.spotShadow,Je.rectAreaLights.value=V.state.rectArea,Je.ltc_1.value=V.state.rectAreaLTC1,Je.ltc_2.value=V.state.rectAreaLTC2,Je.pointLights.value=V.state.point,Je.pointLightShadows.value=V.state.pointShadow,Je.hemisphereLights.value=V.state.hemi,Je.sunShadowMatrix.value=V.state.sunShadowMatrix,Je.sunShadowCascade.value=V.state.sunShadowCascade,Je.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Je.spotLightMatrix.value=V.state.spotLightMatrix,Je.spotLightMap.value=V.state.spotLightMap,Je.pointShadowMatrix.value=V.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=bt,W.uniformsList=null,bt}function je(A){if(A.uniformsList===null){let U=A.currentProgram.getUniforms();A.uniformsList=so.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function vt(A,U){let Z=Y.get(A);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function ti(A,U){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let Z=0,W=A.length;Z<W;Z++){let V=A[Z];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function at(A,U,Z,W,V){U.isScene!==!0&&(U=it),K.resetTextureUnits();let Re=U.fog,Ve=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,Ue=fe===null?D.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Bt.workingColorSpace,Xe=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ze=ye.get(W.envMap||Ve,Xe),St=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,bt=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Je=!!Z.morphAttributes.position,Zt=!!Z.morphAttributes.normal,_i=!!Z.morphAttributes.color,oi=Tn;W.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(oi=D.toneMapping);let ni=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Fi=ni!==void 0?ni.length:0,Ye=Y.get(W),Yi=E.state.lights;if(me===!0&&(Ae===!0||A!==te)){let si=A===te&&W.id===j;et.setState(W,A,si)}let Gt=!1;W.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Yi.state.version||Ye.outputColorSpace!==Ue||V.isBatchedMesh&&Ye.batching===!1||!V.isBatchedMesh&&Ye.batching===!0||V.isBatchedMesh&&Ye.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ye.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ye.instancing===!1||!V.isInstancedMesh&&Ye.instancing===!0||V.isSkinnedMesh&&Ye.skinning===!1||!V.isSkinnedMesh&&Ye.skinning===!0||V.isInstancedMesh&&Ye.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ye.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ye.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ye.instancingMorph===!1&&V.morphTexture!==null||Ye.envMap!==Ze||W.fog===!0&&Ye.fog!==Re||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==et.numPlanes||Ye.numIntersection!==et.numIntersection)||Ye.vertexAlphas!==St||Ye.vertexTangents!==bt||Ye.morphTargets!==Je||Ye.morphNormals!==Zt||Ye.morphColors!==_i||Ye.toneMapping!==oi||Ye.morphTargetsCount!==Fi||!!Ye.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Gt=!0):(Gt=!0,Ye.__version=W.version);let mn=Ye.currentProgram;Gt===!0&&(mn=rt(W,U,V),O&&W.isNodeMaterial&&O.onUpdateProgram(W,mn,Ye));let Zn=!1,Ss=!1,Gr=!1,ii=mn.getUniforms(),gi=Ye.uniforms;if(S.useProgram(mn.program)&&(Zn=!0,Ss=!0,Gr=!0),W.id!==j&&(j=W.id,Ss=!0),Ye.needsLights){let si=ti(E.state.lightProbeGridArray,V);Ye.lightProbeGrid!==si&&(Ye.lightProbeGrid=si,Ss=!0)}if(Zn||te!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ii.setValue(L,"projectionMatrix",A.projectionMatrix),ii.setValue(L,"viewMatrix",A.matrixWorldInverse);let As=ii.map.cameraPosition;As!==void 0&&As.setValue(L,De.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&ii.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ii.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),te!==A&&(te=A,Ss=!0,Gr=!0)}if(Ye.needsLights&&(Yi.state.sunShadowMap.length>0&&ii.setValue(L,"sunShadowMap",Yi.state.sunShadowMap,K),Yi.state.directionalShadowMap.length>0&&ii.setValue(L,"directionalShadowMap",Yi.state.directionalShadowMap,K),Yi.state.spotShadowMap.length>0&&ii.setValue(L,"spotShadowMap",Yi.state.spotShadowMap,K),Yi.state.pointShadowMap.length>0&&ii.setValue(L,"pointShadowMap",Yi.state.pointShadowMap,K)),V.isSkinnedMesh){ii.setOptional(L,V,"bindMatrix"),ii.setOptional(L,V,"bindMatrixInverse");let si=V.skeleton;si&&(si.boneTexture===null&&si.computeBoneTexture(),ii.setValue(L,"boneTexture",si.boneTexture,K))}V.isBatchedMesh&&(ii.setOptional(L,V,"batchingTexture"),ii.setValue(L,"batchingTexture",V._matricesTexture,K),ii.setOptional(L,V,"batchingIdTexture"),ii.setValue(L,"batchingIdTexture",V._indirectTexture,K),ii.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&ii.setValue(L,"batchingColorTexture",V._colorsTexture,K));let Ms=Z.morphAttributes;if((Ms.position!==void 0||Ms.normal!==void 0||Ms.color!==void 0)&&H.update(V,Z,mn),(Ss||Ye.receiveShadow!==V.receiveShadow)&&(Ye.receiveShadow=V.receiveShadow,ii.setValue(L,"receiveShadow",V.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(gi.envMapIntensity.value=U.environmentIntensity),gi.dfgLUT!==void 0&&(gi.dfgLUT.value=YA()),Ss){if(ii.setValue(L,"toneMappingExposure",D.toneMappingExposure),Ye.needsLights&&mt(gi,Gr),Re&&W.fog===!0&&Qe.refreshFogUniforms(gi,Re),Qe.refreshMaterialUniforms(gi,W,le,ne,E.state.transmissionRenderTarget[A.id]),Ye.needsLights&&Ye.lightProbeGrid){let si=Ye.lightProbeGrid;gi.probesSH.value=si.texture,gi.probesMin.value.copy(si.boundingBox.min),gi.probesMax.value.copy(si.boundingBox.max),gi.probesResolution.value.copy(si.resolution)}so.upload(L,je(Ye),gi,K)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(so.upload(L,je(Ye),gi,K),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ii.setValue(L,"center",V.center),ii.setValue(L,"modelViewMatrix",V.modelViewMatrix),ii.setValue(L,"normalMatrix",V.normalMatrix),ii.setValue(L,"modelMatrix",V.matrixWorld),W.uniformsGroups!==void 0){let si=W.uniformsGroups;for(let As=0,Vr=si.length;As<Vr;As++){let Bp=si[As];de.update(Bp,mn),de.bind(Bp,mn)}}return mn}function mt(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.sunLights.needsUpdate=U,A.sunLightShadows.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Et(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return fe},this.setRenderTargetTextures=function(A,U,Z){let W=Y.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Y.get(A.texture).__webglTexture=U,Y.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){let Z=Y.get(A);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,Z=0){fe=A,ee=U,z=Z;let W=null,V=!1,Re=!1;if(A){let Ue=Y.get(A);if(Ue.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(L.FRAMEBUFFER,Ue.__webglFramebuffer),ue.copy(A.viewport),oe.copy(A.scissor),He=A.scissorTest,S.viewport(ue),S.scissor(oe),S.setScissorTest(He),j=-1;return}else if(Ue.__webglFramebuffer===void 0)K.setupRenderTarget(A);else if(Ue.__hasExternalTextures)K.rebindTextures(A,Y.get(A.texture).__webglTexture,Y.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let St=A.depthTexture;if(Ue.__boundDepthTexture!==St){if(St!==null&&Y.has(St)&&(A.width!==St.image.width||A.height!==St.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(A)}}let Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Re=!0);let Ze=Y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[U])?W=Ze[U][Z]:W=Ze[U],V=!0):A.samples>0&&K.useMultisampledRTT(A)===!1?W=Y.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?W=Ze[Z]:W=Ze,ue.copy(A.viewport),oe.copy(A.scissor),He=A.scissorTest}else ue.copy(We).multiplyScalar(le).floor(),oe.copy(ft).multiplyScalar(le).floor(),He=Xt;if(Z!==0&&(W=X),S.bindFramebuffer(L.FRAMEBUFFER,W)&&S.drawBuffers(A,W),S.viewport(ue),S.scissor(oe),S.setScissorTest(He),V){let Ue=Y.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ue.__webglTexture,Z)}else if(Re){let Ue=U;for(let Xe=0;Xe<A.textures.length;Xe++){let Ze=Y.get(A.textures[Xe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Xe,Ze.__webglTexture,Z,Ue)}}else if(A!==null&&Z!==0){let Ue=Y.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ue.__webglTexture,Z)}j=-1};function kt(A){let U=Y.get(A);return(U.__readFormat!==A.format||U.__readType!==A.type)&&(U.__readFormat=A.format,U.__readType=A.type,U.__formatReadable=R.textureFormatReadable(A.format),U.__typeReadable=R.textureTypeReadable(A.type)),U}this.readRenderTargetPixels=function(A,U,Z,W,V,Re,Ve,Ue=0){if(!(A&&A.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe){S.bindFramebuffer(L.FRAMEBUFFER,Xe);try{let Ze=A.textures[Ue],St=Ze.format,bt=Ze.type;A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ue);let Je=kt(Ze);if(Je.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-W&&Z>=0&&Z<=A.height-V&&L.readPixels(U,Z,W,V,Ne.convert(St),Ne.convert(bt),Re)}finally{let Ze=fe!==null?Y.get(fe).__webglFramebuffer:null;S.bindFramebuffer(L.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,U,Z,W,V,Re,Ve,Ue=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe)if(U>=0&&U<=A.width-W&&Z>=0&&Z<=A.height-V){S.bindFramebuffer(L.FRAMEBUFFER,Xe);let Ze=A.textures[Ue],St=Ze.format,bt=Ze.type;A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ue);let Je=kt(Ze);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Zt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Zt),L.bufferData(L.PIXEL_PACK_BUFFER,Re.byteLength,L.STREAM_READ),L.readPixels(U,Z,W,V,Ne.convert(St),Ne.convert(bt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let _i=fe!==null?Y.get(fe).__webglFramebuffer:null;S.bindFramebuffer(L.FRAMEBUFFER,_i);let oi=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Gg(L,oi,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Zt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Re),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Zt),L.deleteSync(oi),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,U=null,Z=0){let W=Math.pow(2,-Z),V=Math.floor(A.image.width*W),Re=Math.floor(A.image.height*W),Ve=U!==null?U.x:0,Ue=U!==null?U.y:0;K.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Ve,Ue,V,Re),S.unbindTexture()},this.copyTextureToTexture=function(A,U,Z=null,W=null,V=0,Re=0){let Ve,Ue,Xe,Ze,St,bt,Je,Zt,_i,oi=A.isCompressedTexture?A.mipmaps[Re]:A.image;if(Z!==null)Ve=Z.max.x-Z.min.x,Ue=Z.max.y-Z.min.y,Xe=Z.isBox3?Z.max.z-Z.min.z:1,Ze=Z.min.x,St=Z.min.y,bt=Z.isBox3?Z.min.z:0;else{let gi=Math.pow(2,-V);Ve=Math.floor(oi.width*gi),Ue=Math.floor(oi.height*gi),A.isDataArrayTexture?Xe=oi.depth:A.isData3DTexture?Xe=Math.floor(oi.depth*gi):Xe=1,Ze=0,St=0,bt=0}W!==null?(Je=W.x,Zt=W.y,_i=W.z):(Je=0,Zt=0,_i=0);let ni=Ne.convert(U.format),Fi=Ne.convert(U.type),Ye;U.isData3DTexture?(K.setTexture3D(U,0),Ye=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(K.setTexture2DArray(U,0),Ye=L.TEXTURE_2D_ARRAY):(K.setTexture2D(U,0),Ye=L.TEXTURE_2D),S.activeTexture(L.TEXTURE0),S.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),S.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),S.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let Yi=S.getParameter(L.UNPACK_ROW_LENGTH),Gt=S.getParameter(L.UNPACK_IMAGE_HEIGHT),mn=S.getParameter(L.UNPACK_SKIP_PIXELS),Zn=S.getParameter(L.UNPACK_SKIP_ROWS),Ss=S.getParameter(L.UNPACK_SKIP_IMAGES);S.pixelStorei(L.UNPACK_ROW_LENGTH,oi.width),S.pixelStorei(L.UNPACK_IMAGE_HEIGHT,oi.height),S.pixelStorei(L.UNPACK_SKIP_PIXELS,Ze),S.pixelStorei(L.UNPACK_SKIP_ROWS,St),S.pixelStorei(L.UNPACK_SKIP_IMAGES,bt);let Gr=A.isDataArrayTexture||A.isData3DTexture,ii=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){let gi=Y.get(A),Ms=Y.get(U),si=Y.get(gi.__renderTarget),As=Y.get(Ms.__renderTarget);S.bindFramebuffer(L.READ_FRAMEBUFFER,si.__webglFramebuffer),S.bindFramebuffer(L.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let Vr=0;Vr<Xe;Vr++)Gr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Y.get(A).__webglTexture,V,bt+Vr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Y.get(U).__webglTexture,Re,_i+Vr)),L.blitFramebuffer(Ze,St,Ve,Ue,Je,Zt,Ve,Ue,L.DEPTH_BUFFER_BIT,L.NEAREST);S.bindFramebuffer(L.READ_FRAMEBUFFER,null),S.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||Y.has(A)){let gi=Y.get(A),Ms=Y.get(U);S.bindFramebuffer(L.READ_FRAMEBUFFER,F),S.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let si=0;si<Xe;si++)Gr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gi.__webglTexture,V,bt+si):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gi.__webglTexture,V),ii?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ms.__webglTexture,Re,_i+si):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ms.__webglTexture,Re),V!==0?L.blitFramebuffer(Ze,St,Ve,Ue,Je,Zt,Ve,Ue,L.COLOR_BUFFER_BIT,L.NEAREST):ii?L.copyTexSubImage3D(Ye,Re,Je,Zt,_i+si,Ze,St,Ve,Ue):L.copyTexSubImage2D(Ye,Re,Je,Zt,Ze,St,Ve,Ue);S.bindFramebuffer(L.READ_FRAMEBUFFER,null),S.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ii?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Ye,Re,Je,Zt,_i,Ve,Ue,Xe,ni,Fi,oi.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Ye,Re,Je,Zt,_i,Ve,Ue,Xe,ni,oi.data):L.texSubImage3D(Ye,Re,Je,Zt,_i,Ve,Ue,Xe,ni,Fi,oi):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Re,Je,Zt,Ve,Ue,ni,Fi,oi.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Re,Je,Zt,oi.width,oi.height,ni,oi.data):L.texSubImage2D(L.TEXTURE_2D,Re,Je,Zt,Ve,Ue,ni,Fi,oi);S.pixelStorei(L.UNPACK_ROW_LENGTH,Yi),S.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Gt),S.pixelStorei(L.UNPACK_SKIP_PIXELS,mn),S.pixelStorei(L.UNPACK_SKIP_ROWS,Zn),S.pixelStorei(L.UNPACK_SKIP_IMAGES,Ss),Re===0&&U.generateMipmaps&&L.generateMipmap(Ye),S.unbindTexture()},this.initRenderTarget=function(A){Y.get(A).__webglFramebuffer===void 0&&K.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?K.setTextureCube(A,0):A.isData3DTexture?K.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?K.setTexture2DArray(A,0):K.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){ee=0,z=0,fe=null,S.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}};var ns=(n,e,t)=>Math.min(t,Math.max(e,n)),Kt=(n,e,t)=>n+(e-n)*t,Qt=(n,e,t)=>{let i=ns((t-n)/(e-n),0,1);return i*i*(3-2*i)},R0=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,D0=n=>1-Math.pow(1-n,3),_p=20261004,he=()=>(_p=_p*16807%2147483647)/2147483647,Or=new Uint8Array(512);{let n=Array.from({length:256},(i,s)=>s),e=1337,t=()=>(e=e*16807%2147483647)/2147483647;for(let i=255;i>0;i--){let s=Math.floor(t()*(i+1));[n[i],n[s]]=[n[s],n[i]]}for(let i=0;i<512;i++)Or[i]=n[i&255]}var gp=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];function Hr(n,e){let t=.3660254,i=.2113249,s=(n+e)*t,r=Math.floor(n+s),a=Math.floor(e+s),o=(r+a)*i,l=n-(r-o),c=e-(a-o),u=l>c?1:0,f=1-u,h=l-u+i,d=c-f+i,p=l-1+2*i,v=c-1+2*i,g=r&255,m=a&255,x=0,M=.5-l*l-c*c,y=.5-h*h-d*d,T=.5-p*p-v*v;if(M>0){let E=gp[Or[g+Or[m]]&7];M*=M,x+=M*M*(E[0]*l+E[1]*c)}if(y>0){let E=gp[Or[g+u+Or[m+f]]&7];y*=y,x+=y*y*(E[0]*h+E[1]*d)}if(T>0){let E=gp[Or[g+1+Or[m+1]]&7];T*=T,x+=T*T*(E[0]*p+E[1]*v)}return 70*x}function Ic(n,e,t=5){let i=0,s=1,r=.5,a=0;for(let o=0;o<t;o++)i+=r*Hr(n*s,e*s),a+=r,s*=2.03,r*=.5;return i/a}function P0(n,e,t=4){let i=0,s=1,r=.5,a=0;for(let o=0;o<t;o++)i+=r*(1-Math.abs(Hr(n*s+11.3,e*s-7.1))),a+=r,s*=2.1,r*=.5;return i/a}var ZA=(n,e,t)=>{let i=n-e;return .5*(n+e+Math.sqrt(i*i+t*t))},Ni={x:424,z:0,h:140,r:30},F0=446,bi={x:-230,z:-50,r:90,level:2.5},I0={x:-200,z:-470},$t=[{x:90,z:140,r:66},{x:-70,z:300,r:30},{x:-320,z:-115,r:32},{x:215,z:-55,r:14},{x:-100,z:-252,r:10}],ys=[[-108,-350,96,3,8],[-114,-326,44,4,10],[-126,-290,36,5,14],[-140,-250,28,6,18],[-162,-200,18,7,22],[-186,-158,9,8,24],[-208,-122,3.2,9,24],[-222,-96,2.5,10,24]],qA=new w(-400,236,262);function QA(n,e){let t=72+68*Math.exp(-((e/150)**2)),i=n-430,s=i<0?Math.exp(-Math.pow(-i/150,1.6)):Math.exp(-Math.pow(i/150,1.8));return t*s}function O0(n,e){let t=9+13*Ic(n/430+3.1,e/430-1.7,4)+4*Ic(n/110,e/110,3),i=Math.hypot(n,e*1.05);i>470&&n<420&&(t+=Qt(470,900,i)*170*(.65+.35*Ic(n/240,e/240,3))*(1-Qt(250,420,n)));let s=Math.hypot(n-I0.x,e-I0.z);s<900&&(t+=272*Math.exp(-Math.pow(s/175,1.7))*(.8+.32*P0(n/90,e/90,4)));let r=QA(n,e);r>4&&(r+=(n>380?8:4)*(P0(n/38,e/38,3)-.5)*Qt(4,40,r)),t=ZA(t,r,18);let a=Math.hypot(n-Ni.x,e-Ni.z);a<64&&(t=Kt(Ni.h,t,Qt(Ni.r,Ni.r+16,a)));let o=Math.hypot(n-bi.x,e-bi.z);if(o<bi.r+80){let l=o+18*Ic(n/80,e/80,2);t=Kt(-5,t,Qt(bi.r-15,bi.r+35,l))}return t}for(let n of $t)n.h=O0(n.x,n.z);var KA=new jn(ys.map(n=>new w(n[0],0,n[1])),!1,"centripetal"),Xn=[];for(let e=0;e<=160;e++){let t=e/160,i=KA.getPointAt(t),s=t*(ys.length-1),r=Math.min(ys.length-2,Math.floor(s)),a=s-r;Xn.push({x:i.x,z:i.z,y:Kt(ys[r][2],ys[r+1][2],a),hw:Kt(ys[r][3],ys[r+1][3],a),ww:Kt(ys[r][4],ys[r+1][4],a)})}function of(n,e,t){let i=1e9,s=0;for(let r=0;r<n.length;r++){let a=n[r].x-e,o=n[r].z-t,l=a*a+o*o;l<i&&(i=l,s=r)}return[Math.sqrt(i),s]}var yp=(n,e)=>n>-270&&n<-50&&e>-390&&e<-60;function H0(n,e){let t=O0(n,e);for(let i of $t){let s=Math.hypot(n-i.x,e-i.z);s<i.r+30&&(t=Kt(i.h,t,Qt(i.r,i.r+28,s)))}if(yp(n,e)){let[i,s]=of(Xn,n,e),r=Xn[s];i<r.hw+r.ww&&(t=Kt(r.y-2.2,t,Qt(r.hw,r.hw+r.ww,i)))}return t}var JA=[[672,48],[640,28],[610,-6],[588,-46],[566,-70],[546,-60],[538,-26],[533,16],[524,50],[508,62],[496,44],[493,18],[488,2],[470,0],[444,0],[424,0]],jA=new jn(JA.map(n=>new w(n[0],0,n[1])),!1,"centripetal",.5),zt=[];{let e=jA.getSpacedPoints(700);for(let r of e)zt.push({x:r.x,z:r.z,y:H0(r.x,r.z)});for(let r=0;r<4;r++){let a=zt.map(o=>o.y);for(let o=0;o<zt.length;o++){let l=0,c=0;for(let u=-8;u<=8;u++)l+=a[ns(o+u,0,zt.length-1)],c++;zt[o].y=l/c}}let t=zt.findIndex(r=>r.x<=490),i=zt[t].y;for(let r=t;r<zt.length;r++){let a=zt[r];a.y=a.x>450?Kt(i,Ni.h,(490-a.x)/40):Ni.h}for(let r=1;r<zt.length;r++)zt[r].y=Math.max(zt[r].y,zt[r-1].y);let s=0;zt[0].s=0;for(let r=1;r<zt.length;r++)s+=Math.hypot(zt[r].x-zt[r-1].x,zt[r].z-zt[r-1].z),zt[r].s=s}var Uc=zt[zt.length-1].s,vp=zt[zt.findIndex(n=>n.x<=F0)].s;function Wi(n,e=new w){n=ns(n,0,Uc);let t=0,i=zt.length-1;for(;i-t>1;){let o=t+i>>1;zt[o].s<n?t=o:i=o}let s=zt[t],r=zt[i],a=(n-s.s)/Math.max(1e-6,r.s-s.s);return e.set(Kt(s.x,r.x,a),Kt(s.y,r.y,a),Kt(s.z,r.z,a))}function af(n,e){if(n<400||n>700||e<-110||e>100)return[1e9,0];let[t,i]=of(zt,n,e);return[t,zt[i].y]}var z0=1e9;function $A(n,e){let t=H0(n,e),[i,s]=af(n,e);return z0=i,i<12&&(t=Kt(s-.35,t,Qt(3.6,11,i))),t}var Lc=`
float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1,0)), f.x), mix(h21(i + vec2(0,1)), h21(i + vec2(1,1)), f.x), f.y); }
float fbm2(vec2 p){ return vn(p) * .5 + vn(p * 2.07 + 1.3) * .28 + vn(p * 4.13 - 2.1) * .14 + vn(p * 8.3 + .7) * .08; }
`,ai={uSunDir:{value:new w(0,1,0)},uSunCol:{value:new pe("#fff4e2")},uShadeCol:{value:new pe("#7f8fc4")},uSkyCol:{value:new pe("#bfe0ff")},uGroundCol:{value:new pe("#c9b48a")},uFogCol:{value:new pe("#cfe4f4")},uFogSun:{value:new pe("#ffe9cc")},uFogDen:{value:.0011},uTime:{value:0},uDetail:{value:1},uLod:{value:new J(1e6,2e6)},uFrame:{value:0}},eE=`
varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vAw;
attribute float aw;
uniform float uTime; uniform vec2 uLod;
#include <common>
#include <color_pars_vertex>
#include <shadowmap_pars_vertex>
void main(){
  vUv = uv; vAw = aw;
  #include <color_vertex>
  #include <beginnormal_vertex>
  #include <defaultnormal_vertex>
  #include <begin_vertex>
  #ifdef SWAY
    { vec4 ip = vec4(0.0, 0.0, 0.0, 1.0);
      #ifdef USE_INSTANCING
        ip = instanceMatrix * ip;
      #endif
      float k = max(transformed.y - 2.0, 0.0) * 0.012;
      transformed.x += sin(uTime * 1.3 + ip.x * 0.05 + ip.z * 0.03) * k;
      transformed.z += cos(uTime * 1.1 + ip.z * 0.05) * k * 0.7; }
  #endif
  #include <project_vertex>
  #include <worldpos_vertex>
  #include <shadowmap_vertex>
  vec4 wp = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    wp = instanceMatrix * wp;
  #endif
  wp = modelMatrix * wp; vW = wp.xyz;
  vN = normalize(inverseTransformDirection(transformedNormal, viewMatrix));
  #if defined(LODFADE) && defined(USE_INSTANCING)
    /* cards of trees beyond the fade band are drawn as impostors: move them outside the clip volume */
    if (length((modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz - cameraPosition) > uLod.y + 14.0) gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
  #endif
}`;function tE(n="",e={}){return`
uniform vec3 uColor; uniform float uOpacity; uniform sampler2D uMap; uniform float uAlphaTest; uniform float uRim; uniform float uSelfLit; uniform float uWrap;
uniform vec3 uSunDir, uSunCol, uShadeCol, uSkyCol, uGroundCol, uFogCol, uFogSun; uniform float uFogDen, uTime, uDetail, uFrame; uniform vec2 uLod;
varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vAw;
#ifdef IMPOSTOR
  uniform vec3 uTint;
#endif
#include <common>
#include <packing>
#include <color_pars_fragment>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
${Lc}
void main(){
  vec4 base = vec4(uColor, uOpacity);
  vec3 nImp = vec3(0.0, 0.0, 1.0);
  #ifdef USE_MAPTEX
    vec4 tx = texture2D(uMap, vUv);
    #ifdef IMPOSTOR
      nImp = normalize(tx.rgb * 2.0 - 1.0); base.a *= tx.a;
    #else
      base *= tx;
    #endif
    #ifdef A2C
      float aw = max(fwidth(base.a), 1e-4);
      base.a = smoothstep(uAlphaTest - aw, uAlphaTest + aw, base.a);
      if (base.a < 0.02) discard;
    #else
      if (base.a < uAlphaTest) discard;
    #endif
  #endif
  #ifdef LODFADE
    { float fd = smoothstep(uLod.x, uLod.y, length(vW - cameraPosition));
      float dth = fract(sin(dot(gl_FragCoord.xy + uFrame * vec2(17.0, 31.0), vec2(12.9898, 78.233))) * 43758.5453);
      #ifdef IMPOSTOR
        if (dth >= fd) discard;
      #else
        if (dth < fd) discard;
      #endif
    }
  #endif
  #ifdef USE_COLOR
    base.rgb *= vColor.rgb;
  #endif
  vec3 N = normalize(vN);
  #ifdef IMPOSTOR
    N = normalize(inverseTransformDirection(nImp, viewMatrix));
    base.rgb *= uTint * mix(0.7, 1.0, smoothstep(-0.5, 0.6, nImp.y));   // leaf texture shade and the crown's own occlusion
  #endif
  #ifdef DOUBLE
    if (!gl_FrontFacing) N = -N;
  #endif
  ${n}
  float sh = 1.0;
  #ifdef USE_SHADOWMAP
    sh = getShadowMask();
  #endif
  float ndl = dot(N, uSunDir);
  float wrapNdl = (ndl + uWrap) / (1.0 + uWrap);
  float lit = smoothstep(0.0, 0.09, wrapNdl) * sh;
  float hi = smoothstep(0.62, 0.8, ndl) * sh;
  vec3 col = mix(base.rgb * uShadeCol, base.rgb * uSunCol, lit);
  col += base.rgb * uSunCol * hi * 0.10;
  col += base.rgb * mix(uGroundCol, uSkyCol, N.y * 0.5 + 0.5) * 0.16;
  vec3 V = normalize(cameraPosition - vW);
  float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0) * uRim;
  col += rim * mix(uSkyCol, uSunCol, lit) * 0.45;
  col = mix(col, base.rgb, uSelfLit);
  float d = length(vW - cameraPosition);
  float f = (1.0 - exp(-d * uFogDen)) * mix(1.0, 0.55, smoothstep(40.0, 320.0, vW.y));
  vec3 fd = normalize(vW - cameraPosition);
  vec3 fc = mix(uFogCol, uFogSun, pow(max(dot(fd, uSunDir), 0.0), 6.0));
  col = mix(col, fc, clamp(f, 0.0, 1.0));
  gl_FragColor = vec4(col, base.a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`}function Ut(n="#ffffff",e={}){let t=Tc.merge([Fe.lights,{uColor:{value:new pe(n)},uOpacity:{value:e.opacity??1},uMap:{value:e.map||null},uAlphaTest:{value:e.alphaTest??.5},uRim:{value:e.rim??.25},uSelfLit:{value:e.selfLit??0},uWrap:{value:e.wrap??0}}]);Object.assign(t,ai),t.uMap.value=e.map||null;let i={};e.map&&(i.USE_MAPTEX=""),e.side===Jt&&(i.DOUBLE=""),e.sway&&(i.SWAY="");let s=new wt({uniforms:t,defines:i,lights:!0,vertexShader:eE,fragmentShader:tE(e.code||""),vertexColors:!!e.vertexColors,side:e.side??hn,transparent:!!e.transparent,depthWrite:e.depthWrite??!0});return s.isPaint=!0,s}function k0(n){n.traverse(e=>{let t=e.material;t&&t.isPaint&&t.defines&&"USE_MAPTEX"in t.defines&&!t.transparent&&(t.defines.A2C="",t.alphaToCoverage=!0,t.needsUpdate=!0)})}function sf(n){return new Gs({depthPacking:Kh,map:n,alphaTest:.5})}var U0=new wt({side:ui,uniforms:{uW:{value:.06},uInk:{value:new pe("#3a2a2c")},uFogCol:ai.uFogCol,uFogDen:ai.uFogDen},vertexShader:`uniform float uW; varying float vD;
    #include <common>
    void main(){ vec3 p = position + normal * uW; vec4 mv = modelViewMatrix * vec4(p, 1.0);
      #ifdef USE_INSTANCING
        mv = modelViewMatrix * instanceMatrix * vec4(p, 1.0);
      #endif
      vD = -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uInk, uFogCol; uniform float uFogDen; varying float vD;
    void main(){ float f = 1.0 - exp(-vD * uFogDen * 1.6); gl_FragColor = vec4(mix(uInk, uFogCol, clamp(f, 0.0, 1.0)), 1.0);
    #include <colorspace_fragment>
    }`});function L0(n){let e=U0.clone();return e.uniforms.uW={value:n},e.uniforms.uInk=U0.uniforms.uInk,e.uniforms.uFogCol=ai.uFogCol,e.uniforms.uFogDen=ai.uFogDen,e}function zr(n,e,t,i=!0){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new Hs(s);return i&&(r.colorSpace=Ct),r.anisotropy=4,r}function oo(n){return()=>(n=n*16807%2147483647)/2147483647}function Nr(n){return zr(128,128,(e,t,i)=>{let s=oo(n==="cedar"?91:n==="sakura"?57:23),r=n==="cedar"?70:54;for(let a=0;a<r;a++){let o=s()*Math.PI*2,l=Math.pow(s(),.6)*44,c=64+Math.cos(o)*l,u=64+Math.sin(o)*l*(n==="cedar"?.7:1),f=200+Math.round(55*(1-(u-20)/100)*(.6+.4*s()));e.fillStyle=`rgb(${f},${f},${f})`,e.save(),e.translate(c,u),e.rotate(n==="cedar"?(s()-.5)*.6:s()*6.28),e.beginPath(),n==="cedar"?(e.moveTo(-15,0),e.lineTo(0,-5),e.lineTo(15,0),e.lineTo(0,5)):e.ellipse(0,0,9+s()*5,5+s()*3,0,0,Math.PI*2),e.fill(),e.restore()}})}function iE(){return zr(64,64,n=>{let e=oo(5);for(let t=0;t<26;t++){let i=6+e()*52,s=30+e()*30,r=(e()-.5)*18,a=180+Math.round(e()*75);n.fillStyle=`rgb(${a},${a},${a})`,n.beginPath(),n.moveTo(i-2.4,64),n.quadraticCurveTo(i+r*.3,64-s*.5,i+r,64-s),n.quadraticCurveTo(i+r*.3+1.2,64-s*.5,i+2.4,64),n.fill()}})}function nE(){return zr(1024,512,s=>{for(let r=0;r<4;r++){let a=r%2*512,o=Math.floor(r/2)*256,l=oo(101+r*17),c=document.createElement("canvas");c.width=512,c.height=256;let u=c.getContext("2d"),f=[],h=9+Math.floor(l()*5);for(let v=0;v<h;v++){let g=(v+.5)/h,m=70+g*372+(l()-.5)*30,x=(36+l()*46)*(1-Math.abs(g-.5)*.9);f.push([m,196-x*.45-l()*18,x])}for(let v=0;v<7;v++){let g=f[1+Math.floor(l()*(h-2))];f.push([g[0]+(l()-.5)*50,g[1]-g[2]*.7,g[2]*(.6+l()*.3)])}let d=u.createImageData(512,256),p=d.data;for(let v=0;v<256;v++)for(let g=0;g<512;g++){let m=-1,x=0,M=0;for(let[O,X,F]of f){let k=(g-O)/F,ee=(v-X)/(F*.85),z=1-k*k-ee*ee;if(z>0){let fe=Math.sqrt(z);fe>m&&(m=fe,x=k,M=ee)}}let y=198;v>y+4*Math.sin(g*.05)&&(m=-1);let T=(v*512+g)*4;if(m<=0){p[T+3]=0;continue}let E=-M*.75-x*.3+m*.35,C=E>.18?1:E>-.12?.5:0,_=Qt(y-40,y,v),b,D,I;C===1?(b=255,D=255,I=255):C===.5?(b=232,D=238,I=250):(b=196,D=208,I=236),b=Kt(b,178,_*.7),D=Kt(D,190,_*.7),I=Kt(I,226,_*.7),p[T]=b,p[T+1]=D,p[T+2]=I,p[T+3]=255*ns(m*6,0,1)}u.putImageData(d,0,0),s.drawImage(c,a,o)}})}function Pc(n){return zr(256,128,(e,t,i)=>{e.fillStyle=n.base,e.fillRect(0,0,t,i);let s=oo(n.seed||3);for(let o=0;o<60;o++)e.fillStyle=`rgba(${n.dark?"0,0,0":"120,90,60"},${.02+s()*.03})`,e.fillRect(s()*t,s()*i,20+s()*50,2+s()*4);let r=n.cols||4,a=t/r;if(n.shoji)for(let o=0;o<r;o++){let l=o*a+a*.14,c=a*.72;e.fillStyle=n.frame,e.fillRect(l-3,i*.18-3,c+6,i*.64+6),e.fillStyle="#f7f1e3",e.fillRect(l,i*.18,c,i*.64),e.strokeStyle=n.frame,e.lineWidth=2;for(let u=1;u<4;u++)e.beginPath(),e.moveTo(l+c*u/4,i*.18),e.lineTo(l+c*u/4,i*.82),e.stroke();for(let u=1;u<5;u++)e.beginPath(),e.moveTo(l,i*.18+i*.64*u/5),e.lineTo(l+c,i*.18+i*.64*u/5),e.stroke()}if(n.windows)for(let o=0;o<(n.rows||1);o++)for(let l=0;l<r;l++){let c=i/(n.rows||1),u=l*a+a*.3,f=o*c+c*.24,h=a*.4,d=c*.52;e.fillStyle=n.frame,e.fillRect(u-4,f-4,h+8,d+8),e.beginPath(),e.arc(u+h/2,f,h/2+4,Math.PI,0),e.fill(),e.fillStyle=n.glass,e.fillRect(u,f,h,d),e.beginPath(),e.arc(u+h/2,f,h/2,Math.PI,0),e.fill(),e.fillStyle="rgba(255,255,255,.35)",e.fillRect(u+2,f+2,h*.25,d*.7),e.fillStyle=n.frame,e.fillRect(u+h/2-1,f-h/2,2,d+h/2),e.fillRect(u,f+d*.45,h,2)}if(n.posts){e.fillStyle=n.posts;for(let o=0;o<=r;o++)e.fillRect(o*a-4,0,8,i);e.fillRect(0,0,t,9),e.fillRect(0,i-8,t,8)}n.trim&&(e.fillStyle=n.trim,e.fillRect(0,0,t,6),e.fillRect(0,i-10,t,10))})}function xp(n,e,t){return zr(256,72,i=>{i.fillStyle=e,i.fillRect(0,0,256,72),i.strokeStyle=t,i.lineWidth=3,i.strokeRect(6,6,244,60),i.fillStyle=t,i.font='900 44px "Noto Serif SC", "Songti SC", serif',i.textAlign="center",i.textBaseline="middle",i.fillText(n,128,38)})}function B0(n){let e=0,t=0;for(let f of n)e+=f.attributes.position.count,t+=f.index?f.index.count:f.attributes.position.count;let i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),a=new Float32Array(e*3),o=new Uint32Array(t),l=0,c=0;for(let f of n){let h=f.attributes.position.count;if(i.set(f.attributes.position.array,l*3),s.set(f.attributes.normal.array,l*3),f.attributes.uv&&r.set(f.attributes.uv.array,l*2),f.attributes.color?a.set(f.attributes.color.array,l*3):a.fill(1,l*3,(l+h)*3),f.index)for(let d=0;d<f.index.count;d++)o[c++]=f.index.array[d]+l;else for(let d=0;d<h;d++)o[c++]=d+l;l+=h}let u=new nt;return u.setAttribute("position",new ht(i,3)),u.setAttribute("normal",new ht(s,3)),u.setAttribute("uv",new ht(r,2)),u.setAttribute("color",new ht(a,3)),u.setIndex(new ht(o,1)),u}function rf(n,e){let t=new pe(e),i=n.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return n.setAttribute("color",new ht(s,3)),n}var Vt=(n,e,t)=>new Fn(n,e,t);function Fr(n,e,t,i={}){let s=!!i.hip,r=i.sori??1.6,a=i.lift??.5,o=i.thick??.35,l=i.nx??36,c=i.nz??22,u=n/2,f=e/2,h=s?Math.max(0,u-f):u,d=(_,b)=>{let D=1-Math.abs(b)/f,I=D;if(s){let k=1-Math.max(0,Math.abs(_)-h)/f;I=Math.min(D,k)}I=ns(I,0,1);let O=t*(1-Math.pow(1-I,r)),X=Math.abs(_)/u,F=Math.abs(b)/f;return O+=a*Math.pow(Math.max(X,s?X:0),6)*(1-I)*2+a*.35*Math.pow(1-I,3)*Math.pow(X,2),O},p=[],v=[],g=[],m=[];for(let _=0;_<=c;_++)for(let b=0;b<=l;b++){let D=-u+n*b/l,I=-f+e*_/c,O=d(D,I);p.push(D,O,I),v.push(D,O-o,I),g.push(D,Math.abs(I))}let x=l+1,M=p.length/3,y=new Float32Array(M*6);y.set(p,0),y.set(v,M*3);let T=new Float32Array(M*4);T.set(g,0),T.set(g,M*2);for(let _=0;_<c;_++)for(let b=0;b<l;b++){let D=_*x+b,I=D+1,O=D+x,X=O+1;m.push(D,O,I,I,O,X),m.push(M+D,M+I,M+O,M+I,M+X,M+O)}let E=[];for(let _=0;_<l;_++)E.push([_,_+1]);for(let _=0;_<c;_++)E.push([_*x+l,(_+1)*x+l]);for(let _=l;_>0;_--)E.push([c*x+_,c*x+_-1]);for(let _=c;_>0;_--)E.push([_*x,(_-1)*x]);for(let[_,b]of E)m.push(_,M+_,b,b,M+_,M+b);let C=new nt;return C.setAttribute("position",new ht(y,3)),C.setAttribute("uv",new ht(T,2)),C.setIndex(m),C.computeVertexNormals(),C.userData.hAt=d,C}function N0(n,e,t=.3){let i=new Sn;i.moveTo(-n/2,0),i.lineTo(n/2,0),i.lineTo(0,e),i.closePath();let s=new ks(i,{depth:t,bevelEnabled:!1});return s.translate(0,0,-t/2),s.rotateY(Math.PI/2),s}function G0({renderer:n,phone:e=!1,quality:t=1,onStep:i=()=>{}}={}){let s=new Ln,r=new li(60,16/9,.3,16e3),a=e?.55:1,o=[],l=[],c=[];_p=20261004;let u=new br(16777215,1);u.castShadow=!0;let f=e?1024:t>1?4096:2048;u.shadow.mapSize.set(f,f),u.shadow.bias=-5e-4,u.shadow.normalBias=.5,u.shadow.radius=2,s.add(u,u.target);function h(B,N){let P=u.shadow.camera;P.left=-N,P.right=N,P.top=N,P.bottom=-N,P.near=1,P.far=N*8,P.updateProjectionMatrix(),u.target.position.copy(B),u.position.copy(B).addScaledVector(ai.uSunDir.value,N*4)}let d={uSunDir:ai.uSunDir,uZen:{value:new pe("#2f7fd6")},uMid:{value:new pe("#79b8ec")},uHor:{value:new pe("#e6f2fa")},uGlow:{value:new pe("#fff0d6")},uGlowK:{value:1}},p=new Pt(new Hn(12e3,48,24),new wt({side:ui,depthWrite:!1,uniforms:d,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 uSunDir, uZen, uMid, uHor, uGlow; uniform float uGlowK; varying vec3 vD;
      ${Lc}
      void main(){ vec3 d = normalize(vD); float y = d.y;
        vec3 c = mix(uHor, uMid, smoothstep(-0.02, 0.22, y)); c = mix(c, uZen, smoothstep(0.2, 0.75, y));
        float s = max(dot(d, uSunDir), 0.0);
        c = mix(c, uGlow, pow(s, 6.0) * 0.55 * uGlowK + pow(s, 64.0) * 0.5 * uGlowK);
        c += vec3(1.0, 0.97, 0.9) * smoothstep(0.9993, 0.9997, s) * 2.0;
        /* painted wisps of high cirrus */
        vec2 p = d.xz / max(y + 0.25, 0.08) * 1.6;
        float w = fbm2(p * vec2(1.0, 3.0) + 7.0); float wisp = smoothstep(0.62, 0.78, w) * smoothstep(0.05, 0.3, y) * (1.0 - smoothstep(0.6, 0.9, y));
        c = mix(c, vec3(1.0), wisp * 0.55);
        c = mix(c, uHor * 1.02, smoothstep(0.02, -0.15, y));
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}));p.renderOrder=-10,p.frustumCulled=!1,s.add(p),o.push(()=>p.position.copy(r.position));function v(B){let N=[];for(let[P,q,Q]of B)for(let $=0;$<Q;$++)N.push(P+(q-P)*$/Q);return N.push(B[B.length-1][1]),N}let g=v([[-1600,-600,Math.round(24*a)],[-600,370,Math.round(200*a)],[370,640,Math.round(260*a)],[640,1300,Math.round(30*a)]]),m=v([[-1600,-600,Math.round(24*a)],[-600,-140,Math.round(100*a)],[-140,140,Math.round(230*a)],[140,600,Math.round(100*a)],[600,1600,Math.round(24*a)]]),x=g.length,M=m.length,y,T;function E(B,N){let P=0,q=B.length-1;if(N<=B[0])return[0,0];if(N>=B[q])return[q-1,1];for(;q-P>1;){let Q=P+q>>1;B[Q]<=N?P=Q:q=Q}return[P,(N-B[P])/(B[P+1]-B[P])]}function C(B,N){let[P,q]=E(g,B),[Q,$]=E(m,N),Me=Q*x+P;return{h:Kt(Kt(y[Me],y[Me+1],q),Kt(y[Me+x],y[Me+x+1],q),$),ny:Kt(Kt(T[Me],T[Me+1],q),Kt(T[Me+x],T[Me+x+1],q),$)}}let _=`
    {
      float det = uDetail;
      vec2 P = vW.xz;
      float slope = 1.0 - N.y;
      float n1 = fbm2(P * 0.006), n2 = fbm2(P * 0.031 + 5.0), n3 = vn(P * 0.16);
      /* painted grass: three posterised greens with soft borders */
      float pg = n1 * 0.62 + n2 * 0.38;
      vec3 g1 = vec3(0.43, 0.62, 0.17), g2 = vec3(0.25, 0.48, 0.13), g3 = vec3(0.13, 0.32, 0.12), g4 = vec3(0.62, 0.72, 0.25);
      vec3 grass = mix(g3, g2, smoothstep(0.36, 0.42, pg));
      grass = mix(grass, g1, smoothstep(0.52, 0.57, pg));
      grass = mix(grass, g4, smoothstep(0.66, 0.70, pg) * 0.8);
      /* brush strokes that follow a slowly turning direction */
      float ang = n1 * 9.0; vec2 dir = vec2(cos(ang), sin(ang)), per = vec2(-dir.y, dir.x);
      float stroke = vn(vec2(dot(P, dir) * 0.55, dot(P, per) * 2.6)) ;
      grass *= 0.9 + 0.2 * stroke * det;
      grass *= 0.95 + 0.1 * n3 * det;
      /* rock: warm grey with painted strata and dark cracks */
      float rockM = smoothstep(0.36, 0.46, slope + (n2 - 0.5) * 0.26);
      float strata = vn(vec2(vW.y * 0.55 + n2 * 3.0, dot(P, vec2(0.7, 0.7)) * 0.04));
      vec3 r1 = vec3(0.60, 0.55, 0.50), r2 = vec3(0.42, 0.39, 0.38), r3 = vec3(0.76, 0.71, 0.64);
      vec3 rock = mix(r2, r1, smoothstep(0.35, 0.45, strata)); rock = mix(rock, r3, smoothstep(0.7, 0.74, strata) * 0.6); rock = mix(rock, g2 * 0.9, smoothstep(0.6, 0.66, n3 * 0.5 + n1 * 0.5) * (1.0 - smoothstep(0.5, 0.7, slope)));
      float crack = smoothstep(0.035, 0.0, abs(vn(vec2(vW.y * 0.9, dot(P, vec2(0.8, -0.6)) * 0.25)) - 0.5)) * det;
      rock *= 1.0 - crack * 0.35;
      vec3 terr = mix(grass, rock, rockM);
      /* region colours painted in by the vertex colour and its weight */
      float peb = smoothstep(0.72, 0.8, vn(P * 1.7)) * det; vec3 reg = base.rgb * (0.9 + 0.16 * stroke + 0.08 * (n2 - 0.5)) * (1.0 - 0.18 * peb) + vec3(0.08, 0.06, 0.04) * smoothstep(0.75, 0.8, vn(P * 0.9 + 3.0));
      terr = mix(terr, reg, clamp(vAw, 0.0, 1.0));
      base.rgb = terr;
    }`;function b(){let B=new Float32Array(x*M*3),N=new Float32Array(x*M*3),P=new Float32Array(x*M),q=new Float32Array(x*M);y=new Float32Array(x*M);for(let be=0;be<M;be++)for(let ge=0;ge<x;ge++){let ve=be*x+ge,_e=g[ge],xe=m[be],Se=$A(_e,xe);y[ve]=Se,q[ve]=z0,B[ve*3]=_e,B[ve*3+1]=Se,B[ve*3+2]=xe}let Q=new Uint32Array((x-1)*(M-1)*6),$=0;for(let be=0;be<M-1;be++)for(let ge=0;ge<x-1;ge++){let ve=be*x+ge,_e=ve+1,xe=ve+x,Se=xe+1;Q[$++]=ve,Q[$++]=xe,Q[$++]=_e,Q[$++]=_e,Q[$++]=xe,Q[$++]=Se}let Me=new nt;Me.setAttribute("position",new ht(B,3)),Me.setIndex(new ht(Q,1)),Me.computeVertexNormals();let Te=Me.attributes.normal.array;T=new Float32Array(x*M);let se={dirt:new pe("#c8a875"),sand:new pe("#e6d6a6"),snow:new pe("#f4f7fb"),stone:new pe("#cfc6b6"),cloud:new pe("#dfe7f2"),moss:new pe("#5d7d3a")};for(let be=0;be<M;be++)for(let ge=0;ge<x;ge++){let ve=be*x+ge,_e=g[ge],xe=m[be],Se=y[ve],rt=Te[ve*3+1];T[ve]=rt;let je=se.dirt,vt=0,ti=Se<6&&Math.hypot(_e-bi.x,xe-bi.z)<bi.r+50?Qt(6,2.5,Se):0;ti>vt&&(je=se.sand,vt=ti);let at=q[ve]<5.2?Qt(5.2,2.6,q[ve]):0;at>vt&&(je=se.dirt,vt=at),Math.abs(xe)<3&&_e>404&&_e<450&&(je=se.stone,vt=.9);let mt=$t[0],Et=_e-mt.x,kt=xe-mt.z;if(Math.hypot(Et,kt)<mt.r&&(Math.abs(Et+kt*.25)<3.4||Math.abs(kt-Et*.25)<3.4)&&(je=se.dirt,vt=.85),yp(_e,xe)){let[A,U]=of(Xn,_e,xe),Z=Xn[U],W=A<Z.hw+3?.7:0;W>vt&&(je=se.sand,vt=W*.6)}if(Se>205){let A=Qt(205,240,Se)*Qt(.5,.8,rt);A>vt&&(je=se.snow,vt=A)}if(_e>650){let A=Qt(650,760,_e);A>vt&&(je=se.cloud,vt=A)}N[ve*3]=je.r,N[ve*3+1]=je.g,N[ve*3+2]=je.b,P[ve]=vt}Me.setAttribute("color",new ht(N,3)),Me.setAttribute("aw",new ht(P,1));let qe=Ut("#ffffff",{vertexColors:!0,code:_,rim:0,wrap:.15}),we=new Pt(Me,qe);we.receiveShadow=!0,we.castShadow=!0,s.add(we)}let D={uTime:ai.uTime,uSunDir:ai.uSunDir,uSkyCol:ai.uSkyCol,uFogCol:ai.uFogCol,uFogDen:ai.uFogDen};function I(B,N=0){return new wt({uniforms:{...D,uFlow:{value:B},uC:{value:new w(bi.x,0,bi.z)},uR:{value:N}},vertexShader:"varying vec3 vW; varying vec2 vUv; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float uTime, uFogDen, uR; uniform vec3 uSunDir, uSkyCol, uFogCol, uC; uniform vec2 uFlow; varying vec3 vW; varying vec2 vUv;
        ${Lc}
        void main(){
          vec2 p = vW.xz * 0.05 + uFlow * uTime;
          float n = fbm2(p), n2 = fbm2(p * 2.7 - uFlow * uTime * 1.7);
          vec3 deep = vec3(0.13, 0.42, 0.62), mid = vec3(0.25, 0.62, 0.78), light = vec3(0.62, 0.85, 0.92);
          float band = n * 0.6 + n2 * 0.4;
          vec3 col = mix(deep, mid, smoothstep(0.42, 0.47, band));
          col = mix(col, light, smoothstep(0.62, 0.66, band) * 0.8);
          float edge = 0.0;
          if (uR > 0.0) { float r = length(vW.xz - uC.xz) + 14.0 * (vn(vW.xz * 0.05) - 0.5); edge = smoothstep(uR - 26.0, uR - 8.0, r); col = mix(col, vec3(0.55, 0.84, 0.86), edge * 0.8);
            float foam = smoothstep(0.06, 0.0, abs(fract(r * 0.12 - uTime * 0.25) - 0.5) - 0.42) * smoothstep(uR - 20.0, uR - 2.0, r); col = mix(col, vec3(1.0), foam * 0.9); }
          if (uR < 0.0) { float s = abs(vUv.x - 0.5) * 2.0; float foam = smoothstep(0.7, 0.95, s + (vn(vW.xz * 0.4 + uFlow * uTime * 6.0) - 0.5) * 0.3); col = mix(col, vec3(1.0), foam * 0.85);
            float streak = smoothstep(0.7, 0.85, vn(vec2(vUv.x * 18.0, vUv.y * 0.6 - uTime * 2.2))); col = mix(col, vec3(0.9, 0.97, 1.0), streak * 0.45); }
          vec3 V = normalize(cameraPosition - vW);
          float glint = step(0.985, h21(floor(vW.xz * 1.6) + floor(uTime * 4.0))) * pow(max(dot(reflect(-V, vec3(0, 1, 0)), uSunDir), 0.0), 3.0);
          col += vec3(1.0, 0.97, 0.9) * glint * 1.6;
          float fres = pow(1.0 - max(V.y, 0.0), 4.0); col = mix(col, uSkyCol, fres * 0.55);
          float d = length(vW - cameraPosition); col = mix(col, uFogCol, clamp(1.0 - exp(-d * uFogDen), 0.0, 1.0));
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }`})}function O(){let B=new Pt(new ps(bi.r+60,96),I(new J(.03,.018),bi.r+30));B.rotation.x=-Math.PI/2,B.position.set(bi.x,bi.level,bi.z),B.receiveShadow=!0,s.add(B);let N=Xn.findIndex(Se=>Se.y<46),P=Xn.slice(N),q=[],Q=[],$=[],Me=0;for(let Se=0;Se<P.length;Se++){let rt=P[Math.max(0,Se-1)],je=P[Math.min(P.length-1,Se+1)],vt=je.x-rt.x,ti=je.z-rt.z,at=Math.hypot(vt,ti)||1,mt=-ti/at,Et=vt/at,kt=P[Se].hw+1.5;if(Se&&(Me+=Math.hypot(P[Se].x-P[Se-1].x,P[Se].z-P[Se-1].z)),q.push(P[Se].x+mt*kt,P[Se].y,P[Se].z+Et*kt,P[Se].x-mt*kt,P[Se].y,P[Se].z-Et*kt),Q.push(0,Me*.05,1,Me*.05),Se<P.length-1){let A=Se*2;$.push(A,A+1,A+2,A+1,A+3,A+2)}}let Te=new nt;Te.setAttribute("position",new ke(q,3)),Te.setAttribute("uv",new ke(Q,2)),Te.setIndex($);let se=new Pt(Te,I(new J(-.05,.08),-1));se.material.side=Jt,s.add(se);let qe=Xn[0],we=Xn[N],be=new wt({transparent:!0,depthWrite:!1,side:Jt,uniforms:{uTime:ai.uTime},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uTime; varying vec2 vUv; ${Lc}
        void main(){ float n = vn(vec2(vUv.x * 22.0, vUv.y * 4.0 + uTime * 3.0)) * 0.6 + vn(vec2(vUv.x * 50.0, vUv.y * 10.0 + uTime * 5.0)) * 0.4;
          vec3 col = mix(vec3(0.62, 0.86, 0.95), vec3(1.0), step(0.5, n));
          float a = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
          gl_FragColor = vec4(col, a);
          #include <colorspace_fragment>
        }`}),ge=new Pt(new Gi(10,1),be),ve=new w((qe.x+we.x)/2,(qe.y+we.y)/2,(qe.z+we.z)/2),_e=new w(we.x-qe.x,we.y-qe.y,we.z-qe.z),xe=_e.length();ge.scale.y=xe+4,ge.position.copy(ve).add(new w(0,1.5,0)),ge.quaternion.setFromUnitVectors(new w(0,-1,0),_e.normalize()),s.add(ge);for(let Se=0;Se<6;Se++)k(we.x+(he()-.5)*12,we.y+3+he()*4,we.z+(he()-.5)*12,22,.75)}let X=nE(),F=[0,1,2,3].map(B=>{let N=X.clone();return N.repeat.set(.5,.5),N.offset.set(B%2*.5,Math.floor(B/2)===0?.5:0),N.needsUpdate=!0,N});function k(B,N,P,q,Q=1,$=Math.floor(he()*4)){let Me=new Bs({map:F[$],transparent:!0,opacity:Q,depthWrite:!1,fog:!1}),Te=new mr(Me);return Te.position.set(B,N,P),Te.scale.set(q*2,q,1),Te.center.set(.5,.2),s.add(Te),Te}function ee(){let B=new wt({transparent:!0,depthWrite:!1,uniforms:{uTime:ai.uTime},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float uTime; varying vec3 vW; ${Lc}
        void main(){ vec2 p = vW.xz * 0.008 + vec2(uTime * 0.004, 0.0); float n = fbm2(p);
          float a = smoothstep(660.0, 760.0, vW.x);
          vec3 col = mix(vec3(0.80, 0.86, 0.96), vec3(1.0), smoothstep(0.45, 0.5, n));
          col = mix(col, vec3(0.93, 0.95, 1.0), smoothstep(0.62, 0.66, n) * 0.6);
          gl_FragColor = vec4(col, a);
          #include <colorspace_fragment>
        }`}),N=new Pt(new Gi(8e3,8e3),B);N.rotation.x=-Math.PI/2,N.position.set(4e3,10,0),N.renderOrder=1,s.add(N);for(let P=0;P<(e?60:120);P++)k(680+he()*600,2+he()*10,(he()-.5)*1100,40+he()*60,1);for(let P=0;P<16;P++){let q=Wi(he()*Uc*.3),Q=he()<.5?-1:1;k(q.x+20+he()*30,q.y-14-he()*6,q.z+Q*(34+he()*30),26+he()*20,1)}for(let P=0;P<30;P++){let q=Math.PI*(.55+he()*.9),Q=900+he()*600;k(Math.cos(q)*Q-80,140+he()*160,Math.sin(q)*Q,180+he()*180,1)}for(let P=0;P<14;P++){let q=Math.PI*(-.4+he()*.8),Q=1500+he()*900;k(Math.cos(q)*Q+600,60+he()*120,Math.sin(q)*Q,260+he()*200,1)}for(let P=0;P<10;P++){let q=Math.PI*(.6+he()*.8),Q=700+he()*300;k(Math.cos(q)*Q,330+he()*120,Math.sin(q)*Q,80+he()*80,.95)}}let z={shu:Ut("#e2412d",{rim:.3}),black:Ut("#2c2427"),stone:Ut("#d3c9b8",{code:"base.rgb *= 0.88 + 0.16 * vn(vW.xz * 1.3 + vW.y) - 0.1 * smoothstep(0.03, 0.0, abs(fract(vW.x * 0.6 + vW.z * 0.2) - 0.5) - 0.47);"}),stoneDark:Ut("#958c80"),wood:Ut("#8d5f3d"),woodLight:Ut("#c99b6a"),plaster:Ut("#f5eee0"),tile:null,gold:Ut("#e8bb4a",{rim:.6}),white:Ut("#fbf8f2",{side:Jt}),rope:Ut("#e1c98f"),pipe:Ut("#4f8fc8"),redBrick:null},fe="base.rgb *= 0.86 + 0.14 * smoothstep(0.15, 0.35, abs(fract(vUv.x * 2.4) - 0.5) * 2.0); base.rgb *= 0.92 + 0.08 * smoothstep(0.85, 0.95, fract(vUv.y * 1.6));",j=B=>Ut(B,{code:fe,rim:.2,side:Jt}),te={grey:j("#5b5866"),brown:j("#7a5238"),green:j("#4f8f7d"),scarlet:j("#7b2836"),blue:j("#4a5f86"),hinoki:j("#9a6a45")},ue=[];function oe(B,N,P,q=0,Q=0,$=0,Me=0,Te={}){let se=new Pt(N,P);if(se.position.set(q,Q,$),se.rotation.y=Me,se.castShadow=Te.shadow??!0,se.receiveShadow=!0,B.add(se),Te.ink){let qe=new Pt(N,L0(Te.ink));se.add(qe),ue.push(qe)}return se}function He(B,N,P,q=!0){let Q=new yn(B,N,P);return Q.frustumCulled=!1,Q.castShadow=q,Q.receiveShadow=!0,s.add(Q),Q}function At(B,N){let P=new Si;P.position.set(N.x||0,N.y||0,N.z||0),P.rotation.y=N.ry||0,B.add(P);let q=N.w,Q=N.d,$=N.h,Me=N.base??1,Te=Me;N.plinth!==!1&&oe(P,Vt(q+2.4,Me,Q+2.4),z.stone,0,Me/2,0,0,{ink:.05});let se=N.wallMat||Ut("#ffffff",{map:Pc({base:"#f6efe1",frame:"#6e4b33",posts:"#6e4b33",shoji:!0,cols:Math.max(2,Math.round(q/3)),seed:Math.round(q*7)})});if(oe(P,Vt(q,$,Q),se,0,Te+$/2,0,0,{ink:.05}),N.veranda!==!1){oe(P,Vt(q+2,.3,Q+2),z.wood,0,Te+.15,0);let xe=Ut("#7a4f33");for(let Se of[-1,1])oe(P,Vt(q+2,.14,.14),xe,0,Te+1.1,Se*(Q/2+1)),oe(P,Vt(.14,.14,Q+2),xe,Se*(q/2+1),Te+1.1,0);for(let Se=0;Se<=Math.round(q/2.2);Se++)for(let rt of[-1,1])oe(P,new fi(.18,.18,$+.3,8),z.wood,-q/2-1+(q+2)*Se/Math.round(q/2.2),Te+$/2,rt*(Q/2+1),0,{shadow:!1})}let qe=q+(N.over??3.2)*2,we=Q+(N.over??3.2)*2,be=N.rise??Q*.42,ge=Fr(qe,we,be,{hip:!!N.hip,lift:N.lift??.9,sori:1.7,thick:.45}),ve=N.roof||te.grey;if(oe(P,ge,ve,0,Te+$+.1,0,0,{ink:.07}),!N.hip)for(let xe of[-1,1])oe(P,N0(Q+1,be*.9,.3),z.plaster,xe*(q/2+.1),Te+$,0);if(N.hip&&N.irimoya!==!1){let xe=q*.55,Se=Q*.5,rt=be*.55,je=Fr(xe+1.6,Se+1.6,rt,{lift:.3,sori:1.4,thick:.35});oe(P,je,ve,0,Te+$+be*.62,0,0,{ink:.06});for(let vt of[-1,1])oe(P,N0(Se,rt*.9,.25),z.wood,vt*(xe/2+.3),Te+$+be*.62,0)}let _e=Te+$+(N.hip&&N.irimoya!==!1?be*.62+be*.55:be)+.15;oe(P,Vt((N.hip&&N.irimoya!==!1?q*.55+2:qe)+.4,.55,.7),z.black,0,_e,0,0,{ink:.04});for(let xe of[-1,1])oe(P,Vt(.8,.9,.9),z.black,xe*((N.hip&&N.irimoya!==!1?q*.55+2:qe)/2+.2),_e+.25,0);return P}function Dt(B,N,P,q=1,Q=0){let $=new Si;$.position.set(B,N,P),$.rotation.y=Q,$.scale.setScalar(q),s.add($);let Me=8.2,Te=3.7;for(let ge of[-1,1])oe($,new fi(.42,.5,Me,20),z.shu,0,Me/2,ge*Te,0,{ink:.05}),oe($,new fi(.62,.66,.9,20),z.black,0,.45,ge*Te,0,{ink:.04}),oe($,new fi(.5,.5,.25,20),z.black,0,Me*.74-.45,ge*Te);oe($,Vt(.48,.6,10.6),z.shu,0,Me*.74,0,0,{ink:.04}),oe($,Vt(.36,1.3,.55),z.shu,0,Me*.74+.95,0,0,{ink:.03});let se=new Pt(new Gi(1,1.5),new Li({map:zr(64,96,ge=>{ge.fillStyle="#2b2326",ge.fillRect(0,0,64,96),ge.strokeStyle="#d9b24e",ge.lineWidth=4,ge.strokeRect(4,4,56,88),ge.fillStyle="#e8c35c",ge.font='900 30px "Noto Serif SC", serif',ge.textAlign="center",ge.fillText("\u535A",32,42),ge.fillText("\u4E3D",32,78)})}));se.position.set(.4,Me*.74+.95,0),se.rotation.y=Math.PI/2,$.add(se);let qe=(ge,ve,_e,xe)=>{let Se=new Fn(_e,ve,ge,1,1,40),rt=Se.attributes.position;for(let je=0;je<rt.count;je++){let vt=rt.getZ(je)/(ge/2);rt.setY(je,rt.getY(je)+xe*Math.pow(Math.abs(vt),2.4))}return Se.computeVertexNormals(),Se};oe($,qe(12.2,.62,.82,.55),z.shu,0,Me+.1,0,0,{ink:.05}),oe($,qe(13.6,.6,1.08,.85),z.black,0,Me+.7,0,0,{ink:.05});let we=new jn([new w(0,Me*.74-.5,-Te),new w(0,Me*.74-1.3,0),new w(0,Me*.74-.5,Te)]);oe($,new Mr(we,30,.2,10),z.rope,0,0,0,0,{ink:.03});let be=new Sn;if(be.moveTo(0,0),be.lineTo(.4,0),be.lineTo(.4,-.3),be.lineTo(.1,-.3),be.lineTo(.1,-.6),be.lineTo(.4,-.6),be.lineTo(.4,-.9),be.lineTo(.1,-.9),be.lineTo(.1,-1.2),be.lineTo(0,-1.2),be.closePath(),q>=1)for(let ge of[-2,0,2])oe($,new yr(be),z.white,.06,Me*.74-.95-(ge===0?.4:.15),ge,Math.PI/2,{shadow:!1});return $}function Lt(B,N,P,q,Q=1){let $=new Si;return $.position.set(N,P,q),$.scale.setScalar(Q),B.add($),oe($,new fi(.75,.85,.35,6),z.stone,0,.18,0,0,{ink:.03}),oe($,new fi(.24,.3,1.5,10),z.stone,0,1.1,0,0,{ink:.03}),oe($,new fi(.62,.5,.28,6),z.stone,0,1.95,0),oe($,new fi(.45,.45,.7,6),z.plaster,0,2.45,0,0,{ink:.03}),oe($,new On(.95,.6,6),z.stoneDark,0,3.1,0,0,{ink:.03}),oe($,new Hn(.17,10,8),z.stoneDark,0,3.5,0),$}function ne(){let B=Ni.h;Dt(F0,B,0),At(s,{x:398,y:B,z:0,ry:Math.PI/2,w:13,d:9,h:4.2,base:1.4,hip:!0,roof:te.hinoki,rise:4.8,over:3}),At(s,{x:382,y:B,z:0,ry:Math.PI/2,w:7,d:6,h:3.4,base:1.8,roof:te.hinoki,rise:3.6,over:1.8});let N=new Si;N.position.set(406,B,0),s.add(N),oe(N,Vt(1.6,1.1,3),z.wood,1.2,1.95,0,0,{ink:.03});let P=new Pt(new Gi(2.6,.7),new Li({map:xp("\u5949 \u7EB3","#5b3a26","#f0d79a")}));P.position.set(2.02,2.05,0),P.rotation.y=Math.PI/2,N.add(P);for(let $=0;$<4;$++)oe(N,Vt(.6,.35,5),z.stone,2.6+$*.6,1.4-$*.35,0);oe(N,new fi(.09,.09,4,6),Ut("#e94b4b"),.8,4.2,0,0,{shadow:!1}),oe(N,new Hn(.5,16,12),z.gold,.8,6.3,0);let q=He(Vt(1.5,.14,3),z.stone,30,!1),Q=new Mt;for(let $=0;$<30;$++)Q.position.set(410+$*1.18,B+.07,0),Q.rotation.y=(he()-.5)*.04,Q.updateMatrix(),q.setMatrixAt($,Q.matrix);for(let $ of[-1,1])Lt(s,434,B,$*4.6,1.15),Lt(s,418,B,$*4.6,1);oe(s,Vt(2.4,1,1.4),z.stone,422,B+.5,-8,0,{ink:.03}),At(s,{x:404,y:B,z:17,ry:0,w:9,d:5.5,h:3,base:.6,roof:te.grey,rise:2.6,over:1.4}),l.push({id:"hakurei",p:new w(410,B+9,0)})}function le(){let B=zt.findIndex(we=>we.x<=490),N=zt.findIndex(we=>we.x<=448),P=zt[B].s,q=zt[N].s,Q=Math.round((q-P)/.9),$=He(Vt(6.6,.5,1),z.stone,Q),Me=new Mt,Te=new w;for(let we=0;we<Q;we++)Wi(P+(we+.5)*(q-P)/Q,Te),Me.position.set(Te.x,Te.y-.2,Te.z),Me.rotation.set(0,Math.PI/2,0),Me.updateMatrix(),$.setMatrixAt(we,Me.matrix);for(let we of[-1,1]){let be=He(Vt(1,.9,.6),z.stoneDark,Q,!1);for(let ge=0;ge<Q;ge++)Wi(P+(ge+.5)*(q-P)/Q,Te),Me.position.set(Te.x,Te.y+.1,Te.z+we*3.6),Me.updateMatrix(),be.setMatrixAt(ge,Me.matrix)}let se=new w,qe=new w;for(let we of[120,260]){Wi(we-1,se),Wi(we+1,qe);let be=Math.atan2(qe.x-se.x,qe.z-se.z)-Math.PI/2;Dt(se.x,se.y-.3,se.z,.72,be)}for(let we=40,be=0;we<vp-6;we+=30,be++){Wi(we-1,se),Wi(we+1,qe);let ge=qe.x-se.x,ve=qe.z-se.z,_e=Math.hypot(ge,ve),xe=be%2?1:-1,Se=se.x-ve/_e*4.6*xe,rt=se.z+ge/_e*4.6*xe;Lt(s,Se,C(Se,rt).h-.1,rt,.9)}}function ze(){let B=$t[0],N=B.h,P=B.x+9,q=B.z+10,Q=[],$=[];for(let ge=-5;ge<=5;ge++)for(let ve=-5;ve<=5;ve++){if(ge===0||ve===0)continue;let _e=ge*10.5+(he()-.5)*2.4,xe=ve*10.5+(he()-.5)*2.4;if(Math.hypot(_e,xe)>B.r-8||he()<.22)continue;let Se=Math.cos(.245),rt=Math.sin(.245),je=B.x+_e*Se-xe*rt,vt=B.z+_e*rt+xe*Se;Math.hypot(je-P,vt-q)<13||$.push({x:je,z:vt,ry:-.245+(he()<.5?0:Math.PI/2),s:.85+he()*.3,v:Math.floor(he()*3)})}let Me=[0,1,2].map(ge=>{let ve=6.5+ge,_e=5+ge*.4,xe=2.8+(ge===2?1.6:0),Se=rf(Vt(ve,xe,_e).translate(0,xe/2,0),ge===1?"#e9d8b8":"#f4ecdc"),rt=rf(Vt(ve+.1,.25,_e+.1).translate(0,xe*.55,0),"#7a5236"),je=rf(Fr(ve+1.8,_e+1.8,_e*.42,{lift:.35,nx:16,nz:10,thick:.3}).translate(0,xe,0),["#5b5866","#6d5240","#55606c"][ge]),vt=rf(Vt(ve+2,.35,.5).translate(0,xe+_e*.42+1,0),"#2e2a2e");return B0([Se,rt,je,vt])}),Te=Ut("#ffffff",{vertexColors:!0,code:fe.replace(/base\.rgb \*=/g,"base.rgb *= (vW.y > 0.0) ? 1.0 : 1.0;")});Me.forEach((ge,ve)=>{let _e=$.filter(je=>je.v===ve),xe=He(ge,Te,_e.length),Se=new Mt;_e.forEach((je,vt)=>{Se.position.set(je.x,N,je.z),Se.rotation.set(0,je.ry,0),Se.scale.setScalar(je.s),Se.updateMatrix(),xe.setMatrixAt(vt,Se.matrix)});let rt=new yn(ge,L0(.06),_e.length);rt.frustumCulled=!1;for(let je=0;je<_e.length;je++)xe.getMatrixAt(je,Se.matrix),rt.setMatrixAt(je,Se.matrix);s.add(rt)});let se=new Si;se.position.set(P,N,q),se.rotation.y=-.245,s.add(se);let qe=Ut("#ffffff",{map:Pc({base:"#efe3cb",frame:"#5a3b28",posts:"#5a3b28",shoji:!0,cols:4,seed:9})});oe(se,Vt(10,3.6,7.5),qe,0,1.8,0,0,{ink:.05}),oe(se,Fr(11.6,9.4,1.6,{lift:.3}),te.grey,0,3.6,0,0,{ink:.05}),oe(se,Vt(8.4,3,6),qe,0,5.2,0,0,{ink:.05}),oe(se,Fr(10.4,8.2,3,{lift:.5}),te.grey,0,6.7,0,0,{ink:.06});let we=new Pt(new Gi(4.6,1.3),new Li({map:xp("\u94C3\u5948\u5EB5","#3a2b22","#f3e3b8")}));we.position.set(0,4.1,4.75),se.add(we);let be=Ut("#3c5d8f",{side:Jt});for(let ge=0;ge<4;ge++)oe(se,Vt(1.1,1.3,.05),be,-1.8+ge*1.2,2.7,3.85,0,{shadow:!1});l.push({id:"village",p:new w(P,N+9,q)})}function ct(){let B=$t[1],N=B.h,P=new Si;P.position.set(B.x,N,B.z),P.rotation.y=-.5,s.add(P),At(P,{x:0,y:0,z:0,w:26,d:11,h:4.2,base:1.2,hip:!0,roof:te.grey,rise:5.5,over:3.2}),At(P,{x:-6,y:0,z:13,w:11,d:8,h:3.6,base:1,roof:te.grey,rise:3.4,over:2}),At(P,{x:9,y:0,z:-12,w:9,d:6,h:3.2,base:1,roof:te.grey,rise:2.8,over:1.6});let q=e?800:1800,Q=He(new fi(.2,.24,1,6),Ut("#ffffff",{rim:.3}),q,!e),$=Nr("cedar"),Me=me(5,2.2,.9,"sphere"),Te=He(Me,Ut("#ffffff",{map:$,alphaTest:.45,side:Jt,rim:.35,wrap:.3,sway:!0}),q,!e);Te.customDepthMaterial=sf($);let se=new Mt,qe=new pe,we=0,be=0;for(;we<q&&be++<q*8;){let ge=he()*Math.PI*2,ve=30+Math.sqrt(he())*100,_e=B.x+Math.cos(ge)*ve*1.2,xe=B.z+Math.sin(ge)*ve,Se=C(_e,xe);if(Se.ny<.85||Se.h<4||Math.hypot(_e-$t[0].x,xe-$t[0].z)<$t[0].r+6)continue;let rt=12+he()*8;se.position.set(_e,Se.h+rt/2,xe),se.rotation.set((he()-.5)*.12,0,(he()-.5)*.12),se.scale.set(1,rt,1),se.updateMatrix(),Q.setMatrixAt(we,se.matrix),Q.setColorAt(we,qe.setHSL(.22+he()*.05,.5,.5+he()*.1)),se.position.set(_e,Se.h+rt-1,xe),se.rotation.set(0,he()*3,0),se.scale.set(1.5+he()*.6,1.5+he()*.6,1.5+he()*.6),se.updateMatrix(),Te.setMatrixAt(we,se.matrix),Te.setColorAt(we,qe.setHSL(.24+he()*.06,.55,.42+he()*.1)),we++}Q.count=Te.count=we,l.push({id:"eientei",p:new w(B.x,N+12,B.z)})}function We(){let B=$t[2],N=B.h,P=new Si;P.position.set(B.x,N,B.z),P.rotation.y=-.6,s.add(P);let q=Ut("#ffffff",{map:Pc({base:"#c23a35",frame:"#f4e6d2",glass:"#3c3550",windows:!0,cols:6,rows:2,trim:"#f4e6d2",dark:!0,seed:4})}),Q=Ut("#ffffff",{map:Pc({base:"#c23a35",frame:"#f4e6d2",glass:"#3c3550",windows:!0,cols:2,rows:3,trim:"#f4e6d2",dark:!0,seed:6})});oe(P,Vt(48,1.2,34),z.stone,0,.6,0),oe(P,Vt(12,11,30),q,0,6.7,0,0,{ink:.07}),oe(P,Fr(32,14,5,{hip:!0,sori:1.05,lift:0}),te.scarlet,0,12.2,0,Math.PI/2,{ink:.07});for(let se of[-1,1])oe(P,Vt(16,9,11),q,-4,5.7,se*18.5,0,{ink:.07}),oe(P,Fr(18,13,4,{hip:!0,sori:1.05,lift:0}),te.scarlet,-4,10.2,se*18.5,0,{ink:.07}),oe(P,new fi(2.6,2.6,14,20),Q,3,8.2,se*26,0,{ink:.07}),oe(P,new On(3.3,6,20),te.scarlet,3,18.2,se*26,0,{ink:.07});oe(P,Vt(7.5,26,7.5),Q,1,13.6,0,0,{ink:.07}),oe(P,new On(6,8,4),te.scarlet,1,30.6,0,Math.PI/4,{ink:.07});let $=new Pt(new ps(2.6,40),new Li({map:zr(128,128,se=>{se.fillStyle="#fbf3e3",se.beginPath(),se.arc(64,64,62,0,7),se.fill(),se.strokeStyle="#b8922e",se.lineWidth=6,se.stroke(),se.fillStyle="#2b2326";for(let qe=0;qe<12;qe++){let we=qe/12*6.283;se.fillRect(64+Math.cos(we)*50-3,64+Math.sin(we)*50-3,6,6)}se.lineWidth=6,se.strokeStyle="#2b2326",se.beginPath(),se.moveTo(64,64),se.lineTo(64,24),se.moveTo(64,64),se.lineTo(92,74),se.stroke()})}));$.position.set(4.8,21,0),$.rotation.y=Math.PI/2,P.add($);for(let se of[-1,1])oe(P,Vt(1.4,5,1.4),z.stone,27,2.5,se*5,0,{ink:.04}),oe(P,Vt(.9,2.4,22),Ut("#d8cfc0"),27,1.2,se*16.5,0,{ink:.04});oe(P,Vt(1,1,11.4),z.shu,27,5.2,0,0,{ink:.04});let Me=Ut("#d43c4f"),Te=Ut("#3f8a3e");for(let se=0;se<12;se++)oe(P,new Hn(1.4,12,8),se%3?Te:Me,12+se%6*2.5,1.6,(se<6?-1:1)*9);for(let se=0;se<12;se++){let qe=he()*Math.PI*2,we=he()*bi.r*.85;k(bi.x+Math.cos(qe)*we,bi.level+1,bi.z+Math.sin(qe)*we,26+he()*18,.55)}l.push({id:"sdm",p:new w(B.x,N+36,B.z)})}function ft(){let B=$t[3],N=B.h,P=At(s,{x:B.x,y:N,z:B.z,ry:.4,w:9,d:7,h:4,base:.5,roof:te.brown,rise:3,over:1.4,veranda:!1,wallMat:Ut("#ffffff",{map:Pc({base:"#d9b98c",frame:"#5c3d27",posts:"#5c3d27",shoji:!0,cols:3,seed:12})})}),q=new Pt(new Gi(4.6,1.3),new Li({map:xp("\u9999\u9716\u5802","#2a2124","#f6e7c1")}));q.position.set(0,3.9,3.56),P.add(q);let Q=[z.wood,z.stone,z.gold,z.pipe,Ut("#7a8f6a")];for(let $=0;$<12;$++)oe(P,$%4===3?new fi(.5,.5,1.2,10):Vt(.6+he()*1.2,.5+he(),.6+he()),Q[$%5],-3.5+he()*8,.6,5+he()*3,he(),{ink:.03});Lt(P,5.5,0,5,.8),l.push({id:"kourindou",p:new w(B.x,N+7,B.z)})}function Xt(){let B=$t[4],N=B.h,P=new Si;P.position.set(B.x,N,B.z),P.rotation.y=.9,s.add(P),At(P,{w:7,d:5.6,h:3.6,base:.4,roof:te.green,rise:2.4,over:1.2,veranda:!1});let q=new Si;q.position.set(0,3.2,-4.8),P.add(q),oe(q,new Sr(3,.26,8,28),z.wood,0,0,0,0,{ink:.03});for(let Q=0;Q<8;Q++)oe(q,Vt(.3,3,.9),z.wood,0,0,0).rotation.z=Q*Math.PI/8;for(let Q=0;Q<3;Q++)oe(P,new fi(.3,.3,5,10),z.pipe,-3.8,1.6+Q*.8,-1+Q,0,{ink:.03}).rotation.z=Math.PI/2;o.push(Q=>{q.rotation.z=-Q*.8}),l.push({id:"genbu",p:new w(-112,N+14,-285)})}function ce(){let B=qA,N=new Si;N.position.copy(B),s.add(N);let P=oo(4242),q=new On(61,96,64,16);q.rotateX(Math.PI),q.translate(0,-48,0);let Q=q.attributes.position;for(let ve=0;ve<Q.count;ve++){let _e=Q.getX(ve),xe=Q.getY(ve),Se=Q.getZ(ve),rt=Math.atan2(Se,_e),je=1+xe/96,vt=Hr(Math.cos(rt)*2.2+xe*.02,Math.sin(rt)*2.2)*6+Hr(_e*.07+xe*.05,Se*.07)*3.5,ti=Math.sin(Math.min(1,-xe/96)*Math.PI)*9,at=Math.hypot(_e,Se),mt=at>.01?(at+(vt+ti)*Math.min(1,je*3))/at:1;Q.setXYZ(ve,_e*mt,xe+Hr(_e*.05,Se*.05)*4*(1-je),Se*mt)}q.computeVertexNormals(),oe(N,q,Ut("#ffffff",{rim:.45,wrap:.6,code:`{
      float hN = clamp((vW.y - ${(B.y-98).toFixed(1)}) / 96.0, 0.0, 1.0);
      float ang = atan(vW.z - ${B.z.toFixed(1)}, vW.x - (${B.x.toFixed(1)}));
      float st = vn(vec2(vW.y * 0.32 + vn(vec2(ang * 3.0, vW.y * 0.05)) * 2.5, ang * 5.0));
      vec3 r1 = vec3(0.80, 0.60, 0.44), r2 = vec3(0.46, 0.33, 0.30), r3 = vec3(0.95, 0.82, 0.64);
      vec3 rock = mix(r2, r1, smoothstep(0.38, 0.46, st)); rock = mix(rock, r3, smoothstep(0.68, 0.72, st) * 0.8);
      rock *= 1.0 - 0.45 * smoothstep(0.05, 0.0, abs(vn(vec2(vW.y * 0.7, ang * 9.0)) - 0.5));
      rock = mix(rock, vec3(0.30, 0.46, 0.20), smoothstep(0.86, 0.95, hN + (vn(vec2(ang * 14.0, 1.0)) - 0.5) * 0.08));
      rock *= mix(0.62, 1.0, smoothstep(0.0, 0.7, hN));
      base.rgb = rock; }`}),0,-2.2,0);let $=new Sn;for(let ve=0;ve<=96;ve++){let _e=ve/96*Math.PI*2,xe=60.5+Hr(Math.cos(_e)*1.8,Math.sin(_e)*1.8)*2.2;ve?$.lineTo(Math.cos(_e)*xe,Math.sin(_e)*xe):$.moveTo(Math.cos(_e)*xe,Math.sin(_e)*xe)}let Me=new ks($,{depth:2.4,bevelEnabled:!0,bevelThickness:1.4,bevelSize:1.8,bevelSegments:3,curveSegments:1});Me.rotateX(-Math.PI/2),Me.translate(0,-3.5,0),oe(N,Me,Ut("#ffffff",{code:_,rim:0,wrap:.15}),0,-.2,0),oe(N,new ps(15,48).rotateX(-Math.PI/2),Ut("#ece6d6",{rim:0,code:`base.rgb *= 0.93 + 0.07 * smoothstep(0.2, 0.5, abs(fract(length(vW.xz - vec2(${(B.x-2).toFixed(1)}, ${(B.z+10).toFixed(1)})) * 1.1) - 0.5) * 2.0);`}),-2,.16,10,0,{shadow:!1});{let ve=He(Vt(2.2,.25,1.5),z.stone,16,!1);s.remove(ve),N.add(ve);let _e=new Mt;for(let xe=0;xe<16;xe++){let Se=xe/15;_e.position.set(Kt(44,8,Se)+(P()-.5)*.6,.2,Kt(-24,-4,Se)+(P()-.5)*.6),_e.rotation.y=Math.atan2(36,20)+(P()-.5)*.25,_e.updateMatrix(),ve.setMatrixAt(xe,_e.matrix)}}{let ve=Nr("cedar"),_e=Nr("sakura"),xe=[];for(let U=0;U<6;U++)xe.push([0,3.6+U*1.55,0,1.15-U*.15]);let Se=me(11,2.2,1.05,"cone",xe),rt=me(14,2.4,1.15,"sphere",[[0,6.8,0,1.1],[1.8,5.9,.6,.8],[-1.6,6.1,-.8,.85],[.4,5.6,-1.8,.75]]),je=new fi(.28,.45,5.5,7);je.translate(0,2.75,0);let vt=(U,Z,W)=>{let V=new yn(U,Ut("#ffffff",{map:Z,alphaTest:.45,side:Jt,rim:.35,wrap:.35,sway:!0}),W);return V.customDepthMaterial=sf(Z),V.castShadow=V.receiveShadow=!0,V.frustumCulled=!1,V.count=0,N.add(V),V},ti=vt(Se,ve,26),at=vt(rt,_e,14),mt=new yn(je,Ut("#6a4a35",{rim:.1}),40);mt.count=0,mt.frustumCulled=!1,N.add(mt);let Et=new Mt,kt=new pe,A=Math.atan2(-26,48);for(let U=0,Z=0;U<40&&Z<400;Z++){let W=P()*Math.PI*2,V=36+P()*19,Re=Math.cos(W)*V,Ve=Math.sin(W)*V;if(Math.abs(Math.atan2(Math.sin(W-A),Math.cos(W-A)))<.32||Math.hypot(Re-18,Ve-18)<16)continue;let Ue=at.count<14&&P()<.38,Xe=Ue?at:ti;if(!Ue&&ti.count>=26)continue;let Ze=.85+P()*.5;Et.position.set(Re,.05,Ve),Et.rotation.set(0,P()*6.28,0),Et.scale.set(Ze,Ze*(.9+P()*.3),Ze),Et.updateMatrix(),Xe.setMatrixAt(Xe.count,Et.matrix),Xe.setColorAt(Xe.count,Ue?kt.setHSL(.95+P()*.03,.72,.85+P()*.05):kt.setHSL(.37+P()*.05,.42,.3+P()*.06)),Xe.count++,mt.setMatrixAt(mt.count++,Et.matrix),U++}}At(N,{x:-8,z:-6,ry:.3,w:32,d:14,h:5,base:1,hip:!0,roof:te.grey,rise:6,over:3,plinth:!0}),At(N,{x:16,z:-20,ry:.3,w:14,d:10,h:4.2,base:1,roof:te.grey,rise:3.6,over:2}),oe(N,new fi(1.4,3.2,18,12),z.wood,18,9,18,0,{ink:.05});let Te=Nr("sakura"),se=me(14,9,1.1,"sphere");for(let ve=0;ve<8;ve++){let _e=oe(N,se,Ut("#f9e1ec",{map:Te,alphaTest:.45,side:Jt,rim:.5,wrap:.35}),18+(he()-.5)*20,20+he()*7,18+(he()-.5)*18,he()*6);_e.customDepthMaterial=sf(Te),_e.scale.setScalar(.9+he()*.4)}let qe=80,we=new yn(Vt(6,.5,1.6),z.stone,qe),be=new Mt,ge=new w(.62,-.68,-.38).normalize();for(let ve=0;ve<qe;ve++)be.position.set(48,-1,-26).addScaledVector(ge,ve*2.1),be.rotation.set(0,Math.atan2(ge.x,ge.z),0),be.updateMatrix(),we.setMatrixAt(ve,be.matrix);we.frustumCulled=!1,we.castShadow=!0,N.add(we);for(let ve=0;ve<14;ve++){let _e=he()*Math.PI*2,xe=30+he()*50;k(B.x+Math.cos(_e)*xe,B.y-80-he()*40,B.z+Math.sin(_e)*xe,60+he()*40,1)}l.push({id:"hakugyokurou",p:new w(B.x,B.y+18,B.z)})}function me(B,N,P,q="sphere",Q=null){let $=oo(B*31+Math.round(N*10)),Me=[],Te=[],se=[],qe=[],we=Q||[[0,0,0,1]];for(let[ge,ve,_e,xe]of we){let Se=Math.round(B*xe);for(let rt=0;rt<Se;rt++){let je=$()*2-1,vt=$()*Math.PI*2,ti=Math.sqrt(1-je*je),at=new w(ti*Math.cos(vt),je*(q==="cone"?.55:.85),ti*Math.sin(vt)),mt=new w(ge,ve,_e).addScaledVector(at,N*xe*(.55+$()*.35)),Et=at.clone().normalize(),kt=new w().crossVectors(Et,new w($()-.5,1,$()-.5)).normalize(),A=new w().crossVectors(Et,kt),U=$()*Math.PI*2,Z=kt.clone().multiplyScalar(Math.cos(U)).addScaledVector(A,Math.sin(U)),W=kt.clone().multiplyScalar(-Math.sin(U)).addScaledVector(A,Math.cos(U)),V=P*N*xe*(.8+$()*.5),Re=Me.length/3;for(let[Ve,Ue,Xe,Ze]of[[-1,-1,0,0],[1,-1,1,0],[1,1,1,1],[-1,1,0,1]]){let St=mt.clone().addScaledVector(Z,Ve*V*.5).addScaledVector(W,Ue*V*.5);Me.push(St.x,St.y,St.z);let bt=St.clone().sub(new w(ge*.4,ve*.4-N*.2,_e*.4)).normalize();Te.push(bt.x,bt.y,bt.z),se.push(Xe,Ze)}qe.push(Re,Re+1,Re+2,Re,Re+2,Re+3)}}let be=new nt;return be.setAttribute("position",new ke(Me,3)),be.setAttribute("normal",new ke(Te,3)),be.setAttribute("uv",new ke(se,2)),be.setIndex(qe),be}function Ae(){let B=Math.round((e?1100:2600)*t),N=Math.round((e?1100:2800)*t),P=80,q=me(14,2.4,1.15,"sphere",[[0,6.8,0,1.1],[1.8,5.9,.6,.8],[-1.6,6.1,-.8,.85],[.4,5.6,-1.8,.75],[-.4,8.1,.3,.7]]),Q=[];for(let at=0;at<6;at++)Q.push([0,3.6+at*1.55,0,1.15-at*.15]);let $=me(11,2.2,1.05,"cone",Q),Me=new fi(.28,.45,5.5,7);Me.translate(0,2.75,0);let Te=Nr("broad"),se=Nr("cedar"),qe=Nr("sakura"),we=(at,mt,Et)=>{let kt=He(at,Ut("#ffffff",{map:mt,alphaTest:.45,side:Jt,rim:.35,wrap:.35,sway:!0}),Et,!0);return kt.customDepthMaterial=sf(mt),kt.count=0,kt},be=we(q,Te,N),ge=we($,se,B),ve=we(q,qe,P);c.push({mesh:be,geo:q,tex:Te},{mesh:ge,geo:$,tex:se},{mesh:ve,geo:q,tex:qe});let _e=He(Me,Ut("#6a4a35",{rim:.1}),B+N+P,!1);_e.count=0;let xe=new Mt,Se=new pe,rt=(at,mt)=>{for(let Et of $t)if(Math.hypot(at-Et.x,mt-Et.z)<Et.r+5)return!0;if(Math.hypot(at-Ni.x,mt-Ni.z)<Ni.r+6||Math.hypot(at-$t[1].x,mt-$t[1].z)<140||af(at,mt)[0]<7.5)return!0;if(yp(at,mt)){let[Et,kt]=of(Xn,at,mt);if(Et<Xn[kt].hw+6)return!0}return!1},je=(at,mt,Et,kt,A,U)=>{xe.position.set(mt,kt-.3,Et),xe.rotation.set(0,he()*6.28,0),xe.scale.set(A,A*(.85+he()*.35),A),xe.updateMatrix(),at.setMatrixAt(at.count,xe.matrix),at.setColorAt(at.count,U),at.count++,_e.setMatrixAt(_e.count,xe.matrix),_e.count++},vt=0,ti={x:260,z:-170,r:125};for(;(ge.count<B||be.count<N)&&vt++<12e4;){let at,mt;he()<.32?(at=380+he()*250,mt=-180+he()*320):(at=-640+he()*1120,mt=-640+he()*1280);let Et=C(at,mt);if(Et.h<5||Et.ny<.74||Et.h>228||at>615||rt(at,mt))continue;let kt=Math.hypot(at-ti.x,mt-ti.z)<ti.r,A=kt?.95:Qt(-.15,.45,Ic(at/170+9,mt/170-4,3))*(at>380?1.15:.8);if(he()>A)continue;let U=at>380?.72:Et.h>70?.7:kt?.25:.35;he()<U&&ge.count<B?je(ge,at,mt,Et.h,.85+he()*.6,Se.setHSL(.36+he()*.05,.45+he()*.1,.36+he()*.07)):be.count<N&&je(be,at,mt,Et.h,.8+he()*.55,kt?Se.setHSL(.33+he()*.06,.42,.36+he()*.06):Se.setHSL(.22+he()*.07,.55+he()*.15,.42+he()*.1))}for(let at=0;at<P;at++){let mt,Et;if(at<16){let A=he()*Math.PI*2,U=19+he()*10;if(mt=Ni.x+Math.cos(A)*U,Et=Ni.z+Math.sin(A)*U,Math.abs(Et)<9&&mt>392)continue}else{let A=he()*Math.PI*2,U=80+he()*120;if(mt=$t[0].x+Math.cos(A)*U,Et=$t[0].z+Math.sin(A)*U,rt(mt,Et))continue}let kt=C(mt,Et);kt.h<5||je(ve,mt,Et,kt.h,1+he()*.4,Se.setHSL(.95+he()*.03,.75,.86+he()*.05))}}function Ee(){let B=new vr(1,1),N=B.attributes.position;for(let we=0;we<N.count;we++){let be=N.getX(we),ge=N.getY(we),ve=N.getZ(we),_e=1+Hr(be*1.7+ge,ve*1.7)*.22;N.setXYZ(we,be*_e,ge*_e*.75,ve*_e)}B.computeVertexNormals();let P=e?350:900,q=He(B,Ut("#ffffff",{rim:.2}),P),Q=new Mt,$=new pe,Me=new w,Te=new w,se=0,qe=0;for(;se<P&&qe++<P*10;){let we=he()*vp;Wi(we,Me),Wi(we+1,Te);let be=he()<.5?-1:1,ge=Te.x-Me.x,ve=Te.z-Me.z,_e=Math.hypot(ge,ve)||1,xe=4.4+Math.pow(he(),1.6)*30,Se=Me.x-ve/_e*xe*be,rt=Me.z+ge/_e*xe*be;if(af(Se,rt)[0]<4.2)continue;let je=C(Se,rt),vt=xe<8,ti=(vt?.5:.7)+he()*(vt?.9:2.4);Q.position.set(Se,je.h-ti*.25,rt),Q.rotation.set(he()*3,he()*3,he()*3),Q.scale.set(ti*(1+he()*.6),ti,ti*(1+he()*.5)),Q.updateMatrix(),q.setMatrixAt(se,Q.matrix),q.setColorAt(se,$.setHSL(.08+he()*.04,.1+he()*.06,.58+he()*.14)),se++}q.count=se}function De(){let B=iE(),N=new Gi(1,1);N.translate(0,.5,0);let P=B0([N.clone(),N.clone().rotateY(Math.PI/2)]),q=e?3e3:9e3,Q=He(P,Ut("#ffffff",{map:B,alphaTest:.4,side:Jt,rim:.2,wrap:.5,sway:!0}),q,!1),$=new Mt,Me=new pe,Te=new w,se=new w,qe=0,we=0;for(;qe<q&&we++<q*6;){let be=he()*Uc;Wi(be,Te),Wi(be+1,se);let ge=he()<.5?-1:1,ve=se.x-Te.x,_e=se.z-Te.z,xe=Math.hypot(ve,_e)||1,Se=3.2+Math.pow(he(),1.3)*16,rt=Te.x-_e/xe*Se*ge,je=Te.z+ve/xe*Se*ge;if(af(rt,je)[0]<3.2)continue;let vt=C(rt,je);if(vt.ny<.6)continue;let ti=.7+he()*.9;$.position.set(rt,vt.h-.05,je),$.rotation.set(0,he()*3,0),$.scale.set(ti*1.4,ti,ti*1.4),$.updateMatrix(),Q.setMatrixAt(qe,$.matrix);let at=he()<.08;Q.setColorAt(qe,at?Me.set(he()<.5?"#ffe36b":"#ffffff"):Me.setHSL(.22+he()*.06,.55,.45+he()*.12)),qe++}Q.count=qe}i("terrain"),b(),i("water"),O(),ee(),i("landmarks"),ne(),le(),ze(),ct(),We(),ft(),Xt(),ce(),i("forest"),Ae(),Ee(),De();let lt=new w(-.97,.16,.1).normalize(),it=new w(-.4,.62,.68).normalize(),ut={climb:{sun:"#ffe9c8",shade:"#b9b4d8",sky:"#d6e6f8",ground:"#e0c79a",fog:"#f4e6d2",fogSun:"#fff2dc",den:.0011,zen:"#3b86d8",mid:"#9ccaf0",hor:"#fbe9d2",glow:"#fff1d6",glowK:1.2},map:{sun:"#fff8ec",shade:"#98a2d2",sky:"#c4e2ff",ground:"#cdb98d",fog:"#d2e6f6",fogSun:"#fff2dc",den:2e-4,zen:"#2c7ad3",mid:"#78b8ee",hor:"#e9f4fb",glow:"#fff4e0",glowK:.6}},gt=new pe,L=new pe;function Ot(B){let N=ut.climb,P=ut.map,q=(Q,$,Me)=>Q.value.copy(gt.set($)).lerp(L.set(Me),B);ai.uSunDir.value.copy(lt).lerp(it,B).normalize(),q(ai.uSunCol,N.sun,P.sun),q(ai.uShadeCol,N.shade,P.shade),q(ai.uSkyCol,N.sky,P.sky),q(ai.uGroundCol,N.ground,P.ground),q(ai.uFogCol,N.fog,P.fog),q(ai.uFogSun,N.fogSun,P.fogSun),ai.uFogDen.value=Kt(N.den,P.den,B),q(d.uZen,N.zen,P.zen),q(d.uMid,N.mid,P.mid),q(d.uHor,N.hor,P.hor),q(d.uGlow,N.glow,P.glow),d.uGlowK.value=Kt(N.glowK,P.glowK,B)}Ot(1);let _t={target:new w(-40,10,-30),dist:1e3,polar:60,az:17,fov:50},R={hakurei:{p:new w(414,Ni.h+5,0),view:[86,62,36]},genbu:{p:new w(-112,$t[4].h+8,-285),view:[120,58,70]},village:{p:new w($t[0].x,$t[0].h+3,$t[0].z),view:[165,54,45]},eientei:{p:new w($t[1].x,$t[1].h+4,$t[1].z),view:[130,52,40]},sdm:{p:new w($t[2].x,$t[2].h+9,$t[2].z),view:[170,60,50]},kourindou:{p:new w($t[3].x,$t[3].h+3,$t[3].z),view:[62,60,40]},hakugyokurou:{p:new w(-400,248,262),view:[190,70,30]}};function S(B,N,P,q,Q){let $=wn.degToRad(P),Me=wn.degToRad(q),Te=Q?1.55:1;return new w(Math.sin($)*Math.cos(Me),Math.cos($),Math.sin($)*Math.sin(Me)).multiplyScalar(N*Te).add(B)}let G=B=>({cam:S(_t.target,_t.dist,_t.polar,_t.az,B),target:_t.target.clone(),fov:B?60:_t.fov}),Y=(B,N)=>{let P=R[B];return{cam:S(P.p,P.view[0],P.view[1],P.view[2],N),target:P.p.clone(),fov:N?60:_t.fov}},K={climb0:1,torii:8.05,end:15},ye=K.torii+.25,Ce=[];{let B=0,N=P=>.3+.7*Qt(K.climb0-.6,K.climb0+.8,P)+.2*Qt(6.2,7.6,P);for(let P=0;P<=900;P++)Ce.push(B),B+=N(P/100)*.01}let ie=B=>{let N=ns(B*100,0,900),P=Math.floor(N),q=N-P;return Kt(Ce[P],Ce[Math.min(900,P+1)],q)},ae=46,Pe=B=>ae+ie(B)/ie(K.torii)*(vp-ae),Qe={curve:null,portrait:null};function Oe(B){if(Qe.portrait===B)return Qe.curve;let N=G(B),P=Wi(Pe(ye)).add(new w(0,1.7,0)),q=new jn([P,new w(396,Ni.h+26,2),new w(360,Ni.h+110,30),new w(420,Ni.h+300,90),N.cam],!1,"centripetal");return q.mv=N,q.E=P,Qe.curve=q,Qe.portrait=B,q}let Be=new w,et=new w,ot=new w;function yt(B,N=!1){let P={pos:new w,look:new w,fov:70,roll:0,speed:0,white:0,light:0,bloom:.35,flare:0},q=K.torii+.1;if(P.white=Qt(q-.35,q,B)*(1-Qt(q+.25,q+1.1,B)),B<=ye){let Q=Pe(B),$=Wi(Q,Be),Me=(Pe(B+.02)-Pe(Math.max(B-.02,0)))/.04;P.speed=Me;let Te=Math.sin(B*9.1)*.06+Math.sin(B*15.3)*.03;P.pos.set($.x,$.y+1.7+Te,$.z);let se=Wi(Q+16,et),qe=Qt(6.6,7.9,B)*6;Q+16>Uc&&(se.x-=Q+16-Uc),P.look.set(se.x,se.y+1.4+qe+4*(1-Qt(K.climb0,K.climb0+2,B)),se.z);let we=Wi(Q+8,ot).clone(),be=Wi(Q+20,ot),ge=Math.atan2(be.z-we.z,be.x-we.x)-Math.atan2(we.z-$.z,we.x-$.x);for(;ge>Math.PI;)ge-=Math.PI*2;for(;ge<-Math.PI;)ge+=Math.PI*2;P.roll=ns(-ge*.9,-.3,.3),P.fov=66+16*Qt(K.climb0-.4,K.climb0+1.2,B)+12*Qt(6.8,K.torii,B),P.bloom=.35+.9*Qt(6.6,K.torii,B),P.flare=.45+.55*Qt(5,K.torii-.2,B),P.light=0}else{let Q=ns((B-ye)/(K.end-ye),0,1),$=Oe(N),Me=Q<.3?D0(Q/.3)*.38:.38+.62*R0((Q-.3)/.7);$.getPoint(Me,P.pos);let Te=$.E.clone().add(new w(-260,-60,10));P.look.copy(Te).lerp($.mv.target,R0(ns(Q*1.3,0,1))),P.fov=Kt(104,$.mv.fov,D0(ns(Q*1.6,0,1))),P.bloom=Kt(1.1,.3,Qt(0,.3,Q)),P.flare=Kt(.4,0,Qt(0,.25,Q)),P.speed=30*(1-Qt(0,.3,Q)),P.light=1}if(N){let Q=2*Math.atan(Math.tan(wn.degToRad(P.fov)/2)*16/9)*(B<=ye?.66:.9);P.fov=wn.radToDeg(2*Math.atan(Math.tan(Q/2)*16/9)),B>ye&&(P.fov=Kt(P.fov,G(!0).fov,Qt(.5,1,(B-ye)/(K.end-ye))))}return P}function H(B,N=!1){let P=yt(B,N);return r.position.copy(P.pos),r.up.set(0,1,0),r.lookAt(P.look),r.rotateZ(P.roll),r.fov=P.fov,r.updateProjectionMatrix(),Ot(Qt(K.torii,K.torii+.3,B)),B<ye?h(P.pos,80):h(new w(60,60,0),700),Ie(B),P}function Ie(B){ai.uTime.value=B;for(let N of o)N(B)}function re(B,N,P){r.position.copy(B),r.up.set(0,1,0),r.lookAt(N),r.fov=P,r.updateProjectionMatrix()}function Ne(){let B=r.position.clone().addScaledVector(ai.uSunDir.value,5e3).project(r);return{x:B.x*.5+.5,y:B.y*.5+.5,front:B.z<1}}let Ge=`
    uniform vec4 uBox; uniform vec3 uSunDir;
    varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vAw;
    #include <common>
    #include <color_pars_vertex>
    #include <shadowmap_pars_vertex>
    void main(){
      vUv = uv; vAw = 0.0;
      #include <color_vertex>
      vec4 ip = modelMatrix * instanceMatrix * vec4(0.0, uBox.x, 0.0, 1.0);
      float sx = length(instanceMatrix[0].xyz), sy = length(instanceMatrix[1].xyz);
      vec3 camR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
      vec3 camU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
      vec3 toCam = normalize(cameraPosition - ip.xyz);
      vec3 wp3 = ip.xyz + camR * position.x * uBox.y * sx + camU * position.y * uBox.y * sy + toCam * uBox.z * sx;
      vec4 worldPosition = vec4(wp3, 1.0);
      vec4 mvPosition = viewMatrix * worldPosition;
      gl_Position = projectionMatrix * mvPosition;
      vW = wp3; vN = toCam;
      vec3 transformedNormal = (viewMatrix * vec4(uSunDir, 0.0)).xyz;
      worldPosition.xyz += uSunDir * uBox.y * sx * 0.9;   // look up shadows at the sunlit top of the crown
      #include <shadowmap_vertex>
    }`;function de(B,N,P=512){B.computeBoundingSphere();let q=B.boundingSphere,Q=q.radius*.92,$=new An(-Q,Q,Q,-Q,.1,Q*8),Me=wn.degToRad(35);$.position.copy(q.center).add(new w(Math.cos(Me),Math.sin(Me),0).multiplyScalar(Q*3)),$.lookAt(q.center);let Te=new wt({side:Jt,uniforms:{uMap:{value:N}},vertexShader:"varying vec3 vN; varying vec2 vUv; void main(){ vUv = uv; vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform sampler2D uMap; varying vec3 vN; varying vec2 vUv; void main(){ if (texture2D(uMap, vUv).a < 0.45) discard; vec3 n = normalize(vN); if (n.z < 0.0) n.z = -n.z * 0.3; gl_FragColor = vec4(normalize(n) * 0.5 + 0.5, 1.0); }"}),se=new Ln;se.add(new Pt(B,Te));let qe=new It(P,P,{samples:4}),we=n.getRenderTarget(),be=n.getClearColor(new pe),ge=n.getClearAlpha();n.setRenderTarget(qe),n.setClearColor(new pe(.5,.5,1),0),n.clear(),n.render(se,$);let ve=new Uint8Array(P*P*4);n.readRenderTargetPixels(qe,0,0,P,P,ve),n.setRenderTarget(we),n.setClearColor(be,ge),qe.dispose(),Te.dispose();for(let xe=0;xe<ve.length;xe+=4)ve[xe+3]<8&&(ve[xe]=128,ve[xe+1]=128,ve[xe+2]=255,ve[xe+3]=0);let _e=new Ui(ve,P,P,Pi);return _e.generateMipmaps=!0,_e.minFilter=fn,_e.magFilter=Ht,_e.anisotropy=4,_e.needsUpdate=!0,{tex:_e,cy:q.center.y,half:Q}}let tt=!1;function Ke({near:B=240,far:N=330}={}){if(tt)return;tt=!0,ai.uLod.value.set(B,N);let P=new Gi(2,2),q=new Map;for(let Q of c){let $=Q.mesh;q.has(Q.geo.uuid+Q.tex.uuid)||q.set(Q.geo.uuid+Q.tex.uuid,de(Q.geo,Q.tex));let Me=q.get(Q.geo.uuid+Q.tex.uuid),Te=Ut("#ffffff",{map:Me.tex,alphaTest:.5,rim:.35,wrap:.35});Te.vertexShader=Ge,Te.defines.IMPOSTOR="",Te.defines.LODFADE="",Te.uniforms.uBox={value:new Ft(Me.cy,Me.half,Me.half*.6,0)},Te.uniforms.uTint={value:Q.tex===c[2].tex?new w(.8,.62,.72):new w(.8,.8,.8)},n.capabilities.isWebGL2&&(Te.defines.A2C="",Te.alphaToCoverage=!0);let se=new yn(P,Te,$.instanceMatrix.count);se.instanceMatrix=$.instanceMatrix,se.instanceColor=$.instanceColor,se.count=$.count,se.frustumCulled=!1,se.castShadow=!1,se.receiveShadow=!0,s.add(se),$.material.defines.LODFADE="",$.material.needsUpdate=!0}}return{scene:s,camera:r,sun:u,LIGHT:ai,setLight:Ot,setShadowBox:h,applyFilm:H,filmPose:yt,update:Ie,setCamera:re,mapView:G,placeView:Y,PLACE_VIEWS:R,anchors:l,T:K,sunScreen:Ne,ground:C,enableTreeLod:Ke}}var sE=(()=>{let n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new nt;return t.setAttribute("position",new ht(n,3)),t.setAttribute("uv",new ht(e,2)),t})(),pn=class Ep{static get fullscreenGeometry(){return sE}constructor(e="Pass",t=new Ln,i=new An){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Pt(Ep.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Ln),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Vn){}render(e,t,i,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(let e of Object.keys(this)){let t=this[e];(t instanceof It||t instanceof ci||t instanceof ri||t instanceof Ep)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},rE=class extends pn{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,s){let r=n.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},aE=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,Y0="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Z0=class extends wt{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new st(null),depthBuffer:new st(null),channelWeights:new st(null),opacity:new st(1)},blending:di,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:aE,vertexShader:Y0}),this.depthFunc=or}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){let e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){let e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},oE=class extends pn{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new Z0,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new It(1,1,{minFilter:Ht,magFilter:Ht,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,s){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==jt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===Ct&&(this.renderTarget.texture.colorSpace=Ct))}},V0=new pe,q0=class extends pn{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,s){let r=this.overrideClearColor,a=this.overrideClearAlpha,o=n.getClearAlpha(),l=r!==null,c=a>=0;l?(n.getClearColor(V0),n.setClearColor(r,c?a:o)):c&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),l?n.setClearColor(V0,o):c&&n.setClearAlpha(o)}},lE=class extends pn{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new q0(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,s){let r=n.getContext(),a=n.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,f=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,u,4294967295),a.stencil.setClear(f),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(n,null):(c.render(n,e),c.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,l)):(n.setRenderTarget(e),n.render(o,l),n.setRenderTarget(t),n.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}};function cE(n,e){let t=n.getContext();if(e<=0||typeof t.renderbufferStorageMultisample!="function")return 0;let i=t.getParameter(t.MAX_SAMPLES),s=Math.min(e,i);if(s<=0)return 0;let r=t.getParameter(t.RENDERBUFFER_BINDING),a=t.createRenderbuffer();try{return t.bindRenderbuffer(t.RENDERBUFFER,a),t.renderbufferStorageMultisample(t.RENDERBUFFER,s,t.RGBA8,1,1),s}catch{return 0}finally{t.bindRenderbuffer(t.RENDERBUFFER,r),t.deleteRenderbuffer(a)}}var Sp=1/1e3,uE=1e3,hE=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*Sp}get fixedDelta(){return this._fixedDelta*Sp}set fixedDelta(n){this._fixedDelta=n*uE}get elapsed(){return this._elapsed*Sp}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Q0=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:s=jt}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new oE,this.depthRenderTarget=null,this.passes=[],this.timer=new hE,this.autoRenderToScreen=!0,this.setRenderer(n)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(n){let e=this.renderer===null?n:cE(this.renderer,n);this.multisampling!==e&&(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){let e=n.getSize(new J),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===jt&&n.outputColorSpace===Ct&&(this.inputBuffer.texture.colorSpace=Ct,this.outputBuffer.texture.colorSpace=Ct,this.inputBuffer.dispose(),this.outputBuffer.dispose());let s=this.multisampling;this.multisampling=s,n.autoClear=!1,this.setSize(e.width,e.height);for(let r of this.passes)r.initialize(n,t,i)}}replaceRenderer(n,e=!0){let t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){let n=new cn;n.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(n.format=Gn,n.type=xs):n.type=Di;let e=new cn;e.format=n.format,e.type=n.type,e.name="EffectComposer.OutputDepth";let t=new cn;t.format=n.format,t.type=n.type,t.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=n,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();let{width:i,height:s}=this.inputBuffer;this.depthRenderTarget=new It(i,s,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:t})}blitDepthBuffer(n){let e=this.renderer,t=this.depthRenderTarget,i=e.properties,s=e.getContext();e.setRenderTarget(t);let r=i.get(n).__webglFramebuffer,a=i.get(t).__webglFramebuffer,o=n.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,o,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){let n=this.stableDepthTexture;for(let e of this.passes)e.getDepthTexture()===n&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(n,e,t,i){let s=this.renderer,r=s===null?new J:s.getDrawingBufferSize(new J),a=new It(r.width,r.height,{minFilter:Ht,magFilter:Ht,samples:i,stencilBuffer:e,depthBuffer:n,type:t});return t===jt&&s!==null&&s.outputColorSpace===Ct&&(a.texture.colorSpace=Ct),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(n){for(let e of this.passes)e.mainScene=n}setMainCamera(n){for(let e of this.passes)e.mainCamera=n}addPass(n,e){let t=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new J),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(s.width,s.height),n.initialize(i,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(let o of t)o.setDepthTexture(this.stableDepthTexture)}else n.setDepthTexture(this.stableDepthTexture)}removePass(n){let e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){let r=this.stableDepthTexture;if(r!==null){let a=(l,c)=>l||c.needsDepthTexture;e.reduce(a,!1)||(n.getDepthTexture()===r&&n.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){let n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){let e=this.renderer,t=this.copyPass,i=this.inputBuffer,s=this.outputBuffer,r,a=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(let o of this.passes)if(o.enabled){if(o.render(e,i,s,n,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){t.renderToScreen=o.renderToScreen;let l=e.getContext(),c=e.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),t.render(e,i,s,n,a),c.setFunc(l.EQUAL,1,4294967295)}r=i,i=s,s=r}o instanceof lE?a=!0:o instanceof rE&&(a=!1)}}setSize(n,e,t){let i=this.renderer,s=i.getSize(new J);(n===void 0||e===void 0)&&(n=s.width,e=s.height),(s.width!==n||s.height!==e)&&i.setSize(n,e,t);let r=i.getDrawingBufferSize(new J);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(let a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let n of this.passes)n.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],pn.fullscreenGeometry.dispose()}},Yn={NONE:0,DEPTH:1,CONVOLUTION:2},Wt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},fE=class{constructor(){this.shaderParts=new Map([[Wt.FRAGMENT_HEAD,null],[Wt.FRAGMENT_MAIN_UV,null],[Wt.FRAGMENT_MAIN_IMAGE,null],[Wt.VERTEX_HEAD,null],[Wt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Yn.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Kn}};var Mp=!1,W0=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Jt:t=this.materialsFlatShadedDoubleSide;break;case ui:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Jt:t=this.materialsDoubleSide;break;case ui:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof wt))return n.clone();let e=n.uniforms,t=new Map;for(let s in e){let r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}let i=n.clone();for(let s of t)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){let e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(let t of e)t.uniforms=Object.assign({},n.uniforms),t.side=hn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=ui,i}),this.materialsDoubleSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Jt,i}),this.materialsFlatShaded=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=ui,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Jt,i})}}render(n,e,t){let i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,Mp){let s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(let r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{let s=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=s}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){let n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Mp}static set workaroundEnabled(n){Mp=n}};var Zs=-1,ss=class extends Ai{constructor(n=null,e=Zs,t=Zs,i=1){super(),n!==null&&this.addEventListener("change",()=>n.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new J(1,1),this.preferredSize=new J(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new J,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){let n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==Zs?t.width=e.width:e.height!==Zs?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==Zs?t.height=e.height:e.width!==Zs?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(Zs),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return Zs}};var Nt={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},dE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",mE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_E="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",SE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ME="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",IE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",NE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",OE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",HE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",GE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",VE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",WE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",XE=new Map([[Nt.ADD,dE],[Nt.ALPHA,pE],[Nt.AVERAGE,mE],[Nt.COLOR,gE],[Nt.COLOR_BURN,vE],[Nt.COLOR_DODGE,xE],[Nt.DARKEN,_E],[Nt.DIFFERENCE,yE],[Nt.DIVIDE,SE],[Nt.DST,null],[Nt.EXCLUSION,ME],[Nt.HARD_LIGHT,AE],[Nt.HARD_MIX,EE],[Nt.HUE,TE],[Nt.INVERT,wE],[Nt.INVERT_RGB,bE],[Nt.LIGHTEN,CE],[Nt.LINEAR_BURN,RE],[Nt.LINEAR_DODGE,DE],[Nt.LINEAR_LIGHT,PE],[Nt.LUMINOSITY,IE],[Nt.MULTIPLY,UE],[Nt.NEGATION,LE],[Nt.NORMAL,BE],[Nt.OVERLAY,NE],[Nt.PIN_LIGHT,FE],[Nt.REFLECT,OE],[Nt.SATURATION,HE],[Nt.SCREEN,zE],[Nt.SOFT_LIGHT,kE],[Nt.SRC,GE],[Nt.SUBTRACT,VE],[Nt.VIVID_LIGHT,WE]]),YE=class extends Ai{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new st(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return XE.get(this.blendFunction)}};var lo=class extends Ai{constructor(n,e,{attributes:t=Yn.NONE,blendFunction:i=Nt.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new YE(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Kn,this._outputColorSpace=nn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=Vn){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(let n of Object.keys(this)){let e=this[n];(e instanceof It||e instanceof ci||e instanceof ri||e instanceof pn)&&this[n].dispose()}}};var Tp={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},ZE=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,qE="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",QE=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],KE=class extends wt{constructor(n=new Ft){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new st(null),texelSize:new st(new Ft),scale:new st(1),kernel:new st(0)},blending:di,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ZE,vertexShader:qE}),this.setTexelSize(n.x,n.y),this.kernelSize=Tp.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return QE[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){let t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},JE=class extends pn{constructor({kernelSize:n=Tp.MEDIUM,resolutionScale:e=.5,width:t=ss.AUTO_SIZE,height:i=ss.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new It(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";let a=this.resolution=new ss(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new KE,this._blurMaterial.kernelSize=n,this.copyMaterial=new Z0}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){let r=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence,f=e;this.fullscreenMaterial=c;for(let h=0,d=u.length;h<d;++h){let p=(h&1)===0?o:l;c.kernel=u[h],c.inputBuffer=f.texture,n.setRenderTarget(p),n.render(r,a),f=p}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=f.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(r,a)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e);let i=t.width,s=t.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==jt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===Ct&&(this.renderTargetA.texture.colorSpace=Ct,this.renderTargetB.texture.colorSpace=Ct))}static get AUTO_SIZE(){return ss.AUTO_SIZE}},jE=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,$E=class extends wt{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:"186".replace(/\D+/g,"")},uniforms:{inputBuffer:new st(null),threshold:new st(0),smoothing:new st(1),range:new st(null)},blending:di,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:jE,vertexShader:Y0}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},e1=class extends pn{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:s=ss.AUTO_SIZE,height:r=ss.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new $E(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new It(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");let l=this.resolution=new ss(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,s){let r=this.fullscreenMaterial;r.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==jt&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},t1=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,i1="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",n1=class extends wt{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new st(null),texelSize:new st(new J)},blending:di,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:t1,vertexShader:i1})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},s1=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,r1="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",a1=class extends wt{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new st(null),supportBuffer:new st(null),texelSize:new st(new J),radius:new st(.85)},blending:di,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:s1,vertexShader:r1})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},o1=class extends pn{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new It(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new n1,this.upsamplingMaterial=new a1,this.resolution=new J}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){let e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){let i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){let s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,s){let{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this,f=e;this.fullscreenMaterial=o;for(let h=0,d=c.length;h<d;++h){let p=c[h];o.setSize(f.width,f.height),o.inputBuffer=f.texture,n.setRenderTarget(p),n.render(r,a),f=p}this.fullscreenMaterial=l;for(let h=u.length-1;h>=0;--h){let d=u[h];l.setSize(f.width,f.height),l.inputBuffer=f.texture,l.supportBuffer=c[h].texture,n.setRenderTarget(d),n.render(r,a),f=d}}setSize(n,e){let t=this.resolution;t.set(n,e);let i=t.width,s=t.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(n,e,t){if(t!==void 0){let i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(let s of i)s.texture.type=t;if(t!==jt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===Ct)for(let s of i)s.texture.colorSpace=Ct}}dispose(){super.dispose();for(let n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},l1=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,K0=class extends lo{constructor({blendFunction:n=Nt.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:i=!0,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:o=Tp.LARGE,resolutionScale:l=.5,width:c=ss.AUTO_SIZE,height:u=ss.AUTO_SIZE,resolutionX:f=c,resolutionY:h=u}={}){super("BloomEffect",l1,{blendFunction:n,uniforms:new Map([["map",new st(null)],["intensity",new st(s)]])}),this.renderTarget=new It(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new JE({kernelSize:o}),this.luminancePass=new e1({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new o1,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;let d=this.resolution=new ss(this,f,h,l);d.addEventListener("change",p=>this.setSize(d.baseWidth,d.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){let i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,s.renderTarget):this.blurPass.render(n,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n!==null&&n.outputColorSpace===Ct&&(this.renderTarget.texture.colorSpace=Ct))}};var J0=class extends pn{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new q0,this.overrideMaterialManager=t===null?null:new W0(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){let n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){let e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new W0(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,s){let r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,u=n.shadowMap.autoUpdate,f=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(f),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,r,a):n.render(r,a),a.layers.mask=l,r.background=c,n.shadowMap.autoUpdate=u}};var j1=Math.PI*.5;var c1=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,u1="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",h1=class extends wt{constructor(n,e,t,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:"186".replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new st(null),depthBuffer:new st(null),resolution:new st(new J),texelSize:new st(new J),cameraNear:new st(.3),cameraFar:new st(1e3),aspect:new st(1),time:new st(0)},blending:di,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=Vn){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=c1.replace(Wt.FRAGMENT_HEAD,n.get(Wt.FRAGMENT_HEAD)||"").replace(Wt.FRAGMENT_MAIN_UV,n.get(Wt.FRAGMENT_MAIN_UV)||"").replace(Wt.FRAGMENT_MAIN_IMAGE,n.get(Wt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=u1.replace(Wt.VERTEX_HEAD,n.get(Wt.VERTEX_HEAD)||"").replace(Wt.VERTEX_MAIN_SUPPORT,n.get(Wt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(let e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(let e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(let e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof li?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){let t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return Wt}};var eT=Number("186".replace(/\D+/g,"")),kr=255/256,tT=new Float32Array([kr/256**3,kr/256**2,kr/256,kr]),iT=new Float32Array([kr,kr/256,kr/256**2,1/256**3]);function X0(n,e,t){for(let i of e){let s="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(let a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,s))}}function f1(n,e,t){let i=e.getFragmentShader(),s=e.getVertexShader(),r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&Yn.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{let o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts,c=l.get(Wt.FRAGMENT_HEAD)||"",u=l.get(Wt.FRAGMENT_MAIN_UV)||"",f=l.get(Wt.FRAGMENT_MAIN_IMAGE)||"",h=l.get(Wt.VERTEX_HEAD)||"",d=l.get(Wt.VERTEX_MAIN_SUPPORT)||"",p=new Set,v=new Set;if(a&&(u+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){let x=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);d+=`	${n}MainSupport(`,d+=x?`vUv);
`:`);
`;for(let M of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(let y of M[1].split(/\s*,\s*/))t.varyings.add(y),p.add(y),v.add(y);for(let M of s.matchAll(o))v.add(M[1])}for(let x of i.matchAll(o))v.add(x[1]);for(let x of e.defines.keys())v.add(x.replace(/\([\w\s,]*\)/g,""));for(let x of e.uniforms.keys())v.add(x);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((x,M)=>t.uniforms.set(n+M.charAt(0).toUpperCase()+M.slice(1),x)),e.defines.forEach((x,M)=>t.defines.set(n+M.charAt(0).toUpperCase()+M.slice(1),x));let g=new Map([["fragment",i],["vertex",s]]);X0(n,v,t.defines),X0(n,v,g),i=g.get("fragment"),s=g.get("vertex");let m=e.blendMode;if(t.blendModes.set(m.blendFunction,m),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(f+=e.inputColorSpace===Ct?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==nn?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);let x=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;f+=`${n}MainImage(color0, UV, `,(t.attributes&Yn.DEPTH)!==0&&x.test(i)&&(f+="depth, ",t.readDepth=!0),f+=`color1);
	`;let M=n+"BlendOpacity";t.uniforms.set(M,m.opacity),f+=`color0 = blend${m.blendFunction}(color0, color1, ${M});

	`,c+=`uniform float ${M};

`}if(c+=i+`
`,s!==null&&(h+=s+`
`),l.set(Wt.FRAGMENT_HEAD,c),l.set(Wt.FRAGMENT_MAIN_UV,u),l.set(Wt.FRAGMENT_MAIN_IMAGE,f),l.set(Wt.VERTEX_HEAD,h),l.set(Wt.VERTEX_MAIN_SUPPORT,d),e.extensions!==null)for(let x of e.extensions)t.extensions.add(x)}}var Bc=class extends pn{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new h1(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(let e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(let e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){let e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(let e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(let e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){let n=new fE,e=0;for(let a of this.effects)if(a.blendMode.blendFunction===Nt.DST)n.attributes|=a.getAttributes()&Yn.DEPTH;else{if((n.attributes&a.getAttributes()&Yn.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);f1("e"+e++,a,n)}let t=n.shaderParts.get(Wt.FRAGMENT_HEAD),i=n.shaderParts.get(Wt.FRAGMENT_MAIN_IMAGE),s=n.shaderParts.get(Wt.FRAGMENT_MAIN_UV),r=/\bblend\b/g;for(let a of n.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(n.attributes&Yn.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===Ct&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(Wt.FRAGMENT_HEAD,t),n.shaderParts.set(Wt.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(Wt.FRAGMENT_MAIN_UV,s);for(let[a,o]of n.shaderParts)o!==null&&n.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=Vn){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(let t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,s){for(let r of this.effects)r.update(n,e,i);if(!this.skipRendering||this.renderToScreen){let r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(let t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(let i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==jt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(let n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){n.type==="change"&&this.recompile()}};var sT=[new Float32Array(3),new Float32Array(3)],rT=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],aT=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];var oT=[new Float32Array(2),new Float32Array(2)];var lT=new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),cT=[new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125])],uT=[new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4])],hT=[new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3])];var fT=new Map([[Xi(0,0,0,0),new Float32Array([0,0,0,0])],[Xi(0,0,0,1),new Float32Array([0,0,0,1])],[Xi(0,0,1,0),new Float32Array([0,0,1,0])],[Xi(0,0,1,1),new Float32Array([0,0,1,1])],[Xi(0,1,0,0),new Float32Array([0,1,0,0])],[Xi(0,1,0,1),new Float32Array([0,1,0,1])],[Xi(0,1,1,0),new Float32Array([0,1,1,0])],[Xi(0,1,1,1),new Float32Array([0,1,1,1])],[Xi(1,0,0,0),new Float32Array([1,0,0,0])],[Xi(1,0,0,1),new Float32Array([1,0,0,1])],[Xi(1,0,1,0),new Float32Array([1,0,1,0])],[Xi(1,0,1,1),new Float32Array([1,0,1,1])],[Xi(1,1,0,0),new Float32Array([1,1,0,0])],[Xi(1,1,0,1),new Float32Array([1,1,0,1])],[Xi(1,1,1,0),new Float32Array([1,1,1,0])],[Xi(1,1,1,1),new Float32Array([1,1,1,1])]]);function Ap(n,e,t){return n+(e-n)*t}function Xi(n,e,t,i){let s=Ap(n,e,.75),r=Ap(t,i,1-.25);return Ap(s,r,1-.125)}var wp=class extends lo{constructor(e=3){super("Kuwahara",`
      uniform float uR;
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor){
        vec3 m[4]; vec3 s[4];
        for (int k = 0; k < 4; k++) { m[k] = vec3(0.0); s[k] = vec3(0.0); }
        float n = 0.0;
        for (int j = 0; j <= RAD; j++) for (int i = 0; i <= RAD; i++) {
          vec2 o = vec2(float(i), float(j)) * texelSize * uR / float(RAD);
          vec3 c0 = texture2D(inputBuffer, uv + vec2(-o.x, -o.y)).rgb;
          vec3 c1 = texture2D(inputBuffer, uv + vec2( o.x, -o.y)).rgb;
          vec3 c2 = texture2D(inputBuffer, uv + vec2(-o.x,  o.y)).rgb;
          vec3 c3 = texture2D(inputBuffer, uv + vec2( o.x,  o.y)).rgb;
          m[0] += c0; s[0] += c0 * c0; m[1] += c1; s[1] += c1 * c1; m[2] += c2; s[2] += c2 * c2; m[3] += c3; s[3] += c3 * c3;
          n += 1.0;
        }
        float best = 1e9; vec3 col = inputColor.rgb;
        for (int k = 0; k < 4; k++) { vec3 mu = m[k] / n; vec3 v = abs(s[k] / n - mu * mu); float sv = v.r + v.g + v.b; if (sv < best) { best = sv; col = mu; } }
        outputColor = vec4(col, inputColor.a);
      }`,{attributes:Yn.CONVOLUTION,defines:new Map([["RAD",String(Math.max(1,Math.round(e)))]]),uniforms:new Map([["uR",new st(e)]])})}};function d1(n){let e=2/n,t=(e+Math.cos(.58))/Math.sin(.58)**2,i=[],s=new Array(8).fill(0);for(let r=-n;r<=n;r++)for(let a=-n;a<=n;a++){let o=a/(2*n),l=r/(2*n);if(o*o+l*l>.25)continue;let c=new Array(8),u,f=e-t*o*o,h=e-t*l*l;u=Math.max(0,l+f),c[0]=u*u,u=Math.max(0,-o+h),c[2]=u*u,u=Math.max(0,-l+f),c[4]=u*u,u=Math.max(0,o+h),c[6]=u*u;let d=Math.SQRT1_2*(o-l),p=Math.SQRT1_2*(o+l);f=e-t*d*d,h=e-t*p*p,u=Math.max(0,p+f),c[1]=u*u,u=Math.max(0,-d+h),c[3]=u*u,u=Math.max(0,-p+f),c[5]=u*u,u=Math.max(0,d+h),c[7]=u*u;let v=c.reduce((x,M)=>x+M,0),g=Math.exp(-3.125*(o*o+l*l))/Math.max(v,1e-5),m=c.map(x=>x*g);m.forEach((x,M)=>{s[M]+=x}),i.push({i:a,j:r,ws:m})}for(let r of i)r.ws=r.ws.map((a,o)=>a/s[o]).map(a=>a<.004?0:a);return i}var bp=class extends lo{constructor(e=3){let t=Math.max(1,Math.round(e)),i=o=>o.toFixed(5),s="";for(let o of d1(t))s+=`c = clamp(texture2D(inputBuffer, uv + vec2(${i(o.i)}, ${i(o.j)}) * texelSize).rgb, 0.0, 1.0); cc = c * c;
`,o.ws.forEach((l,c)=>{l&&(s+=`m${c} += c * ${i(l)}; s${c} += cc * ${i(l)};
`)});let r=[0,1,2,3,4,5,6,7].map(o=>`vec3 m${o} = vec3(0.0), s${o} = vec3(0.0);`).join(" "),a=[0,1,2,3,4,5,6,7].map(o=>`mu[${o}] = m${o}; { vec3 v = abs(s${o} - m${o} * m${o}); sg[${o}] = v.r + v.g + v.b; }`).join(`
`);super("SmoothKuwahara",`
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor){
        ${r}
        vec3 c, cc;
        ${s}
        vec3 mu[8]; float sg[8];
        ${a}
        /* weights are relative to the least varied sector, so strong edges never underflow to black */
        float sgMin = sg[0]; for (int k = 1; k < 8; k++) sgMin = min(sgMin, sg[k]);
        vec4 outc = vec4(0.0);
        for (int k = 0; k < 8; k++) { float wk = 1.0 / (1.0 + pow(HARD * 1000.0 * max(sg[k] - sgMin, 0.0), 2.0)); outc += vec4(mu[k] * wk, wk); }
        vec3 col = outc.rgb / outc.w;
        /* keep highlights above 1 (sun, bullets) from the original pixel */
        col += max(inputColor.rgb - 1.0, 0.0);
        outputColor = vec4(col, inputColor.a);
      }`,{attributes:Yn.CONVOLUTION,defines:new Map([["HARD","6.0"]])})}},Cp=class extends pn{constructor(){super("AccumPass");let e={type:Ji,depthBuffer:!1};this.rt=[new It(1,1,e),new It(1,1,e)],this.i=0,this.n=0,this.window=8;let t="varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 1.0, 1.0); }";this.blend=new wt({depthTest:!1,depthWrite:!1,uniforms:{tCur:{value:null},tPrev:{value:null},uW:{value:1}},vertexShader:t,fragmentShader:"uniform sampler2D tCur, tPrev; uniform float uW; varying vec2 vUv; void main(){ gl_FragColor = vec4(mix(texture2D(tPrev, vUv).rgb, texture2D(tCur, vUv).rgb, uW), 1.0); }"}),this.copy=new wt({depthTest:!1,depthWrite:!1,uniforms:{tMap:{value:null}},vertexShader:t,fragmentShader:`uniform sampler2D tMap; varying vec2 vUv; void main(){ gl_FragColor = vec4(texture2D(tMap, vUv).rgb, 1.0);
        #include <colorspace_fragment>
      }`}),this.fullscreenMaterial=this.blend}reset(){this.n=0}render(e,t,i){let s=this.rt[1-this.i];this.blend.uniforms.tCur.value=t.texture,this.blend.uniforms.tPrev.value=this.rt[this.i].texture,this.blend.uniforms.uW.value=Math.max(1/(this.n+1),1/this.window),this.fullscreenMaterial=this.blend,e.setRenderTarget(s),e.render(this.scene,this.camera),this.copy.uniforms.tMap.value=s.texture,this.fullscreenMaterial=this.copy,e.setRenderTarget(this.renderToScreen?null:i),e.render(this.scene,this.camera),this.i=1-this.i,this.n++}setSize(e,t){for(let i of this.rt)i.setSize(e,t);this.n=0}},Rp=class extends lo{constructor(){super("Radial",`
      uniform vec2 uSun; uniform float uShaft, uSpeed; uniform vec3 uShaftCol;
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor){
        vec3 col = inputColor.rgb;
        if (uSpeed > 0.001) {
          vec2 d = uv - vec2(0.5); float r = length(d);
          vec3 acc = vec3(0.0);
          for (int i = 0; i < 10; i++) acc += texture2D(inputBuffer, uv - d * float(i) * 0.0035 * uSpeed).rgb;
          col = mix(col, acc / 10.0, smoothstep(0.25, 0.7, r));
        }
        if (uShaft > 0.001) {
          vec2 d = (uv - uSun) / 28.0; vec2 p = uv; float acc = 0.0, w = 1.0;
          for (int i = 0; i < 28; i++) { p -= d; vec3 c = texture2D(inputBuffer, clamp(p, 0.0, 1.0)).rgb;
            float l = dot(c, vec3(0.3, 0.55, 0.15)); acc += smoothstep(0.80, 0.96, l) * w; w *= 0.965; }
          acc /= 28.0;
          col += uShaftCol * acc * uShaft;
        }
        outputColor = vec4(col, inputColor.a);
      }`,{attributes:Yn.CONVOLUTION,uniforms:new Map([["uSun",new st(new J(.5,.5))],["uShaft",new st(0)],["uSpeed",new st(0)],["uShaftCol",new st(new pe("#fff1d0"))]])})}},Dp=class extends lo{constructor(){super("Grade",`
      uniform vec2 uSun; uniform float uFlare, uWhite, uVig, uGrain, uAspect, uSat, uSeed, uCon;
      float hh(vec2 p){ p = fract(p * vec2(443.897, 441.423)); p += dot(p, p.yx + 19.19); return fract((p.x + p.y) * p.x); }
      vec3 ring(vec2 uv, vec2 c, float r, float w, vec3 col){ vec2 d = (uv - c) * vec2(uAspect, 1.0); float x = length(d); return col * smoothstep(w, 0.0, abs(x - r)) ; }
      vec3 disc(vec2 uv, vec2 c, float r, vec3 col){ vec2 d = (uv - c) * vec2(uAspect, 1.0); float x = length(d); return col * (1.0 - smoothstep(r * 0.75, r, x)); }
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor){
        vec3 c = inputColor.rgb;
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        c = mix(vec3(l), c, uSat);
        c = max((c - 0.45) * uCon + 0.45, 0.0);
        c = mix(c, c * vec3(0.94, 0.95, 1.06) + vec3(0.015, 0.01, 0.04), 1.0 - smoothstep(0.0, 0.45, l));
        c = mix(c, c * vec3(1.04, 1.01, 0.95), smoothstep(0.55, 1.0, l));
        if (uFlare > 0.001) {
          vec2 s = uSun, ax = vec2(0.5) - s; vec3 f = vec3(0.0);
          f += disc(uv, s + ax * 0.55, 0.035, vec3(0.55, 0.85, 0.6)) * 0.22;
          f += disc(uv, s + ax * 0.85, 0.06, vec3(0.6, 0.7, 1.0)) * 0.16;
          f += ring(uv, s + ax * 1.25, 0.11, 0.012, vec3(1.0, 0.75, 0.6)) * 0.12;
          f += disc(uv, s + ax * 1.5, 0.02, vec3(1.0, 0.9, 0.7)) * 0.4;
          f += ring(uv, s + ax * 1.85, 0.2, 0.02, vec3(0.6, 0.85, 1.0)) * 0.08;
          vec2 d = (uv - s) * vec2(uAspect, 1.0);
          float star = pow(max(0.0, 1.0 - abs(d.y) * 60.0), 3.0) * exp(-abs(d.x) * 3.0) + pow(max(0.0, 1.0 - abs(d.x) * 70.0), 3.0) * exp(-abs(d.y) * 6.0) * 0.5;
          f += vec3(1.0, 0.95, 0.85) * (star * 0.6 + exp(-length(d) * 9.0) * 0.5);
          c += f * uFlare;
        }
        vec2 q = (uv - 0.5) * vec2(uAspect, 1.0);
        c *= mix(1.0, 1.0 - uVig, smoothstep(0.45, 1.1, length(q)));
        float g = hh(uv * 1031.0 + uSeed) - 0.5; float fib = hh(floor(uv * vec2(380.0, 90.0)) + 3.1) - 0.5;
        c += (g * 0.022 + fib * 0.012) * uGrain;
        c = mix(c, vec3(1.0, 0.99, 0.97), uWhite);
        outputColor = vec4(c, 1.0);   // opaque: leaf cards write partial alpha into the scene buffer
      }`,{uniforms:new Map([["uSun",new st(new J(.5,.5))],["uFlare",new st(0)],["uWhite",new st(0)],["uVig",new st(.22)],["uGrain",new st(1)],["uAspect",new st(16/9)],["uSat",new st(1.16)],["uCon",new st(1)],["uSeed",new st(0)]])})}};function j0(n,e,t,{kuwahara:i=3,smooth:s=!1,accumulate:r=!1,bloom:a=!0,multisampling:o=0}={}){let l=new Q0(n,{frameBufferType:Ji,multisampling:o});l.addPass(new J0(e,t));let c=i>0?s?new bp(i):new wp(i):null;c&&l.addPass(new Bc(t,c));let u=new Rp,f=a?new K0({mipmapBlur:!0,intensity:.35,luminanceThreshold:.78,luminanceSmoothing:.2,radius:.7}):null;l.addPass(new Bc(t,u));let h=new Dp;l.addPass(f?new Bc(t,f,h):new Bc(t,h));let d=r?new Cp:null;d&&l.addPass(d);let p=g=>u.uniforms.get(g),v=g=>h.uniforms.get(g);return{composer:l,get accumulated(){return d?d.n:0},resetAccum(){d&&d.reset()},set({sun:g,sunFront:m=!0,shaft:x=0,speed:M=0,flare:y=0,white:T=0,bloomK:E=.35,aspect:C,seed:_=0,grain:b,sat:D,con:I}={}){g&&(p("uSun").value.set(g.x,g.y),v("uSun").value.set(g.x,g.y));let O=m&&g&&g.x>-.2&&g.x<1.2&&g.y>-.2&&g.y<1.2?1:0;p("uShaft").value=x*O,p("uSpeed").value=M,v("uFlare").value=y*O,v("uWhite").value=T,v("uSeed").value=_,b!==void 0&&(v("uGrain").value=b),D!==void 0&&(v("uSat").value=D),I!==void 0&&(v("uCon").value=I),C&&(v("uAspect").value=C),f&&(f.intensity=E)},setSize(g,m){l.setSize(g,m)},render(g){l.render(g)}}}var $0={type:"change"},Ip={type:"start"},tv={type:"end"},lf=new Bn,ev=new ki,p1=Math.cos(70*wn.DEG2RAD),Ci=new w,sn=2*Math.PI,ei={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pp=1e-6,cf=class extends Ga{constructor(e,t=null){super(e,t),this.state=ei.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:un.ROTATE,MIDDLE:un.DOLLY,RIGHT:un.PAN},this.touches={ONE:En.ROTATE,TWO:En.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new xi,this._lastTargetPosition=new w,this._quat=new xi().setFromUnitVectors(e.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cr,this._sphericalDelta=new Cr,this._scale=1,this._panOffset=new w,this._rotateStart=new J,this._rotateEnd=new J,this._rotateDelta=new J,this._panStart=new J,this._panEnd=new J,this._panDelta=new J,this._dollyStart=new J,this._dollyEnd=new J,this._dollyDelta=new J,this._dollyDirection=new w,this._mouse=new J,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=g1.bind(this),this._onPointerDown=m1.bind(this),this._onPointerUp=v1.bind(this),this._onContextMenu=E1.bind(this),this._onMouseWheel=y1.bind(this),this._onKeyDown=S1.bind(this),this._onTouchStart=M1.bind(this),this._onTouchMove=A1.bind(this),this._onMouseDown=x1.bind(this),this._onMouseMove=_1.bind(this),this._interceptControlDown=T1.bind(this),this._interceptControlUp=w1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ei.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($0),this.update(),this.state=ei.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ci.copy(t).sub(this.target),Ci.applyQuaternion(this._quat),this._spherical.setFromVector3(Ci),this.autoRotate&&this.state===ei.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=sn:i>Math.PI&&(i-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ci.setFromSpherical(this._spherical),Ci.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ci),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ci.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new w(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new w(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ci.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(lf.origin.copy(this.object.position),lf.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lf.direction))<p1?this.object.lookAt(this.target):(ev.setFromNormalAndCoplanarPoint(this.object.up,this.target),lf.intersectPlane(ev,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pp||this._lastTargetPosition.distanceToSquared(this.target)>Pp?(this.dispatchEvent($0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?sn/60*this.autoRotateSpeed*e:sn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ci.setFromMatrixColumn(t,0),Ci.multiplyScalar(-e),this._panOffset.add(Ci)}_panUp(e,t){this.screenSpacePanning===!0?Ci.setFromMatrixColumn(t,1):(Ci.setFromMatrixColumn(t,0),Ci.crossVectors(this.object.up,Ci)),Ci.multiplyScalar(e),this._panOffset.add(Ci)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ci.copy(s).sub(this.target);let r=Ci.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new J,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function m1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function g1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function v1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tv),this.state=ei.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function x1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case un.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ei.DOLLY;break;case un.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ei.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ei.ROTATE}break;case un.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ei.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ei.PAN}break;default:this.state=ei.NONE}this.state!==ei.NONE&&this.dispatchEvent(Ip)}function _1(n){switch(this.state){case ei.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ei.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function y1(n){this.enabled===!1||this.enableZoom===!1||this.state!==ei.NONE||(n.preventDefault(),this.dispatchEvent(Ip),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(tv))}function S1(n){this.enabled!==!1&&this._handleKeyDown(n)}function M1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case En.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ei.TOUCH_ROTATE;break;case En.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ei.TOUCH_PAN;break;default:this.state=ei.NONE}break;case 2:switch(this.touches.TWO){case En.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ei.TOUCH_DOLLY_PAN;break;case En.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ei.TOUCH_DOLLY_ROTATE;break;default:this.state=ei.NONE}break;default:this.state=ei.NONE}this.state!==ei.NONE&&this.dispatchEvent(Ip)}function A1(n){switch(this._trackPointer(n),this.state){case ei.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ei.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ei.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ei.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ei.NONE}}function E1(n){this.enabled!==!1&&n.preventDefault()}function T1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function w1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Up=new ki,uf=new ka,co=new J,Lp=new w,hf=class extends cf{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:un.PAN,MIDDLE:un.DOLLY,RIGHT:un.ROTATE},this.touches={ONE:En.PAN,TWO:En.DOLLY_ROTATE},this._panWorldStart=new w}_handleMouseDownPan(e){if(super._handleMouseDownPan(e),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;Up.setFromNormalAndCoplanarPoint(this.object.up,this.target);let i=this.domElement.getBoundingClientRect();co.x=(e.clientX-i.left)/i.width*2-1,co.y=-((e.clientY-i.top)/i.height)*2+1,uf.setFromCamera(co,this.object),uf.ray.intersectPlane(Up,this._panWorldStart)}_handleMouseMovePan(e){if(this.screenSpacePanning===!0){super._handleMouseMovePan(e);return}let i=this.domElement.getBoundingClientRect();co.x=(e.clientX-i.left)/i.width*2-1,co.y=-((e.clientY-i.top)/i.height)*2+1,uf.setFromCamera(co,this.object),uf.ray.intersectPlane(Up,Lp)&&(Lp.sub(this._panWorldStart),this._panOffset.copy(Lp).negate(),this.update())}};var b1=(n,e,t)=>{let i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)};function iv(n,{max:e=1400}={}){let t=new Float32Array(e*3),i=new Float32Array(e*3),s=new Float32Array(e),r=new nt;r.setAttribute("position",new ht(t,3)),r.setAttribute("color",new ht(i,3)),r.setAttribute("alpha",new ht(s,1));let a=new wt({transparent:!0,depthWrite:!1,blending:Wa,uniforms:{uScale:{value:400}},vertexShader:`attribute vec3 color; attribute float alpha; varying vec3 vC; varying float vA; uniform float uScale;
      void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = clamp(1.6 * uScale / -mv.z, 6.0, 44.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec3 vC; varying float vA;
      void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; if (d > 1.0) discard;
        vec3 c = mix(vec3(1.0), vC, smoothstep(0.2, 0.55, d));
        float a = (1.0 - smoothstep(0.55, 1.0, d)) * 0.95 + (1.0 - smoothstep(0.0, 0.45, d)) * 0.5;
        gl_FragColor = vec4(c * a * vA * 1.4, 1.0);
        #include <colorspace_fragment>
      }`}),o=new Fs(r,a);o.frustumCulled=!1,o.renderOrder=5,n.add(o);let l=[],c=new w(0,1,0);function u(d,p,v,g,m,{tilt:x=0,life:M=2.6,normal:y=c}={}){let T=y.clone().normalize(),E=Math.abs(T.y)>.99?new w(1,0,0):new w().crossVectors(T,c).normalize(),C=new w().crossVectors(E,T).normalize();E.applyAxisAngle(T,x),C.applyAxisAngle(T,x),l.push({t0:d,c:p.clone(),n:v,speed:g,col:new pe(m),life:M,rot:Math.random()*6.28,u:E,v:C}),l.length>40&&l.splice(0,l.length-40)}function f(d,p,v){a.uniforms.uScale.value=p/(2*Math.tan(wn.degToRad(v)/2));let g=0;for(let m=l.length-1;m>=0;m--)d-l[m].t0>l[m].life&&l.splice(m,1);for(let m of l){let x=d-m.t0;if(x<0)continue;let M=m.speed*x*(1-x/(m.life*2.2)),y=Math.min(1,x*4)*(1-b1(m.life*.6,m.life,x));for(let T=0;T<m.n&&g<e;T++,g++){let E=m.rot+T/m.n*Math.PI*2+x*.25,C=Math.cos(E)*M,_=Math.sin(E)*M;t[g*3]=m.c.x+m.u.x*C+m.v.x*_,t[g*3+1]=m.c.y+m.u.y*C+m.v.y*_,t[g*3+2]=m.c.z+m.u.z*C+m.v.z*_,i[g*3]=m.col.r,i[g*3+1]=m.col.g,i[g*3+2]=m.col.b,s[g]=y}}r.attributes.position.needsUpdate=r.attributes.color.needsUpdate=r.attributes.alpha.needsUpdate=!0,r.setDrawRange(0,g),o.visible=g>0}function h(d,p,v){u(d,p,24,13,v,{life:2.6}),u(d+.25,p.clone().add(new w(0,3,0)),18,9,"#ffffff",{life:2.2,tilt:.4,normal:new w(.3,1,.2)})}return{ring:u,burst:h,update:f,get active(){return l.length}}}function nv(n,e,{count:t=260,spread:i=70,height:s=26}={}){let r=(()=>{let d=document.createElement("canvas");d.width=d.height=64;let p=d.getContext("2d");p.translate(32,32),p.rotate(.6),p.fillStyle="#f7b9cf",p.beginPath(),p.moveTo(0,-26),p.bezierCurveTo(20,-18,18,14,0,26),p.bezierCurveTo(-18,14,-20,-18,0,-26),p.fill(),p.fillStyle="#ffe3ee",p.beginPath(),p.ellipse(-3,-4,6,13,0,0,Math.PI*2),p.fill();let v=new Hs(d);return v.colorSpace=Ct,v})(),a=7,o=()=>(a=a*16807%2147483647)/2147483647,l=[],c=new Float32Array(t*3);for(let d=0;d<t;d++)l.push([e.x-i*.4+o()*i,e.y+o()*s,e.z+(o()-.5)*i*.8,o()*10]);let u=new nt;u.setAttribute("position",new ht(c,3));let f=new Fs(u,new Ns({map:r,size:1.2,sizeAttenuation:!0,transparent:!0,depthWrite:!1,alphaTest:.15}));f.frustumCulled=!1,n.add(f);function h(d){for(let p=0;p<t;p++){let v=l[p],g=(d*1.6+v[3]*3)%s;c[p*3]=v[0]-(d*2.2+v[3]*7)%i+i*.5,c[p*3+1]=v[1]-g+Math.sin(d+v[3])*.6,c[p*3+2]=v[2]+Math.sin(d*.7+v[3]*2)*2}u.attributes.position.needsUpdate=!0}return{update:h,points:f}}return lv(C1);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

postprocessing/build/index.js:
  (**
   * postprocessing v6.39.5 build Wed Sep 09 2026
   * https://github.com/pmndrs/postprocessing
   * Copyright 2015-2026 Raoul van Rüschen
   * @license Zlib
   *)
*/
