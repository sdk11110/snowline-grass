const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./toon-lazy-Dhxa5xBx.js","./core-C8-RwXbc.js","./model-loader-D18Tjah5.js","./buffer-geometry-utils-C60Vs5Zo.js","./toon-materials-Z37d-d7A.js","./throw-CONYjdfJ.js","./gear-mount-Bd-uN8iK.js"])))=>i.map(i=>d[i]);
import{az as Xt,K as jt,aA as me,U as xt,a as de,W as Re,aj as vi,a9 as Bd,aB as Qe,aC as xi,aD as Hd,aE as wi,aF as Ye,aG as Gd,q as Vd,aH as ae,aI as Zt,aJ as ge,aK as Na,aL as Ei,aM as _a,aN as xe,at as ne,a0 as bi,aO as Se,aP as Wd,a7 as Xd,a8 as da,a6 as Yd,a2 as qd,a4 as be,a1 as jd,a3 as $d,a5 as We,i as Kd,aQ as Zd,aR as Qd,ay as Ae,Z as ta,u as ca,x as Pe,aS as ma,aT as Ti,aU as ga,aV as Jd,aW as Je,Y as Oa,aX as tc,aY as ec,M as Ke,aZ as ac,a_ as ra,a$ as yi,b0 as Ri,b1 as pa,b2 as ic,b3 as nc,b4 as rc,b5 as sc,b6 as lc,b7 as oc,b8 as uc,b9 as fc,ba as hc,bb as dc,bc as cc,n as La,bd as Ma,be as va,w as Ai,bf as Pi,bg as mc,bh as Ci,bi as Fa,bj as Li,bk as gc,bl as pc,bm as Mc,b as vc,R as xc,bn as wc,I as Ne,bo as Da,L as ze,bp as Wg,o as Xg,bq as Yg,d as qg,ax as jg,br as $g,ac as Kg,m as Zg,bs as Qg,bt as Jg,A as tp,c as ep,av as ap,af as ip,r as np,ag as rp,bu as sp,bv as lp,V as op,B as up,k as fp,ai as hp,y as dp,bw as cp,bx as mp,H as gp,O as pp,G as Mp,P as vp,aw as xp}from"./core-C8-RwXbc.js";import{n as wp,i as Ep}from"./buffer-geometry-utils-C60Vs5Zo.js";import{l as bp,i as Tp}from"./model-loader-D18Tjah5.js";import{c as Le,t as yp}from"./toon-materials-Z37d-d7A.js";import{i as Rp,t as Ap,o as Pp,n as Cp}from"./throw-CONYjdfJ.js";import{_ as Sa}from"./project-settings-DBnt4uC1.js";function Di(){let t=null,r=!1,e=null,a=null;function i(n,s){a=t.requestAnimationFrame(i),e(n,s)}return{start:function(){r!==!0&&e!==null&&t!==null&&(a=t.requestAnimationFrame(i),r=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(a),r=!1},setAnimationLoop:function(n){e=n},setContext:function(n){t=n}}}function Ec(t){let r=new WeakMap;function e(l,o){let u=l.array,f=l.usage,d=u.byteLength,h=t.createBuffer();t.bindBuffer(o,h),t.bufferData(o,u,f),l.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)p=l.isFloat16BufferAttribute?t.HALF_FLOAT:t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function a(l,o,u){let f=o.array,d=o.updateRanges;if(t.bindBuffer(u,l),d.length===0)t.bufferSubData(u,0,f);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){let g=d[h],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){let v=d[p];t.bufferSubData(u,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}o.clearUpdateRanges()}o.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),r.get(l)}function n(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=r.get(l);o&&(t.deleteBuffer(o.buffer),r.delete(l))}function s(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let f=r.get(l);(!f||f.version<l.version)&&r.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=r.get(l);if(u===void 0)r.set(l,e(l,o));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,l,o),u.version=l.version}}return{get:i,remove:n,update:s}}var kt={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},ct={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new xt},probesMax:{value:new xt},probesResolution:{value:new xt}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Ee={basic:{uniforms:me([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:me([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:me([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:me([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:me([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new jt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:me([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:me([ct.points,ct.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:me([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:me([ct.common,ct.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:me([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:me([ct.sprite,ct.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:me([ct.common,ct.displacementmap,{referencePosition:{value:new xt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:me([ct.lights,ct.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Ee.physical={uniforms:me([Ee.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var je={r:0,b:0,g:0},bc=new Re,Ui=new Xt;Ui.set(-1,0,0,0,1,0,0,0,1);function Tc(t,r,e,a,i,n){let s=new jt(0),l=i===!0?0:1,o,u,f=null,d=0,h=null;function p(x){let T=x.isScene===!0?x.background:null;if(T&&T.isTexture){let M=x.backgroundBlurriness>0;T=r.get(T,M)}return T}function g(x){let T=!1,M=p(x);M===null?m(s,l):M&&M.isColor&&(m(M,1),T=!0);let E=t.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,n):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,n),(t.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(x,T){let M=p(T);M&&(M.isCubeTexture||M.mapping===306)?(u===void 0&&(u=new Pe(new La(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:Ma(Ee.backgroundCube.uniforms),vertexShader:Ee.backgroundCube.vertexShader,fragmentShader:Ee.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,y,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bc.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Ui),u.material.toneMapped=ne.getTransfer(M.colorSpace)!==va,(f!==M||d!==M.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,h=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(o===void 0&&(o=new Pe(new Ai(2,2),new Ae({name:"BackgroundMaterial",uniforms:Ma(Ee.background.uniforms),vertexShader:Ee.background.vertexShader,fragmentShader:Ee.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(o)),o.material.uniforms.t2D.value=M,o.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,o.material.toneMapped=ne.getTransfer(M.colorSpace)!==va,M.matrixAutoUpdate===!0&&M.updateMatrix(),o.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||h!==t.toneMapping)&&(o.material.needsUpdate=!0,f=M,d=M.version,h=t.toneMapping),o.layers.enableAll(),x.unshift(o,o.geometry,o.material,0,0,null))}function m(x,T){x.getRGB(je,Pi(t)),e.buffers.color.setClear(je.r,je.g,je.b,T,n)}function c(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,T=1){s.set(x),l=T,m(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(s,l)},render:g,addToRenderList:v,dispose:c}}function yc(t,r){let e=t.getParameter(t.MAX_VERTEX_ATTRIBS),a={},i=h(null),n=i,s=!1;function l(L,U,G,N,W){let J=!1,z=d(L,N,G,U);n!==z&&(n=z,u(n.object)),J=p(L,N,G,W),J&&g(L,N,G,W),W!==null&&r.update(W,t.ELEMENT_ARRAY_BUFFER),(J||s)&&(s=!1,M(L,U,G,N),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r.get(W).buffer))}function o(){return t.createVertexArray()}function u(L){return t.bindVertexArray(L)}function f(L){return t.deleteVertexArray(L)}function d(L,U,G,N){let W=N.wireframe===!0,J=a[U.id];J===void 0&&(J={},a[U.id]=J);let z=L.isInstancedMesh===!0?L.id:0,K=J[z];K===void 0&&(K={},J[z]=K);let D=K[G.id];D===void 0&&(D={},K[G.id]=D);let I=D[W];return I===void 0&&(I=h(o()),D[W]=I),I}function h(L){let U=[],G=[],N=[];for(let W=0;W<e;W++)U[W]=0,G[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:N,object:L,attributes:{},index:null}}function p(L,U,G,N){let W=n.attributes,J=U.attributes,z=0,K=G.getAttributes();for(let D in K)if(K[D].location>=0){let I=W[D],V=J[D];if(V===void 0&&(D==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),D==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),I===void 0||I.attribute!==V||V&&I.data!==V.data)return!0;z++}return n.attributesNum!==z||n.index!==N}function g(L,U,G,N){let W={},J=U.attributes,z=0,K=G.getAttributes();for(let D in K)if(K[D].location>=0){let I=J[D];I===void 0&&(D==="instanceMatrix"&&L.instanceMatrix&&(I=L.instanceMatrix),D==="instanceColor"&&L.instanceColor&&(I=L.instanceColor));let V={};V.attribute=I,I&&I.data&&(V.data=I.data),W[D]=V,z++}n.attributes=W,n.attributesNum=z,n.index=N}function v(){let L=n.newAttributes;for(let U=0,G=L.length;U<G;U++)L[U]=0}function m(L){c(L,0)}function c(L,U){let G=n.newAttributes,N=n.enabledAttributes,W=n.attributeDivisors;G[L]=1,N[L]===0&&(t.enableVertexAttribArray(L),N[L]=1),W[L]!==U&&(t.vertexAttribDivisor(L,U),W[L]=U)}function x(){let L=n.newAttributes,U=n.enabledAttributes;for(let G=0,N=U.length;G<N;G++)U[G]!==L[G]&&(t.disableVertexAttribArray(G),U[G]=0)}function T(L,U,G,N,W,J,z){z===!0?t.vertexAttribIPointer(L,U,G,W,J):t.vertexAttribPointer(L,U,G,N,W,J)}function M(L,U,G,N){v();let W=N.attributes,J=G.getAttributes(),z=U.defaultAttributeValues;for(let K in J){let D=J[K];if(D.location>=0){let I=W[K];if(I===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(I=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(I=L.instanceColor)),I!==void 0){let V=I.normalized,tt=I.itemSize,Z=r.get(I);if(Z===void 0)continue;let lt=Z.buffer,ot=Z.type,Y=Z.bytesPerElement,Q=ot===t.INT||ot===t.UNSIGNED_INT||I.gpuType===1013;if(I.isInterleavedBufferAttribute){let at=I.data,gt=at.stride,pt=I.offset;if(at.isInstancedInterleavedBuffer){for(let ut=0;ut<D.locationSize;ut++)c(D.location+ut,at.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ut=0;ut<D.locationSize;ut++)m(D.location+ut);t.bindBuffer(t.ARRAY_BUFFER,lt);for(let ut=0;ut<D.locationSize;ut++)T(D.location+ut,tt/D.locationSize,ot,V,gt*Y,(pt+tt/D.locationSize*ut)*Y,Q)}else{if(I.isInstancedBufferAttribute){for(let at=0;at<D.locationSize;at++)c(D.location+at,I.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let at=0;at<D.locationSize;at++)m(D.location+at);t.bindBuffer(t.ARRAY_BUFFER,lt);for(let at=0;at<D.locationSize;at++)T(D.location+at,tt/D.locationSize,ot,V,tt*Y,tt/D.locationSize*at*Y,Q)}}else if(z!==void 0){let V=z[K];if(V!==void 0)switch(V.length){case 2:t.vertexAttrib2fv(D.location,V);break;case 3:t.vertexAttrib3fv(D.location,V);break;case 4:t.vertexAttrib4fv(D.location,V);break;default:t.vertexAttrib1fv(D.location,V)}}}}x()}function E(){b();for(let L in a){let U=a[L];for(let G in U){let N=U[G];for(let W in N){let J=N[W];for(let z in J)f(J[z].object),delete J[z];delete N[W]}}delete a[L]}}function y(L){if(a[L.id]===void 0)return;let U=a[L.id];for(let G in U){let N=U[G];for(let W in N){let J=N[W];for(let z in J)f(J[z].object),delete J[z];delete N[W]}}delete a[L.id]}function A(L){for(let U in a){let G=a[U];for(let N in G){let W=G[N];if(W[L.id]===void 0)continue;let J=W[L.id];for(let z in J)f(J[z].object),delete J[z];delete W[L.id]}}}function w(L){for(let U in a){let G=a[U],N=L.isInstancedMesh===!0?L.id:0,W=G[N];if(W!==void 0){for(let J in W){let z=W[J];for(let K in z)f(z[K].object),delete z[K];delete W[J]}delete G[N],Object.keys(G).length===0&&delete a[U]}}}function b(){S(),s=!0,n!==i&&(n=i,u(n.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:b,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:y,releaseStatesOfObject:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Rc(t,r,e){let a;function i(o){a=o}function n(o,u){t.drawArrays(a,o,u),e.update(u,a,1)}function s(o,u,f){f!==0&&(t.drawArraysInstanced(a,o,u,f),e.update(u,a,f))}function l(o,u,f){if(f===0)return;r.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,o,0,u,0,f);let d=0;for(let h=0;h<f;h++)d+=u[h];e.update(d,a,1)}this.setMode=i,this.render=n,this.renderInstances=s,this.renderMultiDraw=l}function Ac(t,r,e,a){let i;function n(){if(i!==void 0)return i;if(r.has("EXT_texture_filter_anisotropic")===!0){let A=r.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){return A===1023||a.convert(A)===t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT)}function l(A){let w=A===1016&&(r.has("EXT_color_buffer_half_float")||r.has("EXT_color_buffer_float"));return!(A!==1009&&A!==1015&&!w&&a.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function o(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision===void 0?"highp":e.precision,f=o(u);f!==u&&(Zt("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&r.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),y=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:o,textureFormatReadable:s,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:c,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:M,maxSamples:E,samples:y}}function Pc(t){let r=this,e=null,a=0,i=!1,n=!1,s=new Kd,l=new Xt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||a!==0||i;return i=h,a=d.length,p},this.beginShadows=function(){n=!0,f(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,h){e=f(d,h,0)},this.setState=function(d,h,p){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,c=t.get(d);if(!i||g===null||g.length===0||n&&!m)n?f(null):u();else{let x=n?0:a,T=x*4,M=c.clippingState||null;o.value=M,M=f(g,h,T,p);for(let E=0;E!==T;++E)M[E]=e[E];c.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function u(){o.value!==e&&(o.value=e,o.needsUpdate=a>0),r.numPlanes=a,r.numIntersection=0}function f(d,h,p,g){let v=d===null?0:d.length,m=null;if(v!==0){if(m=o.value,g!==!0||m===null){let c=p+v*4,x=h.matrixWorldInverse;l.getNormalMatrix(x),(m===null||m.length<c)&&(m=new Float32Array(c));for(let T=0,M=p;T!==v;++T,M+=4)s.copy(d[T]).applyMatrix4(x,l),s.normal.toArray(m,M),m[M+3]=s.constant}o.value=m,o.needsUpdate=!0}return r.numPlanes=v,r.numIntersection=0,m}}var Fe=4,Cc=6,Lc=20,Dc=256,Ge=new vi,za=new jt,sa=null,la=0,oa=0,ua=!1,Uc=new xt,Ie=new xt,ka=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,r=0,e=.1,a=100,i={}){let{size:n=256,position:s=Uc}=i;sa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,e,a,l,s),r>0&&this._blur(l,0,0,r),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,r=null){return this._fromTexture(t,r)}fromCubemap(t,r=null){return this._fromTexture(t,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ga(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ha(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(sa,la,oa),this._renderer.xr.enabled=ua,t.scissorTest=!1,Oe(t,0,0,t.width,t.height)}_fromTexture(t,r){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let e=r||this._allocateTargets();return this._textureToCubeUV(t,e),this._applyPMREM(e),this._cleanup(e),e}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,e={magFilter:be,minFilter:be,generateMipmaps:!1,type:Se,format:pa,colorSpace:xc,depthBuffer:!1},a=Ba(t,r,e);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ba(t,r,e);let{_lodMax:i}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ic(i)),this._blurMaterial=Nc(i,t,r),this._ggxMaterial=Sc(i,t,r)}return a}_compileMaterial(t){let r=new Pe(new ta,t);this._renderer.compile(r,Ge)}_sceneToCubeUV(t,r,e,a,i){let n=new Ke(90,1,r,e),s=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],o=this._renderer,u=o.autoClear,f=o.toneMapping;o.getClearColor(za),o.toneMapping=0,o.autoClear=!1,o.state.buffers.depth.getReversed()&&(o.setRenderTarget(a),o.clearDepth(),o.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new La,new vc({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,h=d.material,p=!1,g=t.background;g?g.isColor&&(h.color.copy(g),t.background=null,p=!0):(h.color.copy(za),p=!0);for(let v=0;v<6;v++){let m=v%3;m===0?(n.up.set(0,s[v],0),n.position.set(i.x,i.y,i.z),n.lookAt(i.x+l[v],i.y,i.z)):m===1?(n.up.set(0,0,s[v]),n.position.set(i.x,i.y,i.z),n.lookAt(i.x,i.y+l[v],i.z)):(n.up.set(0,s[v],0),n.position.set(i.x,i.y,i.z),n.lookAt(i.x,i.y,i.z+l[v]));let c=this._cubeSize;Oe(a,m*c,v>2?c:0,c,c),o.setRenderTarget(a),p&&o.render(d,n),o.render(t,n)}o.toneMapping=f,o.autoClear=u,t.background=g}_textureToCubeUV(t,r){let e=this._renderer,a=t.mapping===301||t.mapping===302;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ga()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ha());let i=a?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=i;let s=i.uniforms;s.envMap.value=t;let l=this._cubeSize;Oe(r,0,0,3*l,2*l),e.setRenderTarget(r),e.render(n,Ge)}_applyPMREM(t){let r=this._renderer,e=r.autoClear;r.autoClear=!1;let a=this._lodMeshes.length;for(let i=1;i<a;i++)this._applyGGXFilter(t,i-1,i);r.autoClear=e}_applyGGXFilter(t,r,e){let a=this._renderer,i=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[e];s.material=n;let l=n.uniforms,o=e/(this._lodMeshes.length-1),u=r/(this._lodMeshes.length-1),f=Math.sqrt(o*o-u*u)*(o*1.25),{_lodMax:d}=this,h=this._sizeLods[e],p=3*h*(e>d-Fe?e-d+Fe:0),g=4*(this._cubeSize-h);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=d-r,Oe(i,p,g,3*h,2*h),a.setRenderTarget(i),a.render(s,Ge),l.envMap.value=i.texture,l.roughness.value=0,l.mipInt.value=d-e,Oe(t,p,g,3*h,2*h),a.setRenderTarget(t),a.render(s,Ge)}_blur(t,r,e,a){let i=this._pingPongRenderTarget,n=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(t,i,r,e,n),this._blurPass(i,t,e,e,n)}_blurPass(t,r,e,a,i){let n=this._renderer,s=this._blurMaterial,l=this._lodMeshes[a];l.material=s;let o=s.uniforms;o.envMap.value=t.texture,o.sigma.value=i,o.mipInt.value=this._lodMax-e;let u=this._sizeLods[a];Oe(r,3*u*(a>this._lodMax-Fe?a-this._lodMax+Fe:0),4*(this._cubeSize-u),3*u,2*u),n.setRenderTarget(r),n.render(l,Ge)}};function Ic(t){let r=[],e=[],a=t,i=t-Fe+1+Cc;for(let n=0;n<i;n++){let s=2**a;r.push(s);let l=1/(s-2),o=-l,u=1+l,f=[o,o,u,o,u,u,o,o,u,u,o,u],d=new Float32Array(108),h=new Float32Array(108);for(let g=0;g<6;g++){let v=g%3*2/3-1,m=g>2?0:-1,c=[v,m,0,v+2/3,m,0,v+2/3,m+1,0,v,m,0,v+2/3,m+1,0,v,m+1,0];d.set(c,18*g);for(let x=0;x<6;x++){let T=f[x*2]*2-1,M=f[x*2+1]*2-1;g===0?Ie.set(1,M,T):g===1?Ie.set(-T,1,-M):g===2?Ie.set(-T,M,1):g===3?Ie.set(-1,M,-T):g===4?Ie.set(-T,-1,M):Ie.set(T,M,-1),Ie.toArray(h,(g*6+x)*3)}}let p=new ta;p.setAttribute("position",new ca(d,3)),p.setAttribute("outputDirection",new ca(h,3)),e.push(new Pe(p,null)),a>Fe&&a--}return{lodMeshes:e,sizeLods:r}}function Ba(t,r,e){let a=new xe(t,r,e);return a.texture.mapping=306,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Oe(t,r,e,a,i){t.viewport.set(r,e,a,i),t.scissor.set(r,e,a,i)}function Sc(t,r,e){return new Ae({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dc,CUBEUV_TEXEL_WIDTH:1/r,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ea(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Nc(t,r,e){return new Ae({name:"SphericalGaussianBlur",defines:{SAMPLES:Lc,CUBEUV_TEXEL_WIDTH:1/r,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ea(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ha(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ga(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ea(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ii=class extends xe{constructor(t=1,r={}){super(t,t,r),this.isWebGLCubeRenderTarget=!0;let e={width:t,height:t,depth:1},a=[e,e,e,e,e,e];this.texture=new wi(a),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;let e={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new La(5,5,5),i=new Ae({name:"CubemapFromEquirect",uniforms:Ma(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=r;let n=new Pe(a,i),s=r.minFilter;return r.minFilter===1008&&(r.minFilter=be),new mc(1,10,this).update(t,n),r.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(t,r=!0,e=!0,a=!0){let i=t.getRenderTarget();for(let n=0;n<6;n++)t.setRenderTarget(this,n),t.clear(r,e,a);t.setRenderTarget(i)}};function _c(t){let r=new WeakMap,e=new WeakMap,a=null;function i(h,p=!1){return h==null?null:p?s(h):n(h)}function n(h){if(h&&h.isTexture){let p=h.mapping;if(p===303||p===304){if(r.has(h)){let g=r.get(h).texture;return l(g,h.mapping)}{let g=h.image;if(g&&g.height>0){let v=new Ii(g.height);return v.fromEquirectangularTexture(t,h),r.set(h,v),h.addEventListener("dispose",u),l(v.texture,h.mapping)}return null}}}return h}function s(h){if(h&&h.isTexture){let p=h.mapping,g=p===303||p===304,v=p===301||p===302;if(g||v){let m=e.get(h),c=m===void 0?0:m.texture.pmremVersion;if(h.isRenderTargetTexture&&h.pmremVersion!==c)return a===null&&(a=new ka(t)),m=g?a.fromEquirectangular(h,m):a.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let x=h.image;return g&&x&&x.height>0||v&&x&&o(x)?(a===null&&(a=new ka(t)),m=g?a.fromEquirectangular(h):a.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function l(h,p){return p===303?h.mapping=301:p===304&&(h.mapping=302),h}function o(h){let p=0;for(let g=0;g<6;g++)h[g]!==void 0&&p++;return p===6}function u(h){let p=h.target;p.removeEventListener("dispose",u);let g=r.get(p);g!==void 0&&(r.delete(p),g.dispose())}function f(h){let p=h.target;p.removeEventListener("dispose",f);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){r=new WeakMap,e=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:i,dispose:d}}function Oc(t){let r={};function e(a){if(r[a]!==void 0)return r[a];let i=t.getExtension(a);return r[a]=i,i}return{has:function(a){return e(a)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(a){let i=e(a);return i===null&&rc("WebGLRenderer: "+a+" extension not supported."),i}}}function Fc(t,r,e,a){let i={},n=new WeakMap;function s(d){let h=d.target;h.index!==null&&r.remove(h.index);for(let g in h.attributes)r.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete i[h.id];let p=n.get(h);p&&(r.remove(p),n.delete(h)),a.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function l(d,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,e.memory.geometries++),h}function o(d){let h=d.attributes;for(let p in h)r.update(h[p],t.ARRAY_BUFFER)}function u(d){let h=[],p=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(p!==null){let x=p.array;v=p.version;for(let T=0,M=x.length;T<M;T+=3){let E=x[T+0],y=x[T+1],A=x[T+2];h.push(E,y,y,A,A,E)}}else{let x=g.array;v=g.version;for(let T=0,M=x.length/3-1;T<M;T+=3){let E=T+0,y=T+1,A=T+2;h.push(E,y,y,A,A,E)}}let m=new(g.count>=65535?pc:Mc)(h,1);m.version=v;let c=n.get(d);c&&r.remove(c),n.set(d,m)}function f(d){let h=n.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return n.get(d)}return{get:l,update:o,getWireframeAttribute:f}}function zc(t,r,e){let a;function i(d){a=d}let n,s;function l(d){n=d.type,s=d.bytesPerElement}function o(d,h){t.drawElements(a,h,n,d*s),e.update(h,a,1)}function u(d,h,p){p!==0&&(t.drawElementsInstanced(a,h,n,d*s,p),e.update(h,a,p))}function f(d,h,p){if(p===0)return;r.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,h,0,n,d,0,p);let g=0;for(let v=0;v<p;v++)g+=h[v];e.update(g,a,1)}this.setMode=i,this.setIndex=l,this.render=o,this.renderInstances=u,this.renderMultiDraw=f}function kc(t){let r={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function a(n,s,l){switch(e.calls++,s){case t.TRIANGLES:e.triangles+=n/3*l;break;case t.LINES:e.lines+=n/2*l;break;case t.LINE_STRIP:e.lines+=l*(n-1);break;case t.LINE_LOOP:e.lines+=l*n;break;case t.POINTS:e.points+=l*n;break;default:ae("WebGLInfo: Unknown draw mode:",s)}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:r,render:e,programs:null,autoReset:!0,reset:i,update:a}}function Bc(t,r,e){let a=new WeakMap,i=new ge;function n(s,l,o){let u=s.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=f===void 0?0:f.length,h=a.get(l);if(h===void 0||h.count!==d){let b=function(){A.dispose(),a.delete(l),l.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let p=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],c=l.morphAttributes.normal||[],x=l.morphAttributes.color||[],T=0;p===!0&&(T=1),g===!0&&(T=2),v===!0&&(T=3);let M=l.attributes.position.count*T,E=1;M>r.maxTextureSize&&(E=Math.ceil(M/r.maxTextureSize),M=r.maxTextureSize);let y=new Float32Array(M*E*4*d),A=new xi(y,M,E,d);A.type=Ti,A.needsUpdate=!0;let w=T*4;for(let S=0;S<d;S++){let L=m[S],U=c[S],G=x[S],N=M*E*4*S;for(let W=0;W<L.count;W++){let J=W*w;p===!0&&(i.fromBufferAttribute(L,W),y[N+J+0]=i.x,y[N+J+1]=i.y,y[N+J+2]=i.z,y[N+J+3]=0),g===!0&&(i.fromBufferAttribute(U,W),y[N+J+4]=i.x,y[N+J+5]=i.y,y[N+J+6]=i.z,y[N+J+7]=0),v===!0&&(i.fromBufferAttribute(G,W),y[N+J+8]=i.x,y[N+J+9]=i.y,y[N+J+10]=i.z,y[N+J+11]=G.itemSize===4?i.w:1)}}h={count:d,texture:A,size:new de(M,E)},a.set(l,h),l.addEventListener("dispose",b)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(t,"morphTexture",s.morphTexture,e);else{let p=0;for(let v=0;v<u.length;v++)p+=u[v];let g=l.morphTargetsRelative?1:1-p;o.getUniforms().setValue(t,"morphTargetBaseInfluence",g),o.getUniforms().setValue(t,"morphTargetInfluences",u)}o.getUniforms().setValue(t,"morphTargetsTexture",h.texture,e),o.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:n}}function Hc(t,r,e,a,i){let n=new WeakMap;function s(u){let f=i.render.frame,d=u.geometry,h=r.get(u,d);if(n.get(h)!==f&&(r.update(h),n.set(h,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),n.get(u)!==f&&(e.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,t.ARRAY_BUFFER),n.set(u,f))),u.isSkinnedMesh){let p=u.skeleton;n.get(p)!==f&&(p.update(),n.set(p,f))}return h}function l(){n=new WeakMap}function o(u){let f=u.target;f.removeEventListener("dispose",o),a.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:s,dispose:l}}var Gc={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Vc(t,r,e,a,i,n){let s=new xe(r,e,{type:t,depthBuffer:i,stencilBuffer:n,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,o=null,u=new ta;u.setAttribute("position",new Oa([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Oa([0,2,0,0,2,0],2));let f=new tc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Pe(u,f),h=new vi(-1,1,1,-1,0,1),p=null,g=null,v=!1,m,c=null,x=[],T=!1;this.setSize=function(M,E){s.setSize(M,E),l!==null&&l.setSize(M,E),o!==null&&o.setSize(M,E);for(let y=0;y<x.length;y++){let A=x[y];A.setSize&&A.setSize(M,E)}},this.setEffects=function(M){x=M,T=x.length>0&&x[0].isRenderPass===!0;let E=s.width,y=s.height;x.length>0&&l===null&&(l=new xe(E,y,{type:Se,depthBuffer:!1,stencilBuffer:!1}),o=new xe(E,y,{type:Se,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){let w=x[A];w.setSize&&w.setSize(E,y)}},this.begin=function(M,E){if(v||M.toneMapping===0&&x.length===0)return!1;if(c=E,E!==null){let y=E.width,A=E.height;(s.width!==y||s.height!==A)&&this.setSize(y,A)}return T===!1&&M.setRenderTarget(s),m=M.toneMapping,M.toneMapping=0,!0},this.hasRenderPass=function(){return T},this.end=function(M,E){M.toneMapping=m,v=!0;let y=s,A=l;for(let w=0;w<x.length;w++){let b=x[w];b.enabled!==!1&&(b.render(M,A,y,E),b.needsSwap!==!1&&(y=A,A=A===l?o:l))}if(p!==M.outputColorSpace||g!==M.toneMapping){p=M.outputColorSpace,g=M.toneMapping,f.defines={},ne.getTransfer(p)==="srgb"&&(f.defines.SRGB_TRANSFER="");let w=Gc[g];w&&(f.defines[w]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(c),M.render(d,h),c=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),u.dispose(),f.dispose()}}var Si=new Bd,xa=new Qe(1,1),Ni=new xi,_i=new Hd,Oi=new wi,Va=[],Wa=[],Xa=new Float32Array(16),Ya=new Float32Array(9),qa=new Float32Array(4);function ke(t,r,e){let a=t[0];if(a<=0||a>0)return t;let i=r*e,n=Va[i];if(n===void 0&&(n=new Float32Array(i),Va[i]=n),r!==0){a.toArray(n,0);for(let s=1,l=0;s!==r;++s)l+=e,t[s].toArray(n,l)}return n}function le(t,r){if(t.length!==r.length)return!1;for(let e=0,a=t.length;e<a;e++)if(t[e]!==r[e])return!1;return!0}function oe(t,r){for(let e=0,a=r.length;e<a;e++)t[e]=r[e]}function aa(t,r){let e=Wa[r];e===void 0&&(e=new Int32Array(r),Wa[r]=e);for(let a=0;a!==r;++a)e[a]=t.allocateTextureUnit();return e}function Wc(t,r){let e=this.cache;e[0]!==r&&(t.uniform1f(this.addr,r),e[0]=r)}function Xc(t,r){let e=this.cache;if(r.x!==void 0)(e[0]!==r.x||e[1]!==r.y)&&(t.uniform2f(this.addr,r.x,r.y),e[0]=r.x,e[1]=r.y);else{if(le(e,r))return;t.uniform2fv(this.addr,r),oe(e,r)}}function Yc(t,r){let e=this.cache;if(r.x!==void 0)(e[0]!==r.x||e[1]!==r.y||e[2]!==r.z)&&(t.uniform3f(this.addr,r.x,r.y,r.z),e[0]=r.x,e[1]=r.y,e[2]=r.z);else if(r.r!==void 0)(e[0]!==r.r||e[1]!==r.g||e[2]!==r.b)&&(t.uniform3f(this.addr,r.r,r.g,r.b),e[0]=r.r,e[1]=r.g,e[2]=r.b);else{if(le(e,r))return;t.uniform3fv(this.addr,r),oe(e,r)}}function qc(t,r){let e=this.cache;if(r.x!==void 0)(e[0]!==r.x||e[1]!==r.y||e[2]!==r.z||e[3]!==r.w)&&(t.uniform4f(this.addr,r.x,r.y,r.z,r.w),e[0]=r.x,e[1]=r.y,e[2]=r.z,e[3]=r.w);else{if(le(e,r))return;t.uniform4fv(this.addr,r),oe(e,r)}}function jc(t,r){let e=this.cache,a=r.elements;if(a===void 0){if(le(e,r))return;t.uniformMatrix2fv(this.addr,!1,r),oe(e,r)}else{if(le(e,a))return;qa.set(a),t.uniformMatrix2fv(this.addr,!1,qa),oe(e,a)}}function $c(t,r){let e=this.cache,a=r.elements;if(a===void 0){if(le(e,r))return;t.uniformMatrix3fv(this.addr,!1,r),oe(e,r)}else{if(le(e,a))return;Ya.set(a),t.uniformMatrix3fv(this.addr,!1,Ya),oe(e,a)}}function Kc(t,r){let e=this.cache,a=r.elements;if(a===void 0){if(le(e,r))return;t.uniformMatrix4fv(this.addr,!1,r),oe(e,r)}else{if(le(e,a))return;Xa.set(a),t.uniformMatrix4fv(this.addr,!1,Xa),oe(e,a)}}function Zc(t,r){let e=this.cache;e[0]!==r&&(t.uniform1i(this.addr,r),e[0]=r)}function Qc(t,r){let e=this.cache;if(r.x!==void 0)(e[0]!==r.x||e[1]!==r.y)&&(t.uniform2i(this.addr,r.x,r.y),e[0]=r.x,e[1]=r.y);else{if(le(e,r))return;t.uniform2iv(this.addr,r),oe(e,r)}}function Jc(t,r){let e=this.cache;if(r.x!==void 0)(e[0]!==r.x||e[1]!==r.y||e[2]!==r.z)&&(t.uniform3i(this.addr,r.x,r.y,r.z),e[0]=r.x,e[1]=r.y,e[2]=r.z);else{if(le(e,r))return;t.uniform3iv(this.addr,r),oe(e,r)}}function tm(t,r){let e=this.cache;if(r.x!==void 0)(e[0]!==r.x||e[1]!==r.y||e[2]!==r.z||e[3]!==r.w)&&(t.uniform4i(this.addr,r.x,r.y,r.z,r.w),e[0]=r.x,e[1]=r.y,e[2]=r.z,e[3]=r.w);else{if(le(e,r))return;t.uniform4iv(this.addr,r),oe(e,r)}}function em(t,r){let e=this.cache;e[0]!==r&&(t.uniform1ui(this.addr,r),e[0]=r)}function am(t,r){let e=this.cache;if(r.x!==void 0)(e[0]!==r.x||e[1]!==r.y)&&(t.uniform2ui(this.addr,r.x,r.y),e[0]=r.x,e[1]=r.y);else{if(le(e,r))return;t.uniform2uiv(this.addr,r),oe(e,r)}}function im(t,r){let e=this.cache;if(r.x!==void 0)(e[0]!==r.x||e[1]!==r.y||e[2]!==r.z)&&(t.uniform3ui(this.addr,r.x,r.y,r.z),e[0]=r.x,e[1]=r.y,e[2]=r.z);else{if(le(e,r))return;t.uniform3uiv(this.addr,r),oe(e,r)}}function nm(t,r){let e=this.cache;if(r.x!==void 0)(e[0]!==r.x||e[1]!==r.y||e[2]!==r.z||e[3]!==r.w)&&(t.uniform4ui(this.addr,r.x,r.y,r.z,r.w),e[0]=r.x,e[1]=r.y,e[2]=r.z,e[3]=r.w);else{if(le(e,r))return;t.uniform4uiv(this.addr,r),oe(e,r)}}function rm(t,r,e){let a=this.cache,i=e.allocateTextureUnit();a[0]!==i&&(t.uniform1i(this.addr,i),a[0]=i);let n;this.type===t.SAMPLER_2D_SHADOW?(xa.compareFunction=e.isReversedDepthBuffer()?518:515,n=xa):n=Si,e.setTexture2D(r||n,i)}function sm(t,r,e){let a=this.cache,i=e.allocateTextureUnit();a[0]!==i&&(t.uniform1i(this.addr,i),a[0]=i),e.setTexture3D(r||_i,i)}function lm(t,r,e){let a=this.cache,i=e.allocateTextureUnit();a[0]!==i&&(t.uniform1i(this.addr,i),a[0]=i),e.setTextureCube(r||Oi,i)}function om(t,r,e){let a=this.cache,i=e.allocateTextureUnit();a[0]!==i&&(t.uniform1i(this.addr,i),a[0]=i),e.setTexture2DArray(r||Ni,i)}function um(t){switch(t){case 5126:return Wc;case 35664:return Xc;case 35665:return Yc;case 35666:return qc;case 35674:return jc;case 35675:return $c;case 35676:return Kc;case 5124:case 35670:return Zc;case 35667:case 35671:return Qc;case 35668:case 35672:return Jc;case 35669:case 35673:return tm;case 5125:return em;case 36294:return am;case 36295:return im;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return om}}function fm(t,r){t.uniform1fv(this.addr,r)}function hm(t,r){let e=ke(r,this.size,2);t.uniform2fv(this.addr,e)}function dm(t,r){let e=ke(r,this.size,3);t.uniform3fv(this.addr,e)}function cm(t,r){let e=ke(r,this.size,4);t.uniform4fv(this.addr,e)}function mm(t,r){let e=ke(r,this.size,4);t.uniformMatrix2fv(this.addr,!1,e)}function gm(t,r){let e=ke(r,this.size,9);t.uniformMatrix3fv(this.addr,!1,e)}function pm(t,r){let e=ke(r,this.size,16);t.uniformMatrix4fv(this.addr,!1,e)}function Mm(t,r){t.uniform1iv(this.addr,r)}function vm(t,r){t.uniform2iv(this.addr,r)}function xm(t,r){t.uniform3iv(this.addr,r)}function wm(t,r){t.uniform4iv(this.addr,r)}function Em(t,r){t.uniform1uiv(this.addr,r)}function bm(t,r){t.uniform2uiv(this.addr,r)}function Tm(t,r){t.uniform3uiv(this.addr,r)}function ym(t,r){t.uniform4uiv(this.addr,r)}function Rm(t,r,e){let a=this.cache,i=r.length,n=aa(e,i);le(a,n)||(t.uniform1iv(this.addr,n),oe(a,n));let s;s=this.type===t.SAMPLER_2D_SHADOW?xa:Si;for(let l=0;l!==i;++l)e.setTexture2D(r[l]||s,n[l])}function Am(t,r,e){let a=this.cache,i=r.length,n=aa(e,i);le(a,n)||(t.uniform1iv(this.addr,n),oe(a,n));for(let s=0;s!==i;++s)e.setTexture3D(r[s]||_i,n[s])}function Pm(t,r,e){let a=this.cache,i=r.length,n=aa(e,i);le(a,n)||(t.uniform1iv(this.addr,n),oe(a,n));for(let s=0;s!==i;++s)e.setTextureCube(r[s]||Oi,n[s])}function Cm(t,r,e){let a=this.cache,i=r.length,n=aa(e,i);le(a,n)||(t.uniform1iv(this.addr,n),oe(a,n));for(let s=0;s!==i;++s)e.setTexture2DArray(r[s]||Ni,n[s])}function Lm(t){switch(t){case 5126:return fm;case 35664:return hm;case 35665:return dm;case 35666:return cm;case 35674:return mm;case 35675:return gm;case 35676:return pm;case 5124:case 35670:return Mm;case 35667:case 35671:return vm;case 35668:case 35672:return xm;case 35669:case 35673:return wm;case 5125:return Em;case 36294:return bm;case 36295:return Tm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Cm}}var Dm=class{constructor(t,r,e){this.id=t,this.addr=e,this.cache=[],this.type=r.type,this.setValue=um(r.type)}},Um=class{constructor(t,r,e){this.id=t,this.addr=e,this.cache=[],this.type=r.type,this.size=r.size,this.setValue=Lm(r.type)}},Im=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,r,e){let a=this.seq;for(let i=0,n=a.length;i!==n;++i){let s=a[i];s.setValue(t,r[s.id],e)}}},fa=/(\w+)(\])?(\[|\.)?/g;function ja(t,r){t.seq.push(r),t.map[r.id]=r}function Sm(t,r,e){let a=t.name,i=a.length;for(fa.lastIndex=0;;){let n=fa.exec(a),s=fa.lastIndex,l=n[1],o=n[2]==="]",u=n[3];if(o&&(l|=0),u===void 0||u==="["&&s+2===i){ja(e,u===void 0?new Dm(l,t,r):new Um(l,t,r));break}{let f=e.map[l];f===void 0&&(f=new Im(l),ja(e,f)),e=f}}}var Ze=class{constructor(t,r){this.seq=[],this.map={};let e=t.getProgramParameter(r,t.ACTIVE_UNIFORMS);for(let n=0;n<e;++n){let s=t.getActiveUniform(r,n);Sm(s,t.getUniformLocation(r,s.name),this)}let a=[],i=[];for(let n of this.seq)n.type===t.SAMPLER_2D_SHADOW||n.type===t.SAMPLER_CUBE_SHADOW||n.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(n):i.push(n);a.length>0&&(this.seq=a.concat(i))}setValue(t,r,e,a){let i=this.map[r];i!==void 0&&i.setValue(t,e,a)}setOptional(t,r,e){let a=r[e];a!==void 0&&this.setValue(t,e,a)}static upload(t,r,e,a){for(let i=0,n=r.length;i!==n;++i){let s=r[i],l=e[s.id];l.needsUpdate!==!1&&s.setValue(t,l.value,a)}}static seqWithValue(t,r){let e=[];for(let a=0,i=t.length;a!==i;++a){let n=t[a];n.id in r&&e.push(n)}return e}};function $a(t,r,e){let a=t.createShader(r);return t.shaderSource(a,e),t.compileShader(a),a}var Nm=37297,_m=0;function Om(t,r){let e=t.split(`
`),a=[],i=Math.max(r-6,0),n=Math.min(r+6,e.length);for(let s=i;s<n;s++){let l=s+1;a.push(`${l===r?">":" "} ${l}: ${e[s]}`)}return a.join(`
`)}var Ka=new Xt;function Fm(t){ne._getMatrix(Ka,ne.workingColorSpace,t);let r=`mat3( ${Ka.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(t)){case Li:return[r,"LinearTransferOETF"];case va:return[r,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",t),[r,"LinearTransferOETF"]}}function Za(t,r,e){let a=t.getShaderParameter(r,t.COMPILE_STATUS),i=(t.getShaderInfoLog(r)||"").trim();if(a&&i==="")return"";let n=/ERROR: 0:(\d+)/.exec(i);if(n){let s=parseInt(n[1]);return e.toUpperCase()+`

`+i+`

`+Om(t.getShaderSource(r),s)}return i}function zm(t,r){let e=Fm(r);return[`vec4 ${t}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var km={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function Bm(t,r){let e=km[r];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",r),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $e=new xt;function Hm(){return ne.getLuminanceCoefficients($e),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${$e.x.toFixed(4)}, ${$e.y.toFixed(4)}, ${$e.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gm(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xe).join(`
`)}function Vm(t){let r=[];for(let e in t){let a=t[e];a!==!1&&r.push("#define "+e+" "+a)}return r.join(`
`)}function Wm(t,r){let e={},a=t.getProgramParameter(r,t.ACTIVE_ATTRIBUTES);for(let i=0;i<a;i++){let n=t.getActiveAttrib(r,i),s=n.name,l=1;n.type===t.FLOAT_MAT2&&(l=2),n.type===t.FLOAT_MAT3&&(l=3),n.type===t.FLOAT_MAT4&&(l=4),e[s]={type:n.type,location:t.getAttribLocation(r,s),locationSize:l}}return e}function Xe(t){return t!==""}function Qa(t,r){let e=r.numSpotLightShadows+r.numSpotLightMaps-r.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,r.numSunLights).replace(/NUM_DIR_LIGHTS/g,r.numDirLights).replace(/NUM_SPOT_LIGHTS/g,r.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,r.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,r.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,r.numPointLights).replace(/NUM_HEMI_LIGHTS/g,r.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,r.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,r.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,r.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,r.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,r.numPointLightShadows)}function Ja(t,r){return t.replace(/NUM_CLIPPING_PLANES/g,r.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,r.numClippingPlanes-r.numClipIntersection)}var Xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function wa(t){return t.replace(Xm,qm)}var Ym=new Map;function qm(t,r){let e=kt[r];if(e===void 0){let a=Ym.get(r);if(a!==void 0)e=kt[a],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',r,a);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+r+">")}return wa(e)}var jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ti(t){return t.replace(jm,$m)}function $m(t,r,e,a){let i="";for(let n=parseInt(r);n<parseInt(e);n++)i+=a.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return i}function ei(t){let r=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?r+=`
#define HIGH_PRECISION`:t.precision==="mediump"?r+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(r+=`
#define LOW_PRECISION`),r}var Km={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function Zm(t){return Km[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qm={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function Jm(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Qm[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var tg={302:"ENVMAP_MODE_REFRACTION"};function eg(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":tg[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ag={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function ig(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":ag[t.combine]||"ENVMAP_BLENDING_NONE"}function ng(t){let r=t.envMapCubeUVHeight;if(r===null)return null;let e=Math.log2(r)-2,a=1/r;return{texelWidth:1/(3*Math.max(2**e,112)),texelHeight:a,maxMip:e}}function rg(t,r,e,a){let i=t.getContext(),n=e.defines,s=e.vertexShader,l=e.fragmentShader,o=Zm(e),u=Jm(e),f=eg(e),d=ig(e),h=ng(e),p=Gm(e),g=Vm(n),v=i.createProgram(),m,c,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xe).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xe).join(`
`),c.length>0&&(c+=`
`)):(m=[ei(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xe).join(`
`),c=[ei(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping===0?"":"#define TONE_MAPPING",e.toneMapping===0?"":kt.tonemapping_pars_fragment,e.toneMapping===0?"":Bm("toneMapping",e.toneMapping),e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,zm("linearToOutputTexel",e.outputColorSpace),Hm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xe).join(`
`)),s=wa(s),s=Qa(s,e),s=Ja(s,e),l=wa(l),l=Qa(l,e),l=Ja(l,e),s=ti(s),l=ti(l),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",e.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);let T=x+m+s,M=x+c+l,E=$a(i,i.VERTEX_SHADER,T),y=$a(i,i.FRAGMENT_SHADER,M);i.attachShader(v,E),i.attachShader(v,y),e.index0AttributeName===void 0?e.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"):i.bindAttribLocation(v,0,e.index0AttributeName),i.linkProgram(v);function A(L){if(t.debug.checkShaderErrors){let U=i.getProgramInfoLog(v)||"",G=i.getShaderInfoLog(E)||"",N=i.getShaderInfoLog(y)||"",W=U.trim(),J=G.trim(),z=N.trim(),K=!0,D=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,v,E,y);else{let I=Za(i,E,"vertex"),V=Za(i,y,"fragment");ae("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+I+`
`+V)}else W===""?(J===""||z==="")&&(D=!1):Zt("WebGLProgram: Program Info Log:",W);D&&(L.diagnostics={runnable:K,programLog:W,vertexShader:{log:J,prefix:m},fragmentShader:{log:z,prefix:c}})}i.deleteShader(E),i.deleteShader(y),w=new Ze(i,v),b=Wm(i,v)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,Nm)),S},this.destroy=function(){a.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_m++,this.cacheKey=r,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=y,this}var sg=0,lg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,r,e){let a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(e)===!1&&(a.add(e),e.usedTimes++),this}remove(t){let r=this.materialCache.get(t);for(let e of r)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let r=this.materialCache,e=r.get(t);return e===void 0&&(e=new Set,r.set(t,e)),e}_getShaderStage(t){let r=this.shaderCache,e=r.get(t);return e===void 0&&(e=new og(t),r.set(t,e)),e}},og=class{constructor(t){this.id=sg++,this.code=t,this.usedTimes=0}};function ug(t){return t===1030||t===37490||t===36285}function fg(t,r,e,a,i,n){let s=new gc,l=new lg,o=new Set,u=[],f=new Map,d=a.logarithmicDepthBuffer,h=a.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return o.add(w),w===0?"uv":`uv${w}`}function v(w,b,S,L,U,G){let N=L.fog,W=U.geometry,J=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?L.environment:null,z=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,K=r.get(w.envMap||J,z),D=K&&K.mapping===306?K.image.height:null,I=p[w.type];w.precision!==null&&(h=a.getMaxPrecision(w.precision),h!==w.precision&&Zt("WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));let V=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,tt=V===void 0?0:V.length,Z=0;W.morphAttributes.position!==void 0&&(Z=1),W.morphAttributes.normal!==void 0&&(Z=2),W.morphAttributes.color!==void 0&&(Z=3);let lt,ot,Y,Q;if(I){let ue=Ee[I];lt=ue.vertexShader,ot=ue.fragmentShader}else{lt=w.vertexShader,ot=w.fragmentShader;let ue=l.getVertexShaderStage(w),Kt=l.getFragmentShaderStage(w);l.update(w,ue,Kt),Y=ue.id,Q=Kt.id}let at=t.getRenderTarget(),gt=t.state.buffers.depth.getReversed(),pt=U.isInstancedMesh===!0,ut=U.isBatchedMesh===!0,Gt=!!w.map,Wt=!!w.matcap,Ot=!!K,ee=!!w.aoMap,fe=!!w.lightMap,ce=!!w.bumpMap&&w.wireframe===!1,yt=!!w.normalMap,Bt=!!w.displacementMap,Pt=!!w.emissiveMap,zt=!!w.metalnessMap,O=!!w.roughnessMap,Vt=w.anisotropy>0,Lt=w.clearcoat>0,It=w.dispersion>0,C=w.retroreflectivity>0,R=w.iridescence>0,_=w.sheen>0,q=w.transmission>0,et=Vt&&!!w.anisotropyMap,dt=Lt&&!!w.clearcoatMap,Mt=Lt&&!!w.clearcoatNormalMap,H=Lt&&!!w.clearcoatRoughnessMap,ft=R&&!!w.iridescenceMap,mt=R&&!!w.iridescenceThicknessMap,Tt=_&&!!w.sheenColorMap,rt=_&&!!w.sheenRoughnessMap,Ut=!!w.specularMap,St=!!w.specularColorMap,Ft=!!w.specularIntensityMap,$t=q&&!!w.transmissionMap,k=q&&!!w.thicknessMap,it=!!w.gradientMap,nt=!!w.alphaMap,Et=w.alphaTest>0,Ct=!!w.alphaHash,st=!!w.extensions,wt=0;w.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(wt=t.toneMapping);let _t={shaderID:I,shaderType:w.type,shaderName:w.name,vertexShader:lt,fragmentShader:ot,defines:w.defines,customVertexShaderID:Y,customFragmentShaderID:Q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:ut,batchingColor:ut&&U._colorsTexture!==null,instancing:pt,instancingColor:pt&&U.instanceColor!==null,instancingMorph:pt&&U.morphTexture!==null,outputColorSpace:at===null?t.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Gt,matcap:Wt,envMap:Ot,envMapMode:Ot&&K.mapping,envMapCubeUVHeight:D,aoMap:ee,lightMap:fe,bumpMap:ce,normalMap:yt,displacementMap:Bt,emissiveMap:Pt,normalMapObjectSpace:yt&&w.normalMapType===1,normalMapTangentSpace:yt&&w.normalMapType===0,packedNormalMap:yt&&w.normalMapType===0&&ug(w.normalMap.format),metalnessMap:zt,roughnessMap:O,anisotropy:Vt,anisotropyMap:et,clearcoat:Lt,clearcoatMap:dt,clearcoatNormalMap:Mt,clearcoatRoughnessMap:H,dispersion:It,retroreflection:C,iridescence:R,iridescenceMap:ft,iridescenceThicknessMap:mt,sheen:_,sheenColorMap:Tt,sheenRoughnessMap:rt,specularMap:Ut,specularColorMap:St,specularIntensityMap:Ft,transmission:q,transmissionMap:$t,thicknessMap:k,gradientMap:it,opaque:w.transparent===!1&&w.blending===1&&w.alphaToCoverage===!1,alphaMap:nt,alphaTest:Et,alphaHash:Ct,combine:w.combine,mapUv:Gt&&g(w.map.channel),aoMapUv:ee&&g(w.aoMap.channel),lightMapUv:fe&&g(w.lightMap.channel),bumpMapUv:ce&&g(w.bumpMap.channel),normalMapUv:yt&&g(w.normalMap.channel),displacementMapUv:Bt&&g(w.displacementMap.channel),emissiveMapUv:Pt&&g(w.emissiveMap.channel),metalnessMapUv:zt&&g(w.metalnessMap.channel),roughnessMapUv:O&&g(w.roughnessMap.channel),anisotropyMapUv:et&&g(w.anisotropyMap.channel),clearcoatMapUv:dt&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:rt&&g(w.sheenRoughnessMap.channel),specularMapUv:Ut&&g(w.specularMap.channel),specularColorMapUv:St&&g(w.specularColorMap.channel),specularIntensityMapUv:Ft&&g(w.specularIntensityMap.channel),transmissionMapUv:$t&&g(w.transmissionMap.channel),thicknessMapUv:k&&g(w.thicknessMap.channel),alphaMapUv:nt&&g(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(yt||Vt),vertexNormals:!!W.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(Gt||nt),fog:!!N,useFog:w.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||W.attributes.normal===void 0&&yt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Z,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&S.length>0,shadowMapType:t.shadowMap.type,toneMapping:wt,decodeVideoTexture:Gt&&w.map.isVideoTexture===!0&&ne.getTransfer(w.map.colorSpace)==="srgb",decodeVideoTextureEmissive:Pt&&w.emissiveMap.isVideoTexture===!0&&ne.getTransfer(w.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===2,flipSided:w.side===1,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:st&&w.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&w.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return _t.vertexUv1s=o.has(1),_t.vertexUv2s=o.has(2),_t.vertexUv3s=o.has(3),o.clear(),_t}function m(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let S in w.defines)b.push(S),b.push(w.defines[S]);return w.isRawShaderMaterial===!1&&(c(b,w),x(b,w),b.push(t.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function c(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numSunLights),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numSunLightShadows),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function x(w,b){s.disableAll(),b.instancing&&s.enable(0),b.instancingColor&&s.enable(1),b.instancingMorph&&s.enable(2),b.matcap&&s.enable(3),b.envMap&&s.enable(4),b.normalMapObjectSpace&&s.enable(5),b.normalMapTangentSpace&&s.enable(6),b.clearcoat&&s.enable(7),b.iridescence&&s.enable(8),b.alphaTest&&s.enable(9),b.vertexColors&&s.enable(10),b.vertexAlphas&&s.enable(11),b.vertexUv1s&&s.enable(12),b.vertexUv2s&&s.enable(13),b.vertexUv3s&&s.enable(14),b.vertexTangents&&s.enable(15),b.anisotropy&&s.enable(16),b.alphaHash&&s.enable(17),b.batching&&s.enable(18),b.dispersion&&s.enable(19),b.retroreflection&&s.enable(24),b.batchingColor&&s.enable(20),b.gradientMap&&s.enable(21),b.packedNormalMap&&s.enable(22),b.vertexNormals&&s.enable(23),w.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reversedDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.decodeVideoTextureEmissive&&s.enable(20),b.alphaToCoverage&&s.enable(21),b.numLightProbeGrids>0&&s.enable(22),b.hasPositionAttribute&&s.enable(23),w.push(s.mask)}function T(w){let b=p[w.type],S;if(b){let L=Ee[b];S=cc.clone(L.uniforms)}else S=w.uniforms;return S}function M(w,b){let S=f.get(b);return S===void 0?(S=new rg(t,b,w,i),u.push(S),f.set(b,S)):++S.usedTimes,S}function E(w){if(--w.usedTimes===0){let b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),f.delete(w.cacheKey),w.destroy()}}function y(w){l.remove(w)}function A(){l.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:T,acquireProgram:M,releaseProgram:E,releaseShaderCache:y,programs:u,dispose:A}}function hg(){let t=new WeakMap;function r(s){return t.has(s)}function e(s){let l=t.get(s);return l===void 0&&(l={},t.set(s,l)),l}function a(s){t.delete(s)}function i(s,l,o){t.get(s)[l]=o}function n(){t=new WeakMap}return{has:r,get:e,remove:a,update:i,dispose:n}}function dg(t,r){return t.groupOrder===r.groupOrder?t.renderOrder===r.renderOrder?t.material.id===r.material.id?t.materialVariant===r.materialVariant?t.z===r.z?t.id-r.id:t.z-r.z:t.materialVariant-r.materialVariant:t.material.id-r.material.id:t.renderOrder-r.renderOrder:t.groupOrder-r.groupOrder}function ai(t,r){return t.groupOrder===r.groupOrder?t.renderOrder===r.renderOrder?t.z===r.z?t.id-r.id:r.z-t.z:t.renderOrder-r.renderOrder:t.groupOrder-r.groupOrder}function ii(){let t=[],r=0,e=[],a=[],i=[];function n(){r=0,e.length=0,a.length=0,i.length=0}function s(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function l(h,p,g,v,m,c){let x=t[r];return x===void 0?(x={id:h.id,object:h,geometry:p,material:g,materialVariant:s(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:c},t[r]=x):(x.id=h.id,x.object=h,x.geometry=p,x.material=g,x.materialVariant=s(h),x.groupOrder=v,x.renderOrder=h.renderOrder,x.z=m,x.group=c),r++,x}function o(h,p,g,v,m,c,x){x.reversedDepth===!0&&(m=-m);let T=l(h,p,g,v,m,c);g.transmission>0?a.push(T):g.transparent===!0?i.push(T):e.push(T)}function u(h,p,g,v,m,c){let x=l(h,p,g,v,m,c);g.transmission>0?a.unshift(x):g.transparent===!0?i.unshift(x):e.unshift(x)}function f(h,p){e.length>1&&e.sort(h||dg),a.length>1&&a.sort(p||ai),i.length>1&&i.sort(p||ai)}function d(){for(let h=r,p=t.length;h<p;h++){let g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:a,transparent:i,init:n,push:o,unshift:u,finish:d,sort:f}}function cg(){let t=new WeakMap;function r(a,i){let n=t.get(a),s;return n===void 0?(s=new ii,t.set(a,[s])):i>=n.length?(s=new ii,n.push(s)):s=n[i],s}function e(){t=new WeakMap}return{get:r,dispose:e}}function mg(){let t={};return{get:function(r){if(t[r.id]!==void 0)return t[r.id];let e;switch(r.type){case"SunLight":case"DirectionalLight":e={direction:new xt,color:new jt};break;case"SpotLight":e={position:new xt,direction:new xt,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new xt,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new xt,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new xt,halfWidth:new xt,halfHeight:new xt}}return t[r.id]=e,e}}}function gg(){let t={};return{get:function(r){if(t[r.id]!==void 0)return t[r.id];let e;switch(r.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3}}return t[r.id]=e,e}}}var pg=0;function Mg(t,r){return(r.castShadow?2:0)-(t.castShadow?2:0)+ +!!r.map-!!t.map}function vg(t){let r=new mg,e=gg(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)a.probe.push(new xt);let i=new xt,n=new Re,s=new Re;function l(u){let f=0,d=0,h=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let p=0,g=0,v=0,m=0,c=0,x=0,T=0,M=0,E=0,y=0,A=0,w=0,b=0,S=0;u.sort(Mg);for(let U=0,G=u.length;U<G;U++){let N=u[U],W=N.color,J=N.intensity,z=N.distance,K=null;if(N.shadow&&N.shadow.map&&(K=N.shadow.map.texture.format===1030?N.shadow.map.texture:N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=W.r*J,d+=W.g*J,h+=W.b*J;else if(N.isLightProbe){for(let D=0;D<9;D++)a.probe[D].addScaledVector(N.sh.coefficients[D],J);S++}else if(N.isSunLight){let D=r.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let I=N.shadow,V=e.get(N);V.shadowIntensity=I.intensity,V.shadowBias=I.bias,V.shadowNormalBias=I.normalBias,V.shadowRadius=I.radius,V.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),a.sunShadow[g]=V,a.sunShadowMap[g]=K;let tt=I.getViewportCount();for(let Z=0;Z<tt;Z++)a.sunShadowMatrix[v+Z]=I.getMatrix(Z),a.sunShadowCascade[v+Z]=I._cascadeData[Z];v+=tt,g++}a.sun[p]=D,p++}else if(N.isDirectionalLight){let D=r.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let I=N.shadow,V=e.get(N);V.shadowIntensity=I.intensity,V.shadowBias=I.bias,V.shadowNormalBias=I.normalBias,V.shadowRadius=I.radius,V.shadowMapSize=I.mapSize,a.directionalShadow[m]=V,a.directionalShadowMap[m]=K,a.directionalShadowMatrix[m]=N.shadow.matrix,E++}a.directional[m]=D,m++}else if(N.isSpotLight){let D=r.get(N);D.position.setFromMatrixPosition(N.matrixWorld),D.color.copy(W).multiplyScalar(J),D.distance=z,D.coneCos=Math.cos(N.angle),D.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),D.decay=N.decay,a.spot[x]=D;let I=N.shadow;if(N.map&&(a.spotLightMap[w]=N.map,w++,I.updateMatrices(N),N.castShadow&&b++),a.spotLightMatrix[x]=I.matrix,N.castShadow){let V=e.get(N);V.shadowIntensity=I.intensity,V.shadowBias=I.bias,V.shadowNormalBias=I.normalBias,V.shadowRadius=I.radius,V.shadowMapSize=I.mapSize,a.spotShadow[x]=V,a.spotShadowMap[x]=K,A++}x++}else if(N.isRectAreaLight){let D=r.get(N);D.color.copy(W).multiplyScalar(J),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),a.rectArea[T]=D,T++}else if(N.isPointLight){let D=r.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),D.distance=N.distance,D.decay=N.decay,N.castShadow){let I=N.shadow,V=e.get(N);V.shadowIntensity=I.intensity,V.shadowBias=I.bias,V.shadowNormalBias=I.normalBias,V.shadowRadius=I.radius,V.shadowMapSize=I.mapSize,V.shadowCameraNear=I.camera.near,V.shadowCameraFar=I.camera.far,a.pointShadow[c]=V,a.pointShadowMap[c]=K,a.pointShadowMatrix[c]=N.shadow.matrix,y++}a.point[c]=D,c++}else if(N.isHemisphereLight){let D=r.get(N);D.skyColor.copy(N.color).multiplyScalar(J),D.groundColor.copy(N.groundColor).multiplyScalar(J),a.hemi[M]=D,M++}}T>0&&(t.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ct.LTC_FLOAT_1,a.rectAreaLTC2=ct.LTC_FLOAT_2):(a.rectAreaLTC1=ct.LTC_HALF_1,a.rectAreaLTC2=ct.LTC_HALF_2)),a.ambient[0]=f,a.ambient[1]=d,a.ambient[2]=h;let L=a.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==c||L.spotLength!==x||L.rectAreaLength!==T||L.hemiLength!==M||L.numSunShadows!==g||L.numDirectionalShadows!==E||L.numPointShadows!==y||L.numSpotShadows!==A||L.numSpotMaps!==w||L.numLightProbes!==S)&&(a.sun.length=p,a.directional.length=m,a.spot.length=x,a.rectArea.length=T,a.point.length=c,a.hemi.length=M,a.sunShadow.length=g,a.sunShadowMap.length=g,a.sunShadowMatrix.length=v,a.sunShadowCascade.length=v,a.directionalShadow.length=E,a.directionalShadowMap.length=E,a.directionalShadowMatrix.length=E,a.pointShadow.length=y,a.pointShadowMap.length=y,a.pointShadowMatrix.length=y,a.spotShadow.length=A,a.spotShadowMap.length=A,a.spotLightMatrix.length=A+w-b,a.spotLightMap.length=w,a.numSpotLightShadowsWithMaps=b,a.numLightProbes=S,L.sunLength=p,L.directionalLength=m,L.pointLength=c,L.spotLength=x,L.rectAreaLength=T,L.hemiLength=M,L.numSunShadows=g,L.numDirectionalShadows=E,L.numPointShadows=y,L.numSpotShadows=A,L.numSpotMaps=w,L.numLightProbes=S,a.version=pg++)}function o(u,f){let d=0,h=0,p=0,g=0,v=0,m=0,c=f.matrixWorldInverse;for(let x=0,T=u.length;x<T;x++){let M=u[x];if(M.isSunLight){let E=a.sun[d];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(c),d++}else if(M.isDirectionalLight){let E=a.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(c),h++}else if(M.isSpotLight){let E=a.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(c),E.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(c),g++}else if(M.isRectAreaLight){let E=a.rectArea[v];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(c),s.identity(),n.copy(M.matrixWorld),n.premultiply(c),s.extractRotation(n),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),v++}else if(M.isPointLight){let E=a.point[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(c),p++}else if(M.isHemisphereLight){let E=a.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(c),m++}}}return{setup:l,setupView:o,state:a}}function ni(t){let r=new vg(t),e=[],a=[],i=[];function n(h){d.camera=h,e.length=0,a.length=0,i.length=0}function s(h){e.push(h)}function l(h){a.push(h)}function o(h){i.push(h)}function u(){r.setup(e)}function f(h){r.setupView(e,h)}let d={lightsArray:e,shadowsArray:a,lightProbeGridArray:i,camera:null,lights:r,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:d,setupLights:u,setupLightsView:f,pushLight:s,pushShadow:l,pushLightProbeGrid:o}}function xg(t){let r=new WeakMap;function e(i,n=0){let s=r.get(i),l;return s===void 0?(l=new ni(t),r.set(i,[l])):n>=s.length?(l=new ni(t),s.push(l)):l=s[n],l}function a(){r=new WeakMap}return{get:e,dispose:a}}var wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
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
}`,bg=[new xt(1,0,0),new xt(-1,0,0),new xt(0,1,0),new xt(0,-1,0),new xt(0,0,1),new xt(0,0,-1)],Tg=[new xt(0,-1,0),new xt(0,-1,0),new xt(0,0,1),new xt(0,0,-1),new xt(0,-1,0),new xt(0,-1,0)],ri=new Re,Ve=new xt,ha=new xt;function yg(t,r,e){let a=new Ei,i=new de,n=new de,s=new ge,l=new Zd,o=new Qd,u={},f=e.maxTextureSize,d={0:1,1:0,2:2},h=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:wg,fragmentShader:Eg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new ta;g.setAttribute("position",new ca(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Pe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let c=this.type;this.render=function(y,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===2&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=1);let b=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),U=t.state;U.setBlending(0),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=c!==this.type;G&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(W=>W.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,W=y.length;N<W;N++){let J=y[N],z=J.shadow;if(z===void 0){Zt("WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let K=z.getFrameExtents();i.multiply(K),n.copy(z.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(n.x=Math.floor(f/K.x),i.x=n.x*K.x,z.mapSize.x=n.x),i.y>f&&(n.y=Math.floor(f/K.y),i.y=n.y*K.y,z.mapSize.y=n.y));let D=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=D,z.map===null||G===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===3){if(J.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new xe(i.x,i.y,{format:ma,type:Se,minFilter:be,magFilter:be,generateMipmaps:!1}),z.map.texture.name=J.name+".shadowMap",z.map.depthTexture=new Qe(i.x,i.y,Ti),z.map.depthTexture.name=J.name+".shadowMapDepth",z.map.depthTexture.format=ga,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=We,z.map.depthTexture.magFilter=We}else J.isPointLight?(z.map=new Ii(i.x),z.map.depthTexture=new Jd(i.x,Je)):(z.map=new xe(i.x,i.y),z.map.depthTexture=new Qe(i.x,i.y,Je)),z.map.depthTexture.name=J.name+".shadowMap",z.map.depthTexture.format=ga,this.type===1?(z.map.depthTexture.compareFunction=D?518:515,z.map.depthTexture.minFilter=be,z.map.depthTexture.magFilter=be):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=We,z.map.depthTexture.magFilter=We);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let I=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();J.isPointLight!==!0&&z.updateMatrices(J,w);for(let V=0;V<I;V++){let tt=z.getCamera(V);if(J.isPointLight){let Z=z.camera,lt=z.matrix,ot=J.distance||Z.far;ot!==Z.far&&(Z.far=ot,Z.updateProjectionMatrix()),Ve.setFromMatrixPosition(J.matrixWorld),Z.position.copy(Ve),ha.copy(Z.position),ha.add(bg[V]),Z.up.copy(Tg[V]),Z.lookAt(ha),Z.updateMatrixWorld(),lt.makeTranslation(-Ve.x,-Ve.y,-Ve.z),ri.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),z._frustum.setFromProjectionMatrix(ri,Z.coordinateSystem,Z.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,V),t.clear();else{V===0&&(t.setRenderTarget(z.map),t.clear());let Z=z.getViewport(V);s.set(n.x*Z.x,n.y*Z.y,n.x*Z.z,n.y*Z.w),U.viewport(s)}a=z.getFrustum(V),M(A,w,tt,J,this.type)}z.isPointLightShadow!==!0&&this.type===3&&x(z,w),z.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(b,S,L)};function x(y,A){let w=r.update(v);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null?y.mapPass=new xe(i.x,i.y,{format:ma,type:Se}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,t.setRenderTarget(y.mapPass),t.clear(),t.renderBufferDirect(A,null,w,h,v,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value.set(y.map.width,y.map.height),p.uniforms.radius.value=y.radius,t.setRenderTarget(y.map),t.clear(),t.renderBufferDirect(A,null,w,p,v,null)}function T(y,A,w,b){let S=null,L=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(L!==void 0)S=L;else if(S=w.isPointLight===!0?o:l,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=S.uuid,G=A.uuid,N=u[U];N===void 0&&(N={},u[U]=N);let W=N[G];W===void 0&&(W=S.clone(),N[G]=W,A.addEventListener("dispose",E)),S=W}if(S.visible=A.visible,S.wireframe=A.wireframe,b===3?S.side=A.shadowSide===null?A.side:A.shadowSide:S.side=A.shadowSide===null?d[A.side]:A.shadowSide,S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let U=t.properties.get(S);U.light=w}return S}function M(y,A,w,b,S){if(y.visible===!1)return;if(y.layers.test(A.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===3)&&(!y.frustumCulled||y.intersectsFrustum(a))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);let U=r.update(y),G=y.material;if(Array.isArray(G)){let N=U.groups;for(let W=0,J=N.length;W<J;W++){let z=N[W],K=G[z.materialIndex];if(K&&K.visible){let D=T(y,K,b,S);y.onBeforeShadow(t,y,A,w,U,D,z),t.renderBufferDirect(w,null,U,D,y,z),y.onAfterShadow(t,y,A,w,U,D,z)}}}else if(G.visible){let N=T(y,G,b,S);y.onBeforeShadow(t,y,A,w,U,N,null),t.renderBufferDirect(w,null,U,N,y,null),y.onAfterShadow(t,y,A,w,U,N,null)}}let L=y.children;for(let U=0,G=L.length;U<G;U++)M(L[U],A,w,b,S)}function E(y){y.target.removeEventListener("dispose",E);for(let A in u){let w=u[A],b=y.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}function Rg(t,r){function e(){let k=!1,it=new ge,nt=null,Et=new ge(0,0,0,0);return{setMask:function(Ct){nt!==Ct&&!k&&(t.colorMask(Ct,Ct,Ct,Ct),nt=Ct)},setLocked:function(Ct){k=Ct},setClear:function(Ct,st,wt,_t,ue){ue===!0&&(Ct*=_t,st*=_t,wt*=_t),it.set(Ct,st,wt,_t),Et.equals(it)===!1&&(t.clearColor(Ct,st,wt,_t),Et.copy(it))},reset:function(){k=!1,nt=null,Et.set(-1,0,0,0)}}}function a(){let k=!1,it=!1,nt=null,Et=null,Ct=null;return{setReversed:function(st){if(it!==st){let wt=r.get("EXT_clip_control");st?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),it=st;let _t=Ct;Ct=null,this.setClear(_t)}},getReversed:function(){return it},setTest:function(st){st?at(t.DEPTH_TEST):gt(t.DEPTH_TEST)},setMask:function(st){nt!==st&&!k&&(t.depthMask(st),nt=st)},setFunc:function(st){if(it&&(st=dc[st]),Et!==st){switch(st){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Et=st}},setLocked:function(st){k=st},setClear:function(st){Ct!==st&&(Ct=st,it&&(st=1-st),t.clearDepth(st))},reset:function(){k=!1,nt=null,Et=null,Ct=null,it=!1}}}function i(){let k=!1,it=null,nt=null,Et=null,Ct=null,st=null,wt=null,_t=null,ue=null;return{setTest:function(Kt){k||(Kt?at(t.STENCIL_TEST):gt(t.STENCIL_TEST))},setMask:function(Kt){it!==Kt&&!k&&(t.stencilMask(Kt),it=Kt)},setFunc:function(Kt,Te,Ce){(nt!==Kt||Et!==Te||Ct!==Ce)&&(t.stencilFunc(Kt,Te,Ce),nt=Kt,Et=Te,Ct=Ce)},setOp:function(Kt,Te,Ce){(st!==Kt||wt!==Te||_t!==Ce)&&(t.stencilOp(Kt,Te,Ce),st=Kt,wt=Te,_t=Ce)},setLocked:function(Kt){k=Kt},setClear:function(Kt){ue!==Kt&&(t.clearStencil(Kt),ue=Kt)},reset:function(){k=!1,it=null,nt=null,Et=null,Ct=null,st=null,wt=null,_t=null,ue=null}}}let n=new e,s=new a,l=new i,o=new WeakMap,u=new WeakMap,f={},d={},h={},p=new WeakMap,g=[],v=null,m=!1,c=null,x=null,T=null,M=null,E=null,y=null,A=null,w=new jt(0,0,0),b=0,S=!1,L=null,U=null,G=null,N=null,W=null,J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,K=0,D=t.getParameter(t.VERSION);D.indexOf("WebGL")===-1?D.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),z=K>=2):(K=parseFloat(/^WebGL (\d)/.exec(D)[1]),z=K>=1);let I=null,V={},tt=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),lt=new ge().fromArray(tt),ot=new ge().fromArray(Z);function Y(k,it,nt,Et){let Ct=new Uint8Array(4),st=t.createTexture();t.bindTexture(k,st),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let wt=0;wt<nt;wt++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(it,0,t.RGBA,1,1,Et,0,t.RGBA,t.UNSIGNED_BYTE,Ct):t.texImage2D(it+wt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ct);return st}let Q={};Q[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),l.setClear(0),at(t.DEPTH_TEST),s.setFunc(3),ce(!1),yt(1),at(t.CULL_FACE),ee(0);function at(k){f[k]!==!0&&(t.enable(k),f[k]=!0)}function gt(k){f[k]!==!1&&(t.disable(k),f[k]=!1)}function pt(k,it){return h[k]!==it&&(t.bindFramebuffer(k,it),h[k]=it,k===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=it),k===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=it),!0)}function ut(k,it){let nt=g,Et=!1;if(k){nt=p.get(it),nt===void 0&&(nt=[],p.set(it,nt));let Ct=k.textures;if(nt.length!==Ct.length||nt[0]!==t.COLOR_ATTACHMENT0){for(let st=0,wt=Ct.length;st<wt;st++)nt[st]=t.COLOR_ATTACHMENT0+st;nt.length=Ct.length,Et=!0}}else nt[0]!==t.BACK&&(nt[0]=t.BACK,Et=!0);Et&&t.drawBuffers(nt)}function Gt(k){return v!==k&&(t.useProgram(k),v=k,!0)}let Wt={100:t.FUNC_ADD,101:t.FUNC_SUBTRACT,102:t.FUNC_REVERSE_SUBTRACT};Wt[103]=t.MIN,Wt[104]=t.MAX;let Ot={200:t.ZERO,201:t.ONE,202:t.SRC_COLOR,204:t.SRC_ALPHA,210:t.SRC_ALPHA_SATURATE,208:t.DST_COLOR,206:t.DST_ALPHA,203:t.ONE_MINUS_SRC_COLOR,205:t.ONE_MINUS_SRC_ALPHA,209:t.ONE_MINUS_DST_COLOR,207:t.ONE_MINUS_DST_ALPHA,211:t.CONSTANT_COLOR,212:t.ONE_MINUS_CONSTANT_COLOR,213:t.CONSTANT_ALPHA,214:t.ONE_MINUS_CONSTANT_ALPHA};function ee(k,it,nt,Et,Ct,st,wt,_t,ue,Kt){if(k===0)m===!0&&(gt(t.BLEND),m=!1);else if(m===!1&&(at(t.BLEND),m=!0),k!==5){if(k!==c||Kt!==S){if((x!==100||E!==100)&&(t.blendEquation(t.FUNC_ADD),x=100,E=100),Kt)switch(k){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ae("WebGLState: Invalid blending: ",k)}else switch(k){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case 3:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",k)}T=null,M=null,y=null,A=null,w.set(0,0,0),b=0,c=k,S=Kt}}else Ct||=it,st||=nt,wt||=Et,(it!==x||Ct!==E)&&(t.blendEquationSeparate(Wt[it],Wt[Ct]),x=it,E=Ct),(nt!==T||Et!==M||st!==y||wt!==A)&&(t.blendFuncSeparate(Ot[nt],Ot[Et],Ot[st],Ot[wt]),T=nt,M=Et,y=st,A=wt),(_t.equals(w)===!1||ue!==b)&&(t.blendColor(_t.r,_t.g,_t.b,ue),w.copy(_t),b=ue),c=k,S=!1}function fe(k,it){k.side===2?gt(t.CULL_FACE):at(t.CULL_FACE);let nt=k.side===1;it&&(nt=!nt),ce(nt),k.blending===1&&k.transparent===!1?ee(0):ee(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),n.setMask(k.colorWrite);let Et=k.stencilWrite;l.setTest(Et),Et&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Pt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?at(t.SAMPLE_ALPHA_TO_COVERAGE):gt(t.SAMPLE_ALPHA_TO_COVERAGE)}function ce(k){L!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),L=k)}function yt(k){k===0?gt(t.CULL_FACE):(at(t.CULL_FACE),k!==U&&(k===1?t.cullFace(t.BACK):k===2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))),U=k}function Bt(k){k!==G&&(z&&t.lineWidth(k),G=k)}function Pt(k,it,nt){k?(at(t.POLYGON_OFFSET_FILL),(N!==it||W!==nt)&&(N=it,W=nt,s.getReversed()&&(it=-it),t.polygonOffset(it,nt))):gt(t.POLYGON_OFFSET_FILL)}function zt(k){k?at(t.SCISSOR_TEST):gt(t.SCISSOR_TEST)}function O(k){k===void 0&&(k=t.TEXTURE0+J-1),I!==k&&(t.activeTexture(k),I=k)}function Vt(k,it,nt){nt===void 0&&(nt=I===null?t.TEXTURE0+J-1:I);let Et=V[nt];Et===void 0&&(Et={type:void 0,texture:void 0},V[nt]=Et),(Et.type!==k||Et.texture!==it)&&(I!==nt&&(t.activeTexture(nt),I=nt),t.bindTexture(k,it||Q[k]),Et.type=k,Et.texture=it)}function Lt(){let k=V[I];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function It(){try{t.compressedTexImage2D(...arguments)}catch(k){ae("WebGLState:",k)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(k){ae("WebGLState:",k)}}function R(){try{t.texSubImage2D(...arguments)}catch(k){ae("WebGLState:",k)}}function _(){try{t.texSubImage3D(...arguments)}catch(k){ae("WebGLState:",k)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(k){ae("WebGLState:",k)}}function et(){try{t.compressedTexSubImage3D(...arguments)}catch(k){ae("WebGLState:",k)}}function dt(){try{t.texStorage2D(...arguments)}catch(k){ae("WebGLState:",k)}}function Mt(){try{t.texStorage3D(...arguments)}catch(k){ae("WebGLState:",k)}}function H(){try{t.texImage2D(...arguments)}catch(k){ae("WebGLState:",k)}}function ft(){try{t.texImage3D(...arguments)}catch(k){ae("WebGLState:",k)}}function mt(k){return d[k]===void 0?t.getParameter(k):d[k]}function Tt(k,it){d[k]!==it&&(t.pixelStorei(k,it),d[k]=it)}function rt(k){lt.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),lt.copy(k))}function Ut(k){ot.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),ot.copy(k))}function St(k,it){let nt=u.get(it);nt===void 0&&(nt=new WeakMap,u.set(it,nt));let Et=nt.get(k);Et===void 0&&(Et=t.getUniformBlockIndex(it,k.name),nt.set(k,Et))}function Ft(k,it){let nt=u.get(it).get(k);o.get(it)!==nt&&(t.uniformBlockBinding(it,nt,k.__bindingPointIndex),o.set(it,nt))}function $t(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},d={},I=null,V={},h={},p=new WeakMap,g=[],v=null,m=!1,c=null,x=null,T=null,M=null,E=null,y=null,A=null,w=new jt(0,0,0),b=0,S=!1,L=null,U=null,G=null,N=null,W=null,lt.set(0,0,t.canvas.width,t.canvas.height),ot.set(0,0,t.canvas.width,t.canvas.height),n.reset(),s.reset(),l.reset()}return{buffers:{color:n,depth:s,stencil:l},enable:at,disable:gt,bindFramebuffer:pt,drawBuffers:ut,useProgram:Gt,setBlending:ee,setMaterial:fe,setFlipSided:ce,setCullFace:yt,setLineWidth:Bt,setPolygonOffset:Pt,setScissorTest:zt,activeTexture:O,bindTexture:Vt,unbindTexture:Lt,compressedTexImage2D:It,compressedTexImage3D:C,texImage2D:H,texImage3D:ft,pixelStorei:Tt,getParameter:mt,updateUBOMapping:St,uniformBlockBinding:Ft,texStorage2D:dt,texStorage3D:Mt,texSubImage2D:R,texSubImage3D:_,compressedTexSubImage2D:q,compressedTexSubImage3D:et,scissor:rt,viewport:Ut,reset:$t}}function Ag(t,r,e,a,i,n,s){let l=r.has("WEBGL_multisampled_render_to_texture")?r.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new de,f=new WeakMap,d=new Set,h,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,R){return g?new OffscreenCanvas(C,R):wc("canvas")}function m(C,R,_){let q=1,et=It(C);if((et.width>_||et.height>_)&&(q=_/Math.max(et.width,et.height)),q<1){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let dt=Math.floor(q*et.width),Mt=Math.floor(q*et.height);h===void 0&&(h=v(dt,Mt));let H=R?v(dt,Mt):h;return H.width=dt,H.height=Mt,H.getContext("2d").drawImage(C,0,0,dt,Mt),Zt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+dt+"x"+Mt+")."),H}return"data"in C&&Zt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C}return C}function c(C){return C.generateMipmaps}function x(C){t.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(C,R,_,q,et,dt=!1){if(C!==null){if(t[C]!==void 0)return t[C];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Mt;q&&(Mt=r.get("EXT_texture_norm16"),Mt||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let H=R;if(R===t.RED&&(_===t.FLOAT&&(H=t.R32F),_===t.HALF_FLOAT&&(H=t.R16F),_===t.UNSIGNED_BYTE&&(H=t.R8),_===t.UNSIGNED_SHORT&&Mt&&(H=Mt.R16_EXT),_===t.SHORT&&Mt&&(H=Mt.R16_SNORM_EXT)),R===t.RED_INTEGER&&(_===t.UNSIGNED_BYTE&&(H=t.R8UI),_===t.UNSIGNED_SHORT&&(H=t.R16UI),_===t.UNSIGNED_INT&&(H=t.R32UI),_===t.BYTE&&(H=t.R8I),_===t.SHORT&&(H=t.R16I),_===t.INT&&(H=t.R32I)),R===t.RG&&(_===t.FLOAT&&(H=t.RG32F),_===t.HALF_FLOAT&&(H=t.RG16F),_===t.UNSIGNED_BYTE&&(H=t.RG8),_===t.UNSIGNED_SHORT&&Mt&&(H=Mt.RG16_EXT),_===t.SHORT&&Mt&&(H=Mt.RG16_SNORM_EXT)),R===t.RG_INTEGER&&(_===t.UNSIGNED_BYTE&&(H=t.RG8UI),_===t.UNSIGNED_SHORT&&(H=t.RG16UI),_===t.UNSIGNED_INT&&(H=t.RG32UI),_===t.BYTE&&(H=t.RG8I),_===t.SHORT&&(H=t.RG16I),_===t.INT&&(H=t.RG32I)),R===t.RGB_INTEGER&&(_===t.UNSIGNED_BYTE&&(H=t.RGB8UI),_===t.UNSIGNED_SHORT&&(H=t.RGB16UI),_===t.UNSIGNED_INT&&(H=t.RGB32UI),_===t.BYTE&&(H=t.RGB8I),_===t.SHORT&&(H=t.RGB16I),_===t.INT&&(H=t.RGB32I)),R===t.RGBA_INTEGER&&(_===t.UNSIGNED_BYTE&&(H=t.RGBA8UI),_===t.UNSIGNED_SHORT&&(H=t.RGBA16UI),_===t.UNSIGNED_INT&&(H=t.RGBA32UI),_===t.BYTE&&(H=t.RGBA8I),_===t.SHORT&&(H=t.RGBA16I),_===t.INT&&(H=t.RGBA32I)),R===t.RGB&&(_===t.UNSIGNED_SHORT&&Mt&&(H=Mt.RGB16_EXT),_===t.SHORT&&Mt&&(H=Mt.RGB16_SNORM_EXT),_===t.UNSIGNED_INT_5_9_9_9_REV&&(H=t.RGB9_E5),_===t.UNSIGNED_INT_10F_11F_11F_REV&&(H=t.R11F_G11F_B10F)),R===t.RGBA){let ft=dt?Li:ne.getTransfer(et);_===t.FLOAT&&(H=t.RGBA32F),_===t.HALF_FLOAT&&(H=t.RGBA16F),_===t.UNSIGNED_BYTE&&(H=ft==="srgb"?t.SRGB8_ALPHA8:t.RGBA8),_===t.UNSIGNED_SHORT&&Mt&&(H=Mt.RGBA16_EXT),_===t.SHORT&&Mt&&(H=Mt.RGBA16_SNORM_EXT),_===t.UNSIGNED_SHORT_4_4_4_4&&(H=t.RGBA4),_===t.UNSIGNED_SHORT_5_5_5_1&&(H=t.RGB5_A1)}return(H===t.R16F||H===t.R32F||H===t.RG16F||H===t.RG32F||H===t.RGBA16F||H===t.RGBA32F)&&r.get("EXT_color_buffer_float"),H}function E(C,R){let _;return C?R===null||R===1014||R===1020?_=t.DEPTH24_STENCIL8:R===1015?_=t.DEPTH32F_STENCIL8:R===1012&&(_=t.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===1014||R===1020?_=t.DEPTH_COMPONENT24:R===1015?_=t.DEPTH_COMPONENT32F:R===1012&&(_=t.DEPTH_COMPONENT16),_}function y(C,R){return c(C)===!0||C.isFramebufferTexture&&C.minFilter!==1003&&C.minFilter!==1006?Math.log2(Math.max(R.width,R.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?R.mipmaps.length:1}function A(C){let R=C.target;R.removeEventListener("dispose",A),b(R),R.isVideoTexture&&f.delete(R),R.isHTMLTexture&&d.delete(R)}function w(C){let R=C.target;R.removeEventListener("dispose",w),L(R)}function b(C){let R=a.get(C);if(R.__webglInit===void 0)return;let _=C.source,q=p.get(_);if(q){let et=q[R.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(C),Object.keys(q).length===0&&p.delete(_)}a.remove(C)}function S(C){let R=a.get(C);t.deleteTexture(R.__webglTexture);let _=C.source,q=p.get(_);delete q[R.__cacheKey],s.memory.textures--}function L(C){let R=a.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),a.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(R.__webglFramebuffer[q]))for(let et=0;et<R.__webglFramebuffer[q].length;et++)t.deleteFramebuffer(R.__webglFramebuffer[q][et]);else t.deleteFramebuffer(R.__webglFramebuffer[q]);R.__webglDepthbuffer&&t.deleteRenderbuffer(R.__webglDepthbuffer[q])}else{if(Array.isArray(R.__webglFramebuffer))for(let q=0;q<R.__webglFramebuffer.length;q++)t.deleteFramebuffer(R.__webglFramebuffer[q]);else t.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&t.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&t.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let q=0;q<R.__webglColorRenderbuffer.length;q++)R.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(R.__webglColorRenderbuffer[q]);R.__webglDepthRenderbuffer&&t.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let _=C.textures;for(let q=0,et=_.length;q<et;q++){let dt=a.get(_[q]);dt.__webglTexture&&(t.deleteTexture(dt.__webglTexture),s.memory.textures--),a.remove(_[q])}a.remove(C)}let U=0;function G(){U=0}function N(){return U}function W(C){U=C}function J(){let C=U;return C>=i.maxTextures&&Zt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,C}function z(C){let R=[];return R.push(C.wrapS),R.push(C.wrapT),R.push(C.wrapR||0),R.push(C.magFilter),R.push(C.minFilter),R.push(C.anisotropy),R.push(C.internalFormat),R.push(C.format),R.push(C.type),R.push(C.generateMipmaps),R.push(C.premultiplyAlpha),R.push(C.flipY),R.push(C.unpackAlignment),R.push(C.colorSpace),R.join()}function K(C,R){let _=a.get(C);if(C.isVideoTexture&&Vt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&_.__version!==C.version){let q=C.image;if(q===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(_,C,R);return}}else C.isExternalTexture&&(_.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(t.TEXTURE_2D,_.__webglTexture,t.TEXTURE0+R)}function D(C,R){let _=a.get(C);C.isRenderTargetTexture===!1&&C.version>0&&_.__version!==C.version?gt(_,C,R):(C.isExternalTexture&&(_.__webglTexture=C.sourceTexture?C.sourceTexture:null),e.bindTexture(t.TEXTURE_2D_ARRAY,_.__webglTexture,t.TEXTURE0+R))}function I(C,R){let _=a.get(C);C.isRenderTargetTexture===!1&&C.version>0&&_.__version!==C.version?gt(_,C,R):e.bindTexture(t.TEXTURE_3D,_.__webglTexture,t.TEXTURE0+R)}function V(C,R){let _=a.get(C);C.isCubeDepthTexture!==!0&&C.version>0&&_.__version!==C.version?pt(_,C,R):e.bindTexture(t.TEXTURE_CUBE_MAP,_.__webglTexture,t.TEXTURE0+R)}let tt={[Yd]:t.REPEAT,[da]:t.CLAMP_TO_EDGE,[Xd]:t.MIRRORED_REPEAT},Z={[We]:t.NEAREST,[$d]:t.NEAREST_MIPMAP_NEAREST,[jd]:t.NEAREST_MIPMAP_LINEAR,[be]:t.LINEAR,[qd]:t.LINEAR_MIPMAP_NEAREST,[bi]:t.LINEAR_MIPMAP_LINEAR},lt={512:t.NEVER,519:t.ALWAYS,513:t.LESS,515:t.LEQUAL,514:t.EQUAL,518:t.GEQUAL,516:t.GREATER,517:t.NOTEQUAL};function ot(C,R){if(R.type===1015&&r.has("OES_texture_float_linear")===!1&&(R.magFilter===1006||R.magFilter===1007||R.magFilter===1005||R.magFilter===1008||R.minFilter===1006||R.minFilter===1007||R.minFilter===1005||R.minFilter===1008)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,tt[R.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,tt[R.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,tt[R.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Z[R.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Z[R.minFilter]),R.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,lt[R.compareFunction])),r.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===1003||R.minFilter!==1005&&R.minFilter!==1008||R.type===1015&&r.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||a.get(R).__currentAnisotropy){let _=r.get("EXT_texture_filter_anisotropic");t.texParameterf(C,_.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),a.get(R).__currentAnisotropy=R.anisotropy}}}function Y(C,R){let _=!1;C.__webglInit===void 0&&(C.__webglInit=!0,R.addEventListener("dispose",A));let q=R.source,et=p.get(q);et===void 0&&(et={},p.set(q,et));let dt=z(R);if(dt!==C.__cacheKey){et[dt]===void 0&&(et[dt]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,_=!0),et[dt].usedTimes++;let Mt=et[C.__cacheKey];Mt!==void 0&&(et[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&S(R)),C.__cacheKey=dt,C.__webglTexture=et[dt].texture}return _}function Q(C,R,_){return Math.floor(Math.floor(C/_)/R)}function at(C,R,_,q){let et=C.updateRanges;if(et.length===0)e.texSubImage2D(t.TEXTURE_2D,0,0,0,R.width,R.height,_,q,R.data);else{et.sort((mt,Tt)=>mt.start-Tt.start);let dt=0;for(let mt=1;mt<et.length;mt++){let Tt=et[dt],rt=et[mt],Ut=Tt.start+Tt.count,St=Q(rt.start,R.width,4),Ft=Q(Tt.start,R.width,4);rt.start<=Ut+1&&St===Ft&&Q(rt.start+rt.count-1,R.width,4)===St?Tt.count=Math.max(Tt.count,rt.start+rt.count-Tt.start):(++dt,et[dt]=rt)}et.length=dt+1;let Mt=e.getParameter(t.UNPACK_ROW_LENGTH),H=e.getParameter(t.UNPACK_SKIP_PIXELS),ft=e.getParameter(t.UNPACK_SKIP_ROWS);e.pixelStorei(t.UNPACK_ROW_LENGTH,R.width);for(let mt=0,Tt=et.length;mt<Tt;mt++){let rt=et[mt],Ut=Math.floor(rt.start/4),St=Math.ceil(rt.count/4),Ft=Ut%R.width,$t=Math.floor(Ut/R.width),k=St;e.pixelStorei(t.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(t.UNPACK_SKIP_ROWS,$t),e.texSubImage2D(t.TEXTURE_2D,0,Ft,$t,k,1,_,q,R.data)}C.clearUpdateRanges(),e.pixelStorei(t.UNPACK_ROW_LENGTH,Mt),e.pixelStorei(t.UNPACK_SKIP_PIXELS,H),e.pixelStorei(t.UNPACK_SKIP_ROWS,ft)}}function gt(C,R,_){let q=t.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),R.isData3DTexture&&(q=t.TEXTURE_3D);let et=Y(C,R),dt=R.source;e.bindTexture(q,C.__webglTexture,t.TEXTURE0+_);let Mt=a.get(dt);if(dt.version!==Mt.__version||et===!0){if(e.activeTexture(t.TEXTURE0+_),!(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)){let it=ne.getPrimaries(ne.workingColorSpace),nt=R.colorSpace===""?null:ne.getPrimaries(R.colorSpace),Et=R.colorSpace===""||it===nt?t.NONE:t.BROWSER_DEFAULT_WEBGL;e.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(t.UNPACK_ALIGNMENT,R.unpackAlignment);let H=m(R.image,!1,i.maxTextureSize);H=Lt(R,H);let ft=n.convert(R.format,R.colorSpace),mt=n.convert(R.type),Tt=M(R.internalFormat,ft,mt,R.normalized,R.colorSpace,R.isVideoTexture);ot(q,R);let rt,Ut=R.mipmaps,St=R.isVideoTexture!==!0,Ft=Mt.__version===void 0||et===!0,$t=dt.dataReady,k=y(R,H);if(R.isDepthTexture)Tt=E(R.format===yi,R.type),Ft&&(St?e.texStorage2D(t.TEXTURE_2D,1,Tt,H.width,H.height):e.texImage2D(t.TEXTURE_2D,0,Tt,H.width,H.height,0,ft,mt,null));else if(R.isDataTexture)if(Ut.length>0){St&&Ft&&e.texStorage2D(t.TEXTURE_2D,k,Tt,Ut[0].width,Ut[0].height);for(let it=0,nt=Ut.length;it<nt;it++)rt=Ut[it],St?$t&&e.texSubImage2D(t.TEXTURE_2D,it,0,0,rt.width,rt.height,ft,mt,rt.data):e.texImage2D(t.TEXTURE_2D,it,Tt,rt.width,rt.height,0,ft,mt,rt.data);R.generateMipmaps=!1}else St?(Ft&&e.texStorage2D(t.TEXTURE_2D,k,Tt,H.width,H.height),$t&&at(R,H,ft,mt)):e.texImage2D(t.TEXTURE_2D,0,Tt,H.width,H.height,0,ft,mt,H.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){St&&Ft&&e.texStorage3D(t.TEXTURE_2D_ARRAY,k,Tt,Ut[0].width,Ut[0].height,H.depth);for(let it=0,nt=Ut.length;it<nt;it++)if(rt=Ut[it],R.format!==1023)if(ft!==null)if(St){if($t)if(R.layerUpdates.size>0){let Et=Fa(rt.width,rt.height,R.format,R.type);for(let Ct of R.layerUpdates){let st=rt.data.subarray(Ct*Et/rt.data.BYTES_PER_ELEMENT,(Ct+1)*Et/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,it,0,0,Ct,rt.width,rt.height,1,ft,st)}}else e.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,it,0,0,0,rt.width,rt.height,H.depth,ft,rt.data)}else e.compressedTexImage3D(t.TEXTURE_2D_ARRAY,it,Tt,rt.width,rt.height,H.depth,0,rt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else St?$t&&e.texSubImage3D(t.TEXTURE_2D_ARRAY,it,0,0,0,rt.width,rt.height,H.depth,ft,mt,rt.data):e.texImage3D(t.TEXTURE_2D_ARRAY,it,Tt,rt.width,rt.height,H.depth,0,ft,mt,rt.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{St&&Ft&&e.texStorage2D(t.TEXTURE_2D,k,Tt,Ut[0].width,Ut[0].height);for(let it=0,nt=Ut.length;it<nt;it++)rt=Ut[it],R.format===1023?St?$t&&e.texSubImage2D(t.TEXTURE_2D,it,0,0,rt.width,rt.height,ft,mt,rt.data):e.texImage2D(t.TEXTURE_2D,it,Tt,rt.width,rt.height,0,ft,mt,rt.data):ft===null?Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?$t&&e.compressedTexSubImage2D(t.TEXTURE_2D,it,0,0,rt.width,rt.height,ft,rt.data):e.compressedTexImage2D(t.TEXTURE_2D,it,Tt,rt.width,rt.height,0,rt.data)}else if(R.isDataArrayTexture)if(St){if(Ft&&e.texStorage3D(t.TEXTURE_2D_ARRAY,k,Tt,H.width,H.height,H.depth),$t)if(R.layerUpdates.size>0){let it=Fa(H.width,H.height,R.format,R.type);for(let nt of R.layerUpdates){let Et=H.data.subarray(nt*it/H.data.BYTES_PER_ELEMENT,(nt+1)*it/H.data.BYTES_PER_ELEMENT);e.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,nt,H.width,H.height,1,ft,mt,Et)}R.clearLayerUpdates()}else e.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,ft,mt,H.data)}else e.texImage3D(t.TEXTURE_2D_ARRAY,0,Tt,H.width,H.height,H.depth,0,ft,mt,H.data);else if(R.isData3DTexture)St?(Ft&&e.texStorage3D(t.TEXTURE_3D,k,Tt,H.width,H.height,H.depth),$t&&e.texSubImage3D(t.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,ft,mt,H.data)):e.texImage3D(t.TEXTURE_3D,0,Tt,H.width,H.height,H.depth,0,ft,mt,H.data);else if(R.isFramebufferTexture){if(Ft)if(St)e.texStorage2D(t.TEXTURE_2D,k,Tt,H.width,H.height);else{let it=H.width,nt=H.height;for(let Et=0;Et<k;Et++)e.texImage2D(t.TEXTURE_2D,Et,Tt,it,nt,0,ft,mt,null),it>>=1,nt>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in t){let it=t.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),H.parentNode!==it){it.appendChild(H),d.add(R),it.onpaint=nt=>{let Et=nt.changedElements;for(let Ct of d)Et.includes(Ct.image)&&(Ct.needsUpdate=!0)},it.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,H);else{let nt=t.RGBA,Et=t.RGBA,Ct=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,nt,Et,Ct,H)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(St&&Ft){let it=It(Ut[0]);e.texStorage2D(t.TEXTURE_2D,k,Tt,it.width,it.height)}for(let it=0,nt=Ut.length;it<nt;it++)rt=Ut[it],St?$t&&e.texSubImage2D(t.TEXTURE_2D,it,0,0,ft,mt,rt):e.texImage2D(t.TEXTURE_2D,it,Tt,ft,mt,rt);R.generateMipmaps=!1}else if(St){if(Ft){let it=It(H);e.texStorage2D(t.TEXTURE_2D,k,Tt,it.width,it.height)}$t&&e.texSubImage2D(t.TEXTURE_2D,0,0,0,ft,mt,H)}else e.texImage2D(t.TEXTURE_2D,0,Tt,ft,mt,H);c(R)&&x(q),Mt.__version=dt.version,R.onUpdate&&R.onUpdate(R)}C.__version=R.version}function pt(C,R,_){if(R.image.length!==6)return;let q=Y(C,R),et=R.source;e.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+_);let dt=a.get(et);if(et.version!==dt.__version||q===!0){e.activeTexture(t.TEXTURE0+_);let Mt=ne.getPrimaries(ne.workingColorSpace),H=R.colorSpace===""?null:ne.getPrimaries(R.colorSpace),ft=R.colorSpace===""||Mt===H?t.NONE:t.BROWSER_DEFAULT_WEBGL;e.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(t.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let mt=R.isCompressedTexture||R.image[0].isCompressedTexture,Tt=R.image[0]&&R.image[0].isDataTexture,rt=[];for(let st=0;st<6;st++)!mt&&!Tt?rt[st]=m(R.image[st],!0,i.maxCubemapSize):rt[st]=Tt?R.image[st].image:R.image[st],rt[st]=Lt(R,rt[st]);let Ut=rt[0],St=n.convert(R.format,R.colorSpace),Ft=n.convert(R.type),$t=M(R.internalFormat,St,Ft,R.normalized,R.colorSpace),k=R.isVideoTexture!==!0,it=dt.__version===void 0||q===!0,nt=et.dataReady,Et=y(R,Ut);ot(t.TEXTURE_CUBE_MAP,R);let Ct;if(mt){k&&it&&e.texStorage2D(t.TEXTURE_CUBE_MAP,Et,$t,Ut.width,Ut.height);for(let st=0;st<6;st++){Ct=rt[st].mipmaps;for(let wt=0;wt<Ct.length;wt++){let _t=Ct[wt];R.format===1023?k?nt&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,0,0,_t.width,_t.height,St,Ft,_t.data):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,$t,_t.width,_t.height,0,St,Ft,_t.data):St===null?Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?nt&&e.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,0,0,_t.width,_t.height,St,_t.data):e.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,$t,_t.width,_t.height,0,_t.data)}}}else{if(Ct=R.mipmaps,k&&it){Ct.length>0&&Et++;let st=It(rt[0]);e.texStorage2D(t.TEXTURE_CUBE_MAP,Et,$t,st.width,st.height)}for(let st=0;st<6;st++)if(Tt){k?nt&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,rt[st].width,rt[st].height,St,Ft,rt[st].data):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,rt[st].width,rt[st].height,0,St,Ft,rt[st].data);for(let wt=0;wt<Ct.length;wt++){let _t=Ct[wt].image[st].image;k?nt&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,0,0,_t.width,_t.height,St,Ft,_t.data):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,$t,_t.width,_t.height,0,St,Ft,_t.data)}}else{k?nt&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,St,Ft,rt[st]):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,St,Ft,rt[st]);for(let wt=0;wt<Ct.length;wt++){let _t=Ct[wt];k?nt&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,0,0,St,Ft,_t.image[st]):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,$t,St,Ft,_t.image[st])}}}c(R)&&x(t.TEXTURE_CUBE_MAP),dt.__version=et.version,R.onUpdate&&R.onUpdate(R)}C.__version=R.version}function ut(C,R,_,q,et,dt){let Mt=n.convert(_.format,_.colorSpace),H=n.convert(_.type),ft=M(_.internalFormat,Mt,H,_.normalized,_.colorSpace),mt=a.get(R),Tt=a.get(_);if(Tt.__renderTarget=R,!mt.__hasExternalTextures){let rt=Math.max(1,R.width>>dt),Ut=Math.max(1,R.height>>dt);et===t.TEXTURE_3D||et===t.TEXTURE_2D_ARRAY?e.texImage3D(et,dt,ft,rt,Ut,R.depth,0,Mt,H,null):e.texImage2D(et,dt,ft,rt,Ut,0,Mt,H,null)}e.bindFramebuffer(t.FRAMEBUFFER,C),O(R)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,et,Tt.__webglTexture,0,zt(R)):(et===t.TEXTURE_2D||et>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,et,Tt.__webglTexture,dt),e.bindFramebuffer(t.FRAMEBUFFER,null)}function Gt(C,R,_){if(t.bindRenderbuffer(t.RENDERBUFFER,C),R.depthBuffer){let q=R.depthTexture,et=q&&q.isDepthTexture?q.type:null,dt=E(R.stencilBuffer,et),Mt=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;O(R)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,zt(R),dt,R.width,R.height):_?t.renderbufferStorageMultisample(t.RENDERBUFFER,zt(R),dt,R.width,R.height):t.renderbufferStorage(t.RENDERBUFFER,dt,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Mt,t.RENDERBUFFER,C)}else{let q=R.textures;for(let et=0;et<q.length;et++){let dt=q[et],Mt=n.convert(dt.format,dt.colorSpace),H=n.convert(dt.type),ft=M(dt.internalFormat,Mt,H,dt.normalized,dt.colorSpace);O(R)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,zt(R),ft,R.width,R.height):_?t.renderbufferStorageMultisample(t.RENDERBUFFER,zt(R),ft,R.width,R.height):t.renderbufferStorage(t.RENDERBUFFER,ft,R.width,R.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Wt(C,R,_){let q=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(t.FRAMEBUFFER,C),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=a.get(R.depthTexture);if(et.__renderTarget=R,(!et.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),q){if(et.__webglInit===void 0&&(et.__webglInit=!0,R.depthTexture.addEventListener("dispose",A)),et.__webglTexture===void 0){et.__webglTexture=t.createTexture(),e.bindTexture(t.TEXTURE_CUBE_MAP,et.__webglTexture),ot(t.TEXTURE_CUBE_MAP,R.depthTexture);let mt=n.convert(R.depthTexture.format),Tt=n.convert(R.depthTexture.type),rt;R.depthTexture.format===1026?rt=t.DEPTH_COMPONENT24:R.depthTexture.format===1027&&(rt=t.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,rt,R.width,R.height,0,mt,Tt,null)}}else K(R.depthTexture,0);let dt=et.__webglTexture,Mt=zt(R),H=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+_:t.TEXTURE_2D,ft=R.depthTexture.format===1027?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(R.depthTexture.format===1026)O(R)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ft,H,dt,0,Mt):t.framebufferTexture2D(t.FRAMEBUFFER,ft,H,dt,0);else if(R.depthTexture.format===1027)O(R)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ft,H,dt,0,Mt):t.framebufferTexture2D(t.FRAMEBUFFER,ft,H,dt,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(C){let R=a.get(C),_=C.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),q){let et=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,q.removeEventListener("dispose",et)};q.addEventListener("dispose",et),R.__depthDisposeCallback=et}R.__boundDepthTexture=q}if(C.depthTexture&&!R.__autoAllocateDepthBuffer)if(_)for(let q=0;q<6;q++)Wt(R.__webglFramebuffer[q],C,q);else{let q=C.texture.mipmaps;q&&q.length>0?Wt(R.__webglFramebuffer[0],C,0):Wt(R.__webglFramebuffer,C,0)}else if(_){R.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(t.FRAMEBUFFER,R.__webglFramebuffer[q]),R.__webglDepthbuffer[q]===void 0)R.__webglDepthbuffer[q]=t.createRenderbuffer(),Gt(R.__webglDepthbuffer[q],C,!1);else{let et=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,dt=R.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,dt),t.framebufferRenderbuffer(t.FRAMEBUFFER,et,t.RENDERBUFFER,dt)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(t.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(t.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=t.createRenderbuffer(),Gt(R.__webglDepthbuffer,C,!1);else{let et=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,dt=R.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,dt),t.framebufferRenderbuffer(t.FRAMEBUFFER,et,t.RENDERBUFFER,dt)}}e.bindFramebuffer(t.FRAMEBUFFER,null)}function ee(C,R,_){let q=a.get(C);R!==void 0&&ut(q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),_!==void 0&&Ot(C)}function fe(C){let R=C.texture,_=a.get(C),q=a.get(R);C.addEventListener("dispose",w);let et=C.textures,dt=C.isWebGLCubeRenderTarget===!0,Mt=et.length>1;if(Mt||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=R.version,s.memory.textures++),dt){_.__webglFramebuffer=[];for(let H=0;H<6;H++)if(R.mipmaps&&R.mipmaps.length>0){_.__webglFramebuffer[H]=[];for(let ft=0;ft<R.mipmaps.length;ft++)_.__webglFramebuffer[H][ft]=t.createFramebuffer()}else _.__webglFramebuffer[H]=t.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){_.__webglFramebuffer=[];for(let H=0;H<R.mipmaps.length;H++)_.__webglFramebuffer[H]=t.createFramebuffer()}else _.__webglFramebuffer=t.createFramebuffer();if(Mt)for(let H=0,ft=et.length;H<ft;H++){let mt=a.get(et[H]);mt.__webglTexture===void 0&&(mt.__webglTexture=t.createTexture(),s.memory.textures++)}if(C.samples>0&&O(C)===!1){_.__webglMultisampledFramebuffer=t.createFramebuffer(),_.__webglColorRenderbuffer=[],e.bindFramebuffer(t.FRAMEBUFFER,_.__webglMultisampledFramebuffer);for(let H=0;H<et.length;H++){let ft=et[H];_.__webglColorRenderbuffer[H]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,_.__webglColorRenderbuffer[H]);let mt=n.convert(ft.format,ft.colorSpace),Tt=n.convert(ft.type),rt=M(ft.internalFormat,mt,Tt,ft.normalized,ft.colorSpace,C.isXRRenderTarget===!0),Ut=zt(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ut,rt,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+H,t.RENDERBUFFER,_.__webglColorRenderbuffer[H])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(_.__webglDepthRenderbuffer=t.createRenderbuffer(),Gt(_.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(t.FRAMEBUFFER,null)}}if(dt){e.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ot(t.TEXTURE_CUBE_MAP,R);for(let H=0;H<6;H++)if(R.mipmaps&&R.mipmaps.length>0)for(let ft=0;ft<R.mipmaps.length;ft++)ut(_.__webglFramebuffer[H][ft],C,R,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ft);else ut(_.__webglFramebuffer[H],C,R,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);c(R)&&x(t.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let H=0,ft=et.length;H<ft;H++){let mt=et[H],Tt=a.get(mt),rt=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),e.bindTexture(rt,Tt.__webglTexture),ot(rt,mt),ut(_.__webglFramebuffer,C,mt,t.COLOR_ATTACHMENT0+H,rt,0),c(mt)&&x(rt)}e.unbindTexture()}else{let H=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(H=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),e.bindTexture(H,q.__webglTexture),ot(H,R),R.mipmaps&&R.mipmaps.length>0)for(let ft=0;ft<R.mipmaps.length;ft++)ut(_.__webglFramebuffer[ft],C,R,t.COLOR_ATTACHMENT0,H,ft);else ut(_.__webglFramebuffer,C,R,t.COLOR_ATTACHMENT0,H,0);c(R)&&x(H),e.unbindTexture()}C.depthBuffer&&Ot(C)}function ce(C){let R=C.textures;for(let _=0,q=R.length;_<q;_++){let et=R[_];if(c(et)){let dt=T(C),Mt=a.get(et).__webglTexture;e.bindTexture(dt,Mt),x(dt),e.unbindTexture()}}}let yt=[],Bt=[];function Pt(C){if(C.samples>0){if(O(C)===!1){let R=C.textures,_=C.width,q=C.height,et=t.COLOR_BUFFER_BIT,dt=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Mt=a.get(C),H=R.length>1;if(H)for(let mt=0;mt<R.length;mt++)e.bindFramebuffer(t.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+mt,t.RENDERBUFFER,null),e.bindFramebuffer(t.FRAMEBUFFER,Mt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+mt,t.TEXTURE_2D,null,0);e.bindFramebuffer(t.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let ft=C.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(t.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(t.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let mt=0;mt<R.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=t.STENCIL_BUFFER_BIT)),H){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Mt.__webglColorRenderbuffer[mt]);let Tt=a.get(R[mt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Tt,0)}t.blitFramebuffer(0,0,_,q,0,0,_,q,et,t.NEAREST),o===!0&&(yt.length=0,Bt.length=0,yt.push(t.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(yt.push(dt),Bt.push(dt),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Bt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(t.READ_FRAMEBUFFER,null),e.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),H)for(let mt=0;mt<R.length;mt++){e.bindFramebuffer(t.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+mt,t.RENDERBUFFER,Mt.__webglColorRenderbuffer[mt]);let Tt=a.get(R[mt]).__webglTexture;e.bindFramebuffer(t.FRAMEBUFFER,Mt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+mt,t.TEXTURE_2D,Tt,0)}e.bindFramebuffer(t.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&o){let R=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[R])}}}function zt(C){return Math.min(i.maxSamples,C.samples)}function O(C){let R=a.get(C);return C.samples>0&&r.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Vt(C){let R=s.render.frame;f.get(C)!==R&&(f.set(C,R),C.update())}function Lt(C,R){let _=C.colorSpace,q=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||_!=="srgb-linear"&&_!==""&&(ne.getTransfer(_)==="srgb"?(q!==1023||et!==1009)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",_)),R}function It(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=J,this.resetTextureUnits=G,this.getTextureUnits=N,this.setTextureUnits=W,this.setTexture2D=K,this.setTexture2DArray=D,this.setTexture3D=I,this.setTextureCube=V,this.rebindTextures=ee,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=O,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Pg(t,r){function e(a,i=""){let n,s=ne.getTransfer(i);if(a===1009)return t.UNSIGNED_BYTE;if(a===1017)return t.UNSIGNED_SHORT_4_4_4_4;if(a===1018)return t.UNSIGNED_SHORT_5_5_5_1;if(a===35902)return t.UNSIGNED_INT_5_9_9_9_REV;if(a===35899)return t.UNSIGNED_INT_10F_11F_11F_REV;if(a===1010)return t.BYTE;if(a===1011)return t.SHORT;if(a===1012)return t.UNSIGNED_SHORT;if(a===1013)return t.INT;if(a===1014)return t.UNSIGNED_INT;if(a===1015)return t.FLOAT;if(a===1016)return t.HALF_FLOAT;if(a===1021)return t.ALPHA;if(a===1022)return t.RGB;if(a===1023)return t.RGBA;if(a===1026)return t.DEPTH_COMPONENT;if(a===1027)return t.DEPTH_STENCIL;if(a===1028)return t.RED;if(a===1029)return t.RED_INTEGER;if(a===1030)return t.RG;if(a===1031)return t.RG_INTEGER;if(a===1033)return t.RGBA_INTEGER;if(a===33776||a===33777||a===33778||a===33779)if(s==="srgb")if(n=r.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(a===33776)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===33777)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===33778)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===33779)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=r.get("WEBGL_compressed_texture_s3tc"),n!==null){if(a===33776)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===33777)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===33778)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===33779)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===35840||a===35841||a===35842||a===35843)if(n=r.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(a===35840)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===35841)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===35842)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===35843)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===36196||a===37492||a===37496||a===37488||a===37489||a===37490||a===37491)if(n=r.get("WEBGL_compressed_texture_etc"),n!==null){if(a===36196||a===37492)return s==="srgb"?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(a===37496)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(a===37488)return n.COMPRESSED_R11_EAC;if(a===37489)return n.COMPRESSED_SIGNED_R11_EAC;if(a===37490)return n.COMPRESSED_RG11_EAC;if(a===37491)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===37808||a===37809||a===37810||a===37811||a===37812||a===37813||a===37814||a===37815||a===37816||a===37817||a===37818||a===37819||a===37820||a===37821)if(n=r.get("WEBGL_compressed_texture_astc"),n!==null){if(a===37808)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===37809)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===37810)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===37811)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===37812)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===37813)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===37814)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===37815)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===37816)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===37817)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===37818)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===37819)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===37820)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===37821)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===36492||a===36494||a===36495)if(n=r.get("EXT_texture_compression_bptc"),n!==null){if(a===36492)return s==="srgb"?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===36494)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===36495)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===36283||a===36284||a===36285||a===36286)if(n=r.get("EXT_texture_compression_rgtc"),n!==null){if(a===36283)return n.COMPRESSED_RED_RGTC1_EXT;if(a===36284)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===36285)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===36286)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===1020?t.UNSIGNED_INT_24_8:t[a]===void 0?null:t[a]}return{convert:e}}var Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lg=`
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

}`,Dg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,r){if(this.texture===null){let e=new Ci(t.texture);(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=e}}getMesh(t){if(this.texture!==null&&this.mesh===null){let r=t.cameras[0].viewport,e=new Ae({vertexShader:Cg,fragmentShader:Lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Pe(new Ai(20,20),e)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ug=class extends ec{constructor(t,r){super();let e=this,a=null,i=1,n=null,s="local-floor",l=1,o=null,u=null,f=null,d=null,h=null,p=null,g=typeof XRWebGLBinding<"u",v=new Dg,m={},c=r.getContextAttributes(),x=null,T=null,M=[],E=[],y=new de,A=null,w=null,b=new Ke;b.viewport=new ge;let S=new Ke;S.viewport=new ge;let L=[b,S],U=new ac,G=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=M[Y];return Q===void 0&&(Q=new ra,M[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=M[Y];return Q===void 0&&(Q=new ra,M[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=M[Y];return Q===void 0&&(Q=new ra,M[Y]=Q),Q.getHandSpace()};function W(Y){let Q=E.indexOf(Y.inputSource);if(Q===-1)return;let at=M[Q];at!==void 0&&(at.update(Y.inputSource,Y.frame,o||n),at.dispatchEvent({type:Y.type,data:Y.inputSource}))}function J(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",J),a.removeEventListener("inputsourceschange",z);for(let Y=0;Y<M.length;Y++){let Q=E[Y];Q!==null&&(E[Y]=null,M[Y].disconnect(Q))}G=null,N=null,v.reset();for(let Y in m)delete m[Y];if(t.setRenderTarget(x),h=null,d=null,f=null,a=null,T=null,ot.stop(),e.isPresenting=!1,t.setPixelRatio(A),t.setSize(y.width,y.height,!1),w!==null){let Y=w.camera;Y.fov=w.fov,Y.zoom=w.zoom,Y.updateProjectionMatrix(),w=null}e.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){i=Y,e.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){s=Y,e.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||n},this.setReferenceSpace=function(Y){o=Y},this.getBaseLayer=function(){return d===null?h:d},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(a,r)),f},this.getFrame=function(){return p},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(x=t.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",J),a.addEventListener("inputsourceschange",z),c.xrCompatible!==!0&&await r.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(y),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,at=null,gt=null;c.depth&&(gt=c.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,Q=c.stencil?yi:ga,at=c.stencil?Ri:Je);let pt={colorFormat:r.RGBA8,depthFormat:gt,scaleFactor:i};f=this.getBinding(),d=f.createProjectionLayer(pt),a.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new xe(d.textureWidth,d.textureHeight,{format:pa,type:Ye,depthTexture:new Qe(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:c.stencil,colorSpace:t.outputColorSpace,samples:c.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Q={antialias:c.antialias,alpha:!0,depth:c.depth,stencil:c.stencil,framebufferScaleFactor:i};h=new XRWebGLLayer(a,r,Q),a.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new xe(h.framebufferWidth,h.framebufferHeight,{format:pa,type:Ye,colorSpace:t.outputColorSpace,stencilBuffer:c.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),o=null,n=await a.requestReferenceSpace(s),ot.setContext(a),ot.start(),e.isPresenting=!0,e.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z(Y){for(let Q=0;Q<Y.removed.length;Q++){let at=Y.removed[Q],gt=E.indexOf(at);gt>=0&&(E[gt]=null,M[gt].disconnect(at))}for(let Q=0;Q<Y.added.length;Q++){let at=Y.added[Q],gt=E.indexOf(at);if(gt===-1){for(let ut=0;ut<M.length;ut++)if(ut>=E.length){E.push(at),gt=ut;break}else if(E[ut]===null){E[ut]=at,gt=ut;break}if(gt===-1)break}let pt=M[gt];pt&&pt.connect(at)}}let K=new xt,D=new xt;function I(Y,Q,at){K.setFromMatrixPosition(Q.matrixWorld),D.setFromMatrixPosition(at.matrixWorld);let gt=K.distanceTo(D),pt=Q.projectionMatrix.elements,ut=at.projectionMatrix.elements,Gt=pt[14]/(pt[10]-1),Wt=pt[14]/(pt[10]+1),Ot=(pt[9]+1)/pt[5],ee=(pt[9]-1)/pt[5],fe=(pt[8]-1)/pt[0],ce=(ut[8]+1)/ut[0],yt=Gt*fe,Bt=Gt*ce,Pt=gt/(-fe+ce),zt=Pt*-fe;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(zt),Y.translateZ(Pt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),pt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let O=Gt+Pt,Vt=Wt+Pt,Lt=yt-zt,It=Bt+(gt-zt),C=Ot*Wt/Vt*O,R=ee*Wt/Vt*O;Y.projectionMatrix.makePerspective(Lt,It,C,R,O,Vt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function V(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let Q=Y.near,at=Y.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(at=v.depthFar)),U.near=S.near=b.near=Q,U.far=S.far=b.far=at,(G!==U.near||N!==U.far)&&(a.updateRenderState({depthNear:U.near,depthFar:U.far}),G=U.near,N=U.far),U.layers.mask=Y.layers.mask|6,b.layers.mask=U.layers.mask&-5,S.layers.mask=U.layers.mask&-3;let gt=Y.parent,pt=U.cameras;V(U,gt);for(let ut=0;ut<pt.length;ut++)V(pt[ut],gt);pt.length===2?I(U,b,S):U.projectionMatrix.copy(b.projectionMatrix),w===null&&Y.isPerspectiveCamera&&(w={camera:Y,fov:Y.fov,zoom:Y.zoom}),tt(Y,U,gt)};function tt(Y,Q,at){at===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(at.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ic*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(d!==null||h!==null)return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(U)},this.getCameraTexture=function(Y){return m[Y]};let Z=null;function lt(Y,Q){if(u=Q.getViewerPose(o||n),p=Q,u!==null){let at=u.views;h!==null&&(t.setRenderTargetFramebuffer(T,h.framebuffer),t.setRenderTarget(T));let gt=!1;at.length!==U.cameras.length&&(U.cameras.length=0,gt=!0);for(let ut=0;ut<at.length;ut++){let Gt=at[ut],Wt=null;if(h!==null)Wt=h.getViewport(Gt);else{let ee=f.getViewSubImage(d,Gt);Wt=ee.viewport,ut===0&&(t.setRenderTargetTextures(T,ee.colorTexture,ee.depthStencilTexture),t.setRenderTarget(T))}let Ot=L[ut];Ot===void 0&&(Ot=new Ke,Ot.layers.enable(ut),Ot.viewport=new ge,L[ut]=Ot),Ot.matrix.fromArray(Gt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Gt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),ut===0&&(U.matrix.copy(Ot.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),gt===!0&&U.cameras.push(Ot)}let pt=a.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&g){f=e.getBinding();let ut=f.getDepthInformation(at[0]);ut&&ut.isValid&&ut.texture&&v.init(ut,a.renderState)}if(pt&&pt.includes("camera-access")&&g){t.state.unbindTexture(),f=e.getBinding();for(let ut=0;ut<at.length;ut++){let Gt=at[ut].camera;if(Gt){let Wt=m[Gt];Wt||(Wt=new Ci,m[Gt]=Wt);let Ot=f.getCameraImage(Gt);Wt.sourceTexture=Ot}}}}for(let at=0;at<M.length;at++){let gt=E[at],pt=M[at];gt!==null&&pt!==void 0&&pt.update(gt,Q,o||n)}Z&&Z(Y,Q),Q.detectedPlanes&&e.dispatchEvent({type:"planesdetected",data:Q}),p=null}let ot=new Di;ot.setAnimationLoop(lt),this.setAnimationLoop=function(Y){Z=Y},this.dispose=function(){}}},Ig=new Re,Fi=new Xt;Fi.set(-1,0,0,0,1,0,0,0,1);function Sg(t,r){function e(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function a(m,c){c.color.getRGB(m.fogColor.value,Pi(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function i(m,c,x,T,M){c.isNodeMaterial?c.uniformsNeedUpdate=!1:c.isMeshBasicMaterial?n(m,c):c.isMeshLambertMaterial?(n(m,c),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)):c.isMeshToonMaterial?(n(m,c),d(m,c)):c.isMeshPhongMaterial?(n(m,c),f(m,c),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)):c.isMeshStandardMaterial?(n(m,c),h(m,c),c.isMeshPhysicalMaterial&&p(m,c,M)):c.isMeshMatcapMaterial?(n(m,c),g(m,c)):c.isMeshDepthMaterial?n(m,c):c.isMeshDistanceMaterial?(n(m,c),v(m,c)):c.isMeshNormalMaterial?n(m,c):c.isLineBasicMaterial?(s(m,c),c.isLineDashedMaterial&&l(m,c)):c.isPointsMaterial?o(m,c,x,T):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function n(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,e(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,e(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,e(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===1&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,e(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===1&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,e(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,e(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,e(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);let x=r.get(c),T=x.envMap,M=x.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Fi),m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,e(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,e(c.aoMap,m.aoMapTransform))}function s(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,e(c.map,m.mapTransform))}function l(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function o(m,c,x,T){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*x,m.scale.value=T*.5,c.map&&(m.map.value=c.map,e(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,e(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,e(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,e(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function d(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function h(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,x){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===1&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.retroreflectivity>0&&(m.retroreflectivity.value=c.retroreflectivity),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,c){c.matcap&&(m.matcap.value=c.matcap)}function v(m,c){let x=r.get(c).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:i}}function Ng(t,r,e,a){let i={},n={},s=[],l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function o(M,E){let y=E.program;a.uniformBlockBinding(M,y)}function u(M,E){let y=i[M.id];y===void 0&&(m(M),y=f(M),i[M.id]=y,M.addEventListener("dispose",x));let A=E.program;a.updateUBOMapping(M,A);let w=r.render.frame;n[M.id]!==w&&(h(M),n[M.id]=w)}function f(M){let E=d();M.__bindingPointIndex=E;let y=t.createBuffer(),A=M.__size,w=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,y),y}function d(){for(let M=0;M<l;M++)if(s.indexOf(M)===-1)return s.push(M),M;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let E=i[M.id],y=M.uniforms,A=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let w=0,b=y.length;w<b;w++){let S=y[w];if(Array.isArray(S))for(let L=0,U=S.length;L<U;L++)p(S[L],w,L,A);else p(S,w,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(M,E,y,A){if(v(M,E,y,A)===!0){let w=M.__offset,b=M.value;if(Array.isArray(b)){let S=0;for(let L=0;L<b.length;L++){let U=b[L],G=c(U);g(U,M.__data,S),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(S+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,w,M.__data)}}function g(M,E,y){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,y)}function v(M,E,y,A){let w=M.value,b=E+"_"+y;if(A[b]===void 0)return A[b]=typeof w=="number"||typeof w=="boolean"?w:ArrayBuffer.isView(w)?w.slice():w.clone(),!0;{let S=A[b];if(typeof w=="number"||typeof w=="boolean"){if(S!==w)return A[b]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(S.equals(w)===!1)return S.copy(w),!0}}return!1}function m(M){let E=M.uniforms,y=0;for(let w=0,b=E.length;w<b;w++){let S=Array.isArray(E[w])?E[w]:[E[w]];for(let L=0,U=S.length;L<U;L++){let G=S[L],N=Array.isArray(G.value)?G.value:[G.value];for(let W=0,J=N.length;W<J;W++){let z=N[W],K=c(z),D=y%16,I=D%K.boundary,V=D+I;y+=I,V!==0&&16-V<K.storage&&(y+=16-V),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=K.storage}}}let A=y%16;return A>0&&(y+=16-A),M.__size=y,M.__cache={},this}function c(M){let E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",M),E}function x(M){let E=M.target;E.removeEventListener("dispose",x);let y=s.indexOf(E.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(i[E.id]),delete i[E.id],delete n[E.id]}function T(){for(let M in i)t.deleteBuffer(i[M]);s=[],i={},n={}}return{bind:o,update:u,dispose:T}}var _g=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),we=null;function Og(){return we===null&&(we=new nc(_g,16,16,ma,Se),we.name="DFG_LUT",we.minFilter=be,we.magFilter=be,we.wrapS=da,we.wrapT=da,we.generateMipmaps=!1,we.needsUpdate=!0),we}var Lp=class{constructor(t={}){let{canvas:r=Gd(),context:e=null,depth:a=!0,stencil:i=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:o=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Ye}=t;this.isWebGLRenderer=!0;let p;if(e!==null){if(typeof WebGLRenderingContext<"u"&&e instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=e.getContextAttributes().alpha}else p=n;let g=h,v=new Set([sc,lc,oc]),m=new Set([Ye,Je,uc,Ri,fc,hc]),c=new Uint32Array(4),x=new Int32Array(4),T=new xt,M=null,E=null,y=[],A=[],w=null;this.domElement=r,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,S=!1,L=null,U=null,G=null,N=null;this._outputColorSpace=Vd;let W=0,J=0,z=null,K=-1,D=null,I=new ge,V=new ge,tt=null,Z=new jt(0),lt=0,ot=r.width,Y=r.height,Q=1,at=null,gt=null,pt=new ge(0,0,ot,Y),ut=new ge(0,0,ot,Y),Gt=!1,Wt=new Ei,Ot=!1,ee=!1,fe=new Re,ce=new xt,yt=new ge,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function zt(){return z===null?Q:1}let O=e;function Vt(P,F){return r.getContext(P,F)}let Lt,It,C,R,_,q,et,dt,Mt,H,ft,mt,Tt,rt,Ut,St,Ft,$t,k,it,nt,Et,Ct;try{let P={alpha:!0,depth:a,stencil:i,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:o,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in r&&r.setAttribute("data-engine","three.js r186"),r.addEventListener("webglcontextlost",_t,!1),r.addEventListener("webglcontextrestored",ue,!1),r.addEventListener("webglcontextcreationerror",Kt,!1),O===null){let F="webgl2";if(O=Vt(F,P),O===null)throw Vt(F)?Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(P){throw r.removeEventListener("webglcontextlost",_t,!1),r.removeEventListener("webglcontextrestored",ue,!1),r.removeEventListener("webglcontextcreationerror",Kt,!1),ae("WebGLRenderer: "+P.message),P}function st(){Lt=new Oc(O),Lt.init(),nt=new Pg(O,Lt),It=new Ac(O,Lt,t,nt),C=new Rg(O,Lt),It.reversedDepthBuffer&&d&&C.buffers.depth.setReversed(!0),U=O.createFramebuffer(),G=O.createFramebuffer(),N=O.createFramebuffer(),R=new kc(O),_=new hg,q=new Ag(O,Lt,C,_,It,nt,R),et=new _c(b),dt=new Ec(O),Et=new yc(O,dt),Mt=new Fc(O,dt,R,Et),H=new Hc(O,Mt,dt,Et,R),$t=new Bc(O,It,q),Ut=new Pc(_),ft=new fg(b,et,Lt,It,Et,Ut),mt=new Sg(b,_),Tt=new cg,rt=new xg(Lt),Ft=new Tc(b,et,C,H,p,l),St=new yg(b,H,It),Ct=new Ng(O,R,It,C),k=new Rc(O,Lt,R),it=new zc(O,Lt,R),R.programs=ft.programs,b.capabilities=It,b.extensions=Lt,b.properties=_,b.renderLists=Tt,b.shadowMap=St,b.state=C,b.info=R}g!==1009&&(w=new Vc(g,r.width,r.height,s,a,i));let wt=new Ug(b,O);this.xr=wt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let P=Lt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Lt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(P){P!==void 0&&(Q=P,this.setSize(ot,Y,!1))},this.getSize=function(P){return P.set(ot,Y)},this.setSize=function(P,F,$=!0){wt.isPresenting?Zt("WebGLRenderer: Can't change size while VR device is presenting."):(ot=P,Y=F,r.width=Math.floor(P*Q),r.height=Math.floor(F*Q),$===!0&&(r.style.width=P+"px",r.style.height=F+"px"),w!==null&&w.setSize(r.width,r.height),this.setViewport(0,0,P,F))},this.getDrawingBufferSize=function(P){return P.set(ot*Q,Y*Q).floor()},this.setDrawingBufferSize=function(P,F,$){ot=P,Y=F,Q=$,r.width=Math.floor(P*$),r.height=Math.floor(F*$),this.setViewport(0,0,P,F)},this.setEffects=function(P){if(g===1009)ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");else{if(P){for(let F=0;F<P.length;F++)if(P[F].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(P||[])}},this.getCurrentViewport=function(P){return P.copy(I)},this.getViewport=function(P){return P.copy(pt)},this.setViewport=function(P,F,$,j){P.isVector4?pt.set(P.x,P.y,P.z,P.w):pt.set(P,F,$,j),C.viewport(I.copy(pt).multiplyScalar(Q).round())},this.getScissor=function(P){return P.copy(ut)},this.setScissor=function(P,F,$,j){P.isVector4?ut.set(P.x,P.y,P.z,P.w):ut.set(P,F,$,j),C.scissor(V.copy(ut).multiplyScalar(Q).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(P){C.setScissorTest(Gt=P)},this.setOpaqueSort=function(P){at=P},this.setTransparentSort=function(P){gt=P},this.getClearColor=function(P){return P.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(P=!0,F=!0,$=!0){let j=0;if(P){let X=!1;if(z!==null){let ht=z.texture.format;X=v.has(ht)}if(X){let ht=z.texture.type,vt=m.has(ht),bt=Ft.getClearColor(),Rt=Ft.getClearAlpha(),Nt=bt.r,Ht=bt.g,Yt=bt.b;vt?(c[0]=Nt,c[1]=Ht,c[2]=Yt,c[3]=Rt,O.clearBufferuiv(O.COLOR,0,c)):(x[0]=Nt,x[1]=Ht,x[2]=Yt,x[3]=Rt,O.clearBufferiv(O.COLOR,0,x))}else j|=O.COLOR_BUFFER_BIT}F&&(j|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),L=P},this.dispose=function(){r.removeEventListener("webglcontextlost",_t,!1),r.removeEventListener("webglcontextrestored",ue,!1),r.removeEventListener("webglcontextcreationerror",Kt,!1),Ft.dispose(),Tt.dispose(),rt.dispose(),_.dispose(),et.dispose(),H.dispose(),Et.dispose(),Ct.dispose(),ft.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",ki),wt.removeEventListener("sessionend",Bi),_e.stop()};function _t(P){P.preventDefault(),Na("WebGLRenderer: Context Lost."),S=!0}function ue(){Na("WebGLRenderer: Context Restored."),S=!1;let P=R.autoReset,F=St.enabled,$=St.autoUpdate,j=St.needsUpdate,X=St.type;st(),R.autoReset=P,St.enabled=F,St.autoUpdate=$,St.needsUpdate=j,St.type=X}function Kt(P){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Te(P){let F=P.target;F.removeEventListener("dispose",Te),Ce(F)}function Ce(P){zg(P),_.remove(P)}function zg(P){let F=_.get(P).programs;F!==void 0&&(F.forEach(function($){ft.releaseProgram($)}),P.isShaderMaterial&&ft.releaseShaderCache(P))}this.renderBufferDirect=function(P,F,$,j,X,ht){F===null&&(F=Bt);let vt=X.isMesh&&X.matrixWorld.determinantAffine()<0,bt=Hg(P,F,$,j,X);C.setMaterial(j,vt);let Rt=$.index,Nt=1;if(j.wireframe===!0){if(Rt=Mt.getWireframeAttribute($),Rt===void 0)return;Nt=2}let Ht=$.drawRange,Yt=$.attributes.position,Dt=Ht.start*Nt,Qt=(Ht.start+Ht.count)*Nt;ht!==null&&(Dt=Math.max(Dt,ht.start*Nt),Qt=Math.min(Qt,(ht.start+ht.count)*Nt)),Rt===null?Yt!=null&&(Dt=Math.max(Dt,0),Qt=Math.min(Qt,Yt.count)):(Dt=Math.max(Dt,0),Qt=Math.min(Qt,Rt.count));let re=Qt-Dt;if(re<0||re===1/0)return;Et.setup(X,j,bt,$,Rt);let ie,qt=k;if(Rt!==null&&(ie=dt.get(Rt),qt=it,qt.setIndex(ie)),X.isMesh)j.wireframe===!0?(C.setLineWidth(j.wireframeLinewidth*zt()),qt.setMode(O.LINES)):qt.setMode(O.TRIANGLES);else if(X.isLine){let he=j.linewidth;he===void 0&&(he=1),C.setLineWidth(he*zt()),X.isLineSegments?qt.setMode(O.LINES):X.isLineLoop?qt.setMode(O.LINE_LOOP):qt.setMode(O.LINE_STRIP)}else X.isPoints?qt.setMode(O.POINTS):X.isSprite&&qt.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))qt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let he=X._multiDrawStarts,At=X._multiDrawCounts,pe=X._multiDrawCount,Me=Rt?dt.get(Rt).bytesPerElement:1,ve=_.get(j).currentProgram.getUniforms();for(let ye=0;ye<pe;ye++)ve.setValue(O,"_gl_DrawID",ye),qt.render(he[ye]/Me,At[ye])}else if(X.isInstancedMesh)qt.renderInstances(Dt,re,X.count);else if($.isInstancedBufferGeometry){let he=$._maxInstanceCount===void 0?1/0:$._maxInstanceCount,At=Math.min($.instanceCount,he);qt.renderInstances(Dt,re,At)}else qt.render(Dt,re)};function zi(P,F,$,j){L!==null&&P.isNodeMaterial&&L.setObject(j,P),Ot===!0&&Ut.setState(P,$,!1),P.transparent===!0&&P.side===2&&P.forceSinglePass===!1?(P.side=1,P.needsUpdate=!0,na(P,F,j),P.side=0,P.needsUpdate=!0,na(P,F,j),P.side=2):na(P,F,j)}this.compile=function(P,F,$=null){$===null&&($=P),L!==null&&L.renderStart(P,F,$),E=rt.get($),E.init(F),A.push(E),$.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),P!==$&&P.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),ee=this.localClippingEnabled,Ot=Ut.init(this.clippingPlanes,ee),Ot===!0&&Ut.setGlobalState(this.clippingPlanes,F),L!==null&&St.render(E.state.shadowsArray,$,F);let j=new Set;return P.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ht=X.material;if(ht)if(Array.isArray(ht))for(let vt=0;vt<ht.length;vt++){let bt=ht[vt];zi(bt,$,F,X),j.add(bt)}else zi(ht,$,F,X),j.add(ht)}),E=A.pop(),L!==null&&L.renderEnd(),j},this.compileAsync=function(P,F,$=null){let j=this.compile(P,F,$);return new Promise(X=>{function ht(){j.forEach(function(vt){let bt=_.get(vt).currentProgram;(bt===void 0||bt.isReady())&&j.delete(vt)}),j.size===0?X(P):setTimeout(ht,10)}Lt.get("KHR_parallel_shader_compile")===null?setTimeout(ht,10):ht()})};let Ua=null;function kg(P){Ua&&Ua(P)}function ki(){_e.stop()}function Bi(){_e.start()}let _e=new Di;_e.setAnimationLoop(kg),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(P){Ua=P,wt.setAnimationLoop(P),P===null?_e.stop():_e.start()},wt.addEventListener("sessionstart",ki),wt.addEventListener("sessionend",Bi),this.render=function(P,F){if(F!==void 0&&F.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;L!==null&&L.renderStart(P,F);let $=wt.enabled===!0&&wt.isPresenting===!0,j=w!==null&&(z===null||$)&&w.begin(b,z);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(F),F=wt.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,F,z),E=rt.get(P,A.length),E.init(F),E.state.textureUnits=q.getTextureUnits(),A.push(E),fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Wt.setFromProjectionMatrix(fe,_a,F.reversedDepth),ee=this.localClippingEnabled,Ot=Ut.init(this.clippingPlanes,ee),M=Tt.get(P,y.length),M.init(),y.push(M),wt.enabled===!0&&wt.isPresenting===!0){let ht=b.xr.getDepthSensingMesh();ht!==null&&Ia(ht,F,-1/0,b.sortObjects)}Ia(P,F,0,b.sortObjects),M.finish(),L!==null&&L.updateLights(E.state.lightsArray),b.sortObjects===!0&&M.sort(at,gt),Pt=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,Pt&&Ft.addToRenderList(M,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ot===!0&&Ut.beginShadows();let X=E.state.shadowsArray;if(St.render(X,P,F),Ot===!0&&Ut.endShadows(),(j&&w.hasRenderPass())===!1){let ht=M.opaque,vt=M.transmissive;if(E.setupLights(),F.isArrayCamera){let bt=F.cameras;if(vt.length>0)for(let Rt=0,Nt=bt.length;Rt<Nt;Rt++){let Ht=bt[Rt];Gi(ht,vt,P,Ht)}Pt&&Ft.render(P);for(let Rt=0,Nt=bt.length;Rt<Nt;Rt++){let Ht=bt[Rt];Hi(M,P,Ht,Ht.viewport)}}else vt.length>0&&Gi(ht,vt,P,F),Pt&&Ft.render(P),Hi(M,P,F)}z!==null&&J===0&&(q.updateMultisampleRenderTarget(z),q.updateRenderTargetMipmap(z)),j&&w.end(b),P.isScene===!0&&P.onAfterRender(b,P,F),Et.resetDefaultState(),K=-1,D=null,A.pop(),A.length>0?(E=A[A.length-1],q.setTextureUnits(E.state.textureUnits),Ot===!0&&Ut.setGlobalState(b.clippingPlanes,E.state.camera)):E=null,y.pop(),M=y.length>0?y[y.length-1]:null,L!==null&&L.renderEnd()};function Ia(P,F,$,j){if(P.visible===!1)return;if(P.layers.test(F.layers)){if(P.isGroup)$=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(F);else if(P.isLightProbeGrid)E.pushLightProbeGrid(P);else if(P.isLight)E.pushLight(P),P.castShadow&&E.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(Wt)){j&&yt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(fe);let ht=H.update(P),vt=P.material;vt.visible&&M.push(P,ht,vt,$,yt.z,null,F)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(Wt))){let ht=H.update(P),vt=P.material;if(j&&(P.boundingSphere===void 0?(ht.boundingSphere===null&&ht.computeBoundingSphere(),yt.copy(ht.boundingSphere.center)):(P.boundingSphere===null&&P.computeBoundingSphere(),yt.copy(P.boundingSphere.center)),yt.applyMatrix4(P.matrixWorld).applyMatrix4(fe)),Array.isArray(vt)){let bt=ht.groups;for(let Rt=0,Nt=bt.length;Rt<Nt;Rt++){let Ht=bt[Rt],Yt=vt[Ht.materialIndex];Yt&&Yt.visible&&M.push(P,ht,Yt,$,yt.z,Ht,F)}}else vt.visible&&M.push(P,ht,vt,$,yt.z,null,F)}}let X=P.children;for(let ht=0,vt=X.length;ht<vt;ht++)Ia(X[ht],F,$,j)}function Hi(P,F,$,j){let{opaque:X,transmissive:ht,transparent:vt}=P;E.setupLightsView($),Ot===!0&&Ut.setGlobalState(b.clippingPlanes,$),j&&C.viewport(I.copy(j)),X.length>0&&ia(X,F,$),ht.length>0&&ia(ht,F,$),vt.length>0&&ia(vt,F,$),C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function Gi(P,F,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[j.id]===void 0){let Yt=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[j.id]=new xe(1,1,{generateMipmaps:!0,type:Yt?Se:Ye,minFilter:bi,samples:Math.max(4,It.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let X=E.state.transmissionRenderTarget[j.id],ht=j.viewport||I;X.setSize(ht.z*b.transmissionResolutionScale,ht.w*b.transmissionResolutionScale);let vt=b.getRenderTarget(),bt=b.getActiveCubeFace(),Rt=b.getActiveMipmapLevel();b.setRenderTarget(X),b.getClearColor(Z),lt=b.getClearAlpha(),lt<1&&b.setClearColor(16777215,.5),b.clear(),Pt&&Ft.render($);let Nt=b.toneMapping;b.toneMapping=0;let Ht=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),E.setupLightsView(j),Ot===!0&&Ut.setGlobalState(b.clippingPlanes,j),ia(P,$,j),q.updateMultisampleRenderTarget(X),q.updateRenderTargetMipmap(X),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Dt=0,Qt=F.length;Dt<Qt;Dt++){let{object:re,geometry:ie,material:qt,group:he}=F[Dt];if(qt.side===2&&re.layers.test(j.layers)){let At=qt.side;qt.side=1,qt.needsUpdate=!0,Vi(re,$,j,ie,qt,he),qt.side=At,qt.needsUpdate=!0,Yt=!0}}Yt===!0&&(q.updateMultisampleRenderTarget(X),q.updateRenderTargetMipmap(X))}b.setRenderTarget(vt,bt,Rt),b.setClearColor(Z,lt),Ht!==void 0&&(j.viewport=Ht),b.toneMapping=Nt}function ia(P,F,$){let j=F.isScene===!0?F.overrideMaterial:null;for(let X=0,ht=P.length;X<ht;X++){let vt=P[X],{object:bt,geometry:Rt,group:Nt}=vt,Ht=vt.material;Ht.allowOverride===!0&&j!==null&&(Ht=j),bt.layers.test($.layers)&&Vi(bt,F,$,Rt,Ht,Nt)}}function Vi(P,F,$,j,X,ht){L!==null&&X.isNodeMaterial&&L.setObject(P,X),P.onBeforeRender(b,F,$,j,X,ht),P.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),X.onBeforeRender(b,F,$,j,P,ht),X.transparent===!0&&X.side===2&&X.forceSinglePass===!1?(X.side=1,X.needsUpdate=!0,b.renderBufferDirect($,F,j,X,P,ht),X.side=0,X.needsUpdate=!0,b.renderBufferDirect($,F,j,X,P,ht),X.side=2):b.renderBufferDirect($,F,j,X,P,ht),P.onAfterRender(b,F,$,j,X,ht)}function na(P,F,$){F.isScene!==!0&&(F=Bt);let j=_.get(P),X=E.state.lights,ht=E.state.shadowsArray,vt=X.state.version,bt=ft.getParameters(P,X.state,ht,F,$,E.state.lightProbeGridArray),Rt=ft.getProgramCacheKey(bt),Nt=j.programs;j.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?F.environment:null,j.fog=F.fog;let Ht=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;j.envMap=et.get(P.envMap||j.environment,Ht),j.envMapRotation=j.environment!==null&&P.envMap===null?F.environmentRotation:P.envMapRotation,Nt===void 0&&(P.addEventListener("dispose",Te),Nt=new Map,j.programs=Nt);let Yt=Nt.get(Rt);if(Yt!==void 0){if(j.currentProgram===Yt&&j.lightsStateVersion===vt)return Xi(P,bt),Yt}else bt.uniforms=ft.getUniforms(P),L!==null&&P.isNodeMaterial&&L.build(P,$,bt),P.onBeforeCompile(bt,b),Yt=ft.acquireProgram(bt,Rt),Nt.set(Rt,Yt),j.uniforms=bt.uniforms;let Dt=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Dt.clippingPlanes=Ut.uniform),Xi(P,bt),j.needsLights=Vg(P),j.lightsStateVersion=vt,j.needsLights&&(Dt.ambientLightColor.value=X.state.ambient,Dt.lightProbe.value=X.state.probe,Dt.sunLights.value=X.state.sun,Dt.sunLightShadows.value=X.state.sunShadow,Dt.directionalLights.value=X.state.directional,Dt.directionalLightShadows.value=X.state.directionalShadow,Dt.spotLights.value=X.state.spot,Dt.spotLightShadows.value=X.state.spotShadow,Dt.rectAreaLights.value=X.state.rectArea,Dt.ltc_1.value=X.state.rectAreaLTC1,Dt.ltc_2.value=X.state.rectAreaLTC2,Dt.pointLights.value=X.state.point,Dt.pointLightShadows.value=X.state.pointShadow,Dt.hemisphereLights.value=X.state.hemi,Dt.sunShadowMatrix.value=X.state.sunShadowMatrix,Dt.sunShadowCascade.value=X.state.sunShadowCascade,Dt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Dt.spotLightMatrix.value=X.state.spotLightMatrix,Dt.spotLightMap.value=X.state.spotLightMap,Dt.pointShadowMatrix.value=X.state.pointShadowMatrix),j.lightProbeGrid=E.state.lightProbeGridArray.length>0,j.currentProgram=Yt,j.uniformsList=null,Yt}function Wi(P){if(P.uniformsList===null){let F=P.currentProgram.getUniforms();P.uniformsList=Ze.seqWithValue(F.seq,P.uniforms)}return P.uniformsList}function Xi(P,F){let $=_.get(P);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Bg(P,F){if(P.length===0)return null;if(P.length===1)return P[0].texture===null?null:P[0];T.setFromMatrixPosition(F.matrixWorld);for(let $=0,j=P.length;$<j;$++){let X=P[$];if(X.texture!==null&&X.boundingBox.containsPoint(T))return X}return null}function Hg(P,F,$,j,X){F.isScene!==!0&&(F=Bt),q.resetTextureUnits();let ht=F.fog,vt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?F.environment:null,bt=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ne.workingColorSpace,Rt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Nt=et.get(j.envMap||vt,Rt),Ht=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Yt=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Dt=!!$.morphAttributes.position,Qt=!!$.morphAttributes.normal,re=!!$.morphAttributes.color,ie=0;j.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ie=b.toneMapping);let qt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,he=qt===void 0?0:qt.length,At=_.get(j),pe=E.state.lights;if(Ot===!0&&(ee===!0||P!==D)){let te=P===D&&j.id===K;Ut.setState(j,P,te)}let Me=!1;j.version===At.__version?At.needsLights&&At.lightsStateVersion!==pe.state.version?Me=!0:At.outputColorSpace===bt?X.isBatchedMesh&&At.batching===!1||!X.isBatchedMesh&&At.batching===!0||X.isBatchedMesh&&At.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&At.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&At.instancing===!1||!X.isInstancedMesh&&At.instancing===!0||X.isSkinnedMesh&&At.skinning===!1||!X.isSkinnedMesh&&At.skinning===!0||X.isInstancedMesh&&At.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&At.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&At.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&At.instancingMorph===!1&&X.morphTexture!==null?Me=!0:At.envMap===Nt?j.fog===!0&&At.fog!==ht||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ut.numPlanes||At.numIntersection!==Ut.numIntersection)?Me=!0:At.vertexAlphas===Ht&&At.vertexTangents===Yt&&At.morphTargets===Dt&&At.morphNormals===Qt&&At.morphColors===re&&At.toneMapping===ie&&At.morphTargetsCount===he?!!At.lightProbeGrid!=E.state.lightProbeGridArray.length>0&&(Me=!0):Me=!0:Me=!0:Me=!0:(Me=!0,At.__version=j.version);let ve=At.currentProgram;Me===!0&&(ve=na(j,F,X),L&&j.isNodeMaterial&&L.onUpdateProgram(j,ve,At));let ye=!1,De=!1,Be=!1,Jt=ve.getUniforms(),se=At.uniforms;if(C.useProgram(ve.program)&&(ye=!0,De=!0,Be=!0),j.id!==K&&(K=j.id,De=!0),At.needsLights){let te=Bg(E.state.lightProbeGridArray,X);At.lightProbeGrid!==te&&(At.lightProbeGrid=te,De=!0)}if(ye||D!==P){C.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Jt.setValue(O,"projectionMatrix",P.projectionMatrix),Jt.setValue(O,"viewMatrix",P.matrixWorldInverse);let te=Jt.map.cameraPosition;te!==void 0&&te.setValue(O,ce.setFromMatrixPosition(P.matrixWorld)),It.logarithmicDepthBuffer&&Jt.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Jt.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),D!==P&&(D=P,De=!0,Be=!0)}if(At.needsLights&&(pe.state.sunShadowMap.length>0&&Jt.setValue(O,"sunShadowMap",pe.state.sunShadowMap,q),pe.state.directionalShadowMap.length>0&&Jt.setValue(O,"directionalShadowMap",pe.state.directionalShadowMap,q),pe.state.spotShadowMap.length>0&&Jt.setValue(O,"spotShadowMap",pe.state.spotShadowMap,q),pe.state.pointShadowMap.length>0&&Jt.setValue(O,"pointShadowMap",pe.state.pointShadowMap,q)),X.isSkinnedMesh){Jt.setOptional(O,X,"bindMatrix"),Jt.setOptional(O,X,"bindMatrixInverse");let te=X.skeleton;te&&(te.boneTexture===null&&te.computeBoneTexture(),Jt.setValue(O,"boneTexture",te.boneTexture,q))}X.isBatchedMesh&&(Jt.setOptional(O,X,"batchingTexture"),Jt.setValue(O,"batchingTexture",X._matricesTexture,q),Jt.setOptional(O,X,"batchingIdTexture"),Jt.setValue(O,"batchingIdTexture",X._indirectTexture,q),Jt.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Jt.setValue(O,"batchingColorTexture",X._colorsTexture,q));let Ue=$.morphAttributes;if((Ue.position!==void 0||Ue.normal!==void 0||Ue.color!==void 0)&&$t.update(X,$,ve),(De||At.receiveShadow!==X.receiveShadow)&&(At.receiveShadow=X.receiveShadow,Jt.setValue(O,"receiveShadow",X.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&F.environment!==null&&(se.envMapIntensity.value=F.environmentIntensity),se.dfgLUT!==void 0&&(se.dfgLUT.value=Og()),De){if(Jt.setValue(O,"toneMappingExposure",b.toneMappingExposure),At.needsLights&&Gg(se,Be),ht&&j.fog===!0&&mt.refreshFogUniforms(se,ht),mt.refreshMaterialUniforms(se,j,Q,Y,E.state.transmissionRenderTarget[P.id]),At.needsLights&&At.lightProbeGrid){let te=At.lightProbeGrid;se.probesSH.value=te.texture,se.probesMin.value.copy(te.boundingBox.min),se.probesMax.value.copy(te.boundingBox.max),se.probesResolution.value.copy(te.resolution)}Ze.upload(O,Wi(At),se,q)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ze.upload(O,Wi(At),se,q),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Jt.setValue(O,"center",X.center),Jt.setValue(O,"modelViewMatrix",X.modelViewMatrix),Jt.setValue(O,"normalMatrix",X.normalMatrix),Jt.setValue(O,"modelMatrix",X.matrixWorld),j.uniformsGroups!==void 0){let te=j.uniformsGroups;for(let qe=0,He=te.length;qe<He;qe++){let qi=te[qe];Ct.update(qi,ve),Ct.bind(qi,ve)}}return ve}function Gg(P,F){P.ambientLightColor.needsUpdate=F,P.lightProbe.needsUpdate=F,P.sunLights.needsUpdate=F,P.sunLightShadows.needsUpdate=F,P.directionalLights.needsUpdate=F,P.directionalLightShadows.needsUpdate=F,P.pointLights.needsUpdate=F,P.pointLightShadows.needsUpdate=F,P.spotLights.needsUpdate=F,P.spotLightShadows.needsUpdate=F,P.rectAreaLights.needsUpdate=F,P.hemisphereLights.needsUpdate=F}function Vg(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(P,F,$){let j=_.get(P);j.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),_.get(P.texture).__webglTexture=F,_.get(P.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,F){let $=_.get(P);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(P,F=0,$=0){z=P,W=F,J=$;let j=null,X=!1,ht=!1;if(P){let vt=_.get(P);if(vt.__useDefaultFramebuffer!==void 0){C.bindFramebuffer(O.FRAMEBUFFER,vt.__webglFramebuffer),I.copy(P.viewport),V.copy(P.scissor),tt=P.scissorTest,C.viewport(I),C.scissor(V),C.setScissorTest(tt),K=-1;return}if(vt.__webglFramebuffer===void 0)q.setupRenderTarget(P);else if(vt.__hasExternalTextures)q.rebindTextures(P,_.get(P.texture).__webglTexture,_.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Nt=P.depthTexture;if(vt.__boundDepthTexture!==Nt){if(Nt!==null&&_.has(Nt)&&(P.width!==Nt.image.width||P.height!==Nt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(P)}}let bt=P.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(ht=!0);let Rt=_.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(j=Array.isArray(Rt[F])?Rt[F][$]:Rt[F],X=!0):j=P.samples>0&&q.useMultisampledRTT(P)===!1?_.get(P).__webglMultisampledFramebuffer:Array.isArray(Rt)?Rt[$]:Rt,I.copy(P.viewport),V.copy(P.scissor),tt=P.scissorTest}else I.copy(pt).multiplyScalar(Q).floor(),V.copy(ut).multiplyScalar(Q).floor(),tt=Gt;if($!==0&&(j=U),C.bindFramebuffer(O.FRAMEBUFFER,j)&&C.drawBuffers(P,j),C.viewport(I),C.scissor(V),C.setScissorTest(tt),X){let vt=_.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,vt.__webglTexture,$)}else if(ht){let vt=F;for(let bt=0;bt<P.textures.length;bt++){let Rt=_.get(P.textures[bt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+bt,Rt.__webglTexture,$,vt)}}else if(P!==null&&$!==0){let vt=_.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,vt.__webglTexture,$)}K=-1};function Yi(P){let F=_.get(P);return(F.__readFormat!==P.format||F.__readType!==P.type)&&(F.__readFormat=P.format,F.__readType=P.type,F.__formatReadable=It.textureFormatReadable(P.format),F.__typeReadable=It.textureTypeReadable(P.type)),F}this.readRenderTargetPixels=function(P,F,$,j,X,ht,vt,bt=0){if(!(P&&P.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=_.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&vt!==void 0&&(Rt=Rt[vt]),Rt){C.bindFramebuffer(O.FRAMEBUFFER,Rt);try{let Nt=P.textures[bt],Ht=Nt.format,Yt=Nt.type;P.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+bt);let Dt=Yi(Nt);if(Dt.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=P.width-j&&$>=0&&$<=P.height-X&&O.readPixels(F,$,j,X,nt.convert(Ht),nt.convert(Yt),ht)}finally{let Nt=z===null?null:_.get(z).__webglFramebuffer;C.bindFramebuffer(O.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(P,F,$,j,X,ht,vt,bt=0){if(!(P&&P.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=_.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&vt!==void 0&&(Rt=Rt[vt]),Rt){if(F>=0&&F<=P.width-j&&$>=0&&$<=P.height-X){C.bindFramebuffer(O.FRAMEBUFFER,Rt);let Nt=P.textures[bt],Ht=Nt.format,Yt=Nt.type;P.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+bt);let Dt=Yi(Nt);if(Dt.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Qt),O.bufferData(O.PIXEL_PACK_BUFFER,ht.byteLength,O.STREAM_READ),O.readPixels(F,$,j,X,nt.convert(Ht),nt.convert(Yt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let re=z===null?null:_.get(z).__webglFramebuffer;C.bindFramebuffer(O.FRAMEBUFFER,re);let ie=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Wd(O,ie,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Qt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ht),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Qt),O.deleteSync(ie),ht}throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,F=null,$=0){let j=2**-$,X=Math.floor(P.image.width*j),ht=Math.floor(P.image.height*j),vt=F===null?0:F.x,bt=F===null?0:F.y;q.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,vt,bt,X,ht),C.unbindTexture()},this.copyTextureToTexture=function(P,F,$=null,j=null,X=0,ht=0){let vt,bt,Rt,Nt,Ht,Yt,Dt,Qt,re,ie=P.isCompressedTexture?P.mipmaps[ht]:P.image;if($!==null)vt=$.max.x-$.min.x,bt=$.max.y-$.min.y,Rt=$.isBox3?$.max.z-$.min.z:1,Nt=$.min.x,Ht=$.min.y,Yt=$.isBox3?$.min.z:0;else{let se=2**-X;vt=Math.floor(ie.width*se),bt=Math.floor(ie.height*se),Rt=P.isDataArrayTexture?ie.depth:P.isData3DTexture?Math.floor(ie.depth*se):1,Nt=0,Ht=0,Yt=0}j===null?(Dt=0,Qt=0,re=0):(Dt=j.x,Qt=j.y,re=j.z);let qt=nt.convert(F.format),he=nt.convert(F.type),At;F.isData3DTexture?(q.setTexture3D(F,0),At=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(q.setTexture2DArray(F,0),At=O.TEXTURE_2D_ARRAY):(q.setTexture2D(F,0),At=O.TEXTURE_2D),C.activeTexture(O.TEXTURE0),C.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);let pe=C.getParameter(O.UNPACK_ROW_LENGTH),Me=C.getParameter(O.UNPACK_IMAGE_HEIGHT),ve=C.getParameter(O.UNPACK_SKIP_PIXELS),ye=C.getParameter(O.UNPACK_SKIP_ROWS),De=C.getParameter(O.UNPACK_SKIP_IMAGES);C.pixelStorei(O.UNPACK_ROW_LENGTH,ie.width),C.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ie.height),C.pixelStorei(O.UNPACK_SKIP_PIXELS,Nt),C.pixelStorei(O.UNPACK_SKIP_ROWS,Ht),C.pixelStorei(O.UNPACK_SKIP_IMAGES,Yt);let Be=P.isDataArrayTexture||P.isData3DTexture,Jt=F.isDataArrayTexture||F.isData3DTexture;if(P.isDepthTexture){let se=_.get(P),Ue=_.get(F),te=_.get(se.__renderTarget),qe=_.get(Ue.__renderTarget);C.bindFramebuffer(O.READ_FRAMEBUFFER,te.__webglFramebuffer),C.bindFramebuffer(O.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let He=0;He<Rt;He++)Be&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,_.get(P).__webglTexture,X,Yt+He),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,_.get(F).__webglTexture,ht,re+He)),O.blitFramebuffer(Nt,Ht,vt,bt,Dt,Qt,vt,bt,O.DEPTH_BUFFER_BIT,O.NEAREST);C.bindFramebuffer(O.READ_FRAMEBUFFER,null),C.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||P.isRenderTargetTexture||_.has(P)){let se=_.get(P),Ue=_.get(F);C.bindFramebuffer(O.READ_FRAMEBUFFER,G),C.bindFramebuffer(O.DRAW_FRAMEBUFFER,N);for(let te=0;te<Rt;te++)Be?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,se.__webglTexture,X,Yt+te):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,se.__webglTexture,X),Jt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.__webglTexture,ht,re+te):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ue.__webglTexture,ht),X===0?Jt?O.copyTexSubImage3D(At,ht,Dt,Qt,re+te,Nt,Ht,vt,bt):O.copyTexSubImage2D(At,ht,Dt,Qt,Nt,Ht,vt,bt):O.blitFramebuffer(Nt,Ht,vt,bt,Dt,Qt,vt,bt,O.COLOR_BUFFER_BIT,O.NEAREST);C.bindFramebuffer(O.READ_FRAMEBUFFER,null),C.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Jt?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(At,ht,Dt,Qt,re,vt,bt,Rt,qt,he,ie.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(At,ht,Dt,Qt,re,vt,bt,Rt,qt,ie.data):O.texSubImage3D(At,ht,Dt,Qt,re,vt,bt,Rt,qt,he,ie):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ht,Dt,Qt,vt,bt,qt,he,ie.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ht,Dt,Qt,ie.width,ie.height,qt,ie.data):O.texSubImage2D(O.TEXTURE_2D,ht,Dt,Qt,vt,bt,qt,he,ie);C.pixelStorei(O.UNPACK_ROW_LENGTH,pe),C.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Me),C.pixelStorei(O.UNPACK_SKIP_PIXELS,ve),C.pixelStorei(O.UNPACK_SKIP_ROWS,ye),C.pixelStorei(O.UNPACK_SKIP_IMAGES,De),ht===0&&F.generateMipmaps&&O.generateMipmap(At),C.unbindTexture()},this.initRenderTarget=function(P){_.get(P).__webglFramebuffer===void 0&&q.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?q.setTextureCube(P,0):P.isData3DTexture?q.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?q.setTexture2DArray(P,0):q.setTexture2D(P,0),C.unbindTexture()},this.resetState=function(){W=0,J=0,z=null,C.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _a}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let r=this.getContext();r.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),r.unpackColorSpace=ne._getUnpackColorSpace()}};function Dp(t){return function(e){if(!Number.isFinite(e))return;t.loadingProgress=Math.max(t.loadingProgress,Math.min(1,Math.max(0,e)));let a=Math.floor(t.loadingProgress*t.loadingFootsteps.length+1e-8);t.loadingFootsteps.forEach((i,n)=>{i.classList.toggle("landed",n<a),i.classList.toggle("current",n===a-1)}),t.loadingProgressElement.setAttribute("aria-valuenow",String(Math.round(t.loadingProgress*100)))}}function Up(t){return function(e){t.loadingElement.querySelector(".loading-arrival").textContent=e}}function Ip(t){return async function(){t.setLoadingProgress(1),await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),t.loadingElement.classList.add("done"),t.loadingElement.setAttribute("aria-hidden","true")}}function Sp(t){return{low:{fps:30,scale:.75,msaa:0,shadowSize:512,shadows:!0,outline:"low"},medium:{fps:60,scale:1,msaa:2,shadowSize:1024,shadows:!0,outline:"medium"},high:{fps:0,scale:1.5,msaa:4,shadowSize:2048,shadows:!0,outline:"high"}}}function Np(t){return{fps:[30,60,120,0],scale:[.75,1,1.25,1.5],msaa:[0,2,4],shadowSize:[512,1024,2048],outline:["low","medium","high"]}}function _p(t){return function(){return t.isMobileModelProfile?{...navigator.deviceMemory&&navigator.deviceMemory<=3||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4?t.Ji.low:t.Yi}:{...t.Ji.high}}}function Op(t){return function(e={}){let a={...t.Ji.high};for(let[i,n]of Object.entries(t.graphicsSettingOptions))n.includes(e[i])&&(a[i]=e[i]);return typeof e.shadows=="boolean"&&(a.shadows=e.shadows),a}}function Fp(t){return function(){let e={};try{e=JSON.parse(localStorage.getItem(t.qi))??{}}catch{}return{mode:t.graphicsModes.includes(e.mode)?e.mode:"auto",custom:t.$i(e.custom??t.Qi())}}}function zp(t){return function({renderer:e,post:a,sun:i,resize:n,shadowScale:s=1}){let l=t.ea(),o={maxSamples:e.capabilities.maxSamples??4,maxTexture:e.capabilities.maxTextureSize??4096},u=new Set,f=null,d=0,h=[],p=0,g=-1/0,v=()=>l.mode==="custom"?l.custom:l.mode==="auto"?t.Qi():t.Ji[l.mode];function m(){let x=v(),T=f;f={...x,msaa:Math.min(x.msaa,o.maxSamples),shadowSize:Math.min(x.shadowSize*s,o.maxTexture)},a.setQuality({msaa:f.msaa,outline:f.outline}),i.castShadow!==f.shadows&&(i.castShadow=f.shadows),i.shadow.mapSize.x!==f.shadowSize&&(i.shadow.mapSize.set(f.shadowSize,f.shadowSize),i.shadow.map?.dispose(),i.shadow.map=null),T&&T.scale!==f.scale&&n();for(let M of u)M(f)}function c(){try{localStorage.setItem(t.qi,JSON.stringify({mode:l.mode,custom:l.custom}))}catch{}}return window.addEventListener("storage",x=>{x.key===t.qi&&(Object.assign(l,t.ea()),m())}),m(),{get mode(){return l.mode},get custom(){return{...l.custom}},get current(){return{...f}},get displayHz(){return d},caps:o,setMode(x){t.graphicsModes.includes(x)&&(x==="custom"&&l.mode!=="custom"&&(l.custom={...v()}),l.mode=x,c(),m())},set(x,T){l.custom=t.$i({...l.custom,[x]:T}),l.mode="custom",c(),m()},pixelRatio:()=>Math.min(window.devicePixelRatio||1,f.scale),onChange(x){return u.add(x),()=>u.delete(x)},shouldRender(x){if(p&&h.length<120&&(h.push(x-p),h.length===120)){let T=[...h].sort((M,E)=>M-E)[12];d=[30,48,60,75,90,100,120,144,165,240].reduce((M,E)=>Math.abs(1e3/E-T)<Math.abs(1e3/M-T)?E:M,60);for(let M of u)M(f)}return p=x,x<g&&(g=-1/0),f.fps&&x-g<1e3/f.fps-2?!1:(g=x,!0)},summary(){let x=e.domElement;return{mode:l.mode,...f,render:`${x.width}×${x.height}`,displayHz:d}}}}}function kp(t){return function(e,a=1){let i=l=>`${l[0]},${l[1]}`,n=new Map;for(let l of e)if(l.type!=="magic_carpet")for(let o of[l.points[0],l.points[l.points.length-1]])n.set(i(o),(n.get(i(o))||0)+1);let s=(l,o)=>{if(n.get(i(l))<2)return l;let u=o[0]-l[0],f=o[1]-l[1],d=Math.hypot(u,f),h=20*a;return[l[0]+u/d*h,l[1]+f/d*h]};return e.map(l=>{if(l.type==="magic_carpet")return null;let o=l.points,u=o.length-1;return[s(o[0],o[1]),s(o[u],o[u-1])]})}}function Bp(t){return function(e,a){let i=a.find(n=>n.name==="5号索道"&&n.type==="chair_lift");if(i)for(let[n,s]of[i.points[0],i.points.at(-1)]){let l=e.heightAt(n,s),o=Math.max(0,Math.floor((n-26-e.x0)/e.step)),u=Math.min(e.cells,Math.ceil((n+26-e.x0)/e.step)),f=Math.max(0,Math.floor((s-26-e.z0)/e.step)),d=Math.min(e.cells,Math.ceil((s+26-e.z0)/e.step));for(let h=f;h<=d;h++)for(let p=o;p<=u;p++){let g=Math.hypot(e.x0+p*e.step-n,e.z0+h*e.step-s),v=Math.max(0,Math.min(1,(g-13)/13)),m=1-v*v*(3-2*v),c=h*e.verts+p;e.h[c]+=(l-e.h[c])*m}}}}function Hp(t){return(r,e)=>(a,i,n)=>r.distAt(a,i)>=e+5&&[-4,4].every(s=>r.distAt(a+n.x*s,i+n.z*s)>=e+2)}function Gp(t){return function(e,a,i,n,s=new t.Vector3){return s.set(e.P.x+e.out.x*a+e.lat.x*i,n,e.P.z+e.out.z*a+e.lat.z*i)}}function Vp(t){return function(e,a,i,{scale:n,stationScale:s,offPiste:l,approach:o}){let u=new t.Vector3(i.x-a.x,0,i.z-a.z).normalize(),f=new t.Vector3(-u.z,0,u.x),d=Math.hypot(i.x-a.x,i.z-a.z),h=Math.abs(n-s)<1e-9,p=t.Io.mouth*s,g=h?{u:t.Io.wheel.u*n,x:t.Io.wheel.x*n,r:t.Io.wheel.r*n}:{u:p+6*n,x:0,r:t.Ro*n},v={P:a,out:u,lat:f,wheel:g,mouth:Math.max(p,g.u)},m=x=>e.heightAt(a.x+u.x*x,a.z+u.z*x),c=o?.get(t.es(a));if(c)Object.assign(v,c);else{let x=([M,E,y],A)=>{for(let w=0;w<=Math.max(M-E,y-M);w+=1)for(let b of[A+M+w,A+M-w])if(!(b<A+E||b>A+y)&&l(a.x+u.x*b,a.z+u.z*b,f))return b;return A+M};v.u1=x(t.Ho,v.mouth),v.u2=x(t.Uo,v.u1),v.a1=Math.sign(m(v.u2+80)-a.y)*t.Bo;let T=1/0;for(let M=0;M<=(h?t.Wo:0);M+=.5){v.base=a.y+M;for(let E=v.a1-2*t.Vo;E<=v.a1+2*t.Vo+1e-9;E+=t.zo(.25)){let y=t.$o(v,E,n,s),A=10*M*M;for(let w=v.mouth;w<=Math.min(v.u2+t.Qo,d/2);w+=5){let b=m(w),S=y(w);A+=Math.max(0,b-(S-t.Ko*n))**2+.2*Math.max(0,S-b-25*n)**2}A<T-1e-9&&(T=A,v.a3=E,v.fill=M)}}v.base=a.y+v.fill}return v.rope=v.base+t.Io.floor*s+t.Lo*n,v.ropeAt=t.$o(v,v.a3,n,s),v.y1=v.ropeAt(v.u1),v.y2=v.ropeAt(v.u2),v}}function Wp(t){return function(e,a,i,n){let s=e.base+t.Io.floor*n+t.Lo*i,l=Math.tan(e.a1),o=Math.tan((e.a1+a)/2),u=Math.tan(a),f=s+(e.u1-e.mouth)*l,d=f+(e.u2-e.u1)*o;return h=>h<=e.mouth?s:h<=e.u1?s+(h-e.mouth)*l:h<=e.u2?f+(h-e.u1)*o:d+(h-e.u2)*u}}function Xp(t){return r=>`${r.x.toFixed(1)},${r.z.toFixed(1)}`}function Yp(t){return function(e,a,i,{scale:n=1,stationScale:s=n,offPiste:l=()=>!0,approach:o=null}={}){let u={scale:n,stationScale:s,offPiste:l,approach:o},f=[t.Zo(e,a,i,u),t.Zo(e,i,a,u)],[d,h]=f,p=Math.hypot(i.x-a.x,i.z-a.z),g=d.out,v=d.lat,m=(L,U)=>new t.Vector3(a.x+g.x*L,U,a.z+g.z*L),c=L=>e.heightAt(a.x+g.x*L,a.z+g.z*L),x=d.u2,T=p-h.u2,M=[x];for(let L=x+t.Go[1];L<=T-t.Go[1];L+=2)l(a.x+g.x*L,a.z+g.z*L,v)&&M.push(L);M.push(T);let E=L=>(L/t.Go[0]-1)**2+.3+(L>250?((L-250)/50)**2:0),y=M.map(()=>1/0),A=M.map(()=>-1);y[0]=0;for(let L=1;L<M.length;L++)for(let U=L-1;U>=0;U--){let G=M[L]-M[U];if(G>t.Go[2])break;let N=y[U]+E(G);N<y[L]&&(y[L]=N,A[L]=U)}let w=[];for(let L=M.length-1;L>=0&&(w.unshift(M[L]),L!==0);L=A[L]);let b=L=>{let U=[m(d.mouth,d.rope),m(d.u1,d.y1)];for(let D of L){let I=p-D,V=D<=d.u2+t.Qo&&D<=I?d.ropeAt(D):I<=h.u2+t.Qo?h.ropeAt(I):c(D)+12*n;U.push(m(D,V))}U.push(m(p-h.u1,h.y1),m(p-h.mouth,h.rope));let G=U.length,N=G-4,W=(D,I)=>Math.hypot(I.x-D.x,I.z-D.z),J=[-4.3,-3,-1.7,1.7,t.Ro,4.3].map(D=>D*n),z=()=>{for(let D=2;D<G-3;D++){let I=U[D],V=U[D+1],tt=Math.ceil(W(I,V)/(2*n));for(let Z=1;Z<tt;Z++){let lt=Z/tt,ot=-1/0;for(let Y of J){let Q=t.MathUtils.lerp(I.x,V.x,lt)+v.x*Y,at=t.MathUtils.lerp(I.z,V.z,lt)+v.z*Y;ot=Math.max(ot,e.heightAt(Q,at)+t.Ko*n-t.MathUtils.lerp(I.y,V.y,lt))}ot<=0||(D===2?lt>.1&&(V.y+=ot/lt):D+1===G-3?lt<.9&&(I.y+=ot/(1-lt)):(I.y+=ot,V.y+=ot))}}for(let D=3;D<=N;D++){let I=U[D];I.y=Math.max(I.y,e.heightAt(I.x,I.z)+6*n)}},K=(D,I,V)=>{let tt=U[D],Z=U[I],lt=W(Z,tt),ot=Math.atan2(Z.y-U[V].y,W(U[V],Z));tt.y=t.MathUtils.clamp(tt.y,Z.y+lt*Math.tan(ot-t.Vo),Z.y+lt*Math.tan(ot+t.Vo))};if(3<=N)for(let D=0;D<120;D++){for(let I=3;I<=N;I++){let V=U[I-1],tt=U[I],Z=U[I+1],lt=W(V,tt)/(W(V,tt)+W(tt,Z));tt.y=Math.min(V.y+(Z.y-V.y)*lt,e.heightAt(tt.x,tt.z)+t.qo*n)}z(),K(3,2,1),K(N,G-3,G-2)}return z(),U},S=b(w);for(let L=0;L<6;L++){let U=!1;for(let G=3;G<S.length-3&&!U;G++){if(Math.abs(t.rs(S,G))<=t.Jo)continue;let N=G-2,[W,J]=w[N]-w[N-1]>=w[N+1]-w[N]?[w[N-1],w[N]]:[w[N],w[N+1]];if(!(J-W>=3*t.Go[1]))continue;let z=(W+J)/2;for(let K=0;K<=(J-W)/6&&!U;K+=2)for(let D of[z+K,z-K])!U&&l(a.x+g.x*D,a.z+g.z*D,v)&&(w.splice(W===w[N]?N+1:N,0,D),U=!0)}if(!U)break;S=b(w)}return{supports:S,ends:f,side:v,dir:g,length:p}}}function qp(t){return function(e,a){let i=e[a-1],n=e[a],s=e[a+1],l=(o,u)=>Math.atan2(u.y-o.y,Math.hypot(u.x-o.x,u.z-o.z));return-(l(i,n)+l(n,s))/2}}function jp(t){return function(e,a){let i=e[a-1],n=e[a],s=e[a+1],l=(o,u)=>Math.atan2(u.y-o.y,Math.hypot(u.x-o.x,u.z-o.z));return l(n,s)-l(i,n)}}function $p(t){return function(e,a=1){let{supports:i,side:n}=e,s=e.ends[0].P.y<=e.ends[1].P.y,[l,o]=s?e.ends:[e.ends[1],e.ends[0]],u=s?i.slice(1,-1):i.slice(1,-1).reverse(),f=s?n:n.clone().negate(),d=t.Ro*a,h=(E,y)=>E.wheel.x+y*(E===l?1:-1)*E.wheel.r,p=E=>{let y=[],A=U=>{let G=h(U,E);return[t.Xo(U,U.wheel.u,G,U.rope),t.Xo(U,U.mouth,G,U.rope)]},[w,b]=A(l),[S,L]=A(o);y.push(w),b.distanceTo(w)>1e-6&&y.push(b);for(let U of u)y.push(U.clone().addScaledVector(f,E*d));return L.distanceTo(S)>1e-6&&y.push(L),y.push(S),y},g=(E,y)=>{let A=[],{u:w,x:b,r:S}=E.wheel,L=Math.sign(y-b);for(let U=1;U<=24;U++){let G=Math.PI*U/24;A.push(t.Xo(E,w-S*Math.sin(G),b+L*S*Math.cos(G),E.rope))}return A},v=p(-1),m=p(1).reverse(),c=[...v,...g(o,h(o,-1)).slice(0,-1),...m,...g(l,h(l,1))],x=[0];for(let E=1;E<c.length;E++)x.push(x[E-1]+c[E].distanceTo(c[E-1]));let T=v.reduce((E,y,A)=>E+(A?y.distanceTo(v[A-1]):0),0),M=(l.mouth-l.wheel.u)/2;return{points:c,up:v,acc:x,total:x.at(-1),upLength:T,boarding:M,bottom:l,top:o}}}function Kp(t){return function(e,a,i,n,s){for(let l of t.ts(e,a,i,{offPiste:n}).ends){let{P:o,out:u,lat:f,base:d}=l,h=l.u2+t.Qo+30;s.set(t.es(o),{base:d,u1:l.u1,u2:l.u2,a1:l.a1,a3:l.a3});let p=x=>(x=t.MathUtils.clamp(x,0,1),1-x*x*(3-2*x)),g=Math.max(0,Math.floor((o.x-h-e.x0)/e.step)),v=Math.min(e.cells,Math.ceil((o.x+h-e.x0)/e.step)),m=Math.max(0,Math.floor((o.z-h-e.z0)/e.step)),c=Math.min(e.cells,Math.ceil((o.z+h-e.z0)/e.step));for(let x=m;x<=c;x++)for(let T=g;T<=v;T++){let M=e.x0+T*e.step-o.x,E=e.z0+x*e.step-o.z,y=M*u.x+E*u.z,A=M*f.x+E*f.z,w=x*e.verts+T,b=Math.hypot(Math.max(0,Math.abs(y)-11),Math.max(0,Math.abs(A)-10));if(e.h[w]+=(d-e.h[w])*p(b/12),y<l.mouth-2)continue;let S=t.MathUtils.clamp((y-l.mouth)/(l.u1-l.mouth),0,1),L=l.ropeAt(y)-t.MathUtils.lerp(t.Lo+t.Io.floor,6.8,S),U=p((Math.abs(A)-9)/12)*p((y-l.u2-t.Qo)/15);e.h[w]>L&&(e.h[w]-=(e.h[w]-L)*U)}}}}function Zp(t){return function(e,a,i,n=1){let s=new t.Vector3(i.x-a.x,0,i.z-a.z).normalize(),l=new t.Vector3(-s.z,0,s.x),o=Math.hypot(i.x-a.x,i.z-a.z),u=Math.max(2,Math.ceil(o/60)),f=3*n,d=Array.from({length:u+1},(c,x)=>{let T=x/u,M=t.MathUtils.lerp(a.x,i.x,T),E=t.MathUtils.lerp(a.z,i.z,T),y=e.heightAt(M,E);return new t.Vector3(M,y+(x===0||x===u?3.7:9)*n,E)});for(let c=0;c<3;c++)for(let x=0;x<u;x++){let T=d[x],M=d[x+1];for(let E=1;E<20;E++){let y=E/20;if(!(x===0&&y<.08||x===u-1&&y>.92))for(let A of[-1,1]){let w=t.MathUtils.lerp(T.x,M.x,y)+l.x*f*A,b=t.MathUtils.lerp(T.z,M.z,y)+l.z*f*A,S=t.MathUtils.lerp(T.y,M.y,y)-e.heightAt(w,b),L=5*n-S;L<=0||(x===0?M.y+=L/y:x===u-1?T.y+=L/(1-y):(T.y+=L,M.y+=L))}}}let h=c=>d.map(x=>x.clone().addScaledVector(l,c*f)),p=h(-1),g=h(1),v=[...p];for(let c=1;c<=12;c++){let x=Math.PI*c/12;v.push(i.clone().setY(d[u].y).addScaledVector(l,-f*Math.cos(x)).addScaledVector(s,f*Math.sin(x)))}v.push(...g.slice(0,-1).reverse());for(let c=1;c<=12;c++){let x=Math.PI*c/12;v.push(a.clone().setY(d[0].y).addScaledVector(l,f*Math.cos(x)).addScaledVector(s,-f*Math.sin(x)))}let m=[0];for(let c=1;c<v.length;c++)m.push(m[c-1]+v[c].distanceTo(v[c-1]));return{points:v,acc:m,total:m.at(-1),upLength:p.reduce((c,x,T)=>c+(T?x.distanceTo(p[T-1]):0),0),supports:d,side:l,dir:s}}}function Qp(t){return function(e,a,i){let n=(a%e.total+e.total)%e.total,s=1;for(;s<e.acc.length-1&&e.acc[s]<n;)s++;let l=e.points[s-1],o=e.points[s];return i.lerpVectors(l,o,(n-e.acc[s-1])/(e.acc[s]-e.acc[s-1])),n}}function Jp(t){return function(e,a,i,n){let s=t.oc(e,a,i);return t.oc(e,a-.5,t.sc),t.oc(e,a+.5,t.cc),n.subVectors(t.cc,t.sc).normalize(),s}}function t0(t){return function(e,a,i,n){let s=(a-e+n)%n,l=(i-e+n)%n;return s>0&&l<=s}}function e0(t){return function(e,a){let i=Math.max(0,e.targetSpeed),n=e.speed,s=Math.abs(i-n)/3,l=Math.min(a,s),o=n+Math.sign(i-n)*3*l,u=(n+o)*.5*l+i*(a-l);e.speed=o,e.phase=(e.phase+u)%e.path.total}}function a0(t){return{steel:t.createToonMaterial({color:"#9aa3a6"}),dark:t.createToonMaterial({color:"#3a4249"}),cabin:t.createToonMaterial({color:"#f0c24a"},{rim:1}),cabinRed:t.createToonMaterial({color:"#d9604c"},{rim:1}),cabinGray:t.createToonMaterial({color:"#aeb5b8"},{rim:1}),glass:t.createToonMaterial({color:"#2f4752"}),wall:t.createToonMaterial({color:"#d8cfc0"}),roof:t.createToonMaterial({color:"#4f6f7a"}),wood:t.createToonMaterial({color:"#9b7458"}),cable:new t.Ke({color:"#2a3138"})}}function i0(t){return{easy:"#4f8fd6",novice:"#4f8fd6",intermediate:"#d9534a",advanced:"#23303a",expert:"#23303a",freeride:"#f08a24"}}function n0(t){return function(e,a,i){let n=new t.g,s=new t.c(new t.W(e,i,a),t.fc.wall);s.position.y=i/2;let l=new t.c(new t.d(.01,e*.75,2.6,4,1),t.fc.roof);l.rotation.y=Math.PI/4,l.scale.set(1,1,a/e),l.position.y=i+1.3;let o=new t.c(new t.W(e*.5,i*.55,.3),t.fc.glass);o.position.set(0,i*.28,a/2);for(let u of[s,l,o])u.castShadow=!0,u.receiveShadow=!0,n.add(u);return n}}function r0(t){return r=>t.hc[r]||"red"}function s0(t){return function(){return t.Sc||=(async()=>{let[e,a,i]=await Promise.all(["cabin","chair","station"].map(f=>t.loadGLTF(`${t.xc}${f}.glb`).then(t.wc))),n=t.Tc(e.geometry,t.vc),s=i.geometry;s.computeBoundingBox();let l=s.boundingBox,o=t.bc/(l.max.z-l.min.z);s.translate(-(l.min.x+l.max.x)/2,-l.min.y,-(l.min.z+l.max.z)/2).scale(o,o,o),s.computeBoundingBox();let u=(f,d)=>t.createToonMaterial({map:d,side:f.side},{rim:1});return{cabin:n,cabinMats:Object.fromEntries(Object.entries(t.gc).map(([f,d])=>[f,u(e.material,d?t.Ec(e.material.map,d):e.material.map)])),chair:t.Tc(a.geometry,t.yc),chairMat:u(a.material,a.material.map),station:s,stationMat:t.createToonMaterial({map:i.material.map}),stationHalfWidth:s.boundingBox.max.x,stationHeight:s.boundingBox.max.y}})()}}function l0(t){return function(e){let a=null;return e.scene.updateMatrixWorld(!0),e.scene.traverse(i=>{i.isMesh&&!a&&(a=i)}),{geometry:a.geometry.clone().applyMatrix4(a.matrixWorld),material:a.material}}}function o0(t){return function(e,a){e.computeBoundingBox();let{min:i,max:n}=e.boundingBox,s=a/(n.y-i.y),l=(n.y-(n.y-i.y)*.05)*s;e.scale(s,s,s);let o=new t.Vector3(1/0,1/0,1/0),u=o.clone().negate(),f=new t.Vector3,d=e.attributes.position;for(let h=0;h<d.count;h++)f.fromBufferAttribute(d,h),!(f.y<l)&&(o.min(f),u.max(f));return e.translate(-(o.x+u.x)/2,-(o.y+u.y)/2,-(o.z+u.z)/2)}}function u0(t){return function(e,a){let i=e.image,n=document.createElement("canvas");n.width=i.width,n.height=i.height;let s=n.getContext("2d");s.drawImage(i,0,0);let l=s.getImageData(0,0,n.width,n.height),o=l.data,u={};new t.K(a).getRGB(u,t.he);for(let d=0;d<o.length;d+=4){let h=o[d],p=Math.max(o[d+1],o[d+2]),g=t.MathUtils.smoothstep(h?(h-p)/h:0,.3,.6);if(!g)continue;let v=Math.min(h/225,1.1);o[d]+=(u.r*255*v-h)*g,o[d+1]+=(u.g*255*v-o[d+1])*g,o[d+2]+=(u.b*255*v-o[d+2])*g}s.putImageData(l,0,0);let f=new t.qe(n);for(let d of["flipY","colorSpace","wrapS","wrapT","magFilter","minFilter","anisotropy"])f[d]=e[d];return f}}function f0(t){return function(e,a){let i=e.match(/(\d+)号/)?.[1];if(!i)return null;let n={red:"#d9604c",yellow:"#f0c24a",gray:"#aeb5b8",chair:"#4f6f7a"}[a],s=a==="red"||a==="chair"?"#fbfaf5":"#23303a",l=document.createElement("canvas");l.width=l.height=256;let o=l.getContext("2d");o.beginPath(),o.arc(128,128,116,0,Math.PI*2),o.fillStyle=n,o.fill(),o.lineWidth=14,o.strokeStyle="#23303a",o.stroke(),o.fillStyle=s,o.textAlign="center",o.textBaseline="middle",o.font='700 168px "Patrick Hand SC", sans-serif',o.fillText(i,128,140);let u=new t.qe(l);return u.colorSpace=t.he,u.anisotropy=4,new t.Se({map:u,alphaTest:.5})}}function h0(t){return function(){return t.Nc||=t.loadGLTF(t.jc).then(({scene:e})=>{let a=e.getObjectByName("pylon"),i=["train-l","train-r"].map(s=>e.getObjectByName(s));if(!a?.geometry||i.some(s=>!s))throw Error("Unexpected lift pylon structure");a.geometry=a.geometry.clone();let n=a.geometry.getAttribute("position");for(let s=0;s<n.count;s++)n.getY(s)>=8.3&&n.setX(s,n.getX(s)*(6/3.6));n.needsUpdate=!0,a.geometry.computeVertexNormals(),a.geometry.computeBoundingSphere();for(let s of i)s.position.x*=6/3.6;return e.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)}),e}).catch(e=>{throw t.Nc=null,e}),t.Nc}}function d0(t){return function(e,a,{scale:i=1,stationScale:n=i,spacing:s=1,speed:l=5,piste:o=null,approach:u=null}={}){let f=new t.g,d=[],h=[],p=[],g=[],v=[],m=[],c=[],x=[],T=[],M=[],E=t.mt([new t.d(.35,.5,1,6).translate(0,.5,0)]),y=new t.W(7.5,.4,.5),A=[],w=[],b=new t.x,S=t.liftEndpointPositions(a,n),L=(K,D,I,V,tt,Z,lt=Z)=>{b.position.set(D,I,V),b.rotation.set(0,tt,0),b.scale.set(Z,lt,Z),b.updateMatrix(),K.push(b.matrix.clone())};for(let[K,D]of a.entries()){if(D.type==="magic_carpet"){let yt=t.Ic(e,D,n);f.add(yt.mesh),h.push(yt);continue}let[I,V]=S[K],tt=new t.Vector3(I[0],e.heightAt(I[0],I[1]),I[1]),Z=new t.Vector3(V[0],e.heightAt(V[0],V[1]),V[1]),lt=new t.Vector3(Z.x-tt.x,0,Z.z-tt.z),ot=lt.length();lt.normalize();let Y=new t.Vector3(-lt.z,0,lt.x),Q=Math.atan2(lt.x,lt.z),at=D.type==="gondola",gt=(at?13:9)*i,pt=at?t._c(D.name):"chair",ut=D.name&&t.Dc(D.name,pt);if(D.name==="5号索道"&&D.type==="chair_lift"){let yt=tt.y<=Z.y?tt:Z,Bt=tt.y<=Z.y?Z:tt,Pt=t.ac(e,yt,Bt,i),zt=Math.atan2(Pt.dir.x,Pt.dir.z);for(let It of[yt,Bt]){let C=new t.g,R=new t.c(new t.W(11*i,.35*i,10*i),t.fc.roof);R.position.y=5.1*i,C.add(R);let _=new t.c(new t.He(3*i,.12*i,8,32),t.fc.dark);_.rotation.x=Math.PI/2,_.position.y=3.7*i,C.add(_);for(let q of[-5,5])for(let et of[-4,4]){let dt=new t.c(new t.W(.25*i,5*i,.25*i),t.fc.steel);dt.position.set(q*i,2.5*i,et*i),C.add(dt),c.push({x:It.x+(Math.cos(zt)*q+Math.sin(zt)*et)*i,z:It.z+(-Math.sin(zt)*q+Math.cos(zt)*et)*i,yaw:zt,hw:.125*i,hd:.125*i,top:It.y+5*i})}if(C.position.copy(It),C.rotation.y=zt,f.add(C),ut){let q=new t.Le(ut);q.scale.setScalar(3*i),q.position.set(0,8*i,0),C.add(q)}m.push({x:It.x,z:It.z,yaw:zt,hw:5*i,hd:5*i,top:It.y+5.3*i,passable:!0})}for(let It=1;It<Pt.supports.length-1;It++){let C=Pt.supports[It],R=e.heightAt(C.x,C.z),_=new t.g,q=new t.c(E,t.fc.steel);q.position.y=-.5,q.scale.set(i,C.y-R+1,i);let et=new t.c(y,t.fc.dark);et.position.y=C.y-R+.7*i,et.rotation.y=zt,et.scale.setScalar(i),_.add(q,et),_.position.set(C.x,R,C.z),f.add(_),M.push({fallback:_,x:C.x,z:C.z,ground:R,ropeHeight:C.y-R,yaw:zt,pitch:t.ns(Pt.supports,It)}),c.push({x:C.x,z:C.z,yaw:0,hw:.5*i,hd:.5*i,top:C.y+.5*i})}f.add(new t.Ce(new t.z().setFromPoints(Pt.points),t.fc.cable));let O=Pt.supports.map(It=>It.clone().addScaledVector(Pt.side,-3*i));v.push({id:D.id,name:D.name,type:D.type,a:yt,b:Bt,cable:O});let Vt={id:D.id,path:Pt,phase:0,speed:l,targetSpeed:l,chairs:[]},Lt=Math.max(2,Math.round(Pt.total/(25*s)));for(let It=0;It<Lt;It++){let C={kind:"chair",system:Vt,offset:It*Pt.total/Lt,position:new t.Vector3,tangent:new t.Vector3,yaw:zt};d.push(C),Vt.chairs.push(C)}p.push(Vt);continue}if(at&&t.Fo.includes(D.name)){let yt=t.ts(e,tt,Z,{scale:i,stationScale:n,offPiste:o?t.Yo(o,17):void 0,approach:u});for(let Vt of yt.ends){let Lt=new t.g;if(Lt.add(t.mc(14,18,7)),Lt.scale.setScalar(n),Lt.position.set(Vt.P.x,Vt.base,Vt.P.z),Lt.rotation.y=Math.atan2(Vt.out.x,Vt.out.z)+Math.PI,f.add(Lt),x.push(Lt),ut){let It=new t.Le(ut);It.scale.setScalar(t.Oc),It.position.set(0,t.kc,-5),Lt.add(It),T.push(It)}m.push({x:Vt.P.x,z:Vt.P.z,yaw:Q,hw:7*n,hd:9*n,top:Vt.base+12*n})}let Bt=yt.supports;for(let Vt=1;Vt<Bt.length-1;Vt++){let Lt=Bt[Vt],It=e.heightAt(Lt.x,Lt.z),C=new t.g,R=new t.c(E,t.fc.steel);R.position.y=-.5,R.scale.set(i,Lt.y-It+1,i);let _=new t.c(y,t.fc.dark);_.position.y=Lt.y-It+.3*i,_.rotation.y=Q,_.scale.setScalar(i),C.add(R,_),C.position.set(Lt.x,It,Lt.z),f.add(C),M.push({fallback:C,x:Lt.x,z:Lt.z,ground:It,ropeHeight:Lt.y-It,yaw:Q,pitch:t.ns(Bt,Vt)}),c.push({x:Lt.x,z:Lt.z,yaw:0,hw:.5*i,hd:.5*i,top:Lt.y+.5*i})}let Pt=t.is(yt,i);f.add(new t.Ce(new t.z().setFromPoints(Pt.points),t.fc.cable));let zt={id:D.id,path:Pt,phase:0,speed:l,targetSpeed:l,cars:[],passenger:null},O=Math.max(2,Math.round(Pt.total/(55*s)));for(let Vt=0;Vt<O;Vt++){let Lt={kind:pt,system:zt,offset:Vt*Pt.total/O,position:new t.Vector3,tangent:new t.Vector3,yaw:Q};d.push(Lt),zt.cars.push(Lt)}g.push(zt),v.push({id:D.id,name:D.name,type:D.type,a:Pt.bottom.P,b:Pt.top.P,cable:Pt.up});continue}for(let[yt,Bt]of[[tt,0],[Z,Math.PI]]){let Pt=new t.g;if(Pt.add(t.mc(14,18,7)),Pt.scale.setScalar(n),Pt.position.copy(yt),Pt.rotation.y=Q+Bt,f.add(Pt),x.push(Pt),ut){let zt=new t.Le(ut);zt.scale.setScalar(t.Oc),zt.position.set(0,t.kc,t.Ac),Pt.add(zt),T.push(zt)}m.push({x:yt.x,z:yt.z,yaw:Q,hw:7*n,hd:9*n,top:yt.y+12*n})}let Gt=Math.max(2,Math.round(ot/140)),Wt=[];for(let yt=0;yt<=Gt;yt++){let Bt=yt/Gt,Pt=tt.x+(Z.x-tt.x)*Bt,zt=tt.z+(Z.z-tt.z)*Bt,O=e.heightAt(Pt,zt);Wt.push(new t.Vector3(Pt,O+gt,zt)),yt!==0&&yt!==Gt&&(L(A,Pt,O-.5,zt,0,i,gt+1),L(w,Pt,O+gt+.3,zt,Q+Math.PI/2,i))}Wt[0].y=tt.y+6*i,Wt[Gt].y=Z.y+6*i;let Ot=[-3*i,3*i].map(yt=>Wt.map(Bt=>Bt.clone().addScaledVector(Y,yt)));for(let yt of Ot)f.add(new t.Ce(new t.z().setFromPoints(yt),t.fc.cable));let ee=Ot.map(yt=>{let Bt=[0];for(let Pt=1;Pt<yt.length;Pt++)Bt.push(Bt[Pt-1]+yt[Pt].distanceTo(yt[Pt-1]));return Bt});v.push({id:D.id,name:D.name,type:D.type,a:tt,b:Z,cable:Ot[0],acc:ee[0]});let fe=(at?55:25)*s,ce=Math.floor(ee[0][ee[0].length-1]/fe);for(let yt=0;yt<2;yt++)for(let Bt=0;Bt<ce;Bt++){let Pt=pt;d.push({kind:Pt,lane:Ot[yt],acc:ee[yt],s:Bt*fe,up:yt===0,yaw:Q})}}M.length&&t.Pc().then(K=>{for(let D of M){let I=K.clone();I.position.set(D.x,D.ground,D.z),I.rotation.y=D.yaw;let V=D.ropeHeight/i-8,tt=I.getObjectByName("pylon");tt.geometry=tt.geometry.clone();let Z=tt.geometry.getAttribute("position");for(let at=0;at<Z.count;at++){let gt=Z.getY(at);Z.setY(at,gt+V*t.MathUtils.clamp((gt-1.1)/3.9,0,1))}Z.needsUpdate=!0,tt.geometry.deleteAttribute("normal");let lt=t.pt(tt.geometry,1e-4);tt.geometry.dispose(),tt.geometry=lt,tt.geometry.computeVertexNormals(),tt.geometry.computeBoundingSphere(),tt.material=t.Mc;for(let at of["train-l","train-r"]){let gt=I.getObjectByName(at);gt.position.y+=V;let pt=D.pitch||0;gt.rotation.x=pt,gt.position.y+=.205*(Math.cos(pt)-1),gt.position.z+=.205*Math.sin(pt)}let ot=6.1+V,Y=[];for(let at of[-.24,.24])Y.push(new t.W(.045,ot-.8,.045).translate(at,(ot+.8)/2,.4));for(let at=1;at<ot;at+=.32)Y.push(new t.W(.48,.035,.035).translate(0,at,.42));let Q=new t.c(t.mt(Y),t.fc.steel);Q.castShadow=!0,I.add(Q),I.scale.setScalar(i),f.add(I),f.remove(D.fallback)}}).catch(K=>console.warn("Chairlift pylon unavailable; using fallback",K));let U=(K,D,I)=>{let V=new t.ge(K,D,I);return V.castShadow=!0,V.frustumCulled=!1,f.add(V),V};for(let[K,D,I]of[[E,t.fc.steel,A],[y,t.fc.dark,w]]){if(!I.length)continue;let V=U(K,D,I.length);I.forEach((tt,Z)=>V.setMatrixAt(Z,tt))}let G={};for(let K of["red","yellow","gray","chair"]){let D=d.filter(V=>V.kind===K);if(!D.length)continue;let I=U(t.Bc(K),t.Lc,D.length);D.forEach((V,tt)=>{V.mesh=I,V.index=tt}),G[K]=I}t.Cc().then(K=>{for(let[D,I]of Object.entries(G))I.geometry=D==="chair"?K.chair:K.cabin,I.material=D==="chair"?K.chairMat:K.cabinMats[D];for(let D of x){let I=new t.c(K.station,K.stationMat);I.castShadow=I.receiveShadow=!0,D.children[0].removeFromParent(),D.add(I)}for(let D of T)D.position.y=K.stationHeight+t.Oc*.75;for(let D of m)D.passable||(D.hw=K.stationHalfWidth*n)}).catch(K=>console.warn("Lift models failed to load; keeping the box stand-ins.",K));let N=new t.Vector3,W=new t.de,J=new t.ce,z=new t.je;return{group:f,lines:v,footprints:m,collisionParts:c,chairSystems:p,gondolaSystems:g,update(K,D=K){for(let I of h)I.tex.offset.y=(I.tex.offset.y-K*I.rate)%1;for(let I of p)t.dc(I,D);for(let I of g)t.dc(I,D);for(let I of d){if(I.system){I.distance=t.lc(I.system.path,I.system.phase+I.offset,I.position,I.tangent),I.yaw=Math.atan2(I.tangent.x,I.tangent.z),b.position.copy(I.position),b.rotation.set(0,I.yaw,0),b.scale.setScalar(I.system.passenger===I?0:i),b.updateMatrix(),I.mesh.setMatrixAt(I.index,b.matrix);continue}let V=I.acc[I.acc.length-1];I.s=(I.s+K*l)%V;let tt=I.up?I.s:V-I.s,Z=1;for(;Z<I.acc.length-1&&I.acc[Z]<tt;)Z++;let lt=(tt-I.acc[Z-1])/(I.acc[Z]-I.acc[Z-1]);N.lerpVectors(I.lane[Z-1],I.lane[Z],lt),b.position.copy(N),b.rotation.set(0,I.yaw+(I.up?0:Math.PI),Math.sin(I.s*.3)*.03),b.scale.setScalar(i),b.updateMatrix(),I.mesh.setMatrixAt(I.index,b.matrix)}for(let I of Object.values(G))I.count=I.instanceMatrix.count,I.instanceMatrix.needsUpdate=!0},cull(K,D,I){J.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),W.setFromProjectionMatrix(J);for(let V of Object.values(G)){let tt=V.geometry;tt.boundingSphere||tt.computeBoundingSphere();let Z=V.instanceMatrix.array,lt=V.instanceMatrix.count,ot=0;for(let Y=0;Y<lt;Y++){let Q=Y*16;z.center.copy(tt.boundingSphere.center).applyMatrix4(b.matrix.fromArray(Z,Q)),z.radius=tt.boundingSphere.radius*i,!(z.center.distanceTo(D)>I+z.radius&&!W.intersectsSphere(z))&&(ot!==Y&&Z.copyWithin(ot*16,Q,Q+16),ot++)}V.count=ot}}}}}function c0(t){return function(e,a,i){let n=document.createElement("canvas");n.width=16,n.height=64;let s=n.getContext("2d");s.fillStyle="#3a4249",s.fillRect(0,0,16,64),s.fillStyle="#9aa3a6",s.fillRect(0,0,16,10);let l=new t.qe(n);l.wrapT=t.D,l.colorSpace=t.he;let o=.6*i,u=.3*i,f=[],d=a.points;for(let x=0;x<d.length-1;x++){let T=Math.hypot(d[x+1][0]-d[x][0],d[x+1][1]-d[x][1]);for(let M=0;M<T;M+=4)f.push([d[x][0]+(d[x+1][0]-d[x][0])*M/T,d[x][1]+(d[x+1][1]-d[x][1])*M/T])}f.push(d[d.length-1]);let h=[],p=[],g=[],v=0;f.forEach(([x,T],M)=>{let E=f[Math.max(0,M-1)],y=f[Math.min(f.length-1,M+1)],A=Math.hypot(y[0]-E[0],y[1]-E[1])||1,w=-(y[1]-E[1])/A,b=(y[0]-E[0])/A;M&&(v+=Math.hypot(x-f[M-1][0],T-f[M-1][1])/(o*3));for(let S of[-1,1]){let L=x+w*o*S,U=T+b*o*S;h.push(L,e.heightAt(L,U)+u,U),p.push((S+1)/2,v)}if(M){let S=M*2;g.push(S-2,S,S-1,S-1,S,S+1)}});let m=new t.z;m.setAttribute("position",new t.i(h,3)),m.setAttribute("uv",new t.i(p,2)),m.setIndex(g),m.computeVertexNormals();let c=new t.c(m,t.createToonMaterial({map:l,side:2},{hatch:0}));return c.receiveShadow=!0,{mesh:c,tex:l,rate:1/(o*3)}}}function m0(t){return function(e,a,i,n,s){e.translate(i,n,s);let l=new t.K(a),o=e.attributes.position.count;return e.setAttribute("color",new t.i(Array.from({length:o*3},(u,f)=>l.toArray()[f%3]),3)),e}}function g0(t){return function(e){if(t.Rc.has(e))return t.Rc.get(e);let a=e==="chair"?[t.zc(new t.W(.1,2,.1),t.fc.dark.color,0,-1,0),t.zc(new t.W(2.4,.15,.7),t.fc.steel.color,0,-2,0),t.zc(new t.W(2.4,.7,.1),t.fc.steel.color,0,-1.65,-.35)]:[t.zc(new t.W(.12,2.2,.12),t.fc.dark.color,0,-1.1,0),t.zc(new t.W(1.9,2,2.2),{red:t.fc.cabinRed,yellow:t.fc.cabin,gray:t.fc.cabinGray}[e].color,0,-3.1,0),t.zc(new t.W(1.95,.8,1.7),t.fc.glass.color,0,-2.7,0),t.zc(new t.W(1.7,.25,2),t.fc.dark.color,0,-2,0)],i=t.mt(a);return t.Rc.set(e,i),i}}function p0(t){return function(){let e=new t.g,a=new t.c(t.Bc("red"),t.Lc);a.castShadow=!0,e.add(a);let i="red",n=null,s=()=>{n?(a.geometry=n.cabin,a.material=n.cabinMats[i]):a.geometry=t.Bc(i)};return t.Cc().then(l=>{n=l,s()}).catch(()=>{}),e.setLine=l=>{i=t._c(l),s()},e}}function M0(t){return{stations:[1127891899,1127891930],origin:[349.8,-403.45],objects:[{id:"summit:object-1",label:"1",kind:"yurt",en:"Yurt",zh:"传统蒙古包",at:[24.4,-35],yaw:-.68,size:[3.3,3.3],round:!0,from:{A:[.3,.6038],B:[.8318,.6054],C:[.4385,.7265],D:[.602,.5234]},how:"A and D cast to 8 m of each other (D hits the roof, so lands north); the middle. Door turned to the plaza: a guess."},{id:"summit:object-2",label:"2",kind:"signpost",en:"Four-country signpost",zh:"一眼望四国路牌",at:[.5,-3.5],yaw:0,size:[2.6,2.6],round:!0,from:{A:[.4276,.5377],B:[.4029,.6311],C:[.3972,.4752],D:[.4742,.694]},how:"A, B and D cast within 4 m. Its arrows point the real ways: Russia north, Mongolia east, Kazakhstan west, China south."},...[[-37.4,-5.2],[-43.6,-3.2],[-49.8,-1.2]].map((r,e)=>({id:`summit:object-3-set-${e+1}`,label:`3·${e+1}`,kind:"prayerWheels",en:`Prayer wheels ${e+1} of 3`,zh:`转经轮 第${e+1}组`,at:r,yaw:.31,size:[2.7,.75],from:e?{}:{A:[.5645,.6639],B:[.16,.4847],C:[.5883,.4416],D:[.2853,.5441]},how:"The arrows mark the area only. Three sets in a row, 6.5 m apart, along the long roof seen in A and D (which cast to x -35 to -48), from G6 toward the ovoo; each set's own place and turn are estimates. Their fronts face the path out to the ovoo, so it passes them on your right."})),{id:"summit:object-4",label:"4",kind:"ovoo",en:"Ovoo and prayer flags",zh:"敖包与经幡",at:[-70,7],yaw:1.77,size:[3.4,3.4],round:!0,from:{A:[.6705,.7173],C:[.6184,.3498],D:[.1169,.5564]},how:"A's circle casts to (-76, 14), D's half in frame to (-68, 4); set between, 4 m off A and half out of D's frame as there. Steps face the path from G6."},{id:"summit:object-5",label:"5",kind:"hut",en:"Small wooden hut",zh:"小木屋",at:[-21.5,-19.5],yaw:.83,size:[1.8,1.5],from:{A:[.4617,.6968],B:[.366,.5081],C:[.6175,.5063],D:[.4003,.5114]},how:"A and D cast within 3 m, at the mast's foot. What it is for is not known."},{id:"summit:object-6",label:"6",kind:"photoFrame",en:"Giant photo frame",zh:"巨型木相框",at:[3.5,-24.5],yaw:-.06,size:[2.7,1],from:{A:[.3674,.5988],B:[.5783,.5925],C:[.4973,.5812],D:[.5128,.532]},how:"The user's later D arrow (on its top bar) cast to (3, -28), its base about 3 m nearer; B's face-on frame casts to (2, -21). Faces the plaza, its plane east–west as D and B see it."},{id:"summit:object-7",label:"7",kind:"cabin",en:"Coffee cabin",zh:"咖啡小屋",at:[-20,-57],yaw:.34,size:[5,4.75],from:{A:[.3813,.868],B:[.6073,.5595],C:[.9128,.763],D:[.4492,.3552]},how:"A and D cast within 2 m, out on the shoulder past the mast. Door to the way up from the plaza: a guess."},{id:"summit:object-8",label:"8",kind:"swing",en:"Two-seat swing",zh:"双座秋千",at:[7.5,-5],yaw:-.2,size:[2.9,.5],from:{A:[.3961,.4889],B:[.4877,.6696],C:[.3207,.5089],D:[.5301,.7116]},how:"A, B and D cast to x 5–12, z -6 to 2; drawn 3 m west of that so it clears the game's wider G7 station. Beam east–west as in A and D."},...[[-4.3,-96,.05,[.5229,.2482]],[2.5,-105.5,-.02,[.5449,.2312]],[37,-109,-.33,[.6421,.2692]]].map(([r,e,a,i],n)=>({id:`summit:object-9-pod-${n+1}`,label:`9${"abc"[n]}`,kind:"pod",en:`Dome pod ${"abc"[n]}`,zh:`穹顶帐篷 ${"abc"[n]}`,at:[r,e],yaw:a,size:[2.3,2.3],round:!0,from:{D:i},how:"D only, from a pick of each pod (the arrow marks the three together), cast onto the shoulder raised for them; a, b, c left to right in D."})),{id:"summit:helper-mast",label:"M",kind:"mast",en:"Telecoms mast",zh:"通信杆",at:[-28,-25.3],yaw:0,size:[.7,.7],from:{},how:"Not one of the nine: fitted as a free point with camera D (base and top), and A agrees within 2 m. A landmark for checking the views."}],terrain:{terrace:{lines:[[[-22,5,0],[0,-4,0],[21,-6,0]],[[-26,-24,0],[-6,-10,0]]],r0:14,r1:30},ridge:{line:[[-28,-3,.3],[-53,-.5,.4],[-62,5,2],[-70,7,3]],r0:3,r1:12},shoulder:{line:[[-24,-24,0],[-13,-42,-3],[-16,-58,-5],[-8,-80,-6.5],[-2,-98,-7.5],[14,-106,-7.5],[37,-109,-8]],r0:5,r1:16},knoll:{at:[28,-52],axis:[.6,-.8],half:30,nw:11,se:22,height:4}}}}function v0(t){return r=>t.summitObjectLayout.objects.find(e=>e.id===r)}function x0(t){return[{id:"east",zh:"东区服务大厅",en:"East Service Centre",ele:1439,x:710,z:4410,faceTo:[610,4280],roof:"#5f8064",lift:"1号索道"},{id:"west",zh:"西区服务大厅",en:"West Service Centre",ele:1383,x:-1240,z:4640,faceTo:[-1183,4512],roof:"#4a5661",lift:"3号索道"}]}function w0(t){return function(e){let a=t.liftEndpointPositions(e),i=t.summitObjectLayout.stations.map(o=>{let u=e.findIndex(f=>String(f.id)===String(o));return u>=0&&a[u]});if(!i[0]||!i[1])return null;let n=null;for(let o of i[0])for(let u of i[1]){let f=Math.hypot(o[0]-u[0],o[1]-u[1]);(!n||f<n.d)&&(n={d:f,a:o,b:u})}let{a:s,b:l}=n;return{origin:[(s[0]+l[0])/2,(s[1]+l[1])/2],stations:[s,l]}}}function E0(t){return function(e){t._a=t.ga(e)?.origin??t.summitObjectLayout.origin}}function b0(t){return function r(e){if(t.Sa[e])return{...t.Sa[e]};let[a,i]=e.split(":");if(a==="summit"){let{at:o,yaw:u}=t.findSummitObject(e);return{x:t._a[0]+o[0],z:t._a[1]+o[1],yaw:u}}if(a==="vehicle"){let{x:o,z:u,yaw:f}=r("lodge:east"),[d,h]=t.ha[i],p=Math.cos(f),g=Math.sin(f);return{x:o+d*p+h*g,z:u-d*g+h*p,yaw:f}}let{x:n,z:s,faceTo:l}=t.ba.get(e);return{x:n,z:s,yaw:Math.atan2(l[0]-n,l[1]-s)}}}function T0(t){return function(e={}){t.Sa=Object.fromEntries(Object.entries(e).filter(([a])=>t.xa.includes(a)));for(let[a,i]of t.ya){let n=t.ba.get(a);if(!t.Sa[a]){Object.assign(i,{x:n.x,z:n.z,faceTo:[...n.faceTo]});continue}let{x:s,z:l,yaw:o}=t.Sa[a],u=Math.hypot(n.faceTo[0]-n.x,n.faceTo[1]-n.z);Object.assign(i,{x:s,z:l,faceTo:[s+Math.sin(o)*u,l+Math.cos(o)*u]})}}}function y0(t){return function(e,{min:a,max:i}){let n=new Uint16Array(e),s=new Float32Array(n.length),l=(i-a)/65535;for(let o=0;o<n.length;o++)s[o]=a+n[o]*l;return s}}function R0(t){return async function(e){try{let a=await fetch(e+"edits/edits.json",{cache:"no-store"});return!a.ok||!a.headers.get("content-type")?.includes("json")?null:await a.json()}catch{return null}}}function A0(t){return async function({edits:e=!1}={}){let a=await(await fetch(t.worldDataBase+"world.json")).json(),i=e?await t.loadOptionalWorldEdits(t.worldDataBase):null,n=i?{...a.detail,...i.detail,file:t.editsDataDirectory+i.detail.file}:a.detail,[s,l]=await Promise.all([n,a.backdrop].map(f=>f&&fetch(t.worldDataBase+f.file,{cache:i?"no-store":"default"}).then(d=>d.arrayBuffer()))),o=new t.Heightfield(n.size,n.cells,t.decodeHeightU16(s,n),n.center),u={runs:a.runs,lifts:a.lifts};return i&&(a.runs=i.runs,i.lifts&&(a.lifts=i.lifts),o.setHoles(i.tileCells,i.holes),t.wa(i.places)),t.va(a.lifts),{meta:a,edits:i,baked:u,detail:o,backdrop:l&&new t.Heightfield(a.backdrop.size,a.backdrop.cells,t.decodeHeightU16(l,a.backdrop))}}}function P0(t){return class{constructor(r,e,a,i=[0,0]){this.size=r,this.cells=e,this.verts=e+1,this.step=r/e,this.half=r/2,this.center=i,this.x0=i[0]-this.half,this.z0=i[1]-this.half,this.h=a,this.setHoles(10,[])}setHoles(r,e){this.tileCells=r,this.tiles=Math.ceil(this.cells/r),this.tileSize=r*this.step,this.holes=new Uint8Array(this.tiles*this.tiles);for(let a of e)this.holes[a]=1;this.hasHoles=e.length>0}tileAt(r,e){let a=Math.floor((r-this.x0)/this.tileSize),i=Math.floor((e-this.z0)/this.tileSize);return a<0||i<0||a>=this.tiles||i>=this.tiles?-1:i*this.tiles+a}holeAt(r,e){if(!this.hasHoles)return!1;let a=this.tileAt(r,e);return a>=0&&this.holes[a]===1}cellIsHole(r,e){return this.hasHoles&&this.holes[Math.floor(e/this.tileCells)*this.tiles+Math.floor(r/this.tileCells)]===1}inside(r,e,a=0){return Math.abs(r-this.center[0])<this.half-a&&Math.abs(e-this.center[1])<this.half-a}heightAt(r,e){let a=this.verts,i=(r-this.x0)/this.step,n=(e-this.z0)/this.step;i=Math.min(Math.max(i,0),this.cells-1e-6),n=Math.min(Math.max(n,0),this.cells-1e-6);let s=Math.floor(i),l=Math.floor(n),o=i-s,u=n-l,f=l*a+s,d=this.h;return(d[f]*(1-o)+d[f+1]*o)*(1-u)+(d[f+a]*(1-o)+d[f+a+1]*o)*u}surfaceAt(r,e){let a=this.verts,i=Math.min(Math.max((r-this.x0)/this.step,0),this.cells-1e-6),n=Math.min(Math.max((e-this.z0)/this.step,0),this.cells-1e-6),s=Math.floor(i),l=Math.floor(n),o=i-s,u=n-l,f=l*a+s,d=this.h;return o+u<=1?d[f]+(d[f+1]-d[f])*o+(d[f+a]-d[f])*u:d[f+a+1]+(d[f+a]-d[f+a+1])*(1-o)+(d[f+1]-d[f+a+1])*(1-u)}normalAt(r,e,a=new t.Vector3){let i=this.heightAt(r-2,e),n=this.heightAt(r+2,e),s=this.heightAt(r,e-2),l=this.heightAt(r,e+2);return a.set(i-n,4,s-l).normalize()}}}function C0(t){return class{constructor(r,e,a=4,i=60,n=[0,0]){this.size=e,this.cell=a,this.half=e/2,this.x0=n[0]-this.half,this.z0=n[1]-this.half,this.n=Math.round(e/a)+1,this.maxDist=i,this.dist=new Float32Array(this.n*this.n).fill(i),this.run=new Int16Array(this.n*this.n).fill(-1),this.seg=new Uint16Array(this.n*this.n),this.lines=r.map(({points:s})=>{let l=new Float32Array(s.length);for(let o=1;o<s.length;o++)l[o]=l[o-1]+Math.hypot(s[o][0]-s[o-1][0],s[o][1]-s[o-1][1]);return{p:s,cum:l}}),r.forEach((s,l)=>{let o=s.points;for(let u=0;u<o.length-1;u++)this.#t(o[u],o[u+1],l,u)})}#t(r,e,a,i){let{cell:n,n:s,maxDist:l}=this,o=Math.min(r[0],e[0])-l-this.x0,u=Math.max(r[0],e[0])+l-this.x0,f=Math.min(r[1],e[1])-l-this.z0,d=Math.max(r[1],e[1])+l-this.z0,h=Math.max(0,Math.floor(o/n)),p=Math.min(s-1,Math.ceil(u/n)),g=Math.max(0,Math.floor(f/n)),v=Math.min(s-1,Math.ceil(d/n)),m=e[0]-r[0],c=e[1]-r[1],x=m*m+c*c||1;for(let T=g;T<=v;T++){let M=T*n+this.z0;for(let E=h;E<=p;E++){let y=E*n+this.x0,A=((y-r[0])*m+(M-r[1])*c)/x;A=Math.max(0,Math.min(1,A));let w=r[0]+m*A-y,b=r[1]+c*A-M,S=Math.sqrt(w*w+b*b),L=T*s+E;S<this.dist[L]&&(this.dist[L]=S,this.run[L]=a,this.seg[L]=i)}}}distAt(r,e){let{cell:a,n:i}=this,n=(r-this.x0)/a,s=(e-this.z0)/a;n=Math.min(Math.max(n,0),i-1.0001),s=Math.min(Math.max(s,0),i-1.0001);let l=Math.floor(n),o=Math.floor(s),u=n-l,f=s-o,d=o*i+l,h=this.dist;return(h[d]*(1-u)+h[d+1]*u)*(1-f)+(h[d+i]*(1-u)+h[d+i+1]*u)*f}runAt(r,e){let{cell:a,n:i}=this,n=Math.round((r-this.x0)/a),s=Math.round((e-this.z0)/a);return n<0||s<0||n>=i||s>=i?-1:this.run[s*i+n]}coordsAt(r,e,a={}){let{cell:i,n}=this,s=Math.round((r-this.x0)/i),l=Math.round((e-this.z0)/i),o=l*n+s;if(a.run=s<0||l<0||s>=n||l>=n?-1:this.run[o],a.run<0)return a;let{p:u,cum:f}=this.lines[a.run],d=1/0;for(let h=Math.max(0,this.seg[o]-1);h<=Math.min(u.length-2,this.seg[o]+1);h++){let p=u[h],g=u[h+1],v=g[0]-p[0],m=g[1]-p[1],c=v*v+m*m||1,x=Math.max(0,Math.min(1,((r-p[0])*v+(e-p[1])*m)/c)),T=r-p[0]-v*x,M=e-p[1]-m*x,E=Math.hypot(T,M);E<d&&(d=E,a.along=f[h]+x*Math.sqrt(c),a.off=v*M-m*T<0?-E:E)}return a}}}function L0(t){return function(){let e=t.createToonMaterial({},{hatch:0}),a=e.onBeforeCompile,i=new t.K("#fbfaf4"),n=new t.K("#4f5358");return e.onBeforeCompile=s=>{a(s),Object.assign(s.uniforms,{uMountainSnow:{value:i},uMountainRock:{value:n}}),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
      attribute vec4 aRelief;
      attribute float aFlow;
      varying vec4 vRelief;
      varying float vFlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vRelief = aRelief;
        vFlow = aFlow;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
      uniform vec3 uMountainSnow, uMountainRock;
      varying vec4 vRelief;
      varying float vFlow;
      // 0 to 1 across e ± w, and never sharper than a pixel.
      float mStep(float e, float w, float x) {
        float f = fwidth(x);
        return smoothstep(e - w - f, e + w + f, x);
      }`).replace("vec3 base = diffuseColor.rgb;",`
        // Wobble, 125 m and 30 m across, rounds off the edges between DEM
        // posts. Each fades out before it gets finer than a few pixels.
        vec2 wp = vTWorld.xz * 0.008, wq = vTWorld.xz * 0.033 + 3.1;
        float wobble = (tNoise(wp) - 0.5) * 0.5 * (1.0 - smoothstep(0.15, 0.35, length(fwidth(wp))))
          + (tNoise(wq) - 0.5) * 0.35 * (1.0 - smoothstep(0.15, 0.35, length(fwidth(wq))));
        // Rock shows only in the lower part of each mountain: below the
        // ground about 1.5 km round (vRelief.z, ±300 m or so) and 500 m round
        // (vRelief.w), so every top and crest, the lesser ones too, is all
        // snow, with a ragged edge.
        float low = (1.0 - smoothstep(-100.0, 0.0, vRelief.z + wobble * 80.0))
          * (1.0 - smoothstep(-30.0, 20.0, vRelief.w + wobble * 40.0));
        // There it runs in streaks down the gullies the ground drains
        // through (vFlow: log2 of the 40 m posts upstream): the middling
        // ones, which branch and break off at every length. The big
        // channels on the valley floors stay white, and so does gentle
        // ground.
        float gully = smoothstep(4.3, 4.9, vFlow + wobble * 0.5) * (1.0 - smoothstep(5.8, 6.4, vFlow));
        float steep = smoothstep(14.0, 22.0, vRelief.y);
        // Not every gully: some stretches of mountain have none, chosen by
        // domain-warped noise 800 m or so across.
        vec2 q = vTWorld.xz * 0.0012;
        q += vec2(tNoise(q * 1.7 + 3.1), tNoise(q * 1.7 + 8.4)) * 1.6 - 0.8;
        float clusters = smoothstep(0.26, 0.42, tNoise(q) * 0.65 + tNoise(q * 2.3 + 1.3) * 0.35);
        // And a gap here and there along a streak, 170 m or so, fading out
        // before the gaps get finer than a few pixels.
        vec2 b = vTWorld.xz * 0.006 + q * 3.0;
        float fb = 1.0 - smoothstep(0.3, 0.6, length(fwidth(vTWorld.xz)) * 0.006);
        float broken = smoothstep(0.26, 0.36, 0.5 + (tNoise(b) - 0.5) * fb);
        // Together they give how strongly rock shows; past halfway it does, with
        // a crisp edge.
        float rock = mStep(0.5, 0.03, gully * steep * low * clusters * broken);
        vec3 base = mix(uMountainSnow, uMountainRock, rock);
      `).replace("float wob = (tNoise(vTWorld.xz * 0.35 + vTWorld.y * 0.2) - 0.5) * 0.08;",`
        float wob = wobble * 0.1, dw = fwidth(direct);`).replace("float lit = smoothstep(0.24 + wob, 0.30 + wob, direct);","float lit = smoothstep(0.24 + wob - dw, 0.30 + wob + dw, direct);").replace("float full = smoothstep(0.55 + wob, 0.6 + wob, direct);","float full = smoothstep(0.55 + wob - dw, 0.6 + wob + dw, direct);").replace("#include <fog_fragment>",t.J.fog_fragment.replace("fogFar, vFogDepth","fogFar * (1.0 + 0.8 * smoothstep(9000.0, 17000.0, fogFar)), vFogDepth").replace("fogColor, fogFactor",`mix(fogColor,
        vec3(dot(fogColor, vec3(0.299, 0.587, 0.114))) * vec3(0.91, 0.97, 1.04), 0.5), fogFactor`))},e.customProgramCacheKey=()=>"dem-rock-v7",e}}function D0(t){return{snow:new t.K("#fbfaf4"),snowShade:new t.K("#eef1ec"),groomed:new t.K("#e6eef0"),hollow:new t.K("#cbdce2"),crest:new t.K("#ffffff"),rock:new t.K("#5f6265"),rockDark:new t.K("#4f5357"),forest:new t.K("#4f6f5e"),forestDark:new t.K("#3e5a4f")}}function U0(t){return function(e,a){let i=Math.sin(e*127.1+a*311.7)*43758.5453;return i-Math.floor(i)}}function I0(t){return function(e,a){let i=Math.floor(e),n=Math.floor(a),s=e-i,l=a-n,o=s*s*(3-2*s),u=l*l*(3-2*l),f=t.Da(i,n),d=t.Da(i+1,n),h=t.Da(i,n+1),p=t.Da(i+1,n+1);return(f*(1-o)+d*o)*(1-u)+(h*(1-o)+p*o)*u}}function S0(t){return function(e,a){let{verts:i,size:n}=e,s=new Float32Array(i*i*3);for(let h=0;h<i;h++)for(let p=0;p<i;p++){let g=h*i+p,v=e.x0+p/e.cells*n,m=e.z0+h/e.cells*n;s[g*3]=v,s[g*3+1]=e.h[g]+(a?a(v,m):0),s[g*3+2]=m}let l=new Uint32Array(e.cells*e.cells*6),o=0;for(let h=0;h<e.cells;h++)for(let p=0;p<e.cells;p++){if(e.cellIsHole(p,h))continue;let g=h*i+p,v=g+1,m=g+i,c=m+1;l[o++]=g,l[o++]=m,l[o++]=v,l[o++]=v,l[o++]=m,l[o++]=c}let u=new Float32Array(i*i*3),f=n/e.cells;for(let h=0;h<i;h++)for(let p=0;p<i;p++){let g=h*i+p,v=p?g-1:g,m=p<e.cells?g+1:g,c=h?g-i:g,x=h<e.cells?g+i:g,T=(s[m*3+1]-s[v*3+1])/((m-v)*f),M=(s[x*3+1]-s[c*3+1])/((x-c)/i*f),E=Math.hypot(T,1,M);u[g*3]=-T/E,u[g*3+1]=1/E,u[g*3+2]=-M/E}let d=new t.z;return d.setAttribute("position",new t.et(s,3)),d.setAttribute("normal",new t.et(u,3)),d.setIndex(new t.et(l.subarray(0,o),1)),d}}function N0(t){return function(e,a,i,{skirt:n=!0,tiles:s=1,lodDistance:l=0,nearDistance:o=0,corduroy:u=!1,castShadow:f=!1}={}){let d=o?[1,2,4]:l?[1,2]:[1],h=t.ja(e,a,i,u),p=t.createToonMaterial({vertexColors:!0},{hatch:1,snow:1,piste:+!!u}),g=new t.g,v=M=>{let E=new t.c(M,p);return E.receiveShadow=!0,E.castShadow=f,g.add(E),E},m=(M,E)=>v(t.Pa(e,h,M.range,d[E],E>0)),c=Math.ceil(e.cells/s),x=[];for(let M=0;M<s;M++)for(let E=0;E<s;E++){let y=E*c,A=Math.min(e.cells,y+c),w=M*c,b=Math.min(e.cells,w+c);if(y>=A||w>=b)continue;let S={range:[y,w,A,b],meshes:[]};d.forEach((U,G)=>{G===0&&o||(S.meshes[G]=m(S,G))});let L=S.meshes.find(Boolean).geometry;L.computeBoundingBox(),S.box=L.boundingBox,x.push(S)}n&&g.add(new t.c(t.Fa(e,h),p));let T=M=>d.length===1?0:M>l?d.length-1:o&&M>o?1:0;return g.update=M=>{let E=null,y=1/0;for(let A of x){let w=A.box.distanceToPoint(M),b=T(w);A.meshes[b]||(w<y&&(E=A,y=w),b=1),A.meshes.forEach((S,L)=>S&&(S.visible=L===b)),o&&A.meshes[0]&&w>o*1.5&&(g.remove(A.meshes[0]),A.meshes[0].geometry.dispose(),A.meshes[0]=void 0)}E&&(E.meshes[0]=m(E,0),E.meshes[1].visible=!1)},l&&g.update(new t.Vector3(1/0,0,0)),g}}function _0(t){return function(e,a,i,n){let{h:s,verts:l,cells:o,step:u}=e,f=new t.K,d={},h=(p,g,v,m,c,x,T,M)=>{let E=e.x0+p*u,y=s[g*l+p],A=e.z0+g*u;c[m*3]=E,c[m*3+1]=y,c[m*3+2]=A;let w=Math.max(0,p-v),b=Math.min(o,p+v),S=Math.max(0,g-v),L=Math.min(o,g+v),U=(s[g*l+w]-s[g*l+b])/((b-w)*u),G=(s[S*l+p]-s[L*l+p])/((L-S)*u),N=1/Math.hypot(U,1,G);x[m*3]=U*N,x[m*3+1]=N,x[m*3+2]=G*N;let W=t.Ma(E,y,A,N,a.distAt(E,A),i,f),J=Math.max(1,Math.round(8/u)),z=(s[g*l+Math.max(0,p-J)]+s[g*l+Math.min(o,p+J)]+s[Math.max(0,g-J)*l+p]+s[Math.min(o,g+J)*l+p]-4*y)/(J*u)**2;if(z>0?f.lerp(t.Ea.hollow,t.MathUtils.smoothstep(z,.005,.03)*.8):f.lerp(t.Ea.crest,t.MathUtils.smoothstep(-z,.005,.03)*.9),T[m*3]=f.r,T[m*3+1]=f.g,T[m*3+2]=f.b,M){a.coordsAt(E,A,d);let K=v*u,D=d.run,I=D>=0&&a.runAt(E-K,A)===D&&a.runAt(E+K,A)===D&&a.runAt(E,A-K)===D&&a.runAt(E,A+K)===D;M[m*3]=I?d.off:0,M[m*3+1]=I?d.along:0,M[m*3+2]=I?W:0}};return h.corduroy=n,h}}function O0(t){return function(e,a,i,n,s,l,o){let u=Math.acos(Math.min(1,n))*180/Math.PI,f=t.Oa(e*.02,i*.02);o.copy(t.Ea.snow).lerp(t.Ea.snowShade,f*.6);let d=1-t.MathUtils.smoothstep(s,14,18);o.lerp(t.Ea.groomed,d*.9);let h=t.MathUtils.smoothstep(u+(f-.5)*22,44,62)*(1-d);return h>0&&o.lerp(t.Oa(e*.08,i*.08)>.5?t.Ea.rock:t.Ea.rockDark,h),a<l&&s>21&&o.lerp(t.Ea.snowShade,.5),d}}function F0(t){return function(e,a,i){let n=[];for(let s=e;s<a;s+=i)n.push(s);return n.push(a),n}}function z0(t){return function(e,a,[i,n,s,l],o,u){let f=t.Na(i,s,o),d=t.Na(n,l,o),h=f.length,p=d.length,g=[];if(u){for(let A=0;A<h-1;A++)g.push(A);for(let A=0;A<p-1;A++)g.push(A*h+h-1);for(let A=h-1;A>0;A--)g.push((p-1)*h+A);for(let A=p-1;A>0;A--)g.push(A*h)}let v=h*p+g.length,m={position:new Float32Array(v*3),normal:new Float32Array(v*3),color:new Float32Array(v*3)};a.corduroy&&(m.aPiste=new Float32Array(v*3));let{position:c,normal:x,color:T,aPiste:M}=m;for(let A=0;A<p;A++)for(let w=0;w<h;w++)a(f[w],d[A],o,A*h+w,c,x,T,M);for(let A of Object.values(m))g.forEach((w,b)=>A.set(A.subarray(w*3,w*3+3),(h*p+b)*3));g.forEach((A,w)=>c[(h*p+w)*3+1]-=6);let E=new t.z;for(let[A,w]of Object.entries(m))E.setAttribute(A,new t.et(w,3));let y=[];for(let A=0;A<p-1;A++)for(let w=0;w<h-1;w++){if(e.cellIsHole(f[w],d[A]))continue;let b=A*h+w,S=b+1,L=b+h,U=L+1;y.push(b,L,S,S,L,U)}return g.forEach((A,w)=>{let b=(w+1)%g.length;y.push(A,g[b],h*p+w,g[b],h*p+b,h*p+w)}),E.setIndex(v>65535?new t.Me(y,1):new t.Oe(y,1)),E}}function k0(t){return function(e,a){let i=e.cells,n=[];for(let h=0;h<=i;h++)n.push([h,0]);for(let h=1;h<=i;h++)n.push([i,h]);for(let h=i-1;h>=0;h--)n.push([h,i]);for(let h=i-1;h>=0;h--)n.push([0,h]);let s=n.length*2,l=new Float32Array(s*3),o=new Float32Array(s*3),u=new Float32Array(s*3),f=[];n.forEach(([h,p],g)=>{a(h,p,1,2*g,l,o,u,null);for(let v=0;v<3;v++)l[(2*g+1)*3+v]=l[2*g*3+v]-(v===1?120:0),o[(2*g+1)*3+v]=o[2*g*3+v],u[(2*g+1)*3+v]=u[2*g*3+v]*.9;g&&f.push(2*g-2,2*g,2*g-1,2*g,2*g+1,2*g-1)});let d=new t.z;return d.setAttribute("position",new t.et(l,3)),d.setAttribute("color",new t.et(u,3)),d.setAttribute("normal",new t.et(o,3)),d.setIndex(f),d}}function B0(t){return function(e,a,i){let n=Math.max(1,Math.round(Math.sqrt(i*i*4+1)/2-.5)),s=2*n+1,l=Float32Array.from(e),o=new Float32Array(a*a),u=new Float32Array(a+s),f=(d,h,p,g)=>{for(let v=0;v<a;v++){let m=v*g;for(let x=0;x<a+s;x++)u[x]=d[m+Math.max(0,Math.min(a-1,x-n))*p];let c=0;for(let x=0;x<s;x++)c+=u[x];for(let x=0;x<a;x++)h[m+x*p]=c/s,c+=u[x+s]-u[x]}};for(let d=0;d<3;d++)f(l,o,1,a),f(o,l,a,1);return l}}function H0(t){return function(e,a){let i=a*a,n=new Float64Array(i);for(let l=0;l<i;l++)n[l]=Math.round(e[l]*100)*1048576+l;n.sort();let s=new Float32Array(i).fill(1);for(let l=i-1;l>=0;l--){let o=n[l]%1048576,u=o%a,f=(o-u)/a,d=-1,h=0;for(let p=-1;p<=1;p++)for(let g=-1;g<=1;g++){let v=u+g,m=f+p;if(!g&&!p||v<0||m<0||v>=a||m>=a)continue;let c=m*a+v,x=(e[o]-e[c])/(g&&p?1.414:1);x>h&&(h=x,d=c)}d>=0&&(s[d]+=s[o])}for(let l=0;l<i;l++)s[l]=Math.log2(s[l]);return t.Ia(s,a,1)}}function G0(t){return function(e,a,{stride:i=1}={}){if(!Number.isInteger(i)||i<1||e.cells%i!==0)throw Error("Backdrop stride must divide its cell count");if(i>1){let g=e.cells/i,v=g+1,m=new Float32Array(v*v);for(let c=0;c<v;c++)for(let x=0;x<v;x++)m[c*v+x]=e.h[c*i*e.verts+x*i];e=new t.Heightfield(e.size,g,m,e.center)}let n=t.ka(e,(g,v)=>a.inside(g,v,20)?-80:0),s=e.verts,l=g=>Math.max(1,g/e.step),o=t.Ia(e.h,s,l(40)),u=t.Ia(e.h,s,l(120)),f=t.Ia(e.h,s,l(1500)),d=t.Ia(e.h,s,l(500)),h=new Float32Array(s*s*4);for(let g=0;g<s;g++)for(let v=0;v<s;v++){let m=g*s+v,c=v?m-1:m,x=v<s-1?m+1:m,T=g?m-s:m,M=g<s-1?m+s:m,E=(o[x]-o[c])/((x-c)*e.step),y=(o[M]-o[T])/((M-T)/s*e.step);h[m*4]=o[m]-u[m],h[m*4+1]=Math.atan(Math.hypot(E,y))*180/Math.PI,h[m*4+2]=o[m]-f[m],h[m*4+3]=o[m]-d[m]}n.setAttribute("aRelief",new t.et(h,4)),n.setAttribute("aFlow",new t.et(t.La(o,s),1));let p=new t.c(n,t.Ta());return p.name="dem-backdrop",p}}function V0(t){return(r,e,a)=>{let i=Math.min(1,Math.max(0,(a-r)/(e-r)));return i*i*(3-2*i)}}function W0(t){return function(e,a,i,n=[]){let s=e.cells*2,l=s+1,o=e.step/2;if(i.cell!==o||i.n!==l||i.x0!==e.x0||i.z0!==e.z0)throw Error("raiseBanks: the piste field must be on the 4 m grid");let u=new Float32Array(l*l);for(let M=0;M<l;M++)for(let E=0;E<l;E++)u[M*l+E]=e.heightAt(e.x0+E*o,e.z0+M*o);let f=17+t.za.width[1],[d,h]=[f+t.za.fade[0],f+t.za.fade[1]],p=new Float32Array(l*l);a.forEach((M,E)=>{let{p:y,cum:A}=i.lines[E],w=A[A.length-1],[b,S]=[y[0],y[y.length-1]].map(L=>t.Ua(L,a,E));for(let L=0;L<y.length-1;L++){let U=y[L],G=y[L+1],N=G[0]-U[0],W=G[1]-U[1],J=Math.hypot(N,W)||1,z=Math.max(0,Math.floor((Math.min(U[0],G[0])-h-e.x0)/o)),K=Math.min(s,Math.ceil((Math.max(U[0],G[0])+h-e.x0)/o)),D=Math.max(0,Math.floor((Math.min(U[1],G[1])-h-e.z0)/o)),I=Math.min(s,Math.ceil((Math.max(U[1],G[1])+h-e.z0)/o));for(let V=D;V<=I;V++){let tt=e.z0+V*o;for(let Z=z;Z<=K;Z++){let lt=e.x0+Z*o,ot=Math.max(0,Math.min(1,((lt-U[0])*N+(tt-U[1])*W)/(J*J))),Y=Math.hypot(U[0]+N*ot-lt,U[1]+W*ot-tt);if(Y>=h)continue;let Q=A[L]+ot*J,at=1-t.Ba(d,h,Y);b&&(at*=t.Ba(0,t.za.ends,Q)),S&&(at*=t.Ba(0,t.za.ends,w-Q));let gt=V*l+Z;at>p[gt]&&(p[gt]=at)}}}});for(let M of n){let E=Math.max(0,Math.floor((M.x-M.r1-e.x0)/o)),y=Math.min(s,Math.ceil((M.x+M.r1-e.x0)/o)),A=Math.max(0,Math.floor((M.z-M.r1-e.z0)/o)),w=Math.min(s,Math.ceil((M.z+M.r1-e.z0)/o));for(let b=A;b<=w;b++)for(let S=E;S<=y;S++)p[b*l+S]*=t.Ba(M.r0,M.r1,Math.hypot(e.x0+S*o-M.x,e.z0+b*o-M.z))}let[g,v]=t.za.height,[m,c]=t.za.width;for(let M=0;M<l;M++)for(let E=0;E<l;E++){let y=M*l+E;if(!p[y])continue;let A=e.x0+E*o,w=e.z0+M*o,b=g+(v-g)*t.Oa(A*.011+3.7,w*.011),S=m+(c-m)*t.Oa(A*.013,w*.013+9.1);u[y]+=b*p[y]*t.Ba(17,17+S,i.dist[y])}let x=new t.Heightfield(e.size,s,u,e.center),T=[];return e.holes.forEach((M,E)=>M&&T.push(E)),x.setHoles(e.tileCells*2,T),x}}function X0(t){return r=>[...r.flatMap(e=>[e.points[0],e.points[e.points.length-1]].map(([a,i])=>({x:a,z:i,r0:20,r1:50}))),...t.serviceCentreLocations.map(({x:e,z:a})=>({x:e,z:a,r0:70,r1:120})),{x:t.hotSpringLocation.x,z:t.hotSpringLocation.z,r0:15,r1:35}]}function Y0(t){return function([e,a],i,n){return!i.some((s,l)=>l!==n&&s.points.some((o,u,f)=>{let d=f[u+1];if(!d)return Math.hypot(o[0]-e,o[1]-a)<22;let h=d[0]-o[0],p=d[1]-o[1],g=Math.max(0,Math.min(1,((e-o[0])*h+(a-o[1])*p)/(h*h+p*p||1)));return Math.hypot(o[0]+h*g-e,o[1]+p*g-a)<22}))}}function q0(t){return r=>Math.min(1,Math.max(0,r))}function j0(t){return(r,e,a)=>{let i=t.Wa((a-r)/(e-r));return i*i*(3-2*i)}}function $0(t){return function(e,a,i){let n=1/0,s=0;for(let l=0;l<e.length-1;l++){let o=e[l],u=e[l+1],f=u[0]-o[0],d=u[1]-o[1],h=t.Wa(((a-o[0])*f+(i-o[1])*d)/(f*f+d*d||1)),p=Math.hypot(o[0]+f*h-a,o[1]+d*h-i);p<n&&(n=p,s=o[2]+(u[2]-o[2])*h)}return{d:n,dy:s}}}function K0(t){return function({at:e,axis:a,half:i,nw:n,se:s,height:l},o,u){let f=o-e[0],d=u-e[1],h=f*a[0]+d*a[1],p=f*a[1]-d*a[0],g=(h/i)**2+(p/(p>0?n:s))**2;return g<1?l*(1-g)**2:0}}function Z0(t){return function(e,a){let i=t.ga(a);if(!i)return null;let[n,s]=i.origin,l=(e.heightAt(...i.stations[0])+e.heightAt(...i.stations[1]))/2,o=t.summitObjectLayout.terrain,u=[...o.terrace.lines.map(c=>[c,o.terrace]),[o.ridge.line,o.ridge],[o.shoulder.line,o.shoulder]],f=e.verts,d=e.step,h=(c,x)=>[Math.max(0,Math.floor((c-170-x)/d)),Math.min(e.cells,Math.ceil((c+170-x)/d))],[p,g]=h(n,e.x0),[v,m]=h(s,e.z0);for(let c=v;c<=m;c++)for(let x=p;x<=g;x++){let T=e.x0+x*d-n,M=e.z0+c*d-s,E=c*f+x,y=e.h[E];for(let[A,w]of u){let{d:b,dy:S}=t.Ka(A,T,M);b<w.r1&&(y+=(l+S-y)*(1-t.Ga(w.r0,w.r1,b)))}e.h[E]=y+t.qa(o.knoll,T,M)}for(let c of t.summitObjectLayout.objects){let{x,z:T}=t.Ca(c.id),M=(c.round?c.size[0]:Math.hypot(...c.size))+.6*d,E=M+d,y=e.heightAt(x,T),A=1;for(let G=0;G<8;G++)for(let N of[M*.5,M])y+=e.heightAt(x+Math.cos(G*Math.PI/4)*N,T+Math.sin(G*Math.PI/4)*N),A++;let w=y/A,[b,S]=[Math.max(0,Math.floor((x-E-e.x0)/d)),Math.min(e.cells,Math.ceil((x+E-e.x0)/d))],[L,U]=[Math.max(0,Math.floor((T-E-e.z0)/d)),Math.min(e.cells,Math.ceil((T+E-e.z0)/d))];for(let G=L;G<=U;G++)for(let N=b;N<=S;N++){let W=Math.hypot(e.x0+N*d-x,e.z0+G*d-T),J=G*f+N;W<E&&(e.h[J]+=(w-e.h[J])*(1-t.Ga(M,E,W)))}}return{...i,plaza:l}}}function Q0(t){return(r,e=0)=>t.createToonMaterial({color:r},{rim:e})}function J0(t){return{felt:t.Ya("#f2eee4"),feltRoof:t.Ya("#e6dfd0"),band:t.Ya("#a8432f"),door:t.Ya("#c4572f"),crown:t.Ya("#7d5a3c"),timber:t.Ya("#c98a3e"),board:t.Ya("#efe3c8"),gold:t.Ya("#d8a73e",1),stone:t.Ya("#9d978c"),stoneDark:t.Ya("#7d786f"),pole:t.Ya("#6b5136"),logs:t.Ya("#b98b5d"),hutRoof:t.Ya("#6c5a48"),frame:t.Ya("#7b5230"),pale:t.Ya("#e6dac5"),shingle:t.Ya("#a09583"),dark:t.Ya("#34302d"),post:t.Ya("#987a5c"),seat:t.Ya("#c4463a"),rope:t.Ya("#3d3a36"),orange:t.Ya("#e2742c",1),steel:t.Ya("#4b5157"),mast:t.Ya("#e3e6e8"),panel:t.Ya("#c9cfd3")}}function t1(t){return(r,e,a)=>new t.W(r,e,a)}function e1(t){return function(e,a,i,n=0,s=0,l=0){let o=new t.c(a,i);return o.position.set(n,s,l),o.castShadow=o.receiveShadow=!0,e.add(o),o}}function a1(t){return function(e,a,i){return e.userData.solids=a,e.userData.height=i,e}}function i1(t){return(r,e)=>[0,Math.PI/4].map(a=>({x:0,z:0,yaw:a,hw:r,hd:r,top:e}))}function n1(t){return function(e,a,i,n,s,l,o,u){let f=i/2+l,d=Math.atan2(s,i/2);for(let p of[-1,1]){let g=t.Z(e,t.Qa(a+2*l,.12,f/Math.cos(d)),o,0,n+s-f/2*Math.tan(d)+.06,p*f/2);g.rotation.x=p*d}let h=new t.S([new t.L(-i/2,0),new t.L(i/2,0),new t.L(0,s)]);t.Z(e,new t.F(h,{depth:a,bevelEnabled:!1}).rotateY(Math.PI/2).translate(-a/2,n,0),u)}}function r1(t){return function(){let e=new t.g,{R:a,wall:i,door:[n,s],gap:l}=t.no,o=Math.asin(n/a),u=Math.PI*2-2*o;t.Z(e,new t.d(a,a,i,32,1,!0,o,u),t.ro,0,i/2,0),t.Z(e,new t.d(a+.03,a+.03,.28,32,1,!0,o,u),t.X.band,0,i-.3,0),t.Z(e,new t.st(a+.2,1.5,32,1,!0),t.io,0,i+.75,0),t.Z(e,new t.d(.5,.55,.3,12),t.X.crown,0,i+1.45,0);let f=Math.sqrt(a*a-n*n);for(let T of[-1,1])t.Z(e,t.Qa(.12,s,.16),t.X.door,T*n,s/2,f);t.Z(e,t.Qa(2*n+.12,.12,.16),t.X.door,0,s+.06,f),t.Z(e,t.Qa(2*n,i-s-.12,.06),t.X.felt,0,(i+s+.12)/2,f);let d=new t.g;d.position.set(-n,0,f+.05),d.rotation.y=-2.3,t.Z(d,t.Qa(2*n-.08,s-.06,.06),t.X.door,n-.04,(s-.06)/2,0),e.add(d);let h=Math.cos(d.rotation.y),p=Math.sin(d.rotation.y);t.Z(e,new t.d(a-.3,a-.3,.025,32),t.X.band,0,.0125,0),t.Z(e,new t.d(a-.75,a-.75,.03,32),t.oo,0,.015,0);let[g,v]=t.no.seat;t.Z(e,new t.d(.55,.56,.04,20),t.so,g,.05,v+.08),t.Z(e,t.Qa(.5,.3,.4),t.X.crown,g-.85,.15,v+.15),t.Z(e,new t.d(.06,.08,.13,10),t.X.gold,g-.85,.365,v+.15);let m=Math.asin(l/a),c=(Math.PI*2-2*m)/14,x=[];for(let T=0;T<14;T++){let M=m+(T+.5)*c;x.push({x:Math.sin(M)*(a-.05),z:Math.cos(M)*(a-.05),yaw:M,hw:a*Math.tan(c/2)+.05,hd:.15,top:i+1.6})}return x.push({x:-n+n*h,z:f+.05-n*p,yaw:d.rotation.y,hw:n,hd:.05,top:s}),x.push({x:g-.85,z:v+.15,hw:.25,hd:.2,top:.3},{x:g,z:v+.1,hw:.5,hd:.45,top:1.1}),t.$a(e,x,i+1.6)}}function s1(t){return function(e,a=4){let{R:i,door:[n],seat:s}=t.no,l=Math.cos(e.rotation.y),o=Math.sin(e.rotation.y),u=(v,m)=>{let c=v-e.position.x,x=m-e.position.z;return[c*l-x*o,c*o+x*l]},f=(v,m)=>Math.hypot(v-e.position.x,m-e.position.z)<i-.1,d=(v,m)=>{if(f(v,m))return 1;let[c,x]=u(v,m),T=Math.sqrt(i*i-n*n);return Math.abs(c)<n+1&&x>=T?1-t.Ga(0,a,x-T):0},h=(v,m)=>{let c=v.x-e.position.x,x=v.z-e.position.z,T=Math.hypot(c,x),M=i-m;T<=M||(v.x=e.position.x+c/T*M,v.z=e.position.z+x/T*M)},[p,g]=s;return{room:d,inside:f,keepIn:h,seat:{x:e.position.x+p*l+g*o,y:e.position.y,z:e.position.z-p*o+g*l,yaw:e.rotation.y,cushion:.07}}}}function l1(t){return[{dir:[0,-1],y:4.6,colors:["#2e5fb0","#d8352a"]},{dir:[1,0],y:4.15,colors:["#c8342c","#2550a0"]},{dir:[-1,0],y:4.15,colors:["#33a9dc","#f2c230"]},{dir:[0,1],y:4.6,colors:["#d8352a","#f2c230"]}]}function o1(t){return function(){let e=new t.g,a=6.2,i=3.2,n=2.4;t.Z(e,t.Qa(.38,a,.38),t.X.timber,0,a/2,0);for(let l of[-1,1])t.Z(e,t.Qa(.3,1.3,.3),t.X.timber,l*.42,6.55,0).rotation.z=-l*.7;let s=[];for(let l=0;l<4;l++){let o=Math.PI/4+l*Math.PI/2,u=Math.sin(o),f=Math.cos(o),d=t.Z(e,t.Qa(.26,Math.hypot(n,i),.26),t.X.timber,u*n/2,i/2,f*n/2);d.rotation.order="YXZ",d.rotation.set(-Math.atan2(n,i),o,0),s.push({x:u*2.6999999999999997/2,z:f*2.6999999999999997/2,yaw:o,hw:.17,hd:n/2,top:i})}for(let{dir:l,y:o,colors:u}of t.lo){let f=new t.g;f.position.y=o,f.rotation.y=Math.atan2(l[0],l[1]),t.Z(f,t.Qa(.1,.34,1.25),t.X.board,0,0,.82),t.Z(f,t.Qa(.11,.34,.32),t.Ya(u[0]),0,0,1.6),t.Z(f,new t.d(0,.2,.34,3).rotateX(Math.PI/2).rotateZ(Math.PI/2),t.Ya(u[1]),0,0,1.86),e.add(f)}return t.$a(e,[{x:0,z:0,hw:.25,hd:.25,top:7.2},...s],7.2)}}function u1(t){return function(){return t.po??=t.loadGLTF("./models/prayer-wheels/prayer-wheels.glb").then(e=>{let a=e.scene,i=new Map;return a.traverse(n=>{if(!n.isMesh)return;let s=/^wheel_/.test(n.name);if(s){n.geometry.computeBoundingBox();let o=n.geometry.boundingBox.getCenter(new t.Vector3);n.geometry.translate(-o.x,0,-o.z),n.geometry.computeBoundingBox(),n.position.x+=o.x,n.position.z+=o.z}let l=`${n.material.uuid}${s}`;i.has(l)||i.set(l,t.createToonMaterial({map:n.material.map,color:16777215,side:n.material.side},{rim:+!!s})),n.material=i.get(l),n.castShadow=n.receiveShadow=!0}),a}),t.po}}function f1(t){return function(){let e=new t.g,a=t.fo.scale;return e.userData.wheels=[],e.userData.ready=t.mo().then(i=>{let n=i.clone();n.scale.setScalar(a),n.traverse(s=>{if(!/^wheel_/.test(s.name))return;let l=s.geometry.boundingBox;e.userData.wheels.push({mesh:s,x:s.position.x*a,r:(l.max.x-l.min.x+l.max.z-l.min.z)/4*a})}),e.userData.wheels.sort((s,l)=>s.x-l.x),e.add(n)}),t.$a(e,[{x:0,z:0,hw:(t.fo.posts+.01)*a,hd:t.fo.depth*a,top:t.fo.top*a}],t.fo.top*a)}}function h1(t){return function(){let e=new t.g,a=0;for(let[o,u]of[[3.3,.8],[2.5,.75],[1.75,.7]])t.Z(e,new t.d(o-.15,o,u,11),a?t.X.stone:t.X.stoneDark,0,a+u/2,0),a+=u;t.Z(e,new t.st(1.1,.9,9),t.X.stone,0,a+.45,0),t.Z(e,new t.d(.07,.1,4.6,6),t.X.pole,0,a+2.3,0),t.Z(e,new t.st(.18,.6,6),t.X.gold,0,a+4.9,0);for(let o=0;o<3;o++)t.Z(e,t.Qa(1.6,(o+1)*.27,.45),t.X.stoneDark,0,(o+1)*.135,3.3+(2.5-o)*.45);let i=new t.Vector3(0,a+4.2,0),n=[],s=[];for(let o=0;o<8;o++){let u=o/8*Math.PI*2,f=new t.Vector3(Math.sin(u)*5.2,.05,Math.cos(u)*5.2);s.push(i,f);let d=f.clone().sub(i).normalize();for(let h=0;h<7;h++){let p=i.clone().lerp(f,.12+h*.11),g=new t.z().setFromPoints([p,p.clone().addScaledVector(d,.3),p.clone().addScaledVector(d,.3).setY(p.y-.26),p.clone().setY(p.y-.26)]);g.setIndex([0,1,2,0,2,3]);let v=t.go[h%5];g.setAttribute("color",new t.i([v,v,v,v].flatMap(m=>m.toArray()),3)),n.push(g)}}let l=t.mt(n);return l.computeVertexNormals(),t.Z(e,l,t.Xa).castShadow=!1,e.add(new t.De(new t.z().setFromPoints(s),new t.Ke({color:"#4a3f36"}))),t.$a(e,[...t.eo(3.3,a+5),{x:0,z:3.95,hw:.8,hd:.7,top:.8}],a+5.2)}}function d1(t){return function(){let e=new t.g,a=3.6,i=2.4;return t.Z(e,t.Qa(a,i,3),t.X.logs,0,i/2,0),t.to(e,a,3,i,1.1,.3,t.X.hutRoof,t.X.logs),t.Z(e,t.Qa(.9,1.85,.08),t.X.dark,.6,.93,1.52),t.Z(e,t.Qa(.8,.6,.08),t.X.dark,-.9,1.4,1.52),t.$a(e,[{x:0,z:0,hw:1.9000000000000001,hd:1.6,top:3.5}],3.5)}}function c1(t){return function(){let e=new t.g,a=.34,i=.28,n=.24,s=3.58;for(let u of[-1,1]){let f=u*2.4699999999999998;t.Z(e,t.Qa(a,s,i),t.X.frame,f,s/2,0),t.Z(e,t.Qa(a*.9,.2,1.9),t.X.frame,f,.1,0);for(let d of[-1,1])t.Z(e,t.Qa(a*.6,1.45,.16),t.X.frame,f,.62,d*.48).rotation.x=d*.68}t.Z(e,t.Qa(5.279999999999999,a,i),t.X.frame,0,s-a/2,0),t.Z(e,t.Qa(4.6,n,i),t.X.frame,0,n/2,0);let l=new t.ot({map:t.jo("云霄峰 2800"),transparent:!0,alphaTest:.5,side:2}),o=new t.c(new t.me(2.6,.55),l);return o.position.set(0,3.24-.42,0),e.add(o),t.$a(e,[-1,1].map(u=>({x:u*2.4699999999999998,z:0,hw:.22000000000000003,hd:.95,top:s})),s)}}function m1(t){return[[-.455,t.bo.door[0],.16,.25,.32],[t.bo.door[1],.463,.16,.25,.32],[-.455,-.42,-.31,.25,.32],[.436,.463,-.31,.25,.32],[-.455,-.1,-.31,-.25,.32],[.15,.463,-.31,-.25,.32],[-.135,-.1,-.4,-.25,.35],[.15,.185,-.4,-.25,.35],[-.135,.185,-.4,-.381,.35],[-.42,-.19,-.25,-.17,.15],[-.27,-.19,-.17,-.05,.15],{at:[-.2925,-.1475],yaw:-Math.PI/4,hw:.064,hd:.032,top:.15},[-.19,-.125,-.24,-.17,.14],[-.22,-.16,.01,.14,.26],[-.1,-.035,-.32,-.26,.14],[-.1,-.05,-.385,-.335,.16],[.06,.4,-.25,-.175,.14],[-.437,-.096,.25,.335,.14],[.189,.436,.25,.335,.14],[-.18,-.07,.25,.37,.22],{at:[.163,.337],yaw:Math.atan2(.054,.162),hw:.012,hd:.086,top:.32},[.385,.495,.305,.425,.15],[-.45,-.135,-.37,-.29,.14],[.185,.46,-.37,-.29,.14]]}function g1(t){return()=>t.bo.floor*t.bo.scale-.03}function p1(t){return function(e,a=4){let i=t.bo.scale,n=Math.cos(e.rotation.y),s=Math.sin(e.rotation.y),l=([x,T])=>({x:e.position.x+x*i*n+T*i*s,z:e.position.z-x*i*s+T*i*n}),o=(x,T)=>{let M=x-e.position.x,E=T-e.position.z;return[M*n-E*s,M*s+E*n]},[u,f,d,h]=t.bo.room.map(x=>x*i),p=(x,T)=>{let[M,E]=o(x,T);return M>u&&M<f&&E>d&&E<h},g=(t.bo.door[0]+t.bo.door[1])/2*i,v=(t.bo.door[1]-t.bo.door[0])/2*i,m=(x,T)=>{let[M,E]=o(x,T);return M>u&&M<f&&E>d&&E<h?1:Math.abs(M-g)<v+1&&E>=h?1-t.Ga(0,a,E-h):0},c=(x,T)=>{let[M,E]=o(x.x,x.z),y=Math.max(u+T,Math.min(f-T,M)),A=Math.max(d+T,Math.min(h-T,E));x.x=e.position.x+y*n+A*s,x.z=e.position.z-y*s+A*n};return{home:{...l(t.So.home),yaw:e.rotation.y,roam:t.So.roam*i,via:l(t.So.via),door:l(t.So.door),inside:p},inside:p,room:m,keepIn:c}}}function M1(t){return function(){let e=new t.g,a=t.bo.scale,i=s=>s*a-t.Co(),n=t.xo.map(s=>Array.isArray(s)?{x:(s[0]+s[1])/2*a,z:(s[2]+s[3])/2*a,hw:(s[1]-s[0])/2*a,hd:(s[3]-s[2])/2*a,top:i(s[4])}:{x:s.at[0]*a,z:s.at[1]*a,yaw:s.yaw,hw:s.hw*a,hd:s.hd*a,top:i(s.top)});return e.userData.ready=t.loadGLTF("./models/coffee-cabin/coffee-cabin.glb").then(s=>{let l=s.scene;l.scale.setScalar(a),l.position.y=-t.Co(),l.traverse(o=>{if(o.isLight){if(!/^Interior/.test(o.name)){o.visible=!1;return}o.distance*=a,o.intensity*=a*a*t.Eo,o.decay=2;return}if(!o.isMesh)return;let u=o.material,f=u.transparent||u.opacity<1||/glass/i.test(u.name);u.emissive&&u.emissive.getHex()>0?o.material=new t.ot({color:u.emissive.clone().multiplyScalar(Math.min(1,u.emissiveIntensity??1))}):(o.material=f?t.createToonMaterial({color:u.color,transparent:!0,opacity:u.opacity,depthWrite:!1,side:u.side},{hatch:0}):t.createToonMaterial({map:u.map,color:u.map?16777215:u.color,side:u.side}),o.castShadow=!f,o.receiveShadow=!0)}),e.add(l)}),t.$a(e,n,i(.8))}}function v1(t){return function(){let e=new t.g,a=2.65,i=3.4,n=3.35;for(let l of[-1,1])t.Z(e,new t.d(.15,.17,i,8),t.X.post,l*a,i/2,0);t.Z(e,new t.d(.13,.13,5.8,8),t.X.post,0,n,0).rotation.z=Math.PI/2;let s=[];for(let l of[-1,1]){let o=new t.g;o.name="swing-seat",o.position.set(l*1.25,n,0),e.add(o),t.Z(o,t.Qa(.75,.07,.38),t.X.seat,0,-2.8,0);for(let f of[-.32,.32])t.Z(o,t.Qa(.035,2.8,.035),t.X.rope,f,-2.8/2,0);let u=new t.x;u.position.y=-2.7649999999999997,o.add(u),s.push({pivot:o,x:l*1.25,length:2.7649999999999997,mount:u})}return e.userData.seats=s,t.$a(e,[-1,1].map(l=>({x:l*a,z:0,hw:.22,hd:.22,top:i})),i)}}function x1(t){return function(){let e=new t.g,a=2.3,i=2.2,n=.9,s=new t.Xe(a,1).scale(1,n,1),l=s.attributes.position,o=[],u=new t.K("#2e3a45"),f=new t.K("#e2742c");for(let g=0;g<l.count;g+=3){let v=(l.getY(g)+l.getY(g+1)+l.getY(g+2))/3>a*n*.55?u:f;for(let m=0;m<3;m++)o.push(v.r,v.g,v.b)}s.setAttribute("color",new t.i(o,3)),t.Z(e,s,t.Za,0,4.27-.35,0),t.Z(e,new t.d(a*.85,a*.7,.45,12),t.X.steel,0,2.4000000000000004,0);let d=[];for(let g=0;g<4;g++){let v=Math.PI/4+g*Math.PI/2,m=Math.sin(v)*1.45,c=Math.cos(v)*1.45;t.Z(e,new t.d(.11,.2,1.8000000000000003,8),t.X.steel,m,1.35,c),t.Z(e,new t.d(.22,.26,.5,8),t.X.orange,m,.25,c),d.push({x:m,z:c,hw:.27,hd:.27,top:i})}let h=Math.hypot(i,.8),p=Math.atan2(-.8,i);for(let g of[-1,1])t.Z(e,t.Qa(.05,h,.05),t.X.steel,g*.28,i/2,1.7).rotation.x=p;for(let g=1;g<=5;g++)t.Z(e,t.Qa(.56,.04,.05),t.X.steel,0,g/6*i,2.1-g/6*.8);return t.$a(e,d,5.99)}}function w1(t){return function(){let e=new t.g;t.Z(e,t.Qa(1.4,.5,1.4),t.X.stoneDark,0,.25,0),t.Z(e,new t.d(.32,.5,26,8),t.X.mast,0,13,0);for(let a=0;a<3;a++){let i=a*Math.PI*2/3;t.Z(e,t.Qa(.35,2.2,.12),t.X.panel,Math.sin(i)*.48,22.5,Math.cos(i)*.48).rotation.y=i,t.Z(e,t.Qa(.3,1.2,.1),t.X.panel,Math.sin(i+1)*.5,18,Math.cos(i+1)*.5).rotation.y=i+1}for(let a=0;a<6;a++){let i=a*Math.PI/3;t.Z(e,new t.d(.03,.03,1.6,4),t.X.steel,Math.sin(i)*.3,26.6,Math.cos(i)*.3).rotation.set(Math.cos(i)*.5,0,-Math.sin(i)*.5)}return t.$a(e,[{x:0,z:0,hw:.75,hd:.75,top:27}],27.4)}}function E1(t){return{yurt:t.ao,signpost:t.uo,prayerWheels:t.ho,ovoo:t._o,hut:t.vo,photoFrame:t.yo,cabin:t.To,swing:t.Do,pod:t.Oo,mast:t.ko}}function b1(t){return function(e){let a=document.createElement("canvas");a.width=512,a.height=108;let i=a.getContext("2d");i.fillStyle="#e2b54a",i.strokeStyle="#5a3d1c",i.lineWidth=6,i.textAlign="center",i.textBaseline="middle",i.font='700 84px "PingFang SC", "Patrick Hand SC", sans-serif',i.strokeText(e,256,58),i.fillText(e,256,58);let n=new t.qe(a);return n.colorSpace=t.he,n}}function T1(t){return function(e){let a=document.createElement("canvas");a.width=a.height=128;let i=a.getContext("2d");i.beginPath(),i.arc(64,64,58,0,Math.PI*2),i.fillStyle=e==="M"?"#5c6a73":"#c8402f",i.fill(),i.lineWidth=7,i.strokeStyle="#fbfaf5",i.stroke(),i.fillStyle="#fbfaf5",i.textAlign="center",i.textBaseline="middle",i.font=`700 ${e.length>1?54:78}px "Patrick Hand SC", sans-serif`,i.fillText(e,64,68);let n=new t.qe(a);n.colorSpace=t.he;let s=new t.Le(new t.Se({map:n,depthTest:!1,depthWrite:!1,sizeAttenuation:!1}));return s.scale.set(.05,.05,1),s.renderOrder=10,s}}function y1(t){return function(e,{labels:a=!1,keep:i=()=>!0}={}){let n=new t.g;n.name="summit";let s=new t.g;s.visible=a,n.add(s);let l=[],o=new Map,u=[];for(let f of t.summitObjectLayout.objects){let{x:d,z:h,yaw:p}=t.Ca(f.id),[g,v]=f.round?[f.size[0],f.size[0]]:f.size;if(!i({x:d,z:h,yaw:p,hw:g,hd:v}))continue;let m=new t.g;m.name=f.id,m.userData={id:f.id,label:f.label},m.position.set(d,e.heightAt(d,h),h),m.rotation.y=p;let c=t.Ao[f.kind]();c.name="placeholder",c.userData.ready&&u.push(c.userData.ready),m.add(c),n.add(m),o.set(f.id,m);let x=Math.cos(p),T=Math.sin(p);for(let E of c.userData.solids)l.push({id:f.id,x:d+E.x*x+E.z*T,z:h-E.x*T+E.z*x,yaw:p+(E.yaw??0),hw:E.hw,hd:E.hd,top:m.position.y+E.top});let M=t.Mo(f.label);M.position.set(d,m.position.y+c.userData.height+1.5,h),s.add(M)}return{group:n,footprints:l,byId:o,tags:s,ready:Promise.all(u)}}}function R1(t){return function(e,a,i){let n=document.createElement("canvas");n.width=1024,n.height=256;let s=n.getContext("2d");s.fillStyle=a,s.fillRect(0,0,n.width,n.height),s.strokeStyle="#23303a",s.lineWidth=14,s.strokeRect(7,7,n.width-14,n.height-14),s.fillStyle=i,s.textAlign="center",s.textBaseline="middle",s.font='700 104px "Patrick Hand SC", "PingFang SC", sans-serif',s.fillText(e[0],n.width/2,e[1]?100:128),e[1]&&(s.font='56px "Patrick Hand SC", sans-serif',s.fillText(e[1],n.width/2,196));let l=new t.qe(n);return l.colorSpace=t.he,l.anisotropy=4,l}}function A1(t){return function(e,{x:a,z:i,faceTo:n,roof:s,zh:l,en:o,ele:u},{scale:f=1}={}){let d=new t.g,h=Math.atan2(n[0]-a,n[1]-i),p=1/0,g=-1/0,v=Math.cos(h),m=Math.sin(h);for(let y=-.5;y<=.5;y+=.125)for(let A=-.5;A<=.5;A+=.25){let w=y*96*1.3*f,b=A*34*1.6*f,S=e.heightAt(a+w*v+b*m,i-w*m+b*v);p=Math.min(p,S),g=Math.max(g,S)}d.position.set(a,g,i),d.rotation.y=h,d.scale.setScalar(f);let c=(g-p)/f+2,x=t.createToonMaterial({color:s},{rim:1}),T=(y,A,w,b,S)=>{let L=new t.c(y,A);return L.position.set(w,b,S),L.castShadow=!0,L.receiveShadow=!0,d.add(L),L};T(new t.W(120,c,51),t.fc.wall,0,-c/2+.4,0),T(new t.W(96,10,34),t.fc.wall,0,5,0),T(new t.W(82.56,6,.6),t.fc.glass,0,4.2,17),T(new t.W(90.24,7,24.48),t.fc.wood,0,13.5,-2.04);let M=(y,A,w)=>{let b=T(new t.W(y,1.2,32.3),x,A,17.3+Math.tan(Math.abs(w))*y*.5,-1.36);b.rotation.z=w};M(51.84,-23.04,-.16),M(48,24,.11),T(new t.W(22,1,9),x,11.52,6.2,21.2);for(let y of[-9,9])T(new t.d(.4,.4,6,6),t.fc.dark,11.52+y,3,25);let E=new t.c(new t.me(34,8.5),new t.ot({map:t.Uc([l,`${o} · ${u} m`],"#fbfaf5","#23303a")}));return E.position.set(-17.28,13.6,10.299999999999999),d.add(E),d.userData.footprint={x:a,z:i,yaw:h,hw:60*f,hd:25.5*f,top:g+20*f},d}}function P1(t){return function(e,a,i,n,s){let l=new t.g,o=e.heightAt(a.x,a.z);l.position.set(a.x,o,a.z),l.rotation.y=Math.atan2(i.x,i.z);let u=t.createToonMaterial({color:s},{rim:1});for(let g of[-9,9]){let v=new t.c(new t.d(.6,.75,6.5,8).translate(0,3.25,0),u);v.position.x=g,v.castShadow=!0,l.add(v)}let f=new t.c(new t.W(20,2.6,.9),u);f.position.y=7.2,f.castShadow=!0;let d=t.Uc(n,"#fbfaf5","#23303a"),h=new t.c(new t.me(14,3.5),new t.ot({map:d}));h.position.set(0,7.2,.5);let p=h.clone();return p.rotation.y=Math.PI,p.position.z=-.5,l.add(f,h,p),l.userData.footprint={x:a.x,z:a.z,yaw:l.rotation.y,hw:9.75,hd:.75},l}}function C1(t){return function(e,a,i){let n=0;for(let s of t.ls)n+=s.a*Math.sin(s.kx*e+s.kz*a-s.w*i+s.p);return n}}function L1(t){return(r,e,a)=>{let i=Math.min(1,Math.max(0,(a-r)/(e-r)));return i*i*(3-2*i)}}function D1(t){return function(e,a){let i=e;for(let n=0;n<a;n++)i=i.flatMap(([s,l],o)=>{let[u,f]=i[(o+1)%i.length];return[[.75*s+.25*u,.75*l+.25*f],[.25*s+.75*u,.25*l+.75*f]]});return i}}function U1(t){return function(e,a,i){let n=!1;for(let s=0,l=e.length-1;s<e.length;l=s++){let[o,u]=e[s],[f,d]=e[l];u>i!=d>i&&a<(f-o)*(i-u)/(d-u)+o&&(n=!n)}return n}}function I1(t){return function(e,a,i,n){let s=1/0,l=0,o=0,u=1,f=0;for(let v=0;v<e.length;v++){let[m,c]=e[v],[x,T]=e[(v+1)%e.length],M=x-m,E=T-c,y=Math.max(0,Math.min(1,((a-m)*M+(i-c)*E)/(M*M+E*E||1))),A=m+M*y,w=c+E*y,b=Math.hypot(A-a,w-i);b<s&&(s=b,l=A,o=w,u=M,f=E)}let d=t.hs(e,a,i),h=a-l,p=i-o,g=Math.hypot(h,p);if(g>1e-6)h/=g*(d?-1:1),p/=g*(d?-1:1);else{let v=Math.hypot(u,f)||1;h=f/v,p=-u/v,t.hs(e,a+h*.1,i+p*.1)&&(h=-h,p=-p)}return n.d=d?-s:s,n.nx=h,n.nz=p,n}}function S1(t){return function(e,a=[]){let i=Math.max(2*e.step,t.os.straight),n=i+t.os.shore,s={d:0,nx:0,nz:0},l=(o,u)=>{if(u<0){let f=-u;return o-Math.min(f,t.os.straight)*t.os.slope-(t.os.depth-t.os.straight*t.os.slope)*t.ps(t.os.straight,t.os.straight*3.5,f)}return o+Math.min(u,t.os.straight)*t.os.slope+Math.max(0,u-t.os.straight)*t.os.bank};return a.map(o=>{let u=t.ms(o.points,t.os.smooth),f=[];u.forEach(([E,y],A)=>{let[w,b]=u[(A+1)%u.length],S=Math.max(1,Math.round(Math.hypot(w-E,b-y)/2));for(let L=0;L<S;L++)f.push(e.heightAt(E+(w-E)*L/S,y+(b-y)*L/S))}),f.sort((E,y)=>E-y);let d=f[f.length>>1],h=u.map(E=>E[0]),p=u.map(E=>E[1]),g=[Math.min(...h),Math.min(...p),Math.max(...h),Math.max(...p)],v=e.verts,m=e.step,c=Math.max(0,Math.floor((g[0]-n-e.x0)/m)),x=Math.min(e.cells,Math.ceil((g[2]+n-e.x0)/m)),T=Math.max(0,Math.floor((g[1]-n-e.z0)/m)),M=Math.min(e.cells,Math.ceil((g[3]+n-e.z0)/m));for(let E=T;E<=M;E++)for(let y=c;y<=x;y++){let{d:A}=t.gs(u,e.x0+y*m,e.z0+E*m,s),w=E*v+y;if(A>=n)continue;let b=l(d,A);e.h[w]=b+(e.h[w]-b)*t.ps(i,n,A)}return{id:o.id,name:o.name,outline:u,level:d,box:g}})}}function N1(t){return function(e,a,i){for(let n of e)if(a>n.box[0]&&a<n.box[2]&&i>n.box[1]&&i<n.box[3]&&t.hs(n.outline,a,i))return n;return null}}function _1(t){return function(e,a){return Object.create(e,{heightAt:{value:(i,n)=>{let s=e.heightAt(i,n),l=t.lakeContainingPoint(a,i,n);return l?Math.max(s,l.level):s}}})}}function O1(t){return function(e,a,i,n=20){for(let s of e){let l=s.box;if(!(a<l[0]-n||a>l[2]+n||i<l[1]-n||i>l[3]+n)&&(t.gs(s.outline,a,i,t.bs),t.bs.d<n))return t.bs.lake=s,t.bs}return null}}function F1(t){return function(e,a){let i=([p,g])=>Math.min(...a.map(({points:v})=>Math.min(...v.slice(1).map((m,c)=>{let x=v[c],T=m[0]-x[0],M=m[1]-x[1],E=t.MathUtils.clamp(((p-x[0])*T+(g-x[1])*M)/(T*T+M*M||1),0,1);return Math.hypot(x[0]+T*E-p,x[1]+M*E-g)})))),n=e.outline[0],s=1/0;for(let p of e.outline){let g=i(p);g<s&&(s=g,n=p)}let l=(e.box[0]+e.box[2])/2,o=(e.box[1]+e.box[3])/2,u=Math.hypot(l-n[0],o-n[1]),{nx:f,nz:d}=t.nearestLakeShore([e],n[0]+(l-n[0])/u,n[1]+(o-n[1])/u,5),h=1.8;return{x:n[0]-f*h,z:n[1]-d*h,dx:-f,dz:-d}}}function z1(t){return function(e){let a=new t.g;a.name="Lakes";let i=[];for(let n of e){let s=t.Ds(n.outline,t.os.pad).map(([h,p])=>new t.L(h,p)),l=t.Ts(s.length+t.Cs);t.Es(l,s,[],n.level),l.computeBoundingSphere();let o=t.ks(n.outline),u=new t.c(l,o);u.name=`lake:${n.id}`,u.receiveShadow=!0,a.add(u);let f=n.box,d=t.os.pad;i.push({lake:n,geo:l,outline:s,mat:o,on:h=>h[0].x>f[0]-d&&h[0].x<f[2]+d&&h[0].y>f[1]-d&&h[0].y<f[3]+d,cut:!1})}return{group:a,update(n,s=[]){for(let l of i){l.mat.userData.uniforms.uTime.value=n;let o=t.Cs,u=s.filter(f=>f.length>2&&f.length<=o&&l.on(f)&&(o-=f.length)>=0);(u.length||l.cut)&&(t.Es(l.geo,l.outline,u,l.lake.level),l.cut=u.length>0)}},setSky(n){for(let s of i)s.mat.userData.uniforms.uSky.value.copy(n)}}}}function k1(t){return function(e){let a=new t.z;a.setAttribute("position",new t.et(new Float32Array(e*3),3).setUsage(t.ie));let i=new Float32Array(e*3);for(let n=0;n<e;n++)i[n*3+1]=1;return a.setAttribute("normal",new t.et(i,3)),a.setIndex(new t.et(new Uint16Array(e*3+12),1).setUsage(t.ie)),a}}function B1(t){return function(e,a,i,n){let s=t._e.triangulateShape(a,i),l=a.concat(...i),o=e.attributes.position,u=e.index,f=u.array;l.forEach((d,h)=>o.setXYZ(h,d.x,n,d.y)),s.forEach(([d,h,p],g)=>{let v=(l[h].y-l[d].y)*(l[p].x-l[d].x)-(l[h].x-l[d].x)*(l[p].y-l[d].y)>0;f[g*3]=d,f[g*3+1]=v?h:p,f[g*3+2]=v?p:h}),e.setDrawRange(0,s.length*3),o.needsUpdate=!0,u.needsUpdate=!0}}function H1(t){return function(e,a){let i=e.length;return e.map(([n,s],l)=>{let[o,u]=e[(l+i-1)%i],[f,d]=e[(l+1)%i],h=d-u,p=-(f-o),g=Math.hypot(h,p)||1;return h/=g,p/=g,t.hs(e,n+h*.5,s+p*.5)&&(h=-h,p=-p),[n+h*a,s+p*a]})}}function G1(t){return function(e){let a=t.createToonMaterial({color:"#ffffff"},{hatch:0}),i=a.onBeforeCompile,n=[...e,e[0]].map(([l,o])=>new t.L(l,o)),s={uTime:{value:0},uOutline:{value:n},uShallow:{value:new t.K(t.fs.shallow)},uDeep:{value:new t.K(t.fs.deep)},uSky:{value:new t.K(t.fs.sky)},uRipple:{value:new t.K(t.fs.ripple)},uFoam:{value:new t.K(t.fs.foam)},uInk:{value:new t.K(t.fs.ink)}};return a.userData.uniforms=s,a.onBeforeCompile=(l,o)=>{i(l,o),Object.assign(l.uniforms,s),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
        #define LAKE_N ${n.length}
        uniform vec2 uOutline[LAKE_N];
        uniform float uTime;
        uniform vec3 uShallow, uDeep, uSky, uRipple, uFoam, uInk;
        ${t.Os}
        float shoreDist(vec2 p) {
          float d = 1e9;
          for (int i = 0; i < LAKE_N - 1; i++) {
            vec2 a = uOutline[i], ba = uOutline[i + 1] - a, pa = p - a;
            d = min(d, length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0)));
          }
          return d;
        }`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          vec2 p = vTWorld.xz;
          float d = shoreDist(p), t = uTime;
          float far = smoothstep(120.0, 600.0, length(vViewPosition));
          // Deeper toward the middle, mottled by slow drifting noise.
          float m = wNoise(p * 0.035 + t * 0.01) * 0.6 + wNoise(p * 0.12 - t * 0.02) * 0.4;
          vec3 col = mix(uShallow, uDeep, clamp(smoothstep(2.0, 32.0, d) * 0.85 + (m - 0.5) * 0.35, 0.0, 1.0));
          // The sky in it, toward the far shore: two flat steps, as the toon tones are.
          vec3 V = normalize(cameraPosition - vTWorld);
          float graze = 1.0 - clamp(V.y, 0.0, 1.0);
          float gw = max(fwidth(graze), 1e-4);
          col = mix(col, uSky, (smoothstep(0.82 - gw, 0.82 + gw, graze) * 0.35 + smoothstep(0.93 - gw, 0.93 + gw, graze) * 0.3));
          // The crests, where the waves the boat rocks on rise highest, broken up.
          float w = waves(p, t) * ${(1/t.us).toFixed(4)} + (wNoise(p * 0.22 + vec2(t * 0.12, -t * 0.05)) - 0.5) * 0.9;
          float ww = max(fwidth(w), 1e-4);
          float crest = 1.0 - smoothstep(ww * 0.6, ww * 1.8, abs(w - 0.62));
          crest *= smoothstep(0.35, 0.6, wNoise(p * 0.6 + t * 0.07));
          col = mix(col, uRipple, crest * 0.8 * (1.0 - far));
          // Glints of sun among them, small, and more toward the far shore.
          float g = wNoise(p * 5.0 + vec2(t * 1.1, t * 0.5)) * wNoise(p * 1.3 - vec2(t * 0.4, -t * 0.3));
          float gl = max(fwidth(g), 1e-4);
          col = mix(col, vec3(1.0), smoothstep(0.7 - gl, 0.7 + gl, g) * smoothstep(0.45, 0.85, graze) * (1.0 - far));
          // Lapping at the shore: foam that breathes in and out, an ink line at
          // its edge, and a fainter line following it in.
          float wob = wNoise(p * 0.3) * 6.0;
          float lap = 0.9 + 0.5 * sin(t * 1.1 + wob), lap2 = 2.6 + 0.9 * sin(t * 1.1 - 1.3 + wob);
          float fw = max(fwidth(d), 1e-3);
          float foam = 1.0 - smoothstep(lap - fw, lap + fw, d);
          float line2 = (1.0 - smoothstep(fw * 0.5, fw * 1.6, abs(d - lap2))) * (0.45 + 0.35 * sin(t * 1.1 - 1.3 + wob));
          col = mix(col, uFoam, max(foam, line2) * (1.0 - far * 0.5));
          float ink = 1.0 - smoothstep(fw * 0.5, fw * 1.8, abs(d - lap));
          col = mix(col, uInk, ink * 0.5 * (1.0 - far * 0.7));
          diffuseColor.rgb = col;
        }`)},a.customProgramCacheKey=()=>`lake-water-${n.length}`,a}}function V1(t){return class{constructor(r=40){this.group=new t.g,this.group.name="Ripples";let e=new t.ut(.9,1,40).rotateX(-Math.PI/2);this.hole={uHole:{value:Array.from({length:t.Cs},()=>new t.L)},uHoleN:{value:0}},this.rings=Array.from({length:r},()=>{let a=new t.c(e,this.#t());return a.visible=!1,a.renderOrder=1,this.group.add(a),{mesh:a,t:0,life:1,r0:0,r1:0,alpha:0}}),this.next=0}emit(r,e,a,i=.15,n=1.6,s=1.8,l=.7){let o=this.rings[this.next];this.next=(this.next+1)%this.rings.length,Object.assign(o,{t:0,life:s,r0:i,r1:n,alpha:l}),o.mesh.position.set(r,e+.02,a),o.mesh.visible=!0}#t(){let r=new t.ot({color:t.fs.ripple,transparent:!0,depthWrite:!1});return r.onBeforeCompile=e=>{Object.assign(e.uniforms,this.hole),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vRipple;`).replace("#include <project_vertex>",`#include <project_vertex>
vRipple = (modelMatrix * vec4(transformed, 1.0)).xz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vRipple;
        uniform vec2 uHole[${t.Cs}];
        uniform int uHoleN;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          bool inHole = false;
          for (int i = 0, j = uHoleN - 1; i < ${t.Cs}; j = i++) {
            if (i >= uHoleN) break;
            vec2 a = uHole[i], b = uHole[j];
            if ((a.y > vRipple.y) != (b.y > vRipple.y) && vRipple.x < (b.x - a.x) * (vRipple.y - a.y) / (b.y - a.y) + a.x) inHole = !inHole;
          }
          if (inHole) discard;
        }`)},r.customProgramCacheKey=()=>"ripple-holed",r}update(r,e=[]){let a=e.find(i=>i.length>2&&i.length<=t.Cs)??[];a.forEach((i,n)=>this.hole.uHole.value[n].copy(i)),this.hole.uHoleN.value=a.length;for(let i of this.rings){if(!i.mesh.visible)continue;i.t+=r;let n=i.t/i.life;if(n>=1){i.mesh.visible=!1;continue}let s=i.r0+(i.r1-i.r0)*(1-(1-n)**2);i.mesh.scale.set(s,1,s),i.mesh.material.opacity=i.alpha*(1-n)**1.5}}}}function W1(t){return{spruce:{far:new t.K("#46705f"),snow:1,fill:.75,trunk:.45},larch:{far:new t.K("#76665d"),snow:.3,fill:.7,trunk:.45},pine:{far:new t.K("#3f6650"),snow:1,fill:.8,trunk:.5},birch:{far:new t.K("#7b675b"),snow:.25,fill:.6,trunk:.3}}}function X1(t){return function(e,a){let i=e.index?e.toNonIndexed():e,n=i.attributes.position,s=new Float32Array(n.count*3),l=new t.K;for(let o=0;o<n.count/3;o++){a(l,(n.getY(o*3)+n.getY(o*3+1)+n.getY(o*3+2))/3,o);for(let u=0;u<3;u++)l.toArray(s,(o*3+u)*3)}return i.setAttribute("color",new t.et(s,3)),i.computeVertexNormals(),i}}function Y1(t){return function(e,a,i,n,s,l,o){let u=new t.st(e,a,n,l,!0),f=u.attributes.position;for(let d=0;d<f.count;d++)if(f.getY(d)<-a/2+.01){let h=Math.atan2(f.getZ(d),f.getX(d)),p=1+.12*Math.sin(h*5+s*3);f.setX(d,f.getX(d)*p),f.setZ(d,f.getZ(d)*p),f.setY(d,f.getY(d)-.25*Math.abs(Math.sin(h*2.5+s)))}return u.rotateY(s),u.translate(0,i,0),t.Rs(u,(d,h,p)=>{let g=(h-(i-a/2))/a;o(d,g>.6||g>.3&&p%3==0,p)})}}function q1(t){return function(e){let a=[];if(!e){let s=new t.d(.22,.32,3,5,1,!0).translate(0,1.5,0);a.push(t.Rs(s,l=>l.copy(t.Ps)))}let i=e?(s,l,o)=>s.setRGB(+!!l,o%2,0):(s,l,o)=>s.copy(l?t.Ns:o%2?t.js:t.Ms);(e?[[2.7,7,4.6],[1.7,5.8,8.8]]:[[2.8,4.6,3.8],[2.1,4.4,7],[1.3,3.8,9.9]]).forEach(([s,l,o],u)=>a.push(t.zs(s,l,o,e?6:7,u*1.3,e?1:2,i)));let n=t.mt(a.map(s=>(s.deleteAttribute("uv"),s)));return e&&n.scale(1/2.7,1/t.Fs,1/2.7),n.computeBoundingSphere(),n}}function j1(t){return function(){let e=t.createToonMaterial({vertexColors:!0},{hatch:1}),a=e.onBeforeCompile,i=t.Ns.clone();return e.onBeforeCompile=(n,s)=>{a(n,s),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float aSnow;`).replace("#include <color_vertex>",`vColor = vec4(mix(instanceColor.rgb * (1.0 - 0.18 * color.g), vec3(${i.r}, ${i.g}, ${i.b}), color.r * aSnow), 1.0);`)},e.customProgramCacheKey=()=>"tree-far",e}}function $1(t){return async function(){let e=await t.loadGLTF("./models/trees/trees.glb"),a=Object.fromEntries(t.Is.map(n=>[n,[]])),i=new Map;e.scene.traverse(n=>{let s=n.isMesh&&n.name.match(/^(\w+)-(\w+)_lod(\d)$/);if(!s||!a[s[1]])return;let l=`${s[1]}-${s[2]}`;if(!i.has(l)){let h={};i.set(l,h),a[s[1]].push(h)}let o=n.geometry.index?n.geometry.toNonIndexed():n.geometry,u=o.attributes.color,f=new Float32Array(u.count*3);for(let h=0;h<u.count;h++)f.set([u.getX(h),u.getY(h),u.getZ(h)],h*3);let d=new t.z;d.setAttribute("position",o.attributes.position),d.setAttribute("color",new t.et(f,3)),d.computeVertexNormals(),d.computeBoundingBox(),i.get(l)[`lod${s[3]}`]=d});for(let n of Object.values(a))for(let s of n){let l=s.lod0.boundingBox;s.height=l.max.y,s.radius=Math.max(-l.min.x,l.max.x,-l.min.z,l.max.z)}return a}}function K1(t){return function(){let e=t.Bs(0);return Object.fromEntries(t.Is.map(a=>[a,[{lod0:e,lod1:e,height:t.Fs,radius:2.8}]]))}}function Z1(t){return{treeline:2350,spacing:10,density:.25,get clearings(){return[...t.serviceCentreLocations.map(r=>({x:r.x,z:r.z,r:110})),{x:t.hotSpringLocation.x,z:t.hotSpringLocation.z,r:t.hotSpringLocation.clearing}]}}}function Q1(t){return function(e){let a=e.map(i=>[i.points[0],i.points[i.points.length-1]]);return(i,n)=>{let s=1/0;for(let[l,o]of a){let u=o[0]-l[0],f=o[1]-l[1],d=((i-l[0])*u+(n-l[1])*f)/(u*u+f*f);d=Math.max(0,Math.min(1,d)),s=Math.min(s,Math.hypot(l[0]+u*d-i,l[1]+f*d-n))}return s}}}function J1(t){return function(e){let a=Math.hypot(e.x,e.z);return{north:a>1e-4?-e.z/a:0,steep:t.Js(a,.04,.2)}}}function tM(t){return function(e,a,{north:i,steep:n}){return t.MathUtils.lerp(.6,t.MathUtils.lerp(.2,1.5,t.Js(i,-.7,.5)),n)*(.35+.65*t.Js(t.Oa(e*.004+7,a*.004-3),.3,.7))}}function eM(t){return function(e,a,i,{north:n,steep:s},l){let o=1-t.Js(i,1380,1520),u=t.Js(i,1950,2250),f=Math.max(0,n)*s,d=[(.25+1.1*f+.5*o)*(1-.8*u),1,.05+1.3*u+l,.02+1.2*o*(1-f)].map((p,g)=>p*(.3+1.4*t.Oa(e*.005+g*31,a*.005-g*17))),h=t.ic(e*.37+1.9,a*1.1)*d.reduce((p,g)=>p+g);for(let p=0;p<d.length;p++)if((h-=d[p])<0)return p;return 1}}function aM(t){return function(e,a,i,{treeline:n,spacing:s=10,density:l=.5,clearings:o=[],area:u=null}){let f=t.Gs(i),d=new t.Vector3,h=Math.ceil(e.size/s),p=(M,E)=>Math.max(0,Math.ceil((M-E)/s)),g=(M,E)=>Math.min(h-1,Math.floor((M-E)/s)),[v,m,c,x]=u?[p(u[0],e.x0),p(u[1],e.z0),g(u[2],e.x0),g(u[3],e.z0)]:[0,0,h-1,h-1],T=[];for(let M=m;M<=x;M++){let E=e.z0+M*s;for(let y=v;y<=c;y++){let A=e.x0+y*s,w=A+(t.ic(A,E)-.5)*s*.9,b=E+(t.ic(E+3.3,A)-.5)*s*.9;if(!e.inside(w,b,30)||e.holeAt(w,b))continue;let S=e.heightAt(w,b),L=n+(t.Oa(w*.006,b*.006)-.5)*160;if(S>L)continue;let U=t.Js(S,L-120,L);if(t.ic(w*1.7,b)<U*.85||a.distAt(w,b)<t.Ks+t.ic(w,b*1.3)*6||f(w,b)<t.qs||(e.normalAt(w,b,d),d.y<.78)||t.Oa(w*.012+40,b*.012)<.42)continue;let G=t.Ys(d);if(t.ic(w+5.1,b*.7)>l*t.Xs(w,b,G)||o.some(W=>Math.hypot(w-W.x,b-W.z)<W.r))continue;let N=t.Zs(w,b,S,G,U);T.push(t.ec(M*h+y,w,b,(.75+t.ic(b,w*2.1)*.55)*(1-U*.4),N))}}return T}}function iM(t){return function(e,a,i){if(!i)return{trees:e,removed:[]};let n=i.removed instanceof Set?i.removed:new Set(i.removed||[]),s=[],l=[];for(let u of e)(n.has(u.id)?l:s).push(u);let o=new t.Vector3;return(i.added||[]).forEach(([u,f,d],h)=>{if(!a.inside(u,f)||a.holeAt(u,f))return;let p=t.Zs(u,f,a.heightAt(u,f),t.Ys(a.normalAt(u,f,o)),0);s.push(t.ec(-1-h,u,f,d,p))}),{trees:s,removed:l}}}function nM(t){return function(e,a,i,n,s){return{id:e,x:a,z:i,s:n,sp:s,v:t.ic(a*2.3,i+5.7),sy:n*(.9+t.ic(a+2,i)*.3),rot:t.ic(a,i+9)*Math.PI*2}}}function rM(t){return function(e,a,i,n=null){return t.$s(t.Qs(e,a,i,{...t.forestPlacementDefaults,density:n?.density??t.forestPlacementDefaults.density}),e,n).trees}}function sM(t){return function(e,a,i,n,{scale:s,cell:l,per:o=s*s,keepOff:u=[],room:f=12}){let d=2.8*(s-1),h=t.Gs(n),p=Math.ceil(a.size/l),g=new Map;for(let c of e){let x=Math.floor((c.z-a.z0)/l)*p+Math.floor((c.x-a.x0)/l);g.has(x)||g.set(x,[]),g.get(x).push(c)}let v=(c,x,T,M)=>{let E=Math.cos(c.yaw),y=Math.sin(c.yaw),A=x-c.x,w=T-c.z;return Math.abs(A*E-w*y)<c.hw+M&&Math.abs(A*y+w*E)<c.hd+M},m=[];for(let[c,x]of g){let T=a.x0+c%p*l,M=a.z0+Math.floor(c/p)*l;if(t.ic(T+1.7,M+4.1)*o>=x.length)continue;let E=T+t.ic(T,M)*l,y=M+t.ic(M+3.3,T)*l,A=null,w=1/0;for(let b of x){let S=Math.hypot(b.x-E,b.z-y);if(S>=w||i.distAt(b.x,b.z)<t.Ks+d||h(b.x,b.z)<t.qs+d)continue;let L=2.8*b.s*s+f;u.some(U=>v(U,b.x,b.z,L))||(A=b,w=S)}A&&m.push(t.ec(A.id,A.x,A.z,A.s*s,A.sp))}return m}}function lM(t){return function(e,a,{models:i=null,chunk:n=250,lodDistance:s=450,hiDistance:l=160,maxNearInstances:o=1/0}={}){if(o!==1/0&&(!Number.isInteger(o)||o<1))throw Error("Invalid near-tree budget");i??=t.Us();let u=t.Bs(1),f=t.createToonMaterial({vertexColors:!0},{hatch:1}),d=t.Vs(),h=t.Is.map(D=>i[D]),p=0;for(let D of h)for(let I of D)p+=I.lod0.attributes.position.count+I.lod1.attributes.position.count;let g=new t.xe(Number.isFinite(o)?o:2048,p,0,f),v=h.map(D=>D.map(I=>[g.addGeometry(I.lod0),g.addGeometry(I.lod1)]));g.castShadow=!0,g.receiveShadow=!1,g.frustumCulled=!1;let m=n,c=new Map,x=new Map,T=0,M=new t.Vector3(0,1,0),E=new t.T,y=new t.Vector3,A=new t.Vector3;for(let D of a){let I=h[D.sp],V=Math.floor(D.v*I.length)%I.length,tt=I[V],Z=t.Ls[t.Is[D.sp]];E.setFromAxisAngle(M,D.rot),A.set(D.x,e.heightAt(D.x,D.z)-.3,D.z);let lt=new t.ce().compose(A,E,y.set(D.s,D.sy,D.s)),ot=tt.radius*Z.fill*D.s,Y=new t.ce().compose(A,E,y.set(ot,tt.height*D.sy,ot)),Q=`${Math.floor(D.x/m)},${Math.floor(D.z/m)}`,at=c.get(Q);at||c.set(Q,at=[]),at.push({m:lt,fm:Y,pos:A.clone(),geo:v[D.sp][V],kind:Z});let gt=`${Math.floor(D.x/10)},${Math.floor(D.z/10)}`,pt=x.get(gt);pt||x.set(gt,pt=[]);let ut=tt.radius*D.s;T=Math.max(T,ut),pt.push({x:D.x,z:D.z,r:Z.trunk*D.s+.15,crown:ut,top:A.y+tt.height*D.sy})}let w=a.length,b=new t.g;b.add(g);let S=new t.K,L=D=>{let I=new t.z;for(let[tt,Z]of Object.entries(u.attributes))I.setAttribute(tt,Z);I.setAttribute("aSnow",new t.ve(Float32Array.from(D,tt=>tt.kind.snow),1)),I.boundingSphere=u.boundingSphere;let V=new t.ge(I,d,D.length);return D.forEach((tt,Z)=>{V.setMatrixAt(Z,tt.fm),V.setColorAt(Z,S.copy(tt.kind.far).multiplyScalar(.92+.16*t.ic(tt.pos.x,tt.pos.z*1.3)))}),V.castShadow=!1,V.receiveShadow=!1,V.computeBoundingSphere(),b.add(V),V},U=new Map;for(let[D,I]of c){let[V,tt]=D.split(",").map(Number),Z=new t.Vector3((V+.5)*m,0,(tt+.5)*m);Z.y=e.heightAt(Z.x,Z.z);let lt=`${Math.floor(V/4)},${Math.floor(tt/4)}`,ot=U.get(lt);ot||U.set(lt,ot={chunks:[],trees:[]}),ot.chunks.push({center:Z,trees:I,lo:L(I),ids:null,lods:null}),ot.trees.push(...I)}for(let[D,I]of U){let[V,tt]=D.split(",").map(Number);I.center=new t.Vector3((V+.5)*m*4,0,(tt+.5)*m*4),I.center.y=e.heightAt(I.center.x,I.center.z),I.lo=L(I.trees)}let G=s+m*4*.75;console.log(`forest: ${w} trees in ${c.size} chunks, ${U.size} far batches`);let N=(D,I)=>D<l?0:D>l+20?1:I,W=new Set;function J(D,I){let V=g.instanceCount+D.trees.length;V>g.maxInstanceCount&&g.setInstanceCount(Math.max(V,Math.ceil(g.maxInstanceCount*1.5))),D.ids=new Int32Array(D.trees.length),D.lods=new Uint8Array(D.trees.length),D.trees.forEach((tt,Z)=>{let lt=N(tt.pos.distanceTo(I),1);D.ids[Z]=g.addInstance(tt.geo[lt]),D.lods[Z]=lt,g.setMatrixAt(D.ids[Z],tt.m)}),W.add(D)}function z(D){for(let I of D.ids)g.deleteInstance(I);D.ids=D.lods=null,W.delete(D)}let K=new t.Vector3(1/0,0,0);return{group:b,count:w,farMeshes:[...U.values()].flatMap(D=>[D.lo,...D.chunks.map(I=>I.lo)]),update(D){let I=!1,V=[];for(let lt of U.values()){let ot=lt.center.distanceTo(D)>G;lt.lo.visible=ot;for(let Y of lt.chunks){let Q=Y.center.distanceTo(D);Y.lo.visible=!ot,!ot&&Q<s&&V.push({c:Y,distance:Q})}}Number.isFinite(o)&&V.sort((lt,ot)=>lt.distance-ot.distance);let tt=new Set,Z=o;for(let{c:lt}of V)lt.trees.length>Z||(tt.add(lt),Z-=lt.trees.length,lt.lo.visible=!1);for(let lt of W)tt.has(lt)||(z(lt),I=!0);for(let lt of tt)lt.ids||(J(lt,D),I=!0);if(!(!I&&K.distanceToSquared(D)<16)){K.copy(D);for(let lt of W)lt.trees.forEach((ot,Y)=>{let Q=N(ot.pos.distanceTo(D),lt.lods[Y]);Q!==lt.lods[Y]&&(lt.lods[Y]=Q,g.setGeometryIdAt(lt.ids[Y],ot.geo[Q]))})}},hit(D,I,V){let tt=Math.floor(D/10),Z=Math.floor(I/10);for(let lt=Z-1;lt<=Z+1;lt++)for(let ot=tt-1;ot<=tt+1;ot++){let Y=x.get(`${ot},${lt}`);if(Y)for(let Q of Y){let at=D-Q.x,gt=I-Q.z,pt=V+Q.r;if(at*at+gt*gt<pt*pt)return Q}}return null},hitCanopy(D,I,V){let tt=Math.floor(D/10),Z=Math.floor(I/10),lt=Math.ceil((T+V)/10);for(let ot=Z-lt;ot<=Z+lt;ot++)for(let Y=tt-lt;Y<=tt+lt;Y++){let Q=x.get(`${Y},${ot}`);if(Q)for(let at of Q){let gt=D-at.x,pt=I-at.z,ut=V+at.crown;if(gt*gt+pt*pt<ut*ut)return at}}return null}}}}function oM(t){return function(e,a){let i=Math.sin(e*12.9898+a*78.233)*43758.5453;return i-Math.floor(i)}}function uM(t){return function(e,a){let i=new t.d(.05,.05,1.8,5).translate(0,.9,0),n=new t.d(.07,.07,.45,5).translate(0,1.6,0),s=new Map;for(let f of a){let d=f.points,h=0;for(let p=0;p<d.length-1;p++){let g=d[p][0],v=d[p][1],m=d[p+1][0],c=d[p+1][1],x=Math.hypot(m-g,c-v),T=-(c-v)/x,M=(m-g)/x;for(let E=h;E<x;E+=35){let y=E/x,A=g+(m-g)*y,w=v+(c-v)*y;for(let b of[-1,1]){let S=A+T*b*18,L=w+M*b*18,U=t.pc[f.difficulty]||t.pc.intermediate;s.has(U)||s.set(U,[]),s.get(U).push([S,e.heightAt(S,L),L])}h=E+35-x}h<0&&(h=0)}}let l=new t.g,o=t.createToonMaterial({color:"#e9a23b"}),u=new t.ce;for(let[f,d]of s){let h=t.createToonMaterial({color:f}),p=new t.ge(i,o,d.length),g=new t.ge(n,h,d.length);d.forEach(([v,m,c],x)=>{u.makeTranslation(v,m-.1,c),p.setMatrixAt(x,u),g.setMatrixAt(x,u)}),p.computeBoundingSphere(),g.computeBoundingSphere(),l.add(p,g)}return l}}function fM(t){return function(e,{x:a,z:i,faceTo:n}){let s=new t.g;s.name="Onsen";let l=Math.atan2(n[0]-a,n[1]-i);s.rotation.y=l;let o=(y,A,w)=>{let b=1/0,S=Math.cos(l),L=Math.sin(l);for(let U=-w;U<=w;U+=w/4)for(let G=-w;G<=w;G+=w/4){if(U*U+G*G>w*w*1.05)continue;let N=y+U,W=A+G;b=Math.min(b,e.heightAt(a+N*S+W*L,i-N*L+W*S))}return b},u=o(0,0,t.qc/2)-.05;s.position.set(a,u,i),s.updateMatrixWorld(!0);let f=(y,A)=>new t.Vector3(y,0,A).applyMatrix4(s.matrixWorld),d=(y,A)=>new t.Vector3(y,0,A).transformDirection(s.matrixWorld),h=(y,A,w,b,S)=>{let L=f(y,A);return{kind:"onsen",x:L.x,z:L.z,yaw:l,hw:w,hd:b,top:u+S}},p=[h(0,0,t.qc*.48,t.qc*.48,1.7),h(t.Qc.x+.6,t.Qc.z,.86,1.16,t.Xc*.95)],g={uTime:{value:0},uFall:{value:new t.L},uDrift:{value:new t.L},uSoak:{value:new t.Vector3},uDeep:{value:new t.K(t.tl.deep)},uPale:{value:new t.K(t.tl.pale)},uFoam:{value:new t.K(t.tl.foam)}},v=d(0,1).multiplyScalar(.18);g.uDrift.value.set(v.x,v.z);let m=t.yl(s);s.add(m);let c=null,x=t.gl,T={group:s,footprints:p,waterY:u+t.Yc,seat:{x:0,z:0,dx:1,dz:0},exit:null,way:null,fall:null,floorAt:()=>null,near(y,A){return Math.hypot(y-a,A-i)<5.4},puff(y){c=y,x=0,m.visible=!0},update(y,A,w){g.uTime.value=A;let b=1-Math.exp(-y*2),S=g.uSoak.value;w?S.set(w.x,w.z,S.z+(1-S.z)*b):S.z-=S.z*b,m.visible&&=(x<t._l&&s.worldToLocal(m.material.uniforms.uOrigin.value.copy(c).add(t.vl)),x+=y,m.material.uniforms.uAge.value=x,x<t.gl)},ready:null},M=f(0,4.9),E=d(0,1);return T.exit={x:M.x,z:M.z,dx:E.x,dz:E.z},t.il(T,f(-1.6,0),d(1,0)),T.ready=Promise.all(["stone-arena","cave-rock"].map(y=>t.loadGLTF(`${t.Kc}${y}.glb`))).then(([y,A])=>{let w=t.al(y,[t.qc,t.Jc,t.qc]);s.add(t.ol(w));let b=o(t.Qc.x+.6,t.Qc.z,1.2)-.08-u,S=new t.ce().compose(new t.Vector3(t.Qc.x,b,t.Qc.z),new t.T().setFromAxisAngle(new t.Vector3(0,1,0),-Math.PI/2),new t.Vector3(t.Xc,t.Xc,t.Xc));s.add(t.ol(t.al(A,[1,1,1]).applyMatrix4(S)));let L=t.sl(w,t.qc/2,.05),U=t.ll(L),G=new t.Vector3;T.floorAt=(pt,ut)=>{s.worldToLocal(G.set(pt,0,ut));let Gt=L.at(G.x,G.z);return Gt<0?null:u+Gt};let N=(pt,ut)=>f(t.el.x,pt).setY(ut),W=f(t.el.x,t.el.shore),J=d(0,-1);T.way={shore:W.setY(e.heightAt(W.x,W.z)),stone:N(t.el.stone,u+L.at(t.el.x,t.el.stone)),water:N(t.el.water,u+L.at(t.el.x,t.el.water)),dx:J.x,dz:J.z};let z=new t.c(t.ul(U),t.fl(g));z.position.y=t.Yc,z.receiveShadow=!0,s.add(z);let K=U.radius(Math.PI);t.il(T,f(U.center.x-K+.55,U.center.y),d(1,0));let D=pt=>new t.Vector3(t.Zc.x,t.Zc.y+.012,pt).applyMatrix4(S),I=D(t.Zc.from),V=D(t.Zc.lip),tt=V.clone().sub(I).setY(0).normalize(),Z=[I,I.clone().lerp(V,.5),V],lt=V.y-.51,ot=Math.sqrt(2*lt/9.81);for(let pt=1;pt<=6;pt++){let ut=pt/6*ot;Z.push(V.clone().addScaledVector(tt,1.1*ut).add(new t.Vector3(0,-4.905*ut*ut,0)))}let Y=Z[Z.length-1],Q=Y.clone().applyMatrix4(s.matrixWorld);g.uFall.value.set(Q.x,Q.z),T.fall=Q;let at=new t.c(new t.tt(new t.Fe(Z,!1,"centripetal"),48,.1,8,!1),t.pl(g));at.castShadow=!0,s.add(at);let gt=t.ml(U,new t.L(Y.x,Y.z),g,s);s.add(gt)}),T}}function hM(t){return function(e,a,i){e.seat={x:a.x,z:a.z,dx:i.x,dz:i.z}}}function dM(t){return function(e,a){let i=null;e.scene.updateMatrixWorld(!0),e.scene.traverse(l=>{l.isMesh&&!i&&(i=l)});let n=i.geometry.clone().applyMatrix4(i.matrixWorld);n.computeBoundingBox();let s=n.boundingBox;return n.translate(-(s.min.x+s.max.x)/2,-s.min.y,-(s.min.z+s.max.z)/2).scale(...a),n.userData.map=i.material.map,n.userData.side=i.material.side,n}}function cM(t){return function(e){let a=new t.c(e,t.createToonMaterial({map:e.userData.map,side:e.userData.side}));return a.castShadow=!0,a.receiveShadow=!0,a}}function mM(t){return function(e,a,i){let n=Math.ceil(2*a/i),s=new Float32Array(n*n).fill(-1),l=e.attributes.position,o=e.index,u=o?o.count:l.count,f=new t.Vector3,d=new t.Vector3,h=new t.Vector3,p=v=>Math.floor((v+a)/i),g=(v,m,c)=>{if(v<0||m<0||v>=n||m>=n)return;let x=m*n+v;c>s[x]&&(s[x]=c)};for(let v=0;v<u;v+=3){f.fromBufferAttribute(l,o?o.getX(v):v),d.fromBufferAttribute(l,o?o.getX(v+1):v+1),h.fromBufferAttribute(l,o?o.getX(v+2):v+2);for(let E of[f,d,h])g(p(E.x),p(E.z),E.y);let m=(d.z-h.z)*(f.x-h.x)+(h.x-d.x)*(f.z-h.z);if(Math.abs(m)<1e-9)continue;let c=Math.max(0,p(Math.min(f.x,d.x,h.x))),x=Math.min(n-1,p(Math.max(f.x,d.x,h.x))),T=Math.max(0,p(Math.min(f.z,d.z,h.z))),M=Math.min(n-1,p(Math.max(f.z,d.z,h.z)));for(let E=T;E<=M;E++)for(let y=c;y<=x;y++){let A=(y+.5)*i-a,w=(E+.5)*i-a,b=((d.z-h.z)*(A-h.x)+(h.x-d.x)*(w-h.z))/m,S=((h.z-f.z)*(A-h.x)+(f.x-h.x)*(w-h.z))/m,L=1-b-S;b<-1e-4||S<-1e-4||L<-1e-4||g(y,E,b*f.y+S*d.y+L*h.y)}}return{at(v,m){let c=p(v),x=p(m);return c<0||x<0||c>=n||x>=n?-1:s[x*n+c]}}}}function gM(t){return function(e){let a=(p,g)=>e.at(p,g)>.67,i=0,n=0,s=0;for(let p=-7.2*.4;p<=t.qc*.4;p+=.1)for(let g=-7.2*.4;g<=t.qc*.4;g+=.1)Math.hypot(p,g)<t.qc*.4&&!a(p,g)&&(i+=p,n+=g,s++);let l=new t.L(i/s,n/s),o=t.qc*.38,u=[];for(let p=0;p<t.cl;p++){let g=p/t.cl*Math.PI*2,v=Math.cos(g),m=Math.sin(g),c=.3;for(;c<o&&!a(l.x+v*c,l.y+m*c);)c+=.03;u.push(c)}let f=(p,g)=>p[(g+t.cl)%t.cl],d=u.map((p,g)=>[-2,-1,0,1,2].map(v=>f(u,g+v)).sort((v,m)=>v-m)[2]),h=d.map((p,g)=>(f(d,g-1)+2*d[g]+f(d,g+1))/4);return{center:l,r:h,radius(p){let g=t.MathUtils.euclideanModulo(p,Math.PI*2)/(Math.PI*2)*t.cl,v=Math.floor(g);return t.MathUtils.lerp(f(h,v),f(h,v+1),g-v)}}}}function pM(t){return function(e){let a=[0,0,0],i=[e.r.reduce((o,u)=>o+u,0)/t.cl],n=[];a[0]=e.center.x,a[2]=e.center.y;for(let o=1;o<=14;o++){let u=1-(1-o/14)**1.6;for(let f=0;f<t.cl;f++){let d=f/t.cl*Math.PI*2,h=e.r[f]+t.$c;a.push(e.center.x+Math.cos(d)*h*u,0,e.center.y+Math.sin(d)*h*u),i.push((1-u)*h-t.$c)}}let s=(o,u)=>o===0?0:1+(o-1)*t.cl+u%t.cl;for(let o=0;o<t.cl;o++)n.push(0,s(1,o+1),s(1,o));for(let o=1;o<14;o++)for(let u=0;u<t.cl;u++){let f=s(o,u),d=s(o,u+1),h=s(o+1,u),p=s(o+1,u+1);n.push(f,d,h,d,p,h)}let l=new t.z;return l.setAttribute("position",new t.i(a,3)),l.setAttribute("normal",new t.i(a.map((o,u)=>+(u%3==1)),3)),l.setAttribute("shore",new t.i(i,1)),l.setIndex(n),l.computeBoundingSphere(),l}}function MM(t){return function(e){let a=t.createToonMaterial({color:"#ffffff"},{hatch:0}),i=a.onBeforeCompile;return a.onBeforeCompile=(n,s)=>{i(n,s),Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float shore;
varying float vShore;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vShore = shore;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
        varying float vShore;
        uniform float uTime;
        uniform vec2 uFall, uDrift;
        uniform vec3 uSoak, uDeep, uPale, uFoam;
        ${t.dl}`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          vec2 p = vTWorld.xz;
          vec2 d = p - uFall;
          float r = length(d);
          vec2 flow = d / max(r, 0.6) * 0.45 + uDrift;
          float ph = uTime * 0.16;
          float t0 = fract(ph), t1 = fract(ph + 0.5);
          vec2 q0 = (p - flow * t0 * 2.5) * 1.1, q1 = (p - flow * t1 * 2.5) * 1.1 + 17.3;
          float n0 = oNoise(q0 + oNoise(q0 * 0.5) * 1.6), n1 = oNoise(q1 + oNoise(q1 * 0.5) * 1.6);
          float n = mix(n0, n1, abs(1.0 - 2.0 * t0));
          vec3 col = mix(uDeep, uPale, smoothstep(0.6, 0.63, n));
          float foam = smoothstep(0.8, 0.83, n) * (1.0 - smoothstep(0.6, 2.4, r));
          // Rings from the landing, and round a soaking rider.
          float ring = smoothstep(0.82, 0.88, fract(r * 1.5 - uTime * 0.8)) * (1.0 - smoothstep(0.3, 2.0, r));
          float rs = length(p - uSoak.xy);
          float ring2 = smoothstep(0.84, 0.9, fract(rs * 2.2 - uTime * 0.45)) * (1.0 - smoothstep(0.25, 1.1, rs)) * step(0.32, rs) * uSoak.z;
          col = mix(col, uPale, max(ring, ring2));
          // White water where the stream lands, and foam along the shore.
          float wob = oNoise(p * 4.0 + uTime * 1.7) - 0.5;
          float splash = 1.0 - smoothstep(0.22, 0.3, r + wob * 0.18);
          float shoreF = 1.0 - smoothstep(0.05, 0.09, vShore + (oNoise(p * 2.6 + uTime * 0.25) - 0.5) * 0.12);
          col = mix(col, uFoam, max(max(foam, splash), shoreF));
          diffuseColor.rgb = col;
        }`)},a.customProgramCacheKey=()=>"onsen-water",a}}function vM(t){return function(e){return new t.Ze({uniforms:{...t.Je.clone(t.Y.fog),uTime:e.uTime,uPale:e.uPale,uFoam:e.uFoam,uLitTint:t.toonUniforms.uLitTint,uShadowTint:t.toonUniforms.uShadowTint},fog:!0,vertexShader:`
      #include <fog_pars_vertex>
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      #include <fog_pars_fragment>
      uniform float uTime;
      uniform vec3 uPale, uFoam, uLitTint, uShadowTint;
      varying vec2 vUv;
      ${t.dl}
      void main() {
        float n = oNoise(vec2(vUv.x * 14.0 - uTime * 5.0, vUv.y * 6.0));
        vec3 col = mix(uPale, uFoam, smoothstep(0.55, 0.6, n));
        // White where it pours off the lip and churns into the pool.
        col = mix(col, uFoam, smoothstep(0.85, 0.95, vUv.x));
        gl_FragColor = vec4(col * mix(uShadowTint, uLitTint, 0.8), 1.0);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`})}}function xM(t){return function(e,a,i,n){let s=[],l=t.xl(20261020),o=T=>{let M=l()*Math.PI*2,E=Math.sqrt(l())*e.radius(M)*T;return[e.center.x+Math.cos(M)*E,t.Yc,e.center.y+Math.sin(M)*E]};for(let T=0;T<28;T++)s.push([o(.85),5+l()*3,1.2+l()*.8,1+l()*.8,.32]);for(let T=0;T<10;T++)s.push([[a.x+(l()-.5)*.5,t.Yc,a.y+(l()-.5)*.5],3+l()*2,1.6+l(),.8+l()*.6,.4]);for(let T=0;T<12;T++){let M=o(.4);M[1]+=2.5+l()*2,s.push([M,12+l()*6,12+l()*4,3+l()*2.5,.26])}let u=[[-1,-1],[1,-1],[1,1],[-1,1]],f=[],d=[],h=[],p=[],g=[];s.forEach(([T,M,E,y,A],w)=>{let b=l();for(let L of u)f.push(...T),d.push(...L),h.push(b,M,E,y),p.push(A,l()*10);let S=w*4;g.push(S,S+1,S+2,S,S+2,S+3)});let v=new t.z;v.setAttribute("position",new t.i(f,3)),v.setAttribute("corner",new t.i(d,2)),v.setAttribute("seed",new t.i(h,4)),v.setAttribute("shape",new t.i(p,2)),v.setIndex(g),v.boundingSphere=new t.je(new t.Vector3(0,9,0),18);let m=t.nl.clone().applyQuaternion(n.quaternion.clone().invert()),c=new t.Ze({uniforms:{...t.Je.clone(t.Y.fog),uTime:i.uTime,uWind:{value:m},uShadowTint:t.toonUniforms.uShadowTint},fog:!0,transparent:!0,depthWrite:!1,vertexShader:`
      #include <fog_pars_vertex>
      attribute vec2 corner;
      attribute vec4 seed; // phase, life (s), rise (m), size (m)
      attribute vec2 shape; // opacity, a random offset for the blob's outline
      uniform float uTime;
      uniform vec3 uWind;
      varying vec2 vCorner;
      varying float vAlpha, vKey, vLife;
      void main() {
        float life = fract(uTime / seed.y + seed.x);
        vec3 c = position;
        c.y += seed.z * (1.0 - (1.0 - life) * (1.0 - life)); // quick off the water, slowing as it goes
        c += uWind * life * seed.y;
        c.x += sin(uTime * 0.7 + shape.y) * 0.15 * life;
        float size = seed.w * (0.35 + 0.65 * sqrt(life));
        vec4 mvPosition = modelViewMatrix * vec4(c, 1.0);
        mvPosition.xy += corner * size * 0.5;
        gl_Position = projectionMatrix * mvPosition;
        vCorner = corner;
        // Puffs thin out close to the camera, so steam never whites out the view from the water.
        vAlpha = shape.x * smoothstep(0.0, 0.12, life) * (1.0 - smoothstep(0.45, 1.0, life)) * smoothstep(1.5, 5.0, -mvPosition.z);
        vKey = shape.y;
        vLife = life;
        #include <fog_vertex>
      }`,fragmentShader:t.bl}),x=new t.c(v,c);return x.name="Steam",x.renderOrder=2,x}}function wM(t){return function(e){let a=t.xl(20261021),i=[[-1,-1],[1,-1],[1,1],[-1,1]],n=[],s=[],l=[],o=[],u=[];for(let g=0;g<26;g++){let v=a()*Math.PI*2,m=.2+a()*.45,c=[Math.cos(v)*m,-.35+a()*1.4,Math.sin(v)*m],x=[g<18?0:a()*.25,.8+a()*.4,.4+a()*.6,1.3+a()*.8],T=a()*10;for(let E of i)n.push(...c),s.push(...E),l.push(...x),o.push(T);let M=g*4;u.push(M,M+1,M+2,M,M+2,M+3)}let f=new t.z;f.setAttribute("position",new t.i(n,3)),f.setAttribute("corner",new t.i(s,2)),f.setAttribute("seed",new t.i(l,4)),f.setAttribute("key",new t.i(o,1)),f.setIndex(u);let d=t.nl.clone().applyQuaternion(e.quaternion.clone().invert()),h=new t.Ze({uniforms:{...t.Je.clone(t.Y.fog),uAge:{value:t.gl},uOrigin:{value:new t.Vector3},uWind:{value:d},uShadowTint:t.toonUniforms.uShadowTint},fog:!0,transparent:!0,depthWrite:!1,vertexShader:`
      #include <fog_pars_vertex>
      attribute vec2 corner;
      attribute vec4 seed; // delay (s), life (s), rise (m), size (m)
      attribute float key; // a random offset for the blob's outline
      uniform float uAge;
      uniform vec3 uOrigin, uWind;
      varying vec2 vCorner;
      varying float vAlpha, vKey, vLife;
      void main() {
        float t = uAge - seed.x;
        float life = clamp(t / seed.y, 0.0, 1.0);
        vec3 c = uOrigin + position * (1.0 + 0.5 * life); // spreading as it goes
        c.y += seed.z * (1.0 - (1.0 - life) * (1.0 - life));
        c += uWind * max(t, 0.0);
        float size = seed.w * (0.6 + 0.4 * sqrt(life));
        vec4 mvPosition = modelViewMatrix * vec4(c, 1.0);
        mvPosition.xy += corner * size * 0.5;
        gl_Position = projectionMatrix * mvPosition;
        vCorner = corner;
        // Full almost at once, so it hides the change, and thinning soon after;
        // thinner still near the camera, so it doesn't white out the view from the water.
        vAlpha = step(0.0, t) * smoothstep(0.0, 0.06, life) * (1.0 - smoothstep(0.35, 1.0, life)) * smoothstep(1.0, 2.4, -mvPosition.z);
        vKey = key;
        vLife = life;
        #include <fog_vertex>
      }`,fragmentShader:t.bl}),p=new t.c(f,h);return p.name="Puff",p.renderOrder=2,p.frustumCulled=!1,p.visible=!1,p}}function EM(t){return function(e){return()=>{e|=0,e=e+1831565813|0;let a=Math.imul(e^e>>>15,1|e);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}}function bM(t){return class{constructor(){this.root=new t.g,this.root.name="Truck",this.body=new t.g,this.root.add(this.body),this.wheels=[],this.dims=null,this.footprint={kind:"pickup",x:0,z:0,yaw:0,hw:0,hd:0},this.marks=[],this.exits=[],this.ready=t.loadGLTF(t.Sl).then(r=>this.#t(r)),this.lean={pitch:0,roll:0,vp:0,vr:0}}#t(r){let e=null;r.scene.updateMatrixWorld(!0),r.scene.traverse(v=>{v.isMesh&&!e&&(e=v)});let a=e.geometry.clone().applyMatrix4(e.matrixWorld);a.computeBoundingBox();let i=a.boundingBox,n=t.Cl/(i.max.z-i.min.z);a.translate(-(i.min.x+i.max.x)/2,-i.min.y,-(i.min.z+i.max.z)/2).scale(n,n,n),a.computeBoundingBox();let s=a.boundingBox.getSize(new t.Vector3),l=t.createToonMaterial({map:e.material.map,side:e.material.side},{rim:1}),o=t.Dl(a),u=(v,m,c)=>{let x=new t.c(m,l);return c&&x.position.copy(c).negate(),x.castShadow=!0,x.receiveShadow=!0,v.add(x),x};u(this.body,o.body);for(let v of o.wheels){let m=new t.g;m.position.copy(v.centre);let c=new t.g;m.add(c),u(c,v.spin,v.centre),v.fixed&&u(m,v.fixed,v.centre),this.root.add(m),this.wheels.push({steer:m,spin:c,front:v.centre.z>0})}let f=o.wheels.filter(v=>v.centre.z>0),d=o.wheels.filter(v=>v.centre.z<=0),h=(v,m)=>v.reduce((c,x)=>c+x.centre[m],0)/Math.max(1,v.length),p=o.wheels.length?h(o.wheels,"y"):.45;this.dims={length:s.z,height:s.y,halfWidth:o.bodyHalfWidth,halfLength:s.z/2,wheelbase:o.wheels.length===4?h(f,"z")-h(d,"z"):s.z*.62,axleZ:o.wheels.length===4?(h(f,"z")+h(d,"z"))/2:0,track:o.wheels.length===4?Math.abs(f[0].centre.x-f[1].centre.x):o.bodyHalfWidth*1.6,wheelRadius:p},this.body.position.z=this.dims.axleZ?-this.dims.axleZ:0;for(let v of this.wheels)v.steer.position.z-=this.dims.axleZ;this.footprint.hw=this.dims.halfWidth,this.footprint.hd=this.dims.halfLength;let g=this.dims;return this.marks=[-1,1].map(v=>({along:-g.wheelbase/2,left:v*g.track/2,width:.4})),this.exits=[[.4,g.halfWidth+.9],[.4,-g.halfWidth-.9],[-g.halfLength-1.2,0],[g.halfLength+1.2,0]].map(([v,m])=>({along:v,left:m})),this}update(r,e){this.root.position.copy(e.pos),this.root.quaternion.copy(e.quat);let a=this.lean;t.Tl(a,r,t.MathUtils.clamp(-e.accel*.006,-.06,.06),t.MathUtils.clamp(e.lateral*.008,-.07,.07)),this.body.rotation.set(a.pitch,0,a.roll);for(let i of this.wheels)i.front&&(i.steer.rotation.y=e.steer),i.spin.rotation.x=e.roll;this.footprint.x=e.pos.x,this.footprint.z=e.pos.z,this.footprint.yaw=e.yaw,this.footprint.top=e.pos.y+this.dims.height}}}function TM(t){return function(e,a,i,n){e.vp+=((i-e.pitch)*90-e.vp*12)*a,e.vr+=((n-e.roll)*90-e.vr*12)*a,e.pitch+=e.vp*a,e.roll+=e.vr*a}}function yM(t){return function(e,a,i){if(!i.length)return null;let n=new t.z;for(let[l,o]of Object.entries(e.attributes))n.setAttribute(l,o);let s=new Uint32Array(i.length*3);return i.forEach((l,o)=>s.set([a[l],a[l+1],a[l+2]],o*3)),n.setIndex(new t.et(s,1)),n}}function RM(t){return function(e){let a=e.attributes.position,i=e.index?e.index.array:Array.from({length:a.count},(M,E)=>E),n=a.count,s=new Int32Array(n),l=new Map;for(let M=0;M<n;M++){let E=`${a.getX(M).toFixed(4)},${a.getY(M).toFixed(4)},${a.getZ(M).toFixed(4)}`,y=l.get(E);s[M]=y??M,y===void 0&&l.set(E,M)}let o=Int32Array.from({length:n},(M,E)=>E),u=M=>{for(;o[M]!==M;)M=o[M]=o[o[M]];return M};for(let M=0;M<i.length;M+=3){let E=u(s[i[M]]);for(let y of[i[M+1],i[M+2]]){let A=u(s[y]);E!==A&&(o[A]=E)}}let f=new Map;for(let M=0;M<i.length;M+=3){let E=u(s[i[M]]),y=f.get(E);y||f.set(E,y={tris:[],box:new t.Ee}),y.tris.push(M);for(let A=0;A<3;A++)y.box.expandByPoint(new t.Vector3().fromBufferAttribute(a,i[M+A]))}let d=[...f.values()],h=new t.Vector3,p=new t.Vector3,g=d.filter(M=>(M.box.getSize(h),M.box.min.y<h.y*.1&&Math.abs(h.y-h.z)<h.y*.15&&h.x<h.y*.8&&h.y>.3)).sort((M,E)=>E.tris.length-M.tris.length).slice(0,4),v=d.reduce((M,E)=>E.tris.length>M.tris.length?E:M),m=Math.max(-v.box.min.x,v.box.max.x);if(g.length!==4)return console.warn(`Truck: found ${g.length} tyres, not 4; the wheels won't turn.`),{body:e,wheels:[],bodyHalfWidth:m};let c=g.map(M=>({c:M,centre:M.box.getCenter(new t.Vector3),r:M.box.getSize(h).y/2,spin:[],fixed:[]})),x=[];for(let M of d){M.box.getCenter(p);let E=c.find(y=>y.c===M||Math.sign(p.x)===Math.sign(y.centre.x)&&Math.abs(p.x)>Math.abs(y.centre.x)-y.r*.8&&M.box.min.y>y.centre.y-y.r-.01&&M.box.max.y<y.centre.y+y.r+.01&&M.box.min.z>y.centre.z-y.r-.01&&M.box.max.z<y.centre.z+y.r+.01);E?E.c===M||Math.hypot(p.y-E.centre.y,p.z-E.centre.z)<E.r*.15?E.spin.push(...M.tris):E.fixed.push(...M.tris):x.push(...M.tris)}let T=M=>t.El(e,i,M);return{body:T(x),wheels:c.map(M=>({centre:M.centre,spin:T(M.spin),fixed:T(M.fixed)})),bodyHalfWidth:m}}}function AM(t){return{seat:[-.06,.281],grips:[.135,.375,.155],boards:[.02,.107,.135],skis:[.275,.17],track:[-.195,.102]}}function PM(t){return class{constructor(){this.root=new t.g,this.root.name="Snowmobile",this.body=new t.g,this.root.add(this.body),this.saddle=new t.x,this.saddle.rotation.y=Math.PI,this.body.add(this.saddle),this.skis=[],this.seat=null,this.dims=null,this.footprint={kind:"snowmobile",x:0,z:0,yaw:0,hw:0,hd:0},this.marks=[],this.exits=[],this.lean={pitch:0,roll:0,vp:0,vr:0},this.ready=t.loadGLTF(t.Ol).then(r=>this.#t(r))}#t(r){let e=null;r.scene.updateMatrixWorld(!0),r.scene.traverse(m=>{m.isMesh&&!e&&(e=m)});let a=e.geometry.clone().applyMatrix4(e.matrixWorld);a.computeBoundingBox();let i=a.boundingBox,n=t.kl/(i.max.x-i.min.x);a.translate(-(i.min.x+i.max.x)/2,-i.min.y,-(i.min.z+i.max.z)/2).rotateY(-Math.PI/2).scale(n,n,n),a.computeBoundingBox();let s=a.boundingBox.getSize(new t.Vector3),l=(m,c,x)=>new t.Vector3(-x*n,c*n,m*n),o=t.Al.skis[0]*n,u=t.Al.track[0]*n,f=this.dims={length:s.z,height:s.y,halfWidth:s.x/2,halfLength:s.z/2,wheelbase:o-u,axleZ:(o+u)/2,track:2*t.Al.skis[1]*n,wheelRadius:.2},d=t.createToonMaterial({map:e.material.map,side:e.material.side},{rim:1}),h=t.Ml(a,n),p=(m,c,x)=>{let T=new t.c(c,d);return x&&T.position.copy(x).negate(),T.castShadow=!0,T.receiveShadow=!0,m.add(T),T};p(this.body,h.body),this.body.position.z=-f.axleZ,h.skis.forEach((m,c)=>{if(!m)return;let x=l(t.Al.skis[0],0,c?t.Al.skis[1]:-t.Al.skis[1]),T=new t.g;T.position.copy(x),T.position.z-=f.axleZ,p(T,m,x),this.root.add(T),this.skis.push(T)});let g=([m,c,x])=>[l(m,c,-x),l(m,c,x)];this.seat={hips:l(t.Al.seat[0],t.Al.seat[1],0),feet:g(t.Al.boards),grips:g(t.Al.grips)},this.footprint.hw=f.halfWidth,this.footprint.hd=f.halfLength,this.marks=[{along:-f.wheelbase/2,left:0,width:2*t.Al.track[1]*n},...[-1,1].map(m=>({along:f.wheelbase/2,left:m*f.track/2,width:.12}))];let v=t.Al.seat[0]*n-f.axleZ;return this.exits=[[v,f.halfWidth+.7],[v,-f.halfWidth-.7],[-f.halfLength-1,0],[f.halfLength+1,0]].map(([m,c])=>({along:m,left:c})),this}update(r,e){this.root.position.copy(e.pos),this.root.quaternion.copy(e.quat),t.Tl(this.lean,r,t.MathUtils.clamp(-e.accel*.008,-.07,.07),t.MathUtils.clamp(e.lateral*.005,-.05,.05)),this.body.rotation.set(this.lean.pitch,0,this.lean.roll);for(let a of this.skis)a.rotation.y=e.steer;this.footprint.x=e.pos.x,this.footprint.z=e.pos.z,this.footprint.yaw=e.yaw,this.footprint.top=e.pos.y+this.dims.height}}}function CM(t){return function(e,a){let i=e.attributes.position,n=e.index?e.index.array:Array.from({length:i.count},(u,f)=>f),s=u=>i.getZ(u)>.17*a&&i.getY(u)<.12*a&&Math.abs(i.getX(u))>.105*a,l=[],o=[[],[]];for(let u=0;u<n.length;u+=3)s(n[u])&&s(n[u+1])&&s(n[u+2])?o[i.getX(n[u])>0?0:1].push(u):l.push(u);return{body:t.El(e,n,l),skis:o.map(u=>t.El(e,n,u))}}}function LM(t){return{engine:6.5,topSpeed:30,reverse:3.5,reverseSpeed:7,brake:9,maxSpeed:40,grip:.55,steer:.6,drag:[.03,.08],air:.0016}}function DM(t){return{engine:16,topSpeed:66,reverse:2,reverseSpeed:4,brake:6,maxSpeed:200/3.6,grip:.7,steer:.5,drag:[.025,.04],air:6e-4}}function UM(t){return(r,e)=>Math.sign(r)*Math.max(0,Math.abs(r)-e)}function IM(t){return class{constructor({hf:r,piste:e,forest:a,obstacles:i=[],lakes:n=[],dims:s,handling:l=t.Fl}){this.hf=r,this.piste=e,this.forest=a,this.obstacles=i,this.lakes=n,this.dims=s,this.h=l,this.pos=new t.Vector3,this.prev=new t.Vector3,this.vel=new t.Vector3,this.normal=new t.Vector3(0,1,0),this.quat=new t.T,this.yaw=0,this.yawRate=0,this.steer=0,this.roll=0,this.accel=0,this.lateral=0,this.slip=0,this.events=[]}reset(r,e,a){this.pos.set(r,0,e),this.vel.set(0,0,0),this.yaw=a,this.yawRate=this.steer=this.accel=this.lateral=this.slip=0,this.#t(1)}get speed(){return this.vel.length()}forward(r=new t.Vector3){return r.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}left(r=new t.Vector3){return r.set(-Math.cos(this.yaw),0,Math.sin(this.yaw))}step(r,e){let{dims:a,h:i}=this;this.prev.copy(this.pos);let n=this.forward(t.Ll),s=this.left(t.Rl),l=this.normal,o=this.vel.dot(n),u=this.vel.dot(s),f=o,d=t.Nl*l.y*l.dot(n),h=t.Nl*l.y*l.dot(s),p=i.grip*t.Nl*l.y,g=this.piste.distAt(this.pos.x,this.pos.z)<19,v=0,m=0,{throttle:c,reverse:x,handbrake:T}=e;c&&!x?o<-.3?m=i.brake:v=i.engine*Math.max(0,1-o/i.topSpeed):x&&!c?o>.3?m=i.brake:v=-i.reverse*Math.max(0,1+o/i.reverseSpeed):m=c&&x||Math.abs(o)<1.5?i.brake:.6,T&&(m=Math.max(m,4)),v=t.MathUtils.clamp(v,-p,p),m=Math.min(m,p);let M=i.drag[+!g]*t.Nl*l.y+i.air*o*o;o+=(d+v)*r,o=t.Ul(o,(m+M)*r);let E=Math.abs(o),y=e.steer*i.steer/(1+E*E/180);this.steer+=(y-this.steer)*(1-Math.exp(-r*8));let A=p*(T?2.2:1.25)/Math.max(E,2),w=o*Math.tan(this.steer)/a.wheelbase;T&&(w*=1.5),this.yawRate=t.MathUtils.clamp(w,-A,A),this.yaw+=this.yawRate*r,u=t.Ul(u+h*r,p*(T?.35:1.2)*r),this.slip=Math.abs(u),this.vel.copy(n).multiplyScalar(o).addScaledVector(s,u),this.vel.length()>i.maxSpeed&&this.vel.setLength(i.maxSpeed),this.pos.x+=this.vel.x*r,this.pos.z+=this.vel.z*r,this.#a(),this.#t(r);let b=this.vel.dot(n);this.accel+=((b-f)/r-this.accel)*(1-Math.exp(-r*10)),this.lateral+=(b*this.yawRate-this.lateral)*(1-Math.exp(-r*10)),this.roll+=b*r/a.wheelRadius}#t(r){let{hf:e,dims:a,pos:i}=this,n=this.forward(t.Ll),s=this.left(t.Rl),l=a.wheelbase/2,o=a.track/2,u=(m,c)=>e.heightAt(i.x+n.x*l*m+s.x*o*c,i.z+n.z*l*m+s.z*o*c),f=u(1,1),d=u(1,-1),h=u(-1,1),p=u(-1,-1);i.y=(f+d+h+p)/4;let g=(f+d-h-p)/(2*a.wheelbase),v=(f+h-d-p)/(2*a.track);t.zl.set(0,1,0).addScaledVector(n,-g).addScaledVector(s,-v).normalize(),this.normal.lerp(t.zl,1-Math.exp(-r*25)).normalize(),t.Hl.copy(n).addScaledVector(this.normal,-n.dot(this.normal)).normalize(),t.Vl.crossVectors(this.normal,t.Hl),this.quat.setFromRotationMatrix(t.Bl.makeBasis(t.Vl,this.normal,t.Hl))}#a(){let{hf:r,pos:e,vel:a,prev:i,dims:n}=this,s=r.half-t.Pl-n.halfLength;for(let[p,g]of[["x",r.center[0]],["z",r.center[1]]]){let v=e[p]-g;Math.abs(v)<=s||(e[p]=g+Math.sign(v)*s,a[p]*v>0&&(a[p]=0))}let l=this.forward(t.Ll),o=this.left(t.Rl),u=n.wheelbase/2,f=n.track/2;for(let[p,g]of[[1,1],[1,-1],[-1,1],[-1,-1]])if(r.holeAt(e.x+l.x*u*p+o.x*f*g,e.z+l.z*u*p+o.z*f*g)){e.copy(i),a.set(0,0,0);break}let d=n.halfWidth,h=n.halfLength-d;for(let p of[-1,0,1]){let g=()=>e.x+l.x*h*p,v=()=>e.z+l.z*h*p;for(let c of this.obstacles){let x=Math.cos(c.yaw),T=Math.sin(c.yaw),M=g()-c.x,E=v()-c.z,y=M*x-E*T,A=M*T+E*x,w=c.hw+d-Math.abs(y),b=c.hd+d-Math.abs(A);if(w<=0||b<=0)continue;let[S,L,U]=w<b?[x*Math.sign(y),-T*Math.sign(y),w]:[T*Math.sign(A),x*Math.sign(A),b];this.#e(S,L,U,"wall")}for(let c=0;c<3;c++){let x=this.forest.hit(g(),v(),d);if(!x)break;let T=g()-x.x,M=v()-x.z,E=Math.hypot(T,M)||1;T/=E,M/=E,this.#e(T,M,d+x.r-E+.01,"tree")}let m=t.nearestLakeShore(this.lakes,g(),v(),d+1);m&&m.d<d&&this.#e(m.nx,m.nz,d-m.d,"wall")}}#e(r,e,a,i){this.pos.x+=r*a,this.pos.z+=e*a;let n=this.vel.x*r+this.vel.z*e;n>=0||(this.vel.x-=r*n*1.25,this.vel.z-=e*n*1.25,this.vel.multiplyScalar(.85),n<-5&&this.events.push({type:"crash",reason:i,speed:-n}))}}}function SM(t){return class{constructor(){this.root=new t.g,this.root.name="Jetson",this.body=new t.g,this.root.add(this.body),this.saddle=new t.x,this.saddle.rotation.y=Math.PI,this.body.add(this.saddle),this.rotors=[],this.sticks=[],this.seat=null,this.dims=null,this.footprint={kind:"jetson",x:0,z:0,yaw:0,hw:0,hd:0},this.marks=[],this.exits=[],this.t=0,this.hover=0,this.ready=t.loadGLTF(t.Gl).then(r=>this.#t(r))}#t(r){r.scene.updateMatrixWorld(!0);let e=new Map,a=null;r.scene.traverse(x=>{x.isMesh&&(e.set(x.name,x.geometry.clone().applyMatrix4(x.matrixWorld)),a||=x.material)});for(let x of[...t.ql,...t.Jl])if(!e.has(x))throw Error(`jetson-one.glb has no ${x}`);let i=new t.Ee;for(let x of e.values())x.computeBoundingBox(),i.union(x.boundingBox);let n=t.Kl/(i.max.x-i.min.x),s=(t.Yl.pads[0]+t.Yl.pads[1])/2,l=(x,T,M)=>new t.Vector3(-M*n,T*n,(x-s)*n),o=x=>x.translate(-s,0,0).rotateY(-Math.PI/2).scale(n,n,n);for(let x of e.values())o(x);let u=t.createToonMaterial({map:a.map,side:a.side},{rim:1}),f=x=>{let T=new t.c(x,u);return T.castShadow=!0,T.receiveShadow=!0,T},d=(x,T)=>{let M=new t.g;return M.position.copy(T),M.add(f(x.translate(-T.x,-T.y,-T.z))),this.body.add(M),M};this.body.add(f(t.mt([...e].filter(([x])=>!t.ql.includes(x)&&!t.Jl.includes(x)).map(([,x])=>x))));let h=t.$l();for(let x of t.ql){let T=e.get(x),{tips:M,y:E}=t.Ql(T),y=new t.Vector3((M[0].x+M[1].x)/2,E,(M[0].z+M[1].z)/2),A=M[0].distanceTo(M[1])/2,w={pivot:d(T,y),hub:y,radius:A,dir:1},b=new t.B(A*1.02,40).rotateX(-Math.PI/2);b.deleteAttribute("normal"),w.disc=new t.c(b,new t.ot({map:h,transparent:!0,opacity:0,depthWrite:!1,side:2})),w.disc.position.copy(y),w.disc.renderOrder=1,this.body.add(w.disc),this.rotors.push(w)}for(let x of this.rotors){let T=this.rotors.find(M=>M!==x&&Math.hypot(M.hub.x-x.hub.x,M.hub.z-x.hub.z)<x.radius);x.dir=(!T||x.hub.y>T.hub.y?1:-1)*Math.sign(x.hub.x*x.hub.z||1)}let p=t.Yl.sticks;this.sticks=t.Jl.map((x,T)=>d(e.get(x),l(p[0],p[1],T?p[3]:-p[3]))),this.handles=this.sticks.map(()=>new t.Vector3(0,(p[2]-p[1])*n,0));let g=t.Yl.pads,v=this.dims={length:(i.max.x-i.min.x)*n,height:i.max.y*n,halfWidth:(i.max.z-i.min.z)*n/2,halfLength:(i.max.x-i.min.x)*n/2,wheelbase:(g[0]-g[1])*n,track:2*g[2]*n},m=([x,T,M])=>[l(x,T,-M),l(x,T,M)];this.seat={hips:l(t.Yl.seat[0],t.Yl.seat[1],0),feet:m(t.Yl.feet),grips:this.sticks.map((x,T)=>this.handles[T].clone().add(x.position)),kneeOut:.05},this.footprint.hw=v.halfWidth,this.footprint.hd=v.halfLength;let c=this.rotors.reduce((x,T)=>x+T.hub.z,0)/this.rotors.length;return this.exits=[[c,v.halfWidth+.6],[c,-v.halfWidth-.6],[-v.halfLength-1,0],[v.halfLength+1,0]].map(([x,T])=>({along:x,left:T})),this}update(r,e){this.t+=r,this.root.position.copy(e.pos),this.root.quaternion.copy(e.quat),this.hover+=(+!e.landed-this.hover)*(1-Math.exp(-r*3)),this.body.position.y=Math.sin(this.t*1.7)*.03*this.hover,this.body.rotation.z=Math.sin(this.t*1.1+1)*.006*this.hover;let a=e.spool*(24+8*e.load),i=t.MathUtils.smoothstep(e.spool,.25,.9)*(.2+.08*e.load);for(let s of this.rotors)s.pivot.rotation.y+=a*s.dir*r,s.disc.material.opacity=i,s.disc.visible=i>.005;let n=e.stick;this.sticks[0].rotation.set(n.lift*t.Xl,0,0),this.sticks[1].rotation.set(n.pitch*t.Xl,0,-n.turn*t.Xl),this.sticks.forEach((s,l)=>this.seat.grips[l].copy(this.handles[l]).applyEuler(s.rotation).add(s.position)),this.footprint.x=e.pos.x,this.footprint.z=e.pos.z,this.footprint.yaw=e.yaw}}}function NM(t){return function(e){let a=e.attributes.position,i=new t.Vector3,n=e.boundingBox.getCenter(new t.Vector3),s=u=>{let f=null,d=-1;for(let h=0;h<a.count;h++){i.fromBufferAttribute(a,h);let p=Math.hypot(i.x-u.x,i.z-u.z);p>d&&(d=p,f=i.clone())}return f},l=s(n),o=s(l);return{tips:[l,o],y:(l.y+o.y)/2}}}function _M(t){return function(){let e=document.createElement("canvas");e.width=e.height=128;let a=e.getContext("2d"),i=a.createRadialGradient(64,64,7.68,64,64,64);i.addColorStop(0,"rgba(40,44,50,0)"),i.addColorStop(.25,"rgba(40,44,50,0.35)"),i.addColorStop(.8,"rgba(40,44,50,0.8)"),i.addColorStop(.95,"rgba(40,44,50,1)"),i.addColorStop(1,"rgba(40,44,50,0)"),a.fillStyle=i,a.fillRect(0,0,128,128);let n=new t.qe(e);return n.colorSpace=t.he,n}}function OM(t){return{topSpeed:50,backSpeed:12,tilt:.5,push:12,turnPush:16,yawRate:2,climb:15,sink:10,lift:[12,10],clearance:1.2,ceiling:3300,spool:.8,drag:[.04,.0035]}}function FM(t){return(r,e,a,i)=>r+(e-r)*(1-Math.exp(-i*a))}function zM(t){return class{constructor({hf:r,forest:e,obstacles:a=[],dims:i,handling:n=t.tu}){this.hf=r,this.forest=e,this.obstacles=a,this.dims=i,this.h=n,this.pos=new t.Vector3,this.prev=new t.Vector3,this.vel=new t.Vector3,this.normal=new t.Vector3(0,1,0),this.quat=new t.T,this.yaw=0,this.yawRate=0,this.pitch=0,this.bank=0,this.steer=0,this.accel=0,this.lateral=0,this.spool=0,this.load=0,this.stick={pitch:0,turn:0,lift:0},this.landed=!0,this.agl=0,this.events=[]}reset(r,e,a){this.pos.set(r,0,e),this.vel.set(0,0,0),this.yaw=a,this.yawRate=this.pitch=this.bank=this.steer=this.accel=this.lateral=0,this.landed=!0,this.#e(1),this.quat.copy(t.uu)}get speed(){return Math.hypot(this.vel.x,this.vel.z)}get canExit(){return this.landed||this.agl<this.h.clearance+.4&&this.speed<2}forward(r=new t.Vector3){return r.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}left(r=new t.Vector3){return r.set(-Math.cos(this.yaw),0,Math.sin(this.yaw))}step(r,e){let a=this.h;this.prev.copy(this.pos),this.spool=Math.min(1,this.spool+r/a.spool);let i=e.throttle&&!e.reverse?1:e.reverse&&!e.throttle?-1:0,n=e.climb&&!e.sink?1:e.sink&&!e.climb?-1:0;if(this.stick.pitch=t.mu(this.stick.pitch,i,12,r),this.stick.turn=t.mu(this.stick.turn,e.steer,12,r),this.stick.lift=t.mu(this.stick.lift,n,12,r),this.steer=this.stick.turn,this.landed){this.vel.set(0,0,0),this.yawRate=this.accel=this.lateral=0,this.pitch=t.mu(this.pitch,0,6,r),this.bank=t.mu(this.bank,0,6,r),this.load=t.mu(this.load,0,4,r),this.#e(r),this.quat.slerp(t.uu,1-Math.exp(-r*10)),n>0&&this.spool>.85&&(this.landed=!1,this.vel.y=1,this.events.push({type:"takeoff"}));return}let s=this.forward(t.iu),l=this.left(t.au),o=this.vel.x*s.x+this.vel.z*s.z,u=this.vel.x*l.x+this.vel.z*l.z,f=o,d=Math.hypot(o,u),h=e.steer*a.yawRate/(1+d/10);this.yawRate=t.mu(this.yawRate,h,6,r),this.yaw+=this.yawRate*r;let p=t.hu(((i>0?a.topSpeed+4:i<0?o>.5?-a.topSpeed:-a.backSpeed:0)-o)*.12,-a.tilt,a.tilt),g=t.hu(-u*.15,-a.tilt,a.tilt);this.pitch=t.mu(this.pitch,p,6,r),this.bank=t.mu(this.bank,g,6,r);let v=a.drag[0]+a.drag[1]*d,m=Math.tan(a.tilt);o+=(a.push*Math.tan(this.pitch)/m-v*o)*r,u+=(a.turnPush*Math.tan(this.bank)/m-v*u)*r;let c=this.#a();this.agl=this.pos.y-c;let{x,z:T}=this.pos,{x:M,z:E}=this.vel,y=N=>this.hf.heightAt(x+M*N,T+E*N),A=this.pos.y-Math.max(c,y(1),y(2),y(3)),w=a.clearance+d*.3,b=n*(n>0?a.climb:a.sink);n>=0&&A<w?b=Math.max(b,Math.min(30,(w-A)*2)):n<0&&(b=Math.max(b,-Math.max(1,this.agl*1.5)));let[S,L]=a.lift;this.vel.y+=t.hu(b-this.vel.y,-L*r,(b>a.climb?S*1.6:S)*r),this.vel.x=s.x*o+l.x*u,this.vel.z=s.z*o+l.z*u;let U=Math.hypot(this.vel.x,this.vel.z)/a.topSpeed;U>1&&(this.vel.x/=U,this.vel.z/=U),this.pos.addScaledVector(this.vel,r),this.pos.y>a.ceiling&&(this.pos.y=a.ceiling,this.vel.y=Math.min(0,this.vel.y)),this.#i(),this.#t(n);let G=this.vel.dot(s);this.accel=t.mu(this.accel,(G-f)/r,10,r),this.lateral=t.mu(this.lateral,G*this.yawRate,10,r),this.load=t.mu(this.load,t.hu(Math.abs(i)*.5+Math.max(0,n)*.7+Math.abs(e.steer)*.2,0,1),4,r),t.du.set(this.pitch,this.yaw+Math.PI,-this.bank),this.quat.slerp(t.uu.setFromEuler(t.du),1-Math.exp(-r*20))}#t(r){let{pos:e,vel:a}=this,i=this.#a();if(this.agl=e.y-i,this.agl>0)return;e.y=i;let n=-a.y,s=this.speed;n>4||s>9?(this.events.push({type:"crash",reason:"ground",speed:Math.max(n,s)}),a.y=Math.max(1.5,n*.3),a.x*=.6,a.z*=.6):r<0&&s<4?(this.landed=!0,a.set(0,0,0),this.events.push({type:"landed"})):a.y=Math.max(a.y,0)}#a(){let{hf:r,dims:e,pos:a}=this,i=this.forward(t.fu),n=this.left(t.pu),s=e.wheelbase/2,l=e.track/2,o=-1/0;for(let[u,f]of[[1,1],[1,-1],[-1,1],[-1,-1]])o=Math.max(o,r.heightAt(a.x+i.x*s*u+n.x*l*f,a.z+i.z*s*u+n.z*l*f));return o}#e(r){let{hf:e,dims:a,pos:i}=this,n=this.forward(t.fu),s=this.left(t.pu),l=a.wheelbase/2,o=a.track/2,u=(m,c)=>e.heightAt(i.x+n.x*l*m+s.x*o*c,i.z+n.z*l*m+s.z*o*c),f=u(1,1),d=u(1,-1),h=u(-1,1),p=u(-1,-1);i.y=(f+d+h+p)/4,this.agl=0;let g=(f+d-h-p)/(2*a.wheelbase),v=(f+h-d-p)/(2*a.track);t.ou.set(0,1,0).addScaledVector(n,-g).addScaledVector(s,-v).normalize(),this.normal.lerp(t.ou,1-Math.exp(-r*25)).normalize(),t.lu.copy(n).addScaledVector(this.normal,-n.dot(this.normal)).normalize(),t.cu.crossVectors(this.normal,t.lu),t.uu.setFromRotationMatrix(t.su.makeBasis(t.cu,this.normal,t.lu))}#i(){let{hf:r,pos:e,vel:a,prev:i,dims:n}=this,s=r.half-t.eu-n.halfLength;for(let[u,f]of[["x",r.center[0]],["z",r.center[1]]]){let d=e[u]-f;Math.abs(d)<=s||(e[u]=f+Math.sign(d)*s,a[u]*d>0&&(a[u]=0))}r.holeAt(e.x,e.z)&&(e.copy(i),a.set(0,0,0));let l=n.halfWidth,o=r.heightAt(e.x,e.z);for(let u of this.obstacles){if(e.y>(u.top??o+t.nu))continue;let f=Math.cos(u.yaw),d=Math.sin(u.yaw),h=e.x-u.x,p=e.z-u.z,g=h*f-p*d,v=h*d+p*f,m=u.hw+l-Math.abs(g),c=u.hd+l-Math.abs(v);if(m<=0||c<=0)continue;let[x,T,M]=m<c?[f*Math.sign(g),-d*Math.sign(g),m]:[d*Math.sign(v),f*Math.sign(v),c];this.#n(x,T,M,"wall")}if(e.y-o<t.ru*1.4)for(let u=0;u<3;u++){let f=this.forest.hit(e.x,e.z,l);if(!f||e.y>(f.top??o+t.ru))break;let d=e.x-f.x,h=e.z-f.z,p=Math.hypot(d,h)||1;d/=p,h/=p,this.#n(d,h,l+f.r-p+.01,"tree")}}#n(r,e,a,i){this.pos.x+=r*a,this.pos.z+=e*a;let n=this.vel.x*r+this.vel.z*e;n>=0||(this.vel.x-=r*n*1.3,this.vel.z-=e*n*1.3,this.vel.multiplyScalar(.8),n<-4&&this.events.push({type:"crash",reason:i,speed:-n}))}land(){this.landed=!0,this.vel.set(0,0,0),this.#e(1),this.quat.copy(t.uu)}coast(r){this.spool=Math.max(0,this.spool-r/(this.h.spool*2)),this.load=t.mu(this.load,0,4,r),this.stick.pitch=t.mu(this.stick.pitch,0,8,r),this.stick.turn=t.mu(this.stick.turn,0,8,r),this.stick.lift=t.mu(this.stick.lift,0,8,r)}}}function kM(t){return function(e){return{half:t.vu/2*(e<.45?.72+.28*Math.sin(e/.45*Math.PI/2):Math.max(0,1-((e-.45)/.55)**2)**.75),keel:-.17+.2*Math.max(0,(e-.62)/.38)**2+.05*Math.max(0,(.2-e)/.2)**2,sheer:.36+.16*Math.max(0,(e-.45)/.55)**2+.05*Math.max(0,(.3-e)/.3)**2}}}function BM(t){return function(e,a,i=0){let{half:n,keel:s,sheer:l}=t.Tu(e),o=Math.abs(a)*Math.PI/2,u=Math.sign(a)*Math.max(0,n-i)*Math.sin(o)**.8,f=s+i+(l-s-i)*(1-Math.cos(o));return new t.Vector3(u,f,(e-.5)*t._u)}}function HM(t){return r=>r/t._u+.5}function GM(t){return function(e,a,i=0){let n=t.Du(e),s=0;for(;s<1&&t.Eu(n,s,i).y<a;)s+=.01;return t.Eu(n,Math.min(1,s),i).x}}function VM(t){return class{constructor(){this.root=new t.g,this.root.name="Rowboat",this.body=new t.g,this.root.add(this.body),this.saddle=new t.x,this.body.add(this.saddle),this.oars=[],this.seat=null,this.dims={length:t._u,beam:t.vu,halfLength:t._u/2,halfWidth:t.vu/2,height:.7},this.footprint={kind:"rowboat",x:0,z:0,yaw:0,hw:t.vu/2,hd:t._u/2},this.marks=[],this.exits=[[-1,0],[1,0],[0,1],[0,-1]].flatMap(([r,e])=>[.9,1.8].map(a=>({along:r*(t._u/2+a),left:e*(t.vu/2+a)}))),this.t=0,this.#t(),this.ready=Promise.resolve(this)}#t(){let r=t.createToonMaterial({color:"#ffffff",vertexColors:!0},{rim:1}),e=t.createToonMaterial({color:t.wu.wood},{rim:1}),a=t.createToonMaterial({color:t.wu.thwart},{rim:1}),i=t.createToonMaterial({color:t.wu.oar},{rim:1}),n=t.createToonMaterial({color:t.wu.iron}),s=(L,U,G=this.body)=>{let N=new t.c(L,U);return N.castShadow=!0,N.receiveShadow=!0,G.add(N),N},l=.035,o=t.Nu(20,8,0,-1),u=t.Nu(20,8,l,1),f=new t.K(t.wu.stripe),d=new t.K(t.wu.paint),h=o.attributes.position,p=new Float32Array(h.count*3);for(let L=0;L<h.count;L++)(t.Tu(t.Du(h.getZ(L))).sheer-h.getY(L)<.09?f:d).toArray(p,L*3);o.setAttribute("color",new t.et(p,3)),s(o,r),s(u,e),s(t.Pu(20,l),a),s(t.Fu(8,l),t.createToonMaterial({color:t.wu.paint},{rim:1}));let g=t.Tu(.5).keel+.09;s(new t.W(.5,.025,2).translate(0,g,-.2),a);let[v,m]=t.yu.seat;for(let[L,U,G]of[[v,m,.24],[t.yu.thwarts[0],m+.03,.2],[t.yu.thwarts[1],m+.02,.34]]){let N=2*t.Ou(L,U,l)-.01;s(new t.W(N,.04,G).translate(0,U-.02,L),a)}let[c,x]=t.yu.locks,T=t.Du(c),M=t.Tu(T).sheer,E=t.Tu(T).half-l/2,y=new t.d(.012,.012,.09,6).translate(0,.045,0),A=new t.He(.04,.008,5,10,Math.PI).rotateY(Math.PI/2).translate(0,.07,0);for(let L of[1,-1]){let U=new t.Vector3(L*E,M+x,c),G=s(y,n);G.position.set(U.x,M,U.z),s(A,n,G);let N=new t.g;N.position.copy(U),this.body.add(N);let W=new t.g;W.rotation.y=L>0?0:Math.PI,N.add(W);let J=t.bu.inboard+t.bu.outboard;s(new t.d(.022,.022,J,7).rotateZ(Math.PI/2).translate((t.bu.outboard-t.bu.inboard)/2,0,0),i,W),s(new t.d(.03,.03,.16,7).rotateZ(Math.PI/2).translate(-t.bu.inboard+.08,0,0),i,W),s(new t.d(.032,.032,.14,7).rotateZ(Math.PI/2).translate(.02,0,0),a,W);let z=new t.g;z.position.x=t.xu,W.add(z),s(new t.W(.52,.016,.15),i,z),s(new t.W(.14,.018,.152).translate(.2,0,0),t.createToonMaterial({color:t.wu.stripe},{rim:1}),z),this.oars.push({pivot:N,blade:z,side:L})}let w=(L,U,G)=>new t.Vector3(-L,U,-G),[b,S]=t.yu.feet;this.seat={hips:w(0,m,v),feet:[w(-S,g+.015,b),w(S,g+.015,b)],grips:[new t.Vector3,new t.Vector3],kneeOut:.3},this.oars.forEach(L=>this.#a(L,{angle:0,dip:.3,feather:1}))}update(r,e){this.t+=r,this.root.position.copy(e.pos),this.root.rotation.set(0,e.yaw+Math.PI,0),this.body.rotation.set(-e.pitch.x,Math.sin(this.t*.6)*.012,e.roll.x),this.oars.forEach((a,i)=>this.#a(a,e.oars[i])),this.footprint.x=e.pos.x,this.footprint.z=e.pos.z,this.footprint.yaw=e.yaw,this.footprint.top=e.pos.y+this.dims.height}#a(r,{angle:e,dip:a,feather:i}){let n=r.pivot.position.y-t.MathUtils.lerp(t.Su,t.Cu,a),s=Math.asin(t.MathUtils.clamp(n/t.xu,-1,1));r.pivot.rotation.set(0,-r.side*e,-r.side*s,"YZX"),r.blade.rotation.x=(1-i)*Math.PI/2;let l=this.seat.grips[+(r.side>0)];l.set(-r.side*t.bu.grip,0,0).applyEuler(r.pivot.rotation).add(r.pivot.position),l.set(-l.x,l.y,-l.z)}bladeAt(r,e=new t.Vector3){let a=this.oars[r];return a.pivot.updateWorldMatrix(!0,!1),a.pivot.localToWorld(e.set(a.side*t.xu,0,0))}waterline(r){this.body.updateWorldMatrix(!0,!1);let e=this.body.matrixWorld,a=t.Au.inset,i=(m,c,x)=>x.copy(t.Eu(m,c,a)).applyMatrix4(e),n=m=>i(m,0,t.ju).y<r,s=(m,c)=>{let x=i(m,0,t.ju);for(let T=1;T<=t.Au.around;T++){let M=i(m,c*T/t.Au.around,t.Mu);if(M.y>=r){let E=(r-x.y)/(M.y-x.y);return new t.L(x.x+(M.x-x.x)*E,x.z+(M.z-x.z)*E)}x.copy(M)}return new t.L(x.x,x.z)},l=(m,c)=>{for(let T=0;T<12;T++){let M=(m+c)/2;n(M)?m=M:c=M}let x=i(m,0,t.ju);return new t.L(x.x,x.z)},o=t.Au.stations,u=Array.from({length:o+1},(m,c)=>c?c/o:a/t._u),f=u.map(n),d=f.indexOf(!0),h=f.lastIndexOf(!0);if(d<0)return[];let p=[],g=[];for(let m=d;m<=h;m++)p.push(s(u[m],1)),g.push(s(u[m],-1));let v=[...p];return h<o&&v.push(l(u[h],u[h+1])),v.push(...g.reverse()),d>0&&v.push(l(u[d],u[d-1])),v}}}function WM(t){return function(e,a,i,n){let s=[];for(let u=0;u<=e;u++)for(let f=-a;f<=a;f++)s.push(t.Eu(u/e,f/a,i));let l=2*a+1,o=[];for(let u=0;u<e;u++)for(let f=0;f<2*a;f++){let d=u*l+f,h=d+l,p=h+1,g=d+1;t.zu(s,o,[d,h,p],n),t.zu(s,o,[d,p,g],n)}return t.Bu(s,o)}}function XM(t){return function(e,a){let i=[],n=[];for(let s of[1,-1])for(let l=0;l<=e;l++){let o=i.length;if(i.push(t.Eu(l/e,s,0),t.Eu(l/e,s,a)),l===0)continue;let u=o-2,f=o-1,d=o+1,h=o;t.zu(i,n,[u,f,d],0,[0,1,0]),t.zu(i,n,[u,d,h],0,[0,1,0])}return t.Bu(i,n)}}function YM(t){return function(e,a){let i=[],n=[];for(let[s,l]of[[0,-1],[a,1]]){let o=i.length,u=t.Eu(0,0,0);i.push(new t.Vector3(0,(u.y+t.Tu(0).sheer)/2,-3.4/2+s));for(let f=-e;f<=e;f++)i.push(t.Eu(0,f/e,0).setZ(-3.4/2+s));for(let f=0;f<2*e;f++)t.zu(i,n,[o,o+1+f,o+2+f],0,[0,0,l]);t.zu(i,n,[o,o+2*e+1,o+1],0,[0,0,l])}return t.Bu(i,n)}}function qM(t){return function(e,a,[i,n,s],l,o=null){let u=t.Iu.subVectors(e[n],e[i]).cross(t.Lu.subVectors(e[s],e[i])),f;o?f=t.Ru.fromArray(o):(f=t.Ru.copy(e[i]).add(e[n]).add(e[s]).divideScalar(3),f.set(f.x,f.y-.25,0).multiplyScalar(-l)),a.push(...u.dot(f)>=0?[i,n,s]:[i,s,n])}}function jM(t){return function(e,a){let i=new t.z().setFromPoints(e);return i.setIndex(a),i.computeVertexNormals(),i}}function $M(t){return{stroke:2.4,drive:.42,pull:.8,back:.65,turn:1.1,catch:.7,finish:.38,drag:[.05,.06],slip:[1.1,.8],spin:[1,.6],hold:1.4,breeze:.008,steer:1}}function KM(t){return(r,e,a)=>t.MathUtils.smoothstep(a,r,e)}function ZM(t){return(r,e,a,i)=>r+(e-r)*(1-Math.exp(-i*a))}function QM(t){return function(e,a,i,n,s){e.v+=(-i*i*(e.x-a)-2*n*i*e.v)*s,e.x+=e.v*s}}function JM(t){return class{constructor({lake:r,dims:e,handling:a=t.Vu}){this.lake=r,this.lakes=[r],this.dims=e,this.h=a,this.obstacles=[],this.pos=new t.Vector3,this.vel=new t.Vector3,this.yaw=0,this.yawRate=0,this.steer=0,this.accel=0,this.lateral=0,this.slip=0,this.t=0,this.crewed=!1,this.phase=1,this.rest=1,this.holding=0,this.efforts=[0,0],this.drives=[0,0],this.from=[0,0],this.sweeps=[0,0],this.oars=[{...t.Uu},{...t.Uu}],this.heave={x:0,v:0},this.pitch={x:0,v:0},this.roll={x:0,v:0},this.shore=1/0,this.events=[]}reset(r,e,a){this.pos.set(r,this.lake.level,e),this.vel.set(0,0,0),this.yaw=a,this.yawRate=this.steer=this.accel=this.lateral=this.slip=0,this.#a(0,0,0)}get speed(){return this.vel.length()}forward(r=new t.Vector3){return r.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}left(r=new t.Vector3){return r.set(-Math.cos(this.yaw),0,Math.sin(this.yaw))}get canExit(){return this.shore<1.2}nudge(r){this.roll.v+=r*.18,this.heave.v-=.2}step(r,e){this.crewed=!0;let[a,i]=this.#t(r,e);this.#a(r,a+i,(i-a)*this.h.turn)}coast(r){this.crewed=!1,this.#t(r,null),this.#a(r,0,0)}#t(r,e){let a=this.h,i=a.drive,n=[0,0],s=!1,l=!1;if(e){let d=e.throttle===e.reverse?0:e.throttle?1:-1;n=[t.qu(d-e.steer,-1,1),t.qu(d+e.steer,-1,1)],s=Math.abs(n[0])>.05||Math.abs(n[1])>.05,l=e.handbrake&&!s}for(let d=0;d<2;d++)this.efforts[d]=t.Yu(this.efforts[d],n[d],5,r);this.steer=t.Yu(this.steer,(n[1]-n[0])/2,6,r),s&&this.rest>.95&&(this.phase=.8,this.from=[...this.sweeps],this.drives=[0,0]),this.rest=t.Yu(this.rest,+!s,s?6:2.5,r),this.holding=t.Yu(this.holding,+!!l,5,r);let o=this.phase;this.rest<.98&&(this.phase+=r/a.stroke),this.phase>=1&&(--this.phase,this.drives=[...this.efforts],this.rest<.5&&this.events.push({type:"catch",oars:this.drives.map(d=>Math.abs(d)>.1)})),o<i&&this.phase>=i&&(this.from=[...this.sweeps],this.rest<.5&&this.events.push({type:"release",oars:this.drives.map(d=>Math.abs(d)>.1)}));let u=[0,0],f=this.crewed?t.Hu:t.Uu;for(let d=0;d<2;d++){let h,p;if(this.phase<i){let m=this.phase/i,c=Math.sign(this.drives[d]),x=c*Math.max(0,this.efforts[d]*c);h=-x*Math.cos(Math.PI*m),p=Math.abs(this.drives[d])>.05?t.Ju(0,.1,m)*(1-t.Ju(.9,1,m)):0,u[d]=x*(x<0?a.back:1)*a.pull*Math.sin(Math.PI*m)*p*(1-this.rest)}else{let m=(this.phase-i)/(1-i);h=t.MathUtils.lerp(this.from[d],-this.efforts[d],t.Ju(0,1,m)),p=0}this.sweeps[d]=h;let g=this.oars[d],v=h<0?-h*a.catch:-h*a.finish;g.angle=t.MathUtils.lerp(t.MathUtils.lerp(v,f.angle,this.rest),0,this.holding),g.dip=t.MathUtils.lerp(t.MathUtils.lerp(p,f.dip,this.rest),1,this.holding),g.feather=t.MathUtils.lerp(t.MathUtils.lerp(1-p,f.feather,this.rest),0,this.holding)}return u}#a(r,e,a){let i=this.h;this.t+=r;let n=this.forward(t.Gu),s=this.left(t.Ku),l=this.vel.dot(n),o=this.vel.dot(s),u=l;l+=e*r,this.crewed&&(l+=(t.Wu.x*n.x+t.Wu.y*n.z)*i.breeze*r,o+=(t.Wu.x*s.x+t.Wu.y*s.z)*i.breeze*r);let f=this.holding*i.hold;l-=(i.drag[0]*l+i.drag[1]*l*Math.abs(l)+f*l)*r,o-=(i.slip[0]*o+i.slip[1]*o*Math.abs(o)+f*o)*r,this.slip=Math.abs(o);let d=this.yawRate+a*r;d-=(i.spin[0]*d+i.spin[1]*d*Math.abs(d)+f*d)*r,this.yawRate=d,this.yaw+=d*r,this.vel.copy(n).multiplyScalar(l).addScaledVector(s,o),this.pos.x+=this.vel.x*r,this.pos.z+=this.vel.z*r,this.#e();let{length:h,beam:p}=this.dims,g=this.forward(t.Gu),v=this.left(t.Ku),{x:m,z:c}=this.pos,x=this.t,T=(b,S)=>t.ds(m+g.x*b+v.x*S,c+g.z*b+v.z*S,x),M=T(h*.38,0),E=T(-h*.38,0),y=T(0,p*.45),A=T(0,-p*.45),w=(this.sweeps[0]+this.sweeps[1])/2*(1-this.rest);if(r>0){t.Xu(this.heave,(M+E+y+A)/4-(this.crewed?.035:0),4.2,.3,r),t.Xu(this.pitch,(M-E)/(h*.76)-w*.014+this.accel*.004,3.4,.18,r),t.Xu(this.roll,(y-A)/(p*.9)+this.lateral*.01,2.9,.14,r);let b=this.vel.dot(n);this.accel=t.Yu(this.accel,(b-u)/r,10,r),this.lateral=t.Yu(this.lateral,b*this.yawRate,10,r)}this.pos.y=this.lake.level+this.heave.x}#e(){let{length:r,beam:e}=this.dims,a=this.forward(t.Gu),i=this.left(t.Ku),n=(r*r+e*e)/12,s=1/0;for(let[l,o]of t.Qu){let u=l*r/2,f=o*e/2,d=a.x*u+i.x*f,h=a.z*u+i.z*f,p=t.nearestLakeShore(this.lakes,this.pos.x+d,this.pos.z+h,6);if(!p)continue;s=Math.min(s,-p.d);let g=p.d+.1;if(g<=0)continue;let{nx:v,nz:m}=p;this.pos.x-=v*g,this.pos.z-=m*g;let c=(this.vel.x+this.yawRate*h)*v+(this.vel.z-this.yawRate*d)*m;if(c<=0)continue;let x=h*v-d*m,T=-1.15*c/(1+x*x/n);this.vel.x+=T*v,this.vel.z+=T*m,this.yawRate+=T*x/n,c>1.2&&this.events.push({type:"crash",reason:"ground",speed:c})}this.shore=s}}}function tv(t){return async function({original:e=!1,onProgress:a=()=>{}}={}){let i=0,n=m=>{i+=m,a(i)},[s,l]=await Promise.all([t.loadWorldData({edits:!e}).then(m=>(n(2/3),m)),t.loadTreeModelLibrary().then(m=>(n(1/6),m))]),{meta:o}=s,u=new t.PisteDistanceField(o.runs,s.detail.size,4,60,s.detail.center),f=t.raisePisteBanks(s.detail,o.runs,u,t.Ha(o.lifts)),d=t.Ja(f,o.lifts),h=t._s(f,o.lakes);t.Po(f,o.lifts);let p=t.liftEndpointPositions(o.lifts),g=t.Yo(u,17),v=new Map;for(let[m,c]of o.lifts.entries()){if(c.type!=="gondola"||!t.Fo.includes(c.name))continue;let[x,T]=p[m].map(([M,E])=>new t.Vector3(M,f.heightAt(M,E),E));t.as(f,x,T,g,v)}return a(1),{...s,piste:u,ground:f,lakes:h,summitFrame:d,treeModels:l,gondolaApproach:v}}}function ev(t){return function(e,a){let i=a;for(let o=0;o<e.length-1;o++){let u=e[o],f=e[o+1],d=Math.hypot(f[0]-u[0],f[1]-u[1]);if(i<=d){let h=i/d;return{x:u[0]+(f[0]-u[0])*h,z:u[1]+(f[1]-u[1])*h,dx:(f[0]-u[0])/d,dz:(f[1]-u[1])/d}}i-=d}let n=e[e.length-2],s=e[e.length-1],l=Math.hypot(s[0]-n[0],s[1]-n[1]);return{x:s[0],z:s[1],dx:(s[0]-n[0])/l,dz:(s[1]-n[1])/l}}}function av(t){return function(e,a){let i=(n,s,l)=>{let o=Math.cos(n.yaw),u=Math.sin(n.yaw);return n.hw*Math.abs(o*s-u*l)+n.hd*Math.abs(u*s+o*l)};return[e.yaw,a.yaw].every(n=>{let s=Math.cos(n),l=Math.sin(n);return[[s,-l],[l,s]].every(([o,u])=>Math.abs((a.x-e.x)*o+(a.z-e.z)*u)<i(e,o,u)+i(a,o,u))})}}function iv(t){return function(e,{terrain:a={},forest:i={},toy:n=null,labels:s=!1}={}){let{ground:l,piste:o,meta:u,lakes:f,edits:d,treeModels:h,gondolaApproach:p}=e,g=new t.g,v=t.createTerrainLod(l,o,t.treeLineElevation,a),m=t.serviceCentreLocations.map(z=>t.Wc(l,z,{scale:n?.lodge})),c=t.createCableway(l,u.lifts,{piste:o,approach:p,...n?{scale:n.lift,stationScale:n.station,spacing:n.carSpacing,speed:n.liftSpeed}:{}}),x=[...c.footprints,...m.map(z=>z.userData.footprint)],T=z=>!n||!z.some(K=>x.some(D=>t.rd(K,D))),M=t.rl(l,t.hotSpringLocation),E=T(M.footprints),y=t.No(l,{labels:s,keep:z=>T([z])}),A=t.sampleRouteDistance(u.runs.find(z=>z.name===t.defaultRunName).points,26),w=t.Gc(l,new t.Vector3(A.x,0,A.z),new t.Vector3(-A.dx,0,-A.dz),["云霄峰道 · START","Yunxiaofeng · Gondola No.6"],"#f0c24a"),b=[...E?M.footprints:[],...y.footprints],S=t.placeForestTrees(l,o,u.lifts,d?.trees),L=t.createForestBatches(l,n?t.nc(S,l,o,u.lifts,{scale:n.tree,cell:n.treeCell,per:n.treePer,keepOff:[...x,...b]}):S,{models:h,...i}),U=t.ws(f),G=t.Hc(l,u.runs);g.add(v,...m,L.group,c.group,y.group,U.group,G),E&&g.add(M.group),T([w.userData.footprint])&&g.add(w);let N=[...x.filter(z=>!z.passable),...c.collisionParts,...b],W=z=>{let{x:K,z:D,yaw:I}=t.Ca(`vehicle:${z}`);return{x:K,z:D,dx:Math.sin(I),dz:Math.cos(I)}},J=f.find(z=>z.name==="云湖")??f[0]??null;return{group:g,terrain:v,lodges:m,lifts:c,forest:L,onsen:M,summit:y,banner:w,water:U,markers:G,vehicles:[{name:"pickup",Model:t.wl,handling:t.Fl,park:W("pickup")},{name:"snowmobile",Model:t.jl,handling:t.Il,park:W("snowmobile")},{name:"jetson",Model:t.Zl,handling:t.tu,flies:!0,park:W("jetson")},...J?[{name:"rowboat",Model:t.ku,handling:t.Vu,floats:!0,lake:J,park:t.Ss(J,u.runs)}]:[]].filter(z=>T([{x:z.park.x,z:z.park.z,yaw:0,hw:1,hd:1}])).map(({Model:z,...K})=>({...K,model:new z})),obstacles:N,parkVehicle:z=>{let K=new(z.flies?t.gu:z.floats?t.Zu:t.Wl)({hf:z.flies?t.ys(l,f):l,piste:o,forest:L,lakes:f,lake:z.lake,dims:z.model.dims,handling:z.handling,obstacles:[...N]});return K.reset(z.park.x,z.park.z,Math.atan2(-z.park.dx,-z.park.dz)),z.model.update(0,K),K},fits:T}}}function nv(t){return{zenith:new t.K("#6dbbb8"),horizon:new t.K("#bfe2da"),cloudLight:new t.K("#e8f5ef"),cloudDark:new t.K("#58a7a8")}}function rv(t){return function(){let e=new t.Ze({side:1,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:t.defaultSkyPalette.zenith.clone()},uHorizon:{value:t.defaultSkyPalette.horizon.clone()},uCloudLight:{value:t.defaultSkyPalette.cloudLight.clone()},uCloudDark:{value:t.defaultSkyPalette.cloudDark.clone()},uTime:{value:0},uFloat:{value:0},uSunDir:{value:new t.Vector3(.62,.55,.56).normalize()},uSunColor:{value:new t.K("#fffbea")},uSun:{value:0},uGlow:{value:t.defaultSkyPalette.horizon.clone()},uGlowAmount:{value:0},uCover:{value:0},uMoonDir:{value:new t.Vector3(0,1,0)},uNight:{value:0},uAurora:{value:0}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = position;
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p.xyww;
      }`,fragmentShader:`
      uniform vec3 uZenith, uHorizon, uCloudLight, uCloudDark;
      uniform float uTime;
      uniform float uFloat;
      uniform vec3 uSunDir, uSunColor, uGlow, uMoonDir;
      uniform float uSun, uGlowAmount, uCover, uNight, uAurora;
      varying vec3 vDir;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
      }
      float fbm(vec2 p) {
        float s = 0.0, a = 0.5;
        for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; }
        return s;
      }
      // A flat disc with a crisp edge, as the toon tones are.
      float disc(vec3 d, vec3 c, float r) {
        float a = acos(clamp(dot(d, c), -1.0, 1.0));
        return 1.0 - smoothstep(r - 0.0015, r + 0.0015, a);
      }
      // The aurora: curtains hung east to west across the northern sky, three
      // of them one behind the next. Each is a folded sheet; a ray meets it
      // where it crosses the sheet's line, and how high it crosses says where
      // in the curtain it is: a crisp bright hem along its wavering foot, and
      // above it soft rays fading out, green to violet. Returns how much of the
      // green and of the violet shows.
      vec2 aurora(vec3 d) {
        vec2 a = vec2(0.0);
        if (d.z > -0.02) return a;
        for (int i = 0; i < 3; i++) {
          float fi = float(i);
          float z0 = 0.9 + fi * 0.8; // how far north, in units of the curtains' height
          float t = z0 / -d.z;
          float x = t * d.x;
          // Fold the sheet back and forth, slowly, and cross again where it's moved to.
          float fold = (fbm(vec2(x * 0.3 + fi * 7.3, uTime * 0.015 + fi)) - 0.5) * 2.2;
          t = (z0 + fold) / -d.z;
          x = t * d.x;
          float foot = 0.42 + (fbm(vec2(x * 0.45 + fi * 2.1, uTime * 0.02)) - 0.5) * 0.6;
          float v = t * d.y - foot; // above the curtain's foot, in its heights
          if (v < 0.0 || v > 1.2) continue;
          float rays = noise(vec2(x * 24.0 + fi * 13.0, uTime * 0.2)) * 0.6 + noise(vec2(x * 6.0 - fi * 5.0, uTime * 0.1)) * 0.4;
          rays = smoothstep(0.25, 0.85, rays);
          float hem = smoothstep(0.0, 0.012, v) * (1.0 - smoothstep(0.1, 0.16, v));
          float above = smoothstep(0.0, 0.012, v) * exp(-v / 0.35) * mix(0.3, 1.0, rays);
          // Brighter in stretches along it, gone in others and toward east and west.
          float strength = smoothstep(0.3, 0.55, fbm(vec2(x * 0.2 - uTime * 0.02, fi * 3.7)));
          strength *= (1.0 - smoothstep(2.0, 4.5, abs(x) / z0)) * (1.0 - fi * 0.3);
          float g = clamp(hem * 0.9 + above * 1.1, 0.0, 1.0) * strength;
          float top = smoothstep(0.12, 0.5, v);
          a.x = max(a.x, g * (1.0 - top));
          a.y = max(a.y, g * top * 0.9);
        }
        return a;
      }
      void main() {
        vec3 d = normalize(vDir);
        d.y = mix(d.y, abs(d.y), uFloat);
        float h = max(d.y, 0.0);
        vec3 col = mix(uHorizon, uZenith, pow(h, 0.55));
        col = mix(col, uZenith, uFloat * 0.35);

        // The horizon warms toward the sun: strongest just above it, and round
        // the sky from the sun's side, fading out up toward the zenith.
        vec3 sd = normalize(uSunDir);
        vec2 az = normalize(d.xz + 1e-5), saz = normalize(sd.xz + 1e-5);
        float toward = dot(az, saz) * 0.5 + 0.5;
        float low = 1.0 - smoothstep(0.0, 0.5, h);
        float glow = pow(toward, 2.5) * low * low + pow(max(dot(d, sd), 0.0), 24.0) * 0.6;
        col = mix(col, uGlow, clamp(glow, 0.0, 1.0) * uGlowAmount);

        if (d.y > 0.0) {
          // Stars: one at most to a cell, twinkling, under the clouds.
          if (uNight > 0.0) {
            vec2 suv = d.xz / (d.y + 1.0) * 90.0;
            vec2 cell = floor(suv);
            float s = hash(cell);
            vec2 at = cell + 0.25 + 0.5 * vec2(hash(cell + 3.1), hash(cell + 7.7));
            float r = 0.06 + 0.1 * fract(s * 37.0);
            float star = (1.0 - smoothstep(r * 0.6, r, length(suv - at))) * step(0.93, s);
            star *= 0.6 + 0.4 * sin(uTime * (1.0 + 3.0 * fract(s * 91.0)) + s * 40.0);
            col = mix(col, vec3(1.0, 0.98, 0.9), star * uNight * smoothstep(0.03, 0.2, d.y));
            // The moon, flat and pale, with a soft ring.
            vec3 md = normalize(uMoonDir);
            float halo = pow(max(dot(d, md), 0.0), 300.0);
            col = mix(col, vec3(0.75, 0.8, 0.95), halo * 0.35 * uNight);
            col = mix(col, vec3(0.97, 0.96, 0.88), disc(d, md, 0.026) * uNight);
          }
          // The aurora, over the stars and under the clouds, with a faint
          // green glow along the northern horizon below it.
          if (uAurora > 0.0) {
            float north = smoothstep(0.0, 0.9, -d.z) * (1.0 - smoothstep(0.0, 0.3, h));
            col = mix(col, vec3(0.2, 0.62, 0.48), north * 0.15 * uAurora);
            vec2 a = aurora(d) * uAurora;
            col = mix(col, vec3(0.56, 0.36, 0.78), a.y);
            col = mix(col, vec3(0.42, 1.0, 0.66), a.x * 0.9);
          }
          // The sun, with a ring of halo a step paler than the sky round it.
          float ring = disc(d, sd, 0.075) * 0.22 + disc(d, sd, 0.045) * 0.25;
          col = mix(col, mix(uGlow, uSunColor, 0.5), ring * uSun);
          col = mix(col, uSunColor, disc(d, sd, 0.03) * uSun);

          vec2 uv = d.xz / (d.y + 0.18);
          uv = vec2(uv.x * 0.55, uv.y * 1.3) + vec2(uTime * 0.004, 0.0);
          // Domain warp gives the swirled, brushed look.
          vec2 warp = vec2(fbm(uv * 0.9 + 3.1), fbm(uv * 0.9 + 8.4));
          float n = fbm(uv * 1.1 + warp * 1.2);
          float fade = smoothstep(0.0, 0.25, d.y);
          // More cover lowers the thresholds, until the shapes run together.
          float lt = 0.56 - uCover * 0.2, dt = 0.6 - uCover * 0.22;
          float light = smoothstep(lt, lt + 0.015, n) * fade;
          float dark = smoothstep(dt, dt + 0.015, fbm(uv * 1.6 + warp * 1.6 + 5.0)) * (1.0 - light) * fade;
          // The clouds on the sun's side catch its color.
          vec3 cLight = mix(uCloudLight, uGlow, pow(toward, 3.0) * uGlowAmount * 0.55);
          col = mix(col, uCloudDark, dark * 0.55);
          col = mix(col, cLight, light * 0.85);
          // Overcast: one even layer over all of it.
          col = mix(col, mix(uCloudLight, uHorizon, 0.5), smoothstep(0.6, 1.0, uCover) * 0.7 * fade);
        }
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`}),a=new t.c(new t.$e(1e3,32,16),e);return a.frustumCulled=!1,a.renderOrder=-1,a}}function sv(t){return(r,e,a)=>{let i=Math.max(0,Math.min(1,(r-e)/(a-e)));return i*i*(3-2*i)}}function lv(t){return(r,e,a)=>r+(e-r)*a}function ov(t){return{bank:0,pitch:0,spin:0,hip:[.67,-.13,.02],pelvis:0,tilt:.62,side:0,turn:.3,chin:-.46,look:.35,armL:[-.5,1.15,-.35],armR:[-.9,.75,-1],handL:[0,0,0],handR:[0,0,0]}}function uv(t){return{bank:-1.4,pitch:0,hip:[.42,.55,.02],pelvis:.7,tilt:1.5,side:0,turn:.05,chin:.6,look:.05,armL:[-.6,.25,-1.5],armR:[-.6,.25,-1.5],handL:[1,.3,.98],handR:[1,-.26,.98]}}function fv(t){return{bank:.95,pitch:0,hip:[.13,-.62,.02],pelvis:-1.1,tilt:-1.45,side:0,turn:.05,chin:-.55,look:.15,armL:[.1,1.35,-.25],armR:[.1,1.35,-.25],handL:[0,0,0],handR:[0,0,0]}}function hv(t){return{chest:[[t.ud,t.gd],[1.8,{tilt:1.05,hip:[.5,.55,.02],pelvis:.45,chin:.2,handL:[.6,.3,.98],handR:[.6,-.26,.98]}],[2.1,{tilt:.3,hip:[.6,.52,.02],pelvis:.1,handL:[0,.3,.98],handR:[0,-.26,.98],chin:-.2,armL:[-.7,.6,-.8],armR:[-.7,.6,-.8]}],[2.6,{bank:-.55,tilt:.75,hip:[.55,.25,.02],pelvis:.2,chin:-.4,armL:[-.6,1,-.5],armR:[-.8,.8,-.8]}],[t.crashDuration,{...t.pd,bank:-.1,hip:[.67,-.08,.02]}]],back:[[t.ud,t._d],[1.85,{tilt:-1.05,pelvis:-.7,bank:.45,hip:[.15,-.52,.02],turn:.15,chin:-.5,armL:[.6,.4,-.2],armR:[-.9,.5,-.6],handL:[1,.3,-.92]}],[2.3,{tilt:.3,pelvis:-.2,bank:.25,hip:[.24,-.38,.02],turn:.3,chin:-.5,handL:[.4,.3,-.9],armR:[-1.2,.5,-.5]}],[2.75,{tilt:.85,pelvis:.05,bank:.1,hip:[.52,-.2,.02],handL:[0,.3,-.9],armL:[-.3,.9,-.4]}],[t.crashDuration,{...t.pd,bank:.06}]]}}function dv(t){return{toe:{label:"Toe edge: onto the knees and chest",rest:"chest",keys:[[.12,{bank:-.3,hip:[.6,.02,.02],tilt:.95,chin:-.2,armL:[-1.25,.45,-.4],armR:[-1.25,.45,-.4]}],[.32,{bank:-1.05,hip:[.45,.42,.02],pelvis:.4,tilt:.85,chin:.1,armL:[-1.5,.35,-.2],armR:[-1.5,.35,-.2]}],[.55,{...t.gd,tilt:1.58,chin:.45,hip:[.4,.58,.02]}],[.8,t.gd]]},heel:{label:"Heel edge: onto the seat and back",rest:"back",keys:[[.1,{bank:.25,hip:[.58,-.25,.02],tilt:.3,chin:-.2,armL:[-2,.6,-.4],armR:[-2,.6,-.4]}],[.3,{bank:.7,hip:[.18,-.45,.02],pelvis:-.6,tilt:-.35,chin:-.65,...t.hd}],[.5,{...t._d,chin:-.85}],[.7,{...t._d,chin:-.4,tilt:-1.38}],[.9,t._d]]},nose:{label:"Nose catch: onto the front shoulder, then the back",rest:"back",keys:[[.12,{pitch:-.3,hip:[.55,-.05,.15],tilt:.8,side:.35,chin:-.3,...t.md}],[.35,{pitch:-.4,hip:[.28,-.05,.45],pelvis:.2,tilt:.4,side:1.35,chin:-.2,look:.6}],[.6,{pitch:-.15,bank:.6,hip:[.2,-.4,.25],pelvis:-.6,tilt:-.8,side:.6,chin:-.7}],[.9,{...t._d,pitch:0}]]},tail:{label:"Riding backward: onto the back shoulder, then the back",rest:"back",keys:[[.12,{pitch:.3,hip:[.55,-.15,-.15],tilt:.4,side:-.35,chin:-.5,...t.hd}],[.35,{pitch:.4,hip:[.28,-.2,-.45],pelvis:-.2,tilt:0,side:-1.35,chin:-.6,look:0}],[.6,{pitch:.15,bank:.65,hip:[.2,-.45,-.25],pelvis:-.8,tilt:-1,side:-.6,chin:-.8}],[.9,t._d]]},roll:{label:"Fast: a tumble, landing on the back",rest:"back",keys:[[.12,{spin:-.35,hip:[.45,-.05,.02],pelvis:.5,tilt:1.15,chin:-.6,...t.md}],[.35,{spin:-1.7}],[.6,{spin:-3.7}],[.85,{spin:-5.6,pelvis:.2,tilt:.6}],[1,{spin:-Math.PI*2,bank:.5,hip:[.25,-.4,.02],pelvis:-.6,tilt:-.8,chin:-.7,...t.hd}],[1.25,t._d]]},slam:{label:"Hard landing: down on the seat",rest:"back",keys:[[.08,{hip:[.36,-.18,.02],tilt:1,chin:-.6,bank:.08}],[.25,{hip:[.15,-.45,.02],pelvis:-.5,tilt:-.25,bank:.4,chin:-.5,...t.hd}],[.5,{tilt:-1.15,bank:.7,chin:-.85,hip:[.13,-.55,.02],pelvis:-.9,armL:[.2,1.2,-.25],armR:[.2,1.2,-.25]}],[.8,t._d]]}}}function cv(t){return function({side:e=0,forward:a=1,speed:i=0,reason:n=""}={}){return e>0?"toe":e<0?"heel":n==="hard landing"?"slam":a<0?"tail":i>19?"roll":"nose"}}function mv(t){return(r,e,a)=>Array.isArray(r)?r.map((i,n)=>t.fd(i,e[n],a)):t.fd(r,e,a)}function gv(t){return function(e,a={}){let i=a.kind||t.selectCrashMotion(a),n=t.xd[i],s=0;for(;s<n.length-2&&e>=n[s+1][0];)s++;let[l,o]=n[s],[u,f]=n[s+1],d=t.dd(e,l,u),h={};for(let p of Object.keys(o))h[p]=t.Sd(o[p],f[p],d);return h.kind=i,h.rest=t.crashPoseKeyframes[i].rest,h.phase=e<.28?"impact":e<1.05?"slide":e<1.5?"settle":"get-up",h.hands=[h.handL,h.handR],h.plant=Math.max(h.handL[0],h.handR[0]),h}}function pv(t){return function(e,a,i){return a.setFromEuler(t.Ad.set(e.pitch,0,e.bank)),t.jd.set(-Math.sign(e.bank)*t.wd*Math.min(1,Math.abs(e.bank)/.25),0,Math.sign(e.pitch)*t.Td*Math.min(1,Math.abs(e.pitch)/.25)),i.copy(t.jd).sub(t.Nd.copy(t.jd).applyQuaternion(a))}}function Mv(t){return function(e,a){t.Id(a,t.Dd,t.Md),t.Od.setFromAxisAngle(t.Fd,a.spin),e.quaternion.copy(t.Od).multiply(t.Dd),t.jd.set(0,t.Ed,0),e.position.copy(t.Md).sub(t.jd).applyQuaternion(t.Od).add(t.jd)}}function vv(t){return function(e,a){t.Id(a,t.Dd,t.Md);let i=t.Pd.copy(t.kd).invert().multiply(t.Dd.clone().invert()),n=t.Nd.set(a.hip[2],a.hip[0],a.hip[1]).applyQuaternion(t.kd).sub(t.Md).applyQuaternion(i);e.hips.position.copy(n);let s=new t.T().setFromEuler(t.Ad.set(a.pelvis,a.turn,-a.side*.6));e.hips.quaternion.copy(i).multiply(t.kd).multiply(s);let l=new t.T().setFromEuler(t.Ad.set(a.tilt,a.turn*1.5,-a.side));e.torso.quaternion.copy(s).invert().multiply(l),e.head.rotation.set(a.chin,a.look,a.side*.3);for(let[o,[u,f,d],h]of[[e.armL,a.armL,1],[e.armR,a.armR,-1]])o.sh.rotation.set(u,0,h*f),o.el.rotation.set(d,0,h*.1)}}function xv(t){return function(e,a,i,n=new t.Vector3){return e.localToWorld(n.set(a[2],0,-a[1])),n.y=i.heightAt(n.x,n.z)+.06,n}}function wv(t){return function(e){let a=Math.max(0,e),i=t.dd(a,0,.12)*(1-t.dd(a,.7,1)),n=t.dd(a,.75,.9)*(1-t.dd(a,1.35,1.5)),s=t.dd(a,1.4,1.55)*(1-t.dd(a,2.15,t.shakeOffDuration));return{head:Math.sin(a*Math.PI*2*3.2)*.55*i,nod:Math.sin(a*Math.PI*2*6.4)*.08*i,shoulder:Math.sin(a*23)*.09*i,sleeve:n,sleeveStroke:Math.sin((a-.75)*Math.PI*2*2.6),thighs:s,thighStroke:Math.sin((a-1.4)*Math.PI*2*2.4)}}}function Ev(t){return function(e,a){let i=t.Bd(a);e.head.rotation.y+=i.head,e.head.rotation.x+=i.nod,e.head.rotation.z+=i.shoulder*.5,e.torso.rotation.z+=i.shoulder;let n=(s,l,o,u)=>{s.sh.rotation.set(t.fd(s.sh.rotation.x,l[0],u),t.fd(s.sh.rotation.y,l[1],u),t.fd(s.sh.rotation.z,l[2],u)),s.el.rotation.set(t.fd(s.el.rotation.x,o[0],u),t.fd(s.el.rotation.y,o[1],u),t.fd(s.el.rotation.z,o[2],u))};if(i.sleeve>0){let s=i.sleeveStroke;n(e.armR,[-.85+s*.35,0,.55+s*.15],[-1.55-s*.25,0,0],i.sleeve),n(e.armL,[-.35,0,.55],[-.3,0,.1],i.sleeve),e.head.rotation.x+=-.25*i.sleeve,e.head.rotation.y+=-.3*i.sleeve}if(i.thighs>0){let s=i.thighStroke;e.torso.rotation.x+=.35*i.thighs,e.head.rotation.x+=-.2*i.thighs,n(e.armL,[-.45+s*.3,0,.12],[-.35-s*.2,0,0],i.thighs),n(e.armR,[-.45-s*.3,0,-.12],[-.35+s*.2,0,0],i.thighs)}}}function bv(t){return function(e,a,i){e.rotation.x=a,Math.abs(a%(Math.PI*2))<1e-6?e.position.set(0,0,0):(t.Ud.set(0,i,0).applyQuaternion(e.quaternion),e.position.set(-t.Ud.x,i-t.Ud.y,-t.Ud.z))}}function Tv(t){return function(e,a,i=!1){e.updateMatrixWorld(!0),e.traverseVisible(s=>{s.isSkinnedMesh&&s.skeleton.update()});let n=-1/0;return e.traverseVisible(s=>{if(s.isMesh&&s.geometry.attributes.position)for(let l=0;l<s.geometry.attributes.position.count;l++)s.getVertexPosition(l,t.Hd).applyMatrix4(s.matrixWorld),n=Math.max(n,a.heightAt(t.Hd.x,t.Hd.z)+.025-t.Hd.y)}),n=Number.isFinite(n)?i?n:Math.max(0,n):0,e.position.y+=n,e.updateMatrixWorld(!0),n}}function yv(t){return class{constructor(r,e){this.names=Object.keys(r),this.spring=Object.fromEntries(this.names.map(a=>[a,e[r[a]]])),this.stiffest=Math.max(...Object.values(e).map(([a])=>a)),this.x={},this.v={},this.tgt={};for(let a of this.names)this.x[a]=this.v[a]=this.tgt[a]=0;this.snap=!0}settle(r){let{x:e,v:a,tgt:i}=this;if(this.snap){for(let l of this.names)e[l]=i[l],a[l]=0;return this.snap=!1,e}let n=Math.max(1,Math.ceil(r*this.stiffest/.25)),s=r/n;for(let l of this.names){let[o,u]=this.spring[l],f=e[l],d=a[l];for(let h=0;h<n;h++)d+=(o*o*(i[l]-f)-2*u*o*d)*s,f+=d*s;e[l]=f,a[l]=d}return e}}}function Rv(t){return function(e,a,i,n=0,s=0,l=0){let o=new t.c(e,a);return o.position.set(n,s,l),o.castShadow=!0,i.add(o),o}}function Av(t){return function(e=1,a=t.qd.thick){let i=t.qd.length,n=i/2,s=.1,l=new t.W(1,a,i,4,1,56).translate(0,a/2,0),o=l.attributes.position;for(let u=0;u<o.count;u++){let f=o.getZ(u),d=Math.abs(f)/n,h=Math.max(0,Math.abs(f)-(n-s))/s,p=(t.qd.waist+(t.qd.tip-t.qd.waist)*d*d)*Math.sqrt(Math.max(.05,1-h**4))*e;o.setX(u,o.getX(u)*p);let g=Math.max(0,Math.abs(f)-(n-.2));o.setY(u,o.getY(u)+g*g*(f>0?1.9:1.6))}return l.computeVertexNormals(),l}}function Pv(t){return function(){let e=new t.g;e.name="Ski";let a=new t.g;a.position.y=-t.qd.sole,e.add(a),t.Zd(t.Qd(),t.Xd.top,a).receiveShadow=!0,t.Zd(t.Qd(1.04,.007),t.Xd.navy,a,0,-.002,0).castShadow=!1;let i=t.qd.length-.42;t.Zd(new t.W(.026,.003,i),t.Xd.stripe,a,0,t.qd.thick+.001,0);for(let s of[-1,1])t.Zd(new t.W(.06,.003,.05),t.Xd.accent,a,0,t.qd.thick+.002,s*(i/2-.08));let n=new t.g;n.position.y=t.qd.thick,a.add(n),t.Zd(new t.W(.075,.015,.44),t.Xd.binding,n,0,.0075,0),t.Zd(new t.W(.09,.045,.07),t.Xd.binding,n,0,.036,.205),t.Zd(new t.W(.06,.012,.05),t.Xd.navy,n,0,.064,.21),t.Zd(new t.W(.095,.06,.085),t.Xd.binding,n,0,.044,-.2),t.Zd(new t.W(.05,.016,.085),t.Xd.navy,n,0,.08,-.215).rotation.x=-.25;for(let s of[-1,1])t.Zd(new t.W(.012,.03,.07),t.Xd.navy,n,s*.052,.03,-.15);return e}}function Cv(t){return function(){let e=new t.g;e.name="Pole";let a=t.Jd.length;return t.Zd(new t.d(.011,.009,a-.06,7).translate(0,-(a+.06)/2,0),t.Xd.steel,e),t.Zd(new t.d(.024,.02,.15,9),t.Xd.navy,e,0,0,0),t.Zd(new t.$e(.026,9,6),t.Xd.navy,e,0,.075,0),t.Zd(new t.d(.017,.017,.015,9),t.Xd.accent,e,0,-.082,0),t.Zd(new t.He(.035,.007,5,12),t.Xd.binding,e,0,.06,.028).rotation.x=1.2,t.Zd(new t.d(.055,.055,.012,14),t.Xd.navy,e,0,-a+.09,0),t.Zd(new t.He(.055,.006,5,16),t.Xd.binding,e,0,-a+.09,0).rotation.x=Math.PI/2,t.Zd(new t.st(.009,.05,6).rotateX(Math.PI),t.Xd.steel,e,0,-a+.025,0),e}}function Lv(t){return{p:[21,.88],t:[17,.78],h:[15,.7],hand:[24,.62],pole:[38,.9],foot:[23,1],knee:[23,1],roll:[12,1]}}function Dv(t){return{px:"p",py:"p",pz:"p",pPitch:"p",pYaw:"p",pRoll:"p",tPitch:"t",tYaw:"t",tRoll:"t",hPitch:"h",hYaw:"h",hRoll:"h",hlx:"hand",hly:"hand",hlz:"hand",hrx:"hand",hry:"hand",hrz:"hand",kneeOut:"knee",kneeShift:"knee",lx:"foot",ly:"foot",lz:"foot",lYaw:"foot",lPitch:"foot",lRoll:"foot",rx:"foot",ry:"foot",rz:"foot",rYaw:"foot",rPitch:"foot",rRoll:"foot",plx:"pole",ply:"pole",plz:"pole",prx:"pole",pry:"pole",prz:"pole",roll:"roll"}}function Uv(t){return{front:{hand:[.28,.18,.5],tip:[.36,0,.22]},back:{hand:[.3,-.02,-.08],tip:[.4,0,-.5]}}}function Iv(t){return class extends t.Kd{constructor(){super(t.nf,t.tf),this.ground=1,this.plantT=9,this.plantSide=1,this.turnSide=0,this.skateW=0,this.poleW=0,this.kick=0,this.kickSide=1}update(r,e,a){this.ground+=(+!e.air-this.ground)*(1-Math.exp(-r*10));let i=e.skate?.on&&!e.air&&e.skate.style!=="board"?e.skate:null;i&&i.kick>=0?(this.kick=i.kick,this.kickSide=i.side):i&&(this.kick=1);let n=1-Math.exp(-r*8);return this.snap&&(this.skateW=+!!i),this.skateW+=(+!!i-this.skateW)*n,i&&(this.poleW+=(+(i.style==="pole")-this.poleW)*n),this.#n(r,e,a),this.#a(this.skateW),this.settle(r)}#t(r,e,a,i){let{front:n,back:s}=t.lf,l,o,u,f=0;a?r<t.af?(l=n,o=n,u=0):r<t.of?(l=n,o=s,u=t.rf.smootherstep(r,t.af,t.of)):(l=s,o=s,u=0,f=.1*t.rf.smoothstep(r,t.of,1)):(l=s,o=n,u=t.rf.smootherstep(r,0,1),f=.1+.08*Math.sin(Math.PI*r)-.1*t.rf.smoothstep(r,.75,1));for(let d=0;d<3;d++)i.hand[d]=l.hand[d]+(o.hand[d]-l.hand[d])*u,i.tip[d]=l.tip[d]+(o.tip[d]-l.tip[d])*u;return i.hand[0]*=e,i.tip[0]*=e,i.tip[1]+=f,i}#a(r){if(r<.001)return;let e=this.tgt,a=this.kick,i=this.poleW,n=1-i,s=this.kickSide,l=(c,x)=>{e[c]+=(x-e[c])*r},o=t.rf.smoothstep(a,t.af,t.of)*(1-t.rf.smoothstep(a,t.of,.95)),u=Math.sin(Math.PI*t.rf.clamp((a-.05)/.75,0,1)),f=t.rf.smootherstep(a,.05,.75),d=t.sf*(2*f-1)*n,h=t.cf.lift*Math.sin(Math.PI*f)*n,p=.125+(t.cf.out-.125)*n;l("lz",s>0?d:-d),l("rz",s>0?-d:d),l("ly",s>0?h:0),l("ry",s>0?0:h),l("lx",p),l("rx",-p),l("lYaw",t.cf.yaw*n),l("rYaw",-t.cf.yaw*n),l("lRoll",t.cf.edge*n),l("rRoll",-t.cf.edge*n),l("lPitch",0),l("rPitch",0),l("kneeOut",.06-.25*n),l("kneeShift",0),l("roll",e.roll*.3),l("px",.02*s*n),l("py",.66-.03*o*n-.1*u*i),l("pz",-.02),l("pPitch",.16+.3*u*i),l("pYaw",-.14*s*(2*f-1)*n),l("pRoll",0),l("tPitch",.24+.4*u*i),l("tYaw",.2*s*(2*f-1)*n),l("tRoll",0),l("hPitch",-.3-.35*u*i),l("hYaw",0),l("hRoll",0);let g=this.#t(a,1,i>.5||s<0,this._l??={hand:[0,0,0],tip:[0,0,0]}),v=this.#t(a,-1,i>.5||s>0,this._r??={hand:[0,0,0],tip:[0,0,0]}),m=.1*u*i;l("hlx",g.hand[0]),l("hly",g.hand[1]-m),l("hlz",g.hand[2]+m),l("hrx",v.hand[0]),l("hry",v.hand[1]-m),l("hrz",v.hand[2]+m),l("plx",g.tip[0]),l("ply",g.tip[1]),l("plz",g.tip[2]),l("prx",v.tip[0]),l("pry",v.tip[1]),l("prz",v.tip[2])}#e(r,e,a,i,n,s,l){if(l<=0)return;let o=this.tgt;o.hlx+=(r-o.hlx)*l,o.hly+=(e-o.hly)*l,o.hlz+=(a-o.hlz)*l,o.hrx+=(i-o.hrx)*l,o.hry+=(n-o.hry)*l,o.hrz+=(s-o.hrz)*l}#i(r,e,a,i,n,s,l){if(l<=0)return;let o=this.tgt;o.plx+=(r-o.plx)*l,o.ply+=(e-o.ply)*l,o.plz+=(a-o.plz)*l,o.prx+=(i-o.prx)*l,o.pry+=(n-o.pry)*l,o.prz+=(s-o.prz)*l}#n(r,e,a){let i=this.tgt,n=this.ground,s=1-n,l=t.rf.clamp(e.lean/.7,-1,1)*n,o=+!!e.brake*n,u=Math.max(+!!e.tuck,.5*t.rf.smoothstep(e.speed,16,28))*n*(1-o),f=(e.charge||0)*n,d=n*(1-t.rf.smoothstep(e.speed,.3,1.2))*(1-o),h=.75*e.lean*n;i.roll=h,i.px=.06*l,i.py=.69-.07*Math.abs(l),i.pz=-.04,i.pPitch=.12,i.pYaw=-.15*l,i.pRoll=.15*h,i.tPitch=.18,i.tYaw=-.05*l,i.tRoll=.35*h,i.hPitch=-.28,i.hYaw=.35*l,i.hRoll=.3*h,i.hlx=.3,i.hly=.1,i.hlz=.3+.06*l,i.hrx=-.3,i.hry=.1,i.hrz=.3-.06*l,i.plx=.45,i.ply=.05,i.plz=-.55,i.prx=-.45,i.pry=.05,i.prz=-.55,i.kneeOut=.06,i.kneeShift=.5*l,i.lx=t.Yd,i.ly=0,i.lz=.06*Math.max(0,l),i.rx=-.125,i.ry=0,i.rz=.06*Math.max(0,-l),i.lYaw=i.rYaw=i.lPitch=i.rPitch=0,i.lRoll=i.rRoll=-.15*l;let p=Math.abs(l)>.18?Math.sign(l):0;if(p&&p!==this.turnSide&&n>.9&&!o&&e.speed>2.5&&this.plantT>.55&&(this.plantT=0,this.plantSide=p),p&&(this.turnSide=p),this.plantT=Math.min(this.plantT+r,9),this.plantT<.5){let v=Math.sin(Math.PI*this.plantT/.5)*n;this.plantSide>0?(i.hlx+=(.3-i.hlx)*v,i.hly+=(-.02-i.hly)*v,i.hlz+=(.44-i.hlz)*v,i.plx+=(.34-i.plx)*v,i.ply+=(0-i.ply)*v,i.plz+=(.62-i.plz)*v):(i.hrx+=(-.3-i.hrx)*v,i.hry+=(-.02-i.hry)*v,i.hrz+=(.44-i.hrz)*v,i.prx+=(-.34-i.prx)*v,i.pry+=(0-i.pry)*v,i.prz+=(.62-i.prz)*v)}if(u>0&&(i.py-=.2*u,i.pz-=.07*u,i.pPitch+=.45*u,i.tPitch+=.55*u,i.hPitch-=.75*u,this.#e(.08,.11,.7,-.08,.11,.7,u),this.#i(.42,.85,-.9,-.42,.85,-.9,u)),f>.001&&(i.py-=.06*f,i.tPitch+=.08*f,this.#e(.24,.02,.38,-.24,.02,.38,.6*f),this.#i(.4,.25,-.9,-.4,.25,-.9,.6*f)),o>0&&(i.lYaw-=.22*o,i.rYaw+=.22*o,i.lx+=.11*o,i.rx-=.11*o,i.lRoll+=.15*o,i.rRoll-=.15*o,i.kneeOut-=.45*o,i.py-=.05*o,i.pz-=.03*o,this.#e(.34,.08,.2,-.34,.08,.2,o),this.#i(.64,.02,-.1,-.64,.02,-.1,o)),s>.001){let v=.07*Math.sin(5.2*a);i.ly+=.08*s,i.ry+=.08*s,i.lPitch-=(.1+v)*s,i.rPitch-=(.1-v)*s,i.py-=.04*s,i.tPitch+=.1*s;let m=a*6.5,c=.08;this.#e(.42+Math.sin(m)*c,.26+Math.cos(m)*c,.12,-.42-Math.sin(m+2.1)*c,.26+Math.cos(m+2.1)*c,.1,.55*s),this.#i(.46,.1,-.75,-.46,.1,-.75,s)}e.landing>0&&(i.py-=.12*Math.min(1,e.landing*2)*n,i.tPitch+=.1*n);let g=t.rf.smoothstep(e.slip||0,1.5,5)*n;g>.001&&(i.py-=.03*g-(.6*Math.sin(21*a)+.4*Math.sin(33*a+2))*.012*g,i.hlx+=.08*g,i.hrx-=.08*g,i.hly+=.1*g,i.hry+=.1*g),d>.001&&(i.py+=.02*d,i.tPitch-=.08*d,i.hYaw+=(.5*Math.sin(.55*a)+.14*Math.sin(1.31*a))*d,i.px+=.02*Math.sin(.37*a)*d,this.#e(.26,.02,.2,-.26,.02,.2,.7*d),this.#i(.42,0,.12,-.42,0,.12,d))}}}function Sv(t){return{edge:[13,1],lift:[17,.55],p:[19,.72],t:[15,.68],gaze:[11,.85],hand:[20,.55],knee:[23,1]}}function Nv(t){return{edge:"edge",py:"lift",px:"p",pz:"p",pPitch:"p",pYaw:"p",pRoll:"p",tPitch:"t",tYaw:"t",tRoll:"t",gYaw:"gaze",gPitch:"gaze",gTilt:"gaze",hlx:"hand",hly:"hand",hlz:"hand",hrx:"hand",hry:"hand",hrz:"hand",kneeOut:"knee",kneeShift:"knee"}}function _v(t){return(r,e,a,i)=>{for(let n=0;n<3;n++)i[n]=r[n]+(e[n]-r[n])*a;return i}}function Ov(t){return class extends t.Kd{constructor(){super(t.ff,t.df),this.ground=1,this.lean=0,this.leanRate=0,this.skateW=0,this.kickW=0,this.kick=0,this.back={x:0,y:0,z:0,yaw:0,pitch:0,w:0},this._b=[0,0,0]}update(r,e,a){if(r>0){this.ground+=(+!e.air-this.ground)*(1-Math.exp(-r*10));let s=((e.lean||0)-this.lean)/r;this.leanRate+=(s-this.leanRate)*(1-Math.exp(-r*12))}this.lean=e.lean||0;let i=e.skate?.on&&!e.air?e.skate:null,n=i&&i.kick>=0;return n&&(this.kick=i.kick),this.snap&&(this.skateW=+!!i,this.kickW=+!!n),this.skateW+=(+!!i-this.skateW)*(1-Math.exp(-r*(i?9:6))),this.kickW+=(+!!n-this.kickW)*(1-Math.exp(-r*10)),this.#n(e,a),this.#e(this.skateW),this.#a(),this.settle(r)}#t(r,e){if(r<t.Sf)return t.wf(t.xf.ready,t.xf.plant,t.pf.smoothstep(r,0,t.Sf),e);if(r<t.Cf)return t.wf(t.xf.plant,t.xf.end,t.pf.smootherstep(r,t.Sf,t.Cf),e);let a=(r-t.Cf)/.4;return t.wf(t.xf.end,t.xf.ready,t.pf.smootherstep(a,0,1),e),e[1]+=t.xf.swing*Math.sin(Math.PI*Math.min(1,a*1.3)),e}#a(){let r=this.back,e=this.skateW,a=this.kickW,i=this.kick,n=t.wf(t.xf.rest,this.#t(i,this._b),a,this._b);r.w=e,r.x=n[0],r.y=n[1],r.z=n[2];let s=t.pf.smoothstep(i,.4,t.Cf)*(1-t.pf.smoothstep(i,.7,.9));r.yaw=1.1+.45*a,r.pitch=.45*s*a}#e(r){if(r<.001)return;let e=this.tgt,a=this.kick,i=this.kickW,n=i*t.pf.smoothstep(a,t.Sf,t.Cf)*(1-t.pf.smoothstep(a,t.Cf,.85)),s=i*Math.sin(2*Math.PI*a),l=(m,c)=>{e[m]+=(c-e[m])*r};l("px",.1+.03*n),l("py",.67-.05*n),l("pz",-.06),l("pPitch",.12),l("pYaw",.45+(e.pYaw-.28)-.06*s),l("pRoll",.04*n),l("tPitch",.3+.08*n),l("tYaw",.45+.06*s),l("tRoll",0),l("gYaw",e.gYaw*.5),l("gPitch",.16),l("kneeOut",.1),l("kneeShift",.3);let o=e.pYaw+e.tYaw,u=Math.sin(o),f=Math.cos(o),d=.32,h=.18,p=-.3,g=.02+.04*Math.abs(s),v=.1+.16*s;l("hlx",d*f+h*u),l("hly",.08),l("hlz",h*f-d*u),l("hrx",p*f+v*u),l("hry",g),l("hrz",v*f-p*u)}#i(r,e,a,i,n,s,l){if(l<=0)return;let o=this.tgt;o.hlx+=(r-o.hlx)*l,o.hly+=(e-o.hly)*l,o.hlz+=(a-o.hlz)*l,o.hrx+=(i-o.hrx)*l,o.hry+=(n-o.hry)*l,o.hrz+=(s-o.hrz)*l}#n(r,e){let a=this.tgt,i=this.ground,n=1-i,s=this.lean,l=r.leanAim??s,o=t.pf.clamp((r.twist||0)*2,-1,1),u=+!!r.brake*i,f=+!!r.tuck*i*(1-u),d=(r.charge||0)*i,h=Math.min(1,(r.landing||0)*2)*i,p=r.speed==null?0:i*(1-t.pf.smoothstep(r.speed,.3,1.2))*(1-u)*(1-d),g=Math.min(1,(r.crouch??.35)+n*.35),v=t.hf*t.pf.clamp(s+t.mf*(l-s),-1,1)*i,m=t.gf*s,c=t.pf.smoothstep(s+t.mf*(l-s),0,.7)*i,x=t.pf.smoothstep(-(s+t.mf*(l-s)),0,.7)*i,T=-.135*t.pf.clamp(s,-1,1)*i+Math.tan(m*i-v)*t._f,M=t.pf.clamp(this.leanRate*Math.sign(s)/1.5,-1,1)*Math.min(1,Math.abs(s)/.2),E=Math.exp(-((s/.3)**2))*Math.min(1,Math.abs(this.leanRate)/1.5)*i,y=1/Math.cos(Math.min(Math.abs(s),1))-1;a.edge=m,a.px=.02+.05*M*i,a.py=.77-g*.24+.06*E-.05*y*i-.01*c+.004*Math.sin(2.1*e),a.pz=-.03-g*.08-.05*c+.14*x-.04*u,a.pPitch=.1*c-.12*x,a.pYaw=.28+.16*o,a.pRoll=-.05*M*i;let A=t.pf.clamp((T-a.pz)/t.vf,-1,.8),w=.4*t.pf.smoothstep(g,.4,1)+.5*f;a.tPitch=t.pf.clamp(Math.asin(A)+w,t.yf[0],t.yf[1]),a.tYaw=.22+.24*o,a.tRoll=-.06*M*i,a.gYaw=.5*o+(.5*Math.sin(.55*e)+.14*Math.sin(1.31*e))*p,a.gPitch=.12+.12*g,a.gTilt=.55*v,a.kneeOut=.12+.1*x,a.kneeShift=.08*M*i;let b=Math.sin(a.tPitch)*.3,S=-(1-Math.cos(a.tPitch))*.3,L=.02*Math.sin(2.1*e),U=.36+.04*x,G=.14+S-.08*x+L,N=.2+b+.1*c,W=-.36,J=.1+S+.08*c+.12*x-L,z=.2+b+.04*c-.1*x,K=a.pYaw+a.tYaw,D=Math.sin(K),I=Math.cos(K);if(a.hlx=U*I+N*D,a.hly=G,a.hlz=N*I-U*D,a.hrx=W*I+z*D,a.hry=J,a.hrz=z*I-W*D,p>.001&&(a.py+=.03*p,a.tPitch-=.1*p,this.#i(.27,.08,.05,-.27,.08,.05,.8*p)),f>0&&this.#i(.34,.1,.4,.02,.08,.36,f),d>.001&&this.#i(.3,.06,.3,-.22,.06,.3,.7*d),u>0&&this.#i(.38,.22,.24,-.36,.24,.2,u),n>.001){let V=e*5,tt=.05;this.#i(.5+Math.sin(V)*tt,.38+Math.cos(V)*tt,.04,-.46-Math.sin(V+2.1)*tt,.32+Math.cos(V+2.1)*tt,0,.7*n)}h>0&&this.#i(.46,.2,.2,-.42,.22,.16,h)}}}function Fv(t){return function(r,e){return new URL(r,e).href}}function zv(t){return function(r){return r.pathname.endsWith(".css")}}function kv(t){return function(r,e,a){if(e in r)return r[e];let i=a();if(!i){r[e]=void 0;return}let n=i.then(()=>{r[e]=void 0},s=>{throw r[e]=void 0,s});return r[e]=n,n}}function Bv(t){return function(r,e,a){let i=Promise.resolve();if(e&&e.length>0){let u=function(d){return Promise.all(d.map(h=>Promise.resolve(h).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))},f=function(d){return import.meta.resolve?new URL(import.meta.resolve(d)):new URL(d,import.meta.url)},s,l=document.querySelector("meta[property=csp-nonce]"),o=l?.nonce||l?.getAttribute("nonce");i=u(e.map(d=>{d=t.Df(d,a);let h=f(d),p=t.kf(h);return t.Af(t.Of,h.href,()=>{if(s===void 0){s={all:new Set,styles:new Set};let v=document.getElementsByTagName("link");for(let m=v.length-1;m>=0;m--){let c=v[m];s.all.add(c.href),c.rel==="stylesheet"&&s.styles.add(c.href)}}if((p?s.styles:s.all).has(h.href))return;let g=document.createElement("link");if(g.rel=p?"stylesheet":t.Ef,p||(g.as="script"),g.crossOrigin="",g.href=h.href,o&&g.setAttribute("nonce",o),document.head.appendChild(g),p)return new Promise((v,m)=>{g.addEventListener("load",v),g.addEventListener("error",()=>m(Error(`Unable to preload CSS for ${h}`)))})})}).filter(d=>d!==void 0))}function n(s){let l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return i.then(s=>{for(let l of s||[])l.status==="rejected"&&n(l.reason);return r().catch(n)})}}function Hv(t){return{cream:"#efe9dc",navy:"#1e2536",black:"#1c1d21",skin:"#f6dcc6",hair:"#5b3b28",hairDark:"#452d1f",lens:"#3d4a5c",lensGlint:"#d9553a",yellow:"#f2c83a",orange:"#ff5a1f",board:"#ee4f2c",boardBase:"#c63b22",piping:"#f7f5ee",patch:"#b9b4aa"}}function Gv(t){return function(){let e=document.createElement("canvas");e.width=512,e.height=256;let a=e.getContext("2d");a.fillStyle=t.Mf.skin,a.fillRect(0,0,512,256),a.fillStyle="rgba(240,150,140,0.55)";for(let n of[-40,40])a.beginPath(),a.ellipse(128+n,150,13,7,0,0,Math.PI*2),a.fill();a.fillStyle="#16171a";for(let n of[-25,25])a.beginPath(),a.ellipse(128+n,132,6.5,10,0,0,Math.PI*2),a.fill();a.strokeStyle="#5a3a2a",a.lineWidth=3,a.lineCap="round";for(let n of[-25,25])a.beginPath(),a.moveTo(128+n-8,112),a.lineTo(128+n+8,110),a.stroke();a.strokeStyle="#7a3e34",a.lineWidth=2.5,a.beginPath(),a.arc(128,152,7,.25*Math.PI,.75*Math.PI),a.stroke();let i=new t.qe(e);return i.colorSpace=t.he,i.anisotropy=4,i}}function Vv(t){return function(){let e=document.createElement("canvas");e.width=128,e.height=256;let a=e.getContext("2d");a.fillStyle=t.Mf.black,a.fillRect(0,0,128,256),a.save(),a.translate(78,128),a.rotate(-Math.PI/2),a.fillStyle="#e9e6de",a.font='600 30px "Patrick Hand SC", sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText("SALONION",0,0),a.restore();let i=new t.qe(e);return i.colorSpace=t.he,i}}function Wv(t){return function(e,a,i){let[n,s]=e.shoulder,l=a.y+e.pivot;for(let o=.15;o<1.2;o+=.02)if(Math.hypot(Math.abs(i.x)-n,i.y-(l+s*Math.cos(o)),i.z-(a.z+s*Math.sin(o)))<e.reach*.95)return o;return 1.2}}function Xv(t){return function(e,a,i,n=0,s=0,l=0){let o=new t.c(e,a);return o.position.set(n,s,l),o.castShadow=!0,i.add(o),o}}function Yv(t){return class{constructor(r,e,a,i,{top:n,pipe:s}={}){this.mesh=t.$(new t.d(a,e,1,8).translate(0,.5,0),i,r),n&&t.$(new t.d(a*1.07,a*1.04,n.len,10,1,!1,-1.9,3.8).translate(0,1-n.len/2,0),n.mat,this.mesh),s&&t.$(new t.W(.018,.9,.02).translate(0,.5,0),s.mat,this.mesh,s.side*a*1.02,0,0)}set(r,e){let a=new t.Vector3().subVectors(e,r),i=a.length();this.mesh.position.copy(r),this.mesh.quaternion.setFromUnitVectors(t.Ff,a.divideScalar(i||1)),this.mesh.scale.set(1,i,1)}}}function qv(t){return function(){let e=1.56,a=.52,i=new t.W(.27,.025,e,6,1,40),n=i.attributes.position;for(let s=0;s<n.count;s++){let l=n.getZ(s),o=Math.max(0,Math.abs(l)-a),u=o/(e/2-a),f=(1-.06*Math.cos(l/e*Math.PI)**2)*Math.sqrt(Math.max(.05,1-u**4));n.setX(s,n.getX(s)*f),n.setY(s,n.getY(s)+o*o*1.1)}return i.computeVertexNormals(),i}}function jv(t){return class{constructor({model:r=!1}={}){this.root=new t.g,this.edge=new t.g,this.root.add(this.edge),this.proceduralBoard=new t.g,this.edge.add(this.proceduralBoard),this.board=t.$(t.Qf(),t.Q.board,this.proceduralBoard,0,0,0),this.board.receiveShadow=!0;let e=t.$(new t.W(.24,.006,1),t.Q.boardBase,this.proceduralBoard,0,-.002,0);e.castShadow=!1,this.body=new t.g,this.body.rotation.y=Math.PI/2,this.edge.add(this.body),this.classic=new t.g,this.body.add(this.classic),this.bindings=[],this.boots=[],this.#i(),this.stance=this.feet.map(a=>a.position.clone()),this.bindingAt=this.bindings.map(a=>a.position.clone()),this.gear="board",this.skiPose=new t.uf,this.boardPose=new t.Tf,this.skis=this.feet.map(a=>{let i=t.$d();return i.position.z=.02,a.add(i),i}),this.poles=[t.ef(),t.ef()],this.body.add(...this.poles);for(let a of[...this.skis,...this.poles])a.visible=!1;this.kneeShift=0,this.mitts=[new t.Vector3,new t.Vector3],this.handSpots=null,this.seat=null,this.reach=null,this.reachW=0,this.reachAt=new t.Vector3,this.reachLeft=!1,this.throwT=null,this.pose={crouch:.4,lean:0,twist:0,armSwing:0,air:0,tumble:0},this.t=0,this.model=null,this.base=null,this.outfit=null,this.modelId="classic",this.locomotion="ride",this.act=null,this.models=new Map,this.outfits=new Map,this.selection=0,r&&this.selectModel(r===!0?"male":r).catch(a=>console.warn("Rider model unavailable.",a))}async selectModel(r){let e=++this.selection,a=null;if(r!=="classic"&&(this.models.has(r)||this.models.set(r,t.vitePreload(async()=>{let{RIDER_MODELS:i,loadRiderModel:n,loadRiderLocomotion:s,loadPitching:l,loadIdle:o,loadChairSitting:u,RiderModel:f}=await Sa(async()=>{const{RIDER_MODELS:d,loadRiderModel:h,loadRiderLocomotion:p,loadPitching:g,loadIdle:v,loadChairSitting:m,RiderModel:c}=await import("./toon-lazy-Dhxa5xBx.js").then(x=>x.m);return{RIDER_MODELS:d,loadRiderModel:h,loadRiderLocomotion:p,loadPitching:g,loadIdle:v,loadChairSitting:m,RiderModel:c}},__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return{RIDER_MODELS:i,loadRiderModel:n,loadRiderLocomotion:s,loadPitching:l,loadIdle:o,loadChairSitting:u,RiderModel:f}},t.__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(async({RIDER_MODELS:i,loadRiderModel:n,loadRiderLocomotion:s,loadPitching:l,loadIdle:o,loadChairSitting:u,RiderModel:f})=>{let d=i[r].walkFrom,[h,p,g,v,m]=await Promise.all([n(r),d?s(d):null,l().catch(c=>(console.warn("Pitching animation unavailable; using procedural throw.",c),null)),o().catch(c=>(console.warn("Idle animation unavailable.",c),null)),r==="female"?u().catch(c=>(console.warn("Chair animation unavailable; using seated pose.",c),null)):null]);return new f(h,r,{borrow:p,pitching:g,idle:v,chair:m})}).catch(i=>{throw this.models.delete(r),i})),a=await this.models.get(r),this.boardAssembly||=(this.boardLoading||=t.vitePreload(async()=>{let{makeStockBoard:i}=await Sa(async()=>{const{makeStockBoard:n}=await import("./gear-mount-Bd-uN8iK.js");return{makeStockBoard:n}},__vite__mapDeps([6,1,3,4]),import.meta.url);return{makeStockBoard:i}},t.__vite__mapDeps([7,2,4,5]),import.meta.url).then(({makeStockBoard:i})=>{let n=i(this.stance);return n.visible=!1,this.body.add(n),n}).catch(i=>{throw this.boardLoading=null,i}),await this.boardLoading)),e!==this.selection)return!1;this.locomotion!=="sit"&&this.setLocomotion("ride"),this.model&&this.body.remove(this.model.root),this.model=this.base=a,this.outfit=null,this.modelId=r,a&&this.body.add(a.root),this.classic.visible=!a;for(let i of this.boots)i.visible=!a;return this.#e(),!0}get build(){return this.model?.build??t.Yf}get canWalk(){return!!this.base?.canWalk}preloadOutfit(r){r&&this.base&&this.#t(r)}outfitModel(r){return this.base&&this.outfits.get(`${this.modelId}:${r}`)?.model||null}async loadOutfit(r){let e=this.modelId,a=r?this.base&&await this.#t(r).promise:this.base;return!!a&&e===this.modelId&&a!==this.model}wear(r){let e=r?this.base&&this.#t(r).model:this.base;return!e||e===this.model?!1:(this.body.remove(this.model.root),this.model=e,this.outfit=r,this.body.add(e.root),e.snapTo(this.locomotion,this.locomotion==="act"?this.act.clip:null),e.update(0,this,this.locomotion,0),!0)}#t(r){let e=this.modelId,a=this.base,i=`${e}:${r}`,n=this.outfits.get(i);return n||(n={model:null},n.promise=t.vitePreload(async()=>{let{RIDER_MODELS:s,loadRiderModel:l,loadPitching:o,loadIdle:u,RiderModel:f}=await Sa(async()=>{const{RIDER_MODELS:d,loadRiderModel:h,loadPitching:p,loadIdle:g,RiderModel:v}=await import("./toon-lazy-Dhxa5xBx.js").then(m=>m.m);return{RIDER_MODELS:d,loadRiderModel:h,loadPitching:p,loadIdle:g,RiderModel:v}},__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return{RIDER_MODELS:s,loadRiderModel:l,loadPitching:o,loadIdle:u,RiderModel:f}},t.__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(async({RIDER_MODELS:s,loadRiderModel:l,loadPitching:o,loadIdle:u,RiderModel:f})=>{if(!s[e].outfits?.[r])return null;let[d,h,p]=await Promise.all([l(e,r),o().catch(g=>(console.warn("Pitching animation unavailable; using procedural throw.",g),null)),u().catch(g=>(console.warn("Idle animation unavailable.",g),null))]);return n.model=new f(d,e,{outfit:r,fit:a,pitching:h,idle:p}),n.model}).catch(s=>(console.warn(`No ${r} outfit for the ${e} rider; keeping their own clothes.`,s),null)),this.outfits.set(i,n)),n}setLocomotion(r,e=this.seat){if(r==="walk"&&!this.canWalk||r==="sit"&&!e||r==="act"&&!(this.model&&this.act))return!1;this.seat=e,r!=="sit"&&this.#a(),this.locomotion=r;let a=r==="sit"&&!!e?.lift;return this.proceduralBoard.position.set(0,a?-.48:0,a?-.48:0),this.proceduralBoard.rotation.y=a?Math.PI/2:0,this.skiPose.snap=this.boardPose.snap=!0,this.#e(),!0}play(r,e){return this.act={clip:r,time:e},this.locomotion==="act"||this.setLocomotion("act")}setGear(r){this.gear=r==="ski"?"ski":"board",this.skiPose.snap=this.boardPose.snap=!0,this.locomotion!=="sit"&&this.#a(),this.#e()}get skiing(){return this.gear==="ski"&&this.locomotion==="ride"}#a(){this.feet.forEach((r,e)=>{r.position.copy(this.stance[e]),r.rotation.set(0,0,0)})}#e(){let r=this.locomotion==="ride",e=this.locomotion==="sit"&&!!this.seat?.lift,a=(r||e)&&this.gear!=="ski";this.modelId;let i=this.modelId==="classic"?null:this.boardAssembly;this.boardAssembly&&(this.boardAssembly.position.set(0,e?-.48:0,e?.48:0),this.boardAssembly.visible=a&&!!i),i&&i.wear(this.modelId),this.proceduralBoard.visible=a&&!i;for(let n of this.bindings)n.visible=a&&!i;for(let n of this.skis)n.visible=(r||e)&&this.gear==="ski";for(let n of this.poles)n.visible=r&&this.gear==="ski";for(let n of this.boots)n.visible=!this.model&&this.locomotion!=="walk"}#i(){let r=this.body;this.feet=[.26,-.26].map(f=>{let d=new t.g;return d.position.set(f,.025,0),r.add(d),this.boots.push(t.$(new t.W(.17,.16,.33),t.Q.black,d,0,.09,.02),t.$(new t.W(.19,.05,.12),t.Q.orange,d,0,.15,.05),t.$(new t.W(.19,.04,.07),t.Q.orange,d,0,.12,.15)),this.bindings.push(t.$(new t.W(.18,.035,.35),t.Q.orange,d,0,.015,.02)),this.bindings.push(t.$(new t.W(.18,.26,.05),t.Q.orange,d,0,.17,-.16)),d});let e=this.classic;this.thighs=[1,-1].map(f=>new t.Zf(e,.135,.15,t.Q.navy,{top:{len:.55,mat:t.Q.cream},pipe:{side:f,mat:t.Q.piping}})),this.shins=[1,-1].map(f=>new t.Zf(e,.135,.14,t.Q.navy,{pipe:{side:f,mat:t.Q.piping}})),this.cuffs=[0,1].map(()=>t.$(new t.d(.145,.14,.08,9),t.Q.black,e)),this.knees=[0,1].map(()=>t.$(new t.$e(.14,9,7),t.Q.navy,e)),this.hips=new t.g,e.add(this.hips),t.$(new t.$e(.2,10,8).scale(1.25,.75,.95),t.Q.navy,this.hips),t.$(new t.$e(.205,12,8,Math.PI/2-1.2,2.4,.5,1.6).scale(1.25,.75,.95),t.Q.cream,this.hips),this.torso=new t.g,this.torso.position.y=.04,this.hips.add(this.torso);let a=this.torso;t.$(new t.d(.245,.26,.2,12),t.Q.navy,a,0,.1,0),t.$(new t.We(.225,.08,4,12),t.Q.cream,a,0,.3,0).scale.set(1.08,1,.95),t.$(new t.W(.014,.19,.02),t.Q.piping,a,0,.1,.258),t.$(new t.W(.012,.3,.02),t.Q.navy,a,0,.36,.215),t.$(new t.d(.13,.17,.11,12),t.Q.cream,a,0,.55,0),t.$(new t.$e(.15,10,8).scale(1.2,.75,.8),t.Q.cream,a,0,.55,-.11);for(let f of[-.13,.13]){let d=t.$(new t.W(.032,.24,.02),t.Q.black,a,f,.42,.2);d.rotation.x=-.35}t.$(new t.W(.28,.025,.02),t.Q.black,a,0,.37,.222),t.$(new t.d(.04,.04,.02,14),t.Q.yellow,a,-.12,.44,.22).rotation.x=Math.PI/2,t.$(new t.W(.09,.13,.05),t.Q.black,a,.12,.31,.235),t.$(new t.W(.02,.07,.01),t.Q.orange,a,.12,.31,.262),t.$(new t.W(.38,.46,.17),t.Q.black,a,0,.31,-.27),t.$(new t.W(.4,.1,.19),t.Q.black,a,0,.53,-.27);for(let f of[-.195,.195])t.$(new t.W(.02,.07,.03),t.Q.orange,a,f,.42,-.22),t.$(new t.W(.02,.06,.03),t.Q.orange,a,f,.18,-.22);let i=new t.c(new t.me(.17,.34),new t.ot({map:t.Pf()}));i.position.set(0,.29,-.357),i.rotation.y=Math.PI,a.add(i),this.head=new t.g,this.head.position.y=.56,a.add(this.head);let n=this.head;t.$(new t.$e(.19,24,16),t.createToonMaterial({map:t.Nf()},{rim:1,hatch:0}),n,0,.19,0).scale.set(1.04,1,.98);for(let f of[-1,1])t.$(new t.$e(.042,8,6),t.Q.skin,n,f*.19,.17,0);t.$(new t.$e(.203,18,12,Math.PI/2+.95,Math.PI*2-1.9,0,Math.PI*.64),t.Q.hair,n,0,.195,-.004).scale.set(1.06,1.02,1.04);let s=(f,d,h,p,g,v,m=t.Q.hair)=>{t.$(new t.st(.045*v,.13*v,5).rotateX(Math.PI),m,n,f,d,h).rotation.set(p,0,g)};for(let f=-3;f<=3;f++){let d=f*.21;s(Math.sin(d)*.18,.265-Math.abs(f)*.008,Math.cos(d)*.18,-.55,-d*.6,1-Math.abs(f)*.06,f%2?t.Q.hairDark:t.Q.hair)}for(let f of[-1,1])s(f*.2,.21,.06,.1,f*.9,1.1),s(f*.21,.16,-.04,-.1,f*1.4,1,t.Q.hairDark),s(f*.15,.09,-.14,.7,f*1.1,1.1);s(0,.07,-.18,1.1,0,1.2),t.$(new t.$e(.222,20,12,0,Math.PI*2,0,Math.PI*.47),t.Q.cream,n,0,.22,-.012).scale.set(1.05,1.3,1.08),t.$(new t.$e(.15,12,9),t.Q.cream,n,0,.42000000000000004,-.07).scale.set(1.2,.85,1.2);let l=t.$(new t.He(.228,.012,5,28),t.Q.black,n,0,.29000000000000004,-.01);l.rotation.x=Math.PI/2+.18,l.scale.set(1.04,1.07,1);for(let f of[-1,1]){let d=t.$(new t.He(.024,.006,5,12),t.Q.piping,n,f*.24,.28500000000000003,-.03);d.rotation.y=Math.PI/2}let o=new t.g;o.position.set(0,.32,-.01),o.rotation.x=-.18,n.add(o),t.$(new t.d(.236,.236,.125,18,1,!0,-.82,1.64),t.Q.black,o),t.$(new t.d(.243,.243,.095,18,1,!0,-.74,1.48),t.Q.lens,o),t.$(new t.W(.12,.01,.012),t.Q.lensGlint,o,.07,.02,.233).rotation.z=-.12,t.$(new t.W(.07,.008,.012),t.Q.lensGlint,o,-.09,-.015,.226).rotation.z=-.12;let u=f=>{let d=new t.g;d.position.set(.26*f,.43,0),a.add(d),t.$(new t.$e(.105,9,7),t.Q.cream,d),t.$(new t.d(.095,.1,.22,9).translate(0,-.11,0),t.Q.cream,d);let h=new t.g;return h.position.y=-.22,d.add(h),t.$(new t.$e(.098,9,7),t.Q.navy,h),t.$(new t.d(.105,.1,.2,9).translate(0,-.1,0),t.Q.navy,h),t.$(new t.$e(.085,9,7).scale(.95,1.15,.85),t.Q.black,h,0,-.25,.01),{sh:d,el:h}};this.armL=u(1),this.armR=u(-1),t.$(new t.W(.01,.07,.08),t.Q.patch,this.armL.sh,.1,-.08,0)}update(r,e){this.t+=r,this.bindings.forEach((h,p)=>{h.position.copy(this.bindingAt[p]),h.quaternion.identity()});let a=this.pose,i=1-Math.exp(-r*10);a.crouch+=(e.crouch-a.crouch)*i,a.lean+=(e.lean-a.lean)*(1-Math.exp(-r*8)),a.twist+=(e.twist-a.twist)*i,a.air+=(+!!e.air-a.air)*(1-Math.exp(-r*6));let n=this.locomotion==="sit",s=this.skiing;n?this.#d(a):s?this.#u(r,e):this.#n(r,e);let l=e.protective||0;this.torso.rotation.x+=l*.2,this.head.rotation.x+=l*.25;for(let h of[this.armL,this.armR])h.sh.rotation.z*=1-l*.7,h.el.rotation.x+=(-1.6-h.el.rotation.x)*l;let o=!!this.fall;this.fall=e.fall?t.Cd(e.fall.time,e.fall.motion):null,o&&!this.fall&&this.model?.fadeFromPose(),this.fall?t.Rd(this,this.fall):e.shakeTime!=null&&t.Vd(this,e.shakeTime);let u=new t.Vector3(0,0,1);this.kneeOut=n?this.seat.kneeOut??.45:s?this.skiPose.x.kneeOut:this.boardPose.x.kneeOut,this.kneeShift=n?0:s?this.skiPose.x.kneeShift:this.boardPose.x.kneeShift;for(let h=0;h<2;h++){let p=h===0?1:-1,g=new t.Vector3(.12*p,0,0).applyEuler(this.hips.rotation).add(this.hips.position),v=this.feet[h].position.clone().add(new t.Vector3(0,.15,0)),m=.3,c=g.clone().sub(v),x=Math.min(c.length(),2*m-.001),T=v.clone().addScaledVector(c.normalize(),x/2),M=u.clone().addScaledVector(c,-u.dot(c)).normalize();M.x+=p*this.kneeOut+this.kneeShift,M.normalize();let E=T.addScaledVector(M,Math.sqrt(m*m-(x/2)**2));this.thighs[h].set(E,g),this.shins[h].set(v,E),this.knees[h].position.copy(E),this.cuffs[h].position.copy(v).add(new t.Vector3(0,.02,0))}n&&(this.#r(this.armL,this.seat.grips[0],1),this.#r(this.armR,this.seat.grips[1],-1)),this.reach&&this.reachAt.copy(this.reach),this.reachW+=((this.reach&&!n?1:0)-this.reachW)*(1-Math.exp(-r*6)),this.reachW<.001&&(this.reachW=0),this.throwT!==null&&(this.throwT+=r,(this.throwT>=this.throwLength||n)&&(this.throwT=null)),this.throwT!==null&&this.locomotion==="ride"?this.#c(this.throwT):this.reachW>0&&this.locomotion==="ride"&&this.#m(),this.body.rotation.x=0,this.fall?t.Ld(this.edge,this.fall):t.Wd(this.edge,e.roll??a.tumble,.65);let f=this.locomotion==="walk"||this.locomotion==="act",d=f||n||s&&!this.fall?Math.PI:Math.PI/2;this.body.rotation.y+=(d-this.body.rotation.y)*Math.min(1,r/.08),f||n?(this.edge.rotation.set(0,0,0),this.edge.position.set(0,0,0)):!s&&!this.fall&&(this.edge.position.y+=t.Kf+t.Gf*Math.abs(Math.sin(this.edge.rotation.z))),this.handSpots=this.locomotion==="ride"&&!this.fall?[this.#s(this.armL,this.mitts[0]),this.#s(this.armR,this.mitts[1])]:null,this.model?.update(r,this,this.locomotion,e.speed||0),s&&this.#f()}clearGround(r,e=!1){let a=t.Gd(this.root,r,e),i=this.fall?.hands;return i&&this.model&&(i[0][0]>0||i[1][0]>0)&&(i.forEach((n,s)=>{n[0]>0&&this.model.plantHand(t.zd(this.root,n,r),n[0],s?"Right":"Left")}),t.Gd(this.root,r)),a}#n(r,e){this.#a();let a=this.boardPose.update(r,e,this.t);this.#l(this.boardPose.back),this.edge.rotation.z=a.edge,this.hips.position.set(a.px,a.py,a.pz),this.hips.rotation.set(a.pPitch,a.pYaw,a.pRoll),this.torso.rotation.set(a.tPitch,a.tYaw,a.tRoll),this.#o(a);let i=this.hips.position;this.#r(this.armL,t.Lf.set(a.hlx,a.hly,a.hlz).add(i),1),this.#r(this.armR,t.Lf.set(a.hrx,a.hry,a.hrz).add(i),-1)}#l(r){if(r.w<.001)return;let e=this.feet[1],a=this.stance[1],i=r.w;e.position.set(a.x+(r.x-a.x)*i,a.y+(r.y-a.y)*i+.28*i*(1-i),a.z+(r.z-a.z)*i),e.rotation.set(r.pitch*i,r.yaw*i,0,"YXZ"),t.Hf.copy(e.quaternion).invert();for(let n of[2,3]){let s=this.bindings[n];s.position.copy(this.bindingAt[n]).add(a).sub(e.position).applyQuaternion(t.Hf),s.quaternion.copy(t.Hf)}}#o(r){let e=Math.cos(r.gPitch);t.Rf.set(-Math.sin(r.gYaw)*e,-Math.sin(r.gPitch),-Math.cos(r.gYaw)*e),t.zf.crossVectors(t.Bf.set(-Math.sin(r.gTilt),Math.cos(r.gTilt),0),t.Rf).normalize(),t.Bf.crossVectors(t.Rf,t.zf),t.Hf.setFromEuler(t.Uf.set(0,0,r.edge)).multiply(this.body.quaternion).multiply(this.hips.quaternion).multiply(this.torso.quaternion).invert(),this.head.quaternion.setFromRotationMatrix(t.Vf.makeBasis(t.zf,t.Bf,t.Rf)).premultiply(t.Hf);let a=2*Math.acos(Math.min(1,Math.abs(this.head.quaternion.w)));a>t.Wf&&this.head.quaternion.slerp(t.Hf.identity(),1-t.Wf/a)}#u(r,e){let a=this.skiPose.update(r,{lean:e.lean||0,speed:e.speed||0,air:!!e.air,brake:!!e.brake,tuck:!!e.tuck,charge:e.charge||0,slip:e.slip||0,landing:e.landing||0,skate:e.skate},this.t);this.edge.rotation.z=a.roll,this.hips.position.set(a.px,a.py,a.pz),this.hips.rotation.set(a.pPitch,a.pYaw,a.pRoll),this.torso.rotation.set(a.tPitch,a.tYaw,a.tRoll),this.head.rotation.set(a.hPitch,a.hYaw,a.hRoll);let i=Math.tan(a.roll);for(let[s,l]of[[this.feet[0],"l"],[this.feet[1],"r"]]){let o=a[l+"x"];s.position.set(o,t.qd.sole+a[l+"y"]+o*i,a[l+"z"]),s.rotation.set(a[l+"Pitch"],a[l+"Yaw"],a[l+"Roll"],"YXZ")}let n=this.hips.position;this.#r(this.armL,t.Lf.set(a.hlx,a.hly,a.hlz).add(n),1),this.#r(this.armR,t.Lf.set(a.hrx,a.hry,a.hrz).add(n),-1)}#f(){let r=this.skiPose.x,e=this.fall?0:Math.tan(r.roll);this.body.updateMatrixWorld(!0);for(let[a,i,n]of[[0,"Left","pl"],[1,"Right","pr"]]){let s=this.poles[a],l=this.body.worldToLocal(this.#h(i,t.Lf)),o=t.Rf.set(r[n+"x"],r[n+"y"],r[n+"z"]).sub(l).normalize(),u=t.Jd.length,f=(l.x+o.x*u)*e;if(l.y+o.y*u<f){let d=Math.hypot(o.x,o.z)||1,h=Math.max(-1,(f-l.y)/u),p=Math.sqrt(1-h*h)/d;o.set(o.x*p,h,o.z*p)}s.position.copy(l),s.quaternion.setFromUnitVectors(t.If,o)}}#s(r,e){return r.el.updateWorldMatrix(!0,!1),this.body.worldToLocal(r.el.localToWorld(e.set(0,-.25,.01)))}#h(r,e){if(this.model)return this.model.palmAt(r,e);let a=(r==="Left"?this.armL:this.armR).el;return a.updateWorldMatrix(!0,!1),a.localToWorld(e.set(0,-.25,.01))}#d(r){let e=this.seat,{build:a}=this;this.hips.position.copy(e.hips),this.hips.position.y+=a.seat;let i=e.tilt,n=e.look;this.hips.rotation.set(i?.x??0,i?.y??0,i?.z??0);let s=e.fold??t.solveArmReachAngle(a,this.hips.position,e.grips[0]);this.torso.rotation.set(s,r.twist*.12,-r.lean),this.head.rotation.set(-s*.85+(n?.x??0),-r.twist*.15+(n?.y??0),r.lean*.6+(n?.z??0)),this.feet.forEach((l,o)=>{l.position.copy(e.feet[o]),l.rotation.set(0,e.toes?.[o]??0,0)})}startThrow(){if(this.locomotion!=="ride"&&this.locomotion!=="walk")return!1;let r=this.locomotion==="walk"?this.model?.pitching:null;return this.throwLength=r?.clip.duration??t.bt.length,this.throwRelease=r?1.6:t.bt.release,this.throwUsesPitch=!!r,this.throwT=0,!0}hand(r=new t.Vector3){return this.model?this.model.handAt(r):(this.armR.el.updateWorldMatrix(!0,!1),this.armR.el.localToWorld(r.set(0,-.25,.01)))}#c(r){let e=t.yt(t.xt,r),a=t.vt(r),{sh:i,el:n}=this.armR;this.torso.rotation.y+=e.turn*a,this.head.rotation.y-=e.turn*a*.7;let s=i.quaternion.clone(),l=n.quaternion.clone();this.root.updateMatrixWorld(!0),this.body.updateMatrixWorld(!0);let o=this.body.worldToLocal(i.getWorldPosition(t.Lf)).add(new t.Vector3().fromArray(e.rh));this.#r(this.armR,o,-1),i.quaternion.slerpQuaternions(s,i.quaternion.clone(),a),n.quaternion.slerpQuaternions(l,n.quaternion.clone(),a)}#m(){let r=this.reachW,{sh:e,el:a}=this.armR;this.torso.rotation.x+=.25*r;let i=e.quaternion.clone(),n=a.quaternion.clone();this.root.updateMatrixWorld(!0),this.#r(this.armR,this.body.worldToLocal(t.Lf.copy(this.reachAt)),-1),e.quaternion.slerpQuaternions(i,e.quaternion.clone(),r),a.quaternion.slerpQuaternions(n,a.quaternion.clone(),r)}#r(r,e,a){this.body.updateMatrixWorld(!0);let i=this.body.worldToLocal(r.sh.getWorldPosition(new t.Vector3)),n=e.clone().sub(i),s=Math.min(n.length(),.4699);n.normalize();let l=(t.qf**2-t.Jf**2+s**2)/(2*s),o=Math.sqrt(Math.max(0,t.qf**2-l**2)),u=new t.Vector3(a*.5,-.45,-.75);u.addScaledVector(n,-u.dot(n)),u.length()<.4&&(u.x+=a*.8),u.addScaledVector(n,-u.dot(n)).normalize();let f=i.clone().addScaledVector(n,l).addScaledVector(u,o),d=i.clone().addScaledVector(n,s),h=this.hips.quaternion.clone().multiply(this.torso.quaternion).invert();r.sh.quaternion.setFromUnitVectors(t.If,f.clone().sub(i).normalize().applyQuaternion(h)),h.premultiply(r.sh.quaternion.clone().invert()),r.el.quaternion.setFromUnitVectors(t.If,d.sub(f).normalize().applyQuaternion(h))}}}function $v(t){return class{constructor(r,{depthScale:e=1,lineWidth:a=1,lineOpacity:i=.72}={}){this.renderer=r;let n={type:t.C};this.colorRT=new t.u(1,1,{...n,samples:4}),this.colorRT.depthTexture=new t.ee(1,1,t.pe),this.normalRT=new t.u(1,1,{...n,samples:4}),this.normalMat=new t.re({side:2}),this.material=new t.Ze({vertexShader:t.tp,fragmentShader:t.np,uniforms:{tColor:{value:this.colorRT.texture},tDepth:{value:this.colorRT.depthTexture},tNormal:{value:this.normalRT.texture},uRes:{value:new t.L(1,1)},uNear:{value:.1},uFar:{value:1e3},uPixelRatio:{value:1},uDepthScale:{value:e},uLineWidth:{value:a},uLineOpacity:{value:i},uNormalStep:{value:1},uInk:{value:new t.K("#1f2a33")},uFogInk:{value:new t.K("#5d8f97")},uFogRange:{value:new t.L(800,14e3)}},depthTest:!1,depthWrite:!1}),this.quad=new t.c(new t.me(2,2),this.material),this.quad.frustumCulled=!1,this.quadScene=new t.w,this.quadScene.add(this.quad),this.quadCam=new t.k(-1,1,1,-1,0,1),this.view=[1,1,1],this.quality={msaa:4,outline:"high"}}setSize(r,e,a){this.view=[r,e,a];let i=Math.floor(r*a),n=Math.floor(e*a);this.colorRT.setSize(i,n);let s=this.quality.outline==="low"?.5:1;this.normalRT.setSize(Math.max(1,Math.round(i*s)),Math.max(1,Math.round(n*s))),this.material.uniforms.uRes.value.set(i,n),this.material.uniforms.uPixelRatio.value=a,this.material.uniforms.uNormalStep.value=1/s}setQuality({msaa:r=4,outline:e="high"}={}){this.quality={msaa:r,outline:e};let a=e==="high"?r:0;for(let[i,n]of[[this.colorRT,r],[this.normalRT,a]])i.samples!==n&&(i.samples=n,i.dispose());this.setSize(...this.view)}render(r,e,a,i=[]){let n=this.renderer;n.setRenderTarget(this.colorRT),n.render(r,e);let s=r.background,l=r.fog;r.background=null,r.fog=null,r.overrideMaterial=this.normalMat;let o=new Map(i.map(v=>[v,v.visible]));r.traverse(v=>{(v.isSprite||v.isLine||v.isPoints||v.isMesh&&!v.geometry.attributes.normal)&&(o.has(v)||o.set(v,v.visible))});for(let v of o.keys())v.visible=!1;let u=n.getClearColor(new t.K),f=n.getClearAlpha();n.setClearColor(0,0),n.setRenderTarget(this.normalRT),n.clear();let d=n.shadowMap.autoUpdate;n.shadowMap.autoUpdate=!1;let h=e.far,p=t.ep/this.material.uniforms.uDepthScale.value;this.quality.outline!=="high"&&e.isPerspectiveCamera&&p<h&&(e.far=p,e.updateProjectionMatrix()),n.render(r,e),e.far!==h&&(e.far=h,e.updateProjectionMatrix()),n.shadowMap.autoUpdate=d;for(let[v,m]of o)v.visible=m;n.setClearColor(u,f),r.overrideMaterial=null,r.background=s,r.fog=l;let g=this.material.uniforms;g.uNear.value=e.near,g.uFar.value=e.far,n.setRenderTarget(null),n.render(this.quadScene,this.quadCam)}}}function Kv(t){return function(e,a,i){let n=document.createElement("canvas");n.width=e,n.height=a,i(n.getContext("2d"),e,a);let s=new t.qe(n);return s.colorSpace=t.he,s.anisotropy=8,s}}function Zv(t){return function(){let e=[[0,"#5d6264"],[.16,"#6f7472"],[.3,"#7d6a5a"],[.44,"#8f7a63"],[.56,"#a48a6c"],[.68,"#8c735d"],[.8,"#a79680"],[.9,"#7f6a58"]],a=t.ap(512,1024,(i,n,s)=>{e.forEach(([u,f],d)=>{let h=d+1<e.length?e[d+1][0]:1.01;i.fillStyle=f,i.beginPath();for(let p=0;p<=n;p+=8){let g=Math.sin(p/n*Math.PI*2*(2+d))*.012+Math.sin(p/n*Math.PI*2*5+d)*.006;i[p?"lineTo":"moveTo"](p,s-(u+(d?g:-.1))*s)}for(let p=n;p>=0;p-=8){let g=Math.sin(p/n*Math.PI*2*(3+d))*.012+Math.sin(p/n*Math.PI*2*4+d)*.006;i.lineTo(p,s-(h+g)*s)}i.fill()});let l=7,o=()=>(l=l*16807%2147483647)/2147483647;for(let u=0;u<260;u++){let f=o()*n,d=o()*s;i.fillStyle=o()>.5?"rgba(40,46,52,0.35)":"rgba(250,245,235,0.25)",i.beginPath(),i.ellipse(f,d,2+o()*6,1.5+o()*3,o()*3,0,Math.PI*2),i.fill()}});return a.wrapS=t.D,a}}function Qv(t){return function(){let e=t.ap(1024,128,(a,i,n)=>{a.fillStyle="#7a5640",a.fillRect(0,0,i,n);for(let s=0;s<46;s++){let l=s/46*n;a.strokeStyle=s%3?"rgba(60,38,26,0.25)":"rgba(150,110,80,0.25)",a.lineWidth=1+s%4,a.beginPath();for(let o=0;o<=i;o+=16)a[o?"lineTo":"moveTo"](o,l+Math.sin(o*.006+s)*4+Math.sin(o*.031+s*2)*1.5);a.stroke()}});return e.wrapS=e.wrapT=t.D,e}}function Jv(t){return function(e,a){return t.ap(2048,160,(i,n,s)=>{let l=i.createLinearGradient(0,0,0,s);l.addColorStop(0,"#e7c873"),l.addColorStop(1,"#c9a24f"),i.fillStyle=l,i.fillRect(0,0,n,s),i.strokeStyle="#6d5124",i.lineWidth=6,i.strokeRect(10,10,n-20,s-20),i.fillStyle="#3b2c14",i.textAlign="center",i.textBaseline="middle",i.font='700 70px "Patrick Hand SC", "PingFang SC", sans-serif',i.fillText(e,n/2,62),i.font='38px "Patrick Hand SC", "PingFang SC", sans-serif',i.fillText(a,n/2,118)})}}function tx(t){return function(){return t.ap(256,256,e=>{e.fillStyle="#d8b863",e.beginPath(),e.arc(128,128,124,0,Math.PI*2),e.fill(),e.strokeStyle="#6d5124",e.lineWidth=6,e.beginPath(),e.arc(128,128,112,0,Math.PI*2),e.stroke(),e.fillStyle="#3b2c14",e.beginPath(),e.moveTo(128,34),e.lineTo(156,140),e.lineTo(128,124),e.lineTo(100,140),e.closePath(),e.fill(),e.font='700 54px "Patrick Hand SC", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("N",128,186)})}}function ex(t){return function(e,a,i,n,s,l){let o=[],u=[],f=[],{verts:d,size:h,cells:p,x0:g,z0:v}=e,m=0,c=null;a.forEach((T,M)=>{let E=g+T%d/p*h,y=v+Math.floor(T/d)/p*h;c&&(m+=Math.hypot(E-c[0],y-c[1])),c=[E,y];let A=n(e.h[T]),w=s(e.h[T]);if(o.push(E,A,y,E,w,y),u.push(m/1600,l(A),m/1600,l(w)),M){let b=M*2;f.push(b-2,b-1,b,b,b-1,b+1)}});let x=new t.z;if(x.setAttribute("position",new t.i(o,3)),x.setAttribute("uv",new t.i(u,2)),x.setIndex(f),x.computeVertexNormals(),new t.Vector3().fromBufferAttribute(x.attributes.normal,0).dot(i)<0){let T=x.index.array;for(let M=0;M<T.length;M+=3)[T[M+1],T[M+2]]=[T[M+2],T[M+1]];x.computeVertexNormals()}return x}}function ax(t){return function(e,{baseY:a,top:i,title:n,subtitle:s}){let l=new t.g,o=e.verts,u=[{ks:[...Array(o).keys()],out:new t.Vector3(0,0,-1)},{ks:[...Array(o).keys()].map(A=>(o-1)*o+A),out:new t.Vector3(0,0,1)},{ks:[...Array(o).keys()].map(A=>A*o),out:new t.Vector3(-1,0,0)},{ks:[...Array(o).keys()].map(A=>A*o+o-1),out:new t.Vector3(1,0,0)}],f=t.createToonMaterial({map:t.op()},{hatch:1}),d=t.createToonMaterial({color:"#f4f6f1"},{hatch:1}),h=A=>(A-a)/(i-a);for(let A of u){let w=new t.c(t.up(e,A.ks,A.out,S=>S+.5,S=>S-t.ip,h),d),b=new t.c(t.up(e,A.ks,A.out,S=>S-t.ip,()=>a,h),f);b.receiveShadow=w.receiveShadow=!0,l.add(w,b)}let p=t.sp(),g=t.createToonMaterial({map:p,color:"#b89a86"},{hatch:1}),v=e.size,[m,c]=e.center,x=[{w:v+260,h:170,y:a},{w:v+520,h:120,y:a-170}];for(let A of x){let w=new t.c(new t.W(A.w,A.h,A.w),g);w.position.set(m,A.y-A.h/2,c),w.receiveShadow=!0,w.castShadow=!0,l.add(w)}let T=new t.c(new t.me(2400,150),t.createToonMaterial({map:t.cp(n,s)},{hatch:0}));T.position.set(m,a-85,c+(v+260)/2+1.5),l.add(T);let M=new t.c(new t.B(95,40),t.createToonMaterial({map:t.lp()},{hatch:0}));M.rotation.x=-Math.PI/2,M.position.set(m+v/2+65,a+1.5,c+v/2+65),M.scale.setScalar(.55),l.add(M);let E=t.ap(256,256,A=>{let w=A.createRadialGradient(128,128,30,128,128,128);w.addColorStop(0,"rgba(20,50,55,0.38)"),w.addColorStop(.55,"rgba(20,50,55,0.18)"),w.addColorStop(1,"rgba(20,50,55,0)"),A.fillStyle=w,A.fillRect(0,0,256,256)}),y=new t.c(new t.me(v*2.1,v*2.1),new t.ot({map:E,transparent:!0,depthWrite:!1}));return y.rotation.x=-Math.PI/2,y.position.set(m,a-290-2,c),y.renderOrder=-1,l.add(y),{group:l,shadow:y,floorY:a-290}}}function ix(t){return function(e){return()=>(e=e*16807%2147483647)/2147483647}}function nx(t){return function(e,a,{min:i,max:n,treeline:s}){let l=new t.g,o=i-260,u=3400,f=e.verts,d=[{ks:[...Array(f).keys()],out:new t.Vector3(0,0,-1)},{ks:[...Array(f).keys()].map(w=>(f-1)*f+w),out:new t.Vector3(0,0,1)},{ks:[...Array(f).keys()].map(w=>w*f),out:new t.Vector3(-1,0,0)},{ks:[...Array(f).keys()].map(w=>w*f+f-1),out:new t.Vector3(1,0,0)}],h=t.createToonMaterial({map:t.op()},{hatch:1}),p=w=>(w-o)/(n-o);for(let w of d)l.add(new t.c(t.up(e,w.ks,w.out,b=>b-119,()=>o,p),h));l.add(new t.c(t.hp(e,o,u),t.createToonMaterial({vertexColors:!0},{hatch:1}))),l.add(new t.c(t.mp(e,a,s),t.createToonMaterial({vertexColors:!0},{hatch:1})));let g=e.center[0],v=e.center[1],m=t.fp(29),c=t.createToonMaterial({color:"#857a6c"},{hatch:1}),x=new t.Xe(1,0),T=[];for(let w=0;w<7;w++){let b=w/7*Math.PI*2+m()*.6,S=120+m()*260,L=new t.c(x,c),U=5e3+m()*1400;L.position.set(g+Math.cos(b)*U,o-300-m()*1500,v+Math.sin(b)*U),L.scale.set(S,S*.75,S*.9),L.rotation.set(m()*3,m()*3,m()*3),L.userData.y=L.position.y,T.push(L),l.add(L)}let M=t.createToonMaterial({color:"#ffffff"},{hatch:0}),E=new t.Xe(1,2),y=[];for(let w=0;w<6;w++){let b=new t.g,S=4+Math.floor(m()*3);for(let U=0;U<S;U++){let G=new t.c(E,M),N=260+m()*320*(1-Math.abs(U/(S-1)-.5));G.scale.set(N,N*.8,N),G.position.set((U-(S-1)/2)*380,N*.25,(m()-.5)*300),b.add(G)}let L=w%2==0;b.userData={a:w/6*Math.PI*2+m()*.5,R:4300+m()*1300,y:L?n-500+m()*700:o-200+m()*900},y.push(b),l.add(b)}l.update=w=>{T.forEach((b,S)=>{b.position.y=b.userData.y+Math.sin(w*.35+S*1.7)*60,b.rotation.y+=6e-4});for(let b of y){let S=b.userData.a+w*.006;b.position.set(g+Math.cos(S)*b.userData.R,b.userData.y,v+Math.sin(S)*b.userData.R),b.rotation.y=-S}};let A=(n+o-u)/2;return l.userData={center:new t.Vector3(g,A,v),radius:Math.hypot(e.half*Math.SQRT2,(n-(o-u))/2)},l.update(0),l}}function rx(t){return function(e,a,i){let n=Math.floor(e.size/24),s=new t.Vector3,l=new t.K,o=new t.K("#3e5a4f"),u=new t.K("#557a63"),f=[],d=[],h=[],p=new Map,g=(m,c)=>{let x=c*(n+1)+m;if(!p.has(x)){let T=e.x0+m*24,M=e.z0+c*24;p.set(x,f.length/3),f.push(T,e.heightAt(T,M)+14,M),l.copy(o).lerp(u,t.Oa(T*.004,M*.004)),d.push(l.r,l.g,l.b)}return p.get(x)};for(let m=0;m<n;m++)for(let c=0;c<n;c++){let x=e.x0+(c+.5)*24,T=e.z0+(m+.5)*24;if(!e.inside(x,T,30)||e.holeAt(x,T)||e.heightAt(x,T)>i-60+(t.Oa(x*.006,T*.006)-.5)*160||a.distAt(x,T)<22||e.normalAt(x,T,s).y<.78||t.Oa(x*.012+40,T*.012)<.42)continue;let M=g(c,m),E=g(c+1,m),y=g(c,m+1),A=g(c+1,m+1);h.push(M,y,E,E,y,A)}let v=new t.z;return v.setAttribute("position",new t.i(f,3)),v.setAttribute("color",new t.i(d,3)),v.setIndex(h),v.computeVertexNormals(),v}}function sx(t){return function(e,a,i){let{x0:n,z0:s,size:l}=e,o=n+l/2,u=s+l/2,f=[];for(let b=0;b<4;b++)for(let S=0;S<7;S++){let L=S/7,[U,G]=[[L,0],[1,L],[1-L,1],[0,1-L]][b];f.push([n+U*l,s+G*l])}let d=t.fp(7),h=[];for(let b=0;b<6;b++){let S=b/6,L=+!!b;h.push(f.map(([U,G])=>{let N=(1-S)**.75*(1+(d()-.5)*.22*L),W=a-i*S**1.3+(d()-.5)*i*.07*L;return new t.Vector3(o+(U-o)*N,W,u+(G-u)*N)}))}let p=new t.Vector3(o+180,a-i,u-120),g=["#8f7a63","#7d6a5a","#6f7472","#5d6264","#6a6e6c","#585d60"].map(b=>new t.K(b)),v=[],m=[],c=new t.Vector3,x=new t.Vector3,T=new t.Vector3,M=new t.Vector3,E=new t.K,y=(b,S,L,U)=>{c.crossVectors(x.subVectors(S,b),T.subVectors(L,b)),M.addVectors(b,S).add(L).divideScalar(3),c.x*(M.x-o)+c.z*(M.z-u)<0&&([S,L]=[L,S]),E.copy(g[Math.min(U,g.length-1)]).multiplyScalar(.9+d()*.2);for(let G of[b,S,L])v.push(G.x,G.y,G.z),m.push(E.r,E.g,E.b)},A=f.length;for(let b=0;b<6;b++)for(let S=0;S<A;S++){let L=h[b][S],U=h[b][(S+1)%A];if(b===5){y(L,U,p,b);continue}let G=h[b+1][S],N=h[b+1][(S+1)%A];y(L,U,G,b),y(U,N,G,b)}let w=new t.z;return w.setAttribute("position",new t.i(v,3)),w.setAttribute("color",new t.i(m,3)),w.computeVertexNormals(),w}}function lx(t){return{H:[[4.35,0,5.65,3.9],[4.35,6.1,5.65,10]],E:[[3.3,2.55,10,3.85],[3.3,6.15,10,7.45]],M:[[2.8,3.3,4.1,10],[5.9,3.3,7.2,10]],U:[[4.35,0,5.65,6.9]],S:[[3,2.55,10,3.85],[0,6.15,7,7.45]],K:[[3,0,4.3,3.9],[3,6.1,4.3,10],[6.3,4.35,10,5.65]],I:[[0,2.6,3.4,7.4],[6.6,2.6,10,7.4]]}}function ox(t){return function(e,a){let i=e.attributes.normal,n=new Float32Array(i.count*3);for(let s=0;s<i.count;s++){let l=i.getX(s),o=i.getY(s),u=i.getZ(s),f=u>.5?a?t.Cp.slot:t.Cp.cream:u<-.5?t.Cp.back:o>.5?t.Cp.top:o<-.5?t.Cp.bottom:l<0?t.Cp.left:t.Cp.right;n.set([f.r,f.g,f.b],s*3)}return e.setAttribute("color",new t.et(n,3)),e}}function ux(t){return function(e){let a=(l,o)=>[...new Set([0,t.vp,...e.flatMap(u=>[u[l],u[o]])])].sort((u,f)=>u-f),i=a(0,2),n=a(1,3),s=[t.wp(new t.W(t.vp,t.vp,t.bp).translate(0,0,-7.5/2),!0)];for(let l=0;l<i.length-1;l++)for(let o=0;o<n.length-1;o++){let u=(i[l]+i[l+1])/2,f=(n[o]+n[o+1])/2;if(e.some(([h,p,g,v])=>u>h&&u<g&&f>p&&f<v))continue;let d=new t.W(i[l+1]-i[l],n[o+1]-n[o],t.yp);s.push(t.wp(d.translate(u-t.vp/2,t.vp/2-f,t.yp/2),!1))}return t.mt(s)}}function fx(t){return function(){let e=new t.g,a=new t.g;e.add(a);let i=new t.ot({vertexColors:!0,fog:!1}),n=t.fp(3),s=[];t._p.forEach((o,u)=>[...o].forEach((f,d)=>{let h=new t.c(t.Tp(t.gp[f]),i);h.position.set((d-(o.length-1)/2)*11.3,(.5-u)*11.3,0),h.userData={home:h.position.clone(),tilt:new t.m((n()-.5)*.1,(n()-.5)*.14,(n()-.5)*.08),phase:n()*Math.PI*2,v:new t.Vector3,w:new t.Vector3,delay:0},a.add(h),s.push(h)}));let l=-1;return{group:e,update(o,u,f,d,h){if(!e.visible)return;let p=1-Math.exp(-o*3);if(l<0){let g=2*d*Math.tan(t.MathUtils.degToRad(f.fov)/2),v=Math.min(.56*g*f.aspect/t.xp,.34*g/t.Sp);e.position.set(0,g*.08,-d),e.scale.setScalar(v),a.rotation.x+=(.22-h.y*.14-a.rotation.x)*p,a.rotation.y+=(h.x*.28-a.rotation.y)*p;for(let m of s){let{home:c,tilt:x,phase:T}=m.userData;m.position.y=c.y+Math.sin(u*1.1+T)*.25,m.rotation.set(x.x+Math.sin(u*.7+T)*.025,x.y,x.z)}}else{l+=o;for(let g of s){let v=g.userData;l<v.delay||(v.v.y-=70*o,g.position.addScaledVector(v.v,o),g.rotation.x+=v.w.x*o,g.rotation.y+=v.w.y*o,g.rotation.z+=v.w.z*o)}l>2.4&&(e.visible=!1)}},leave(){l>=0||(l=0,s.forEach((o,u)=>{let f=o.userData;f.delay=u*.05+n()*.05,f.v.set(f.home.x*1.6+(n()-.5)*14,22+f.home.y*1.5+n()*14,4+n()*8),f.w.set((n()-.5)*7,(n()-.5)*7,(n()-.5)*5)}))}}}}function hx(t){return function(e=150){let a=t.fp(41),i=[],n=new Float32Array(e*3),s=new Float32Array(e);for(let f=0;f<e;f++)i.push({u:a()*2.3-1.15,v:a()*2.3-1.15,z:.2+a()*1.1,fall:.025+a()*.035,phase:a()*6.3}),s[f]=2.5+a()*a()*7;let l=new t.z;l.setAttribute("position",new t.et(n,3)),l.setAttribute("aSize",new t.et(s,1));let o=new t.Ze({uniforms:{uScale:{value:1},uOpacity:{value:1},uColor:{value:new t.K("#f2faf6")}},vertexShader:`
      attribute float aSize;
      uniform float uScale;
      void main() {
        gl_PointSize = aSize * uScale;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 uColor;
      uniform float uOpacity;
      void main() {
        float a = 1.0 - smoothstep(0.3, 0.5, length(gl_PointCoord - 0.5));
        if (a <= 0.0) discard;
        gl_FragColor = vec4(uColor, a * uOpacity);
      }`,transparent:!0,depthWrite:!1}),u=new t.fe(l,o);return u.frustumCulled=!1,{points:u,set opacity(f){o.uniforms.uOpacity.value=f,u.visible=f>0},update(f,d,h,p,g){if(!u.visible)return;let v=Math.tan(t.MathUtils.degToRad(h.fov)/2),m=v*h.aspect;i.forEach((c,x)=>{c.v-=c.fall*f,c.u+=Math.sin(d*.5+c.phase)*.012*f,c.v<-1.15&&(c.v=1.15,c.u=a()*2.3-1.15);let T=c.z*p;n.set([c.u*m*T,c.v*v*T,-T],x*3)}),l.attributes.position.needsUpdate=!0,o.uniforms.uScale.value=g}}}}function dx(t){return function(e){let a=window.matchMedia("(prefers-reduced-motion: reduce)"),i=[];for(let n=0;n<9;n++){let s=document.createElement("i");e.appendChild(s),i.push({el:s,a:n/9*Math.PI*2+Math.sin(n*7.1)*.4,r:.55+n*37%10/30,s:.75+n*53%10/25})}return n=>{if(e.style.visibility=n>0?"visible":"hidden",n<=0)return;if(a.matches){for(let l of i)l.el.style.display="none";e.style.opacity=n,e.style.backgroundColor="rgb(251, 250, 245)";return}let s=Math.max(window.innerWidth,window.innerHeight);for(let l of i){l.el.style.display="";let o=(1-n)*l.r*s;l.el.style.transform=`translate(${Math.cos(l.a)*o}px, ${Math.sin(l.a)*o}px) scale(${l.s*(.5+n*1.1)})`}e.style.opacity=Math.min(1,n*2.5),e.style.backgroundColor=`rgba(251, 250, 245, ${t.MathUtils.smoothstep(n,.7,1)})`}}}function cx(t){return function(e){return e.kind==="run"?`run:${e.id}`:e.kind==="lift"?`lift:${e.id}:${e.end}`:`lodge:${e.id}`}}function mx(t){return function(e){let[a,i,n]=String(e??"").split(":");return i?a==="run"||a==="lodge"?{kind:a,id:i}:a==="lift"?{kind:a,id:i,end:t.kp.has(n)?n:"bottom"}:null:null}}function gx(t){return()=>t.parseDestination(new URLSearchParams(location.search).get("at"))}function px(t){return function(e,a,i){let n=a.find(o=>String(o.id)===String(i));if(!n)return null;let s=n.name?a.filter(o=>o.name===n.name):[n],l=null;for(let o of s)for(let u of[0,o.points.length-1]){let[f,d]=o.points[u],h=e.heightAt(f,d);(!l||h>l.y)&&(l={run:o,x:f,y:h,z:d,points:u?[...o.points].reverse():o.points})}return l}}function Mx(t){return function({x:e,z:a,bearing:i,lift:n}){return[Math.round(e),Math.round(a),Math.round(i),...n?[n]:[]].join(",")}}function vx(t){return function(e){let[a,i,n,s]=String(e??"").split(",");return[a,i].every(l=>l!==""&&Number.isFinite(+l))?{x:+a,z:+i,bearing:+n||0,lift:s||null}:null}}function xx(t){return function(e){try{e?localStorage.setItem(t.Pp,JSON.stringify({at:t.encodePlayerPosition(e),t:Date.now()})):localStorage.removeItem(t.Pp)}catch{}}}function wx(t){return function(e){let a=(i,n)=>{try{let{at:s,t:l}=JSON.parse(i);return Date.now()-l<n?t.parsePlayerPosition(s):null}catch{return null}};window.addEventListener("storage",i=>{i.key===t.Pp&&e(i.newValue?a(i.newValue,1/0):null)});try{return a(localStorage.getItem(t.Pp),t.Fp)}catch{return null}}}function Ex(t){return function(e){try{sessionStorage.setItem(t.Bp,e)}catch{}}}function bx(t){return function(){try{let e=sessionStorage.getItem(t.Bp);return sessionStorage.removeItem(t.Bp),e}catch{return null}}}function Tx(t){return{丁香道:["Dingxiang","Lilac"],不冻泉道:["Budongquan","Unfrozen Spring"],也麦盖特道:["Yemaigaite"],云杉道:["Yunshan","Spruce"],云湖道:["Yunhu","Cloud Lake"],云霄峰道:["Yunxiaofeng","Sky-High Peak"],五彩滩道:["Wucaitan","Five-Colour Shoal"],五指泉道:["Wuzhiquan","Five-Finger Spring"],伊雷木湖道:["Yileimuhu","Yileimu Lake"],冷杉道:["Lengshan","Fir"],卧龙湾道:["Wolongwan","Sleeping Dragon Bay"],友谊峰道:["Youyifeng","Friendship Peak"],双湖道:["Shuanghu","Twin Lakes"],可可托海道:["Keketuohai","Koktokay"],吉克普林道:["Jikepulin"],响泉道:["Xiangquan","Echoing Spring"],喀纳斯道:["Kanasi","Kanas"],圣泉道:["Shengquan","Holy Spring"],将军山道:["Jiangjunshan","General's Mountain"],山楂道:["Shanzha","Hawthorn"],巴丹莉道:["Badanli"],干湖道:["Ganhu","Dry Lake"],月亮湾道:["Yueliangwan","Moon Bay"],望泉道:["Wangquan","Spring View"],柳兰道:["Liulan","Fireweed"],泰加林道:["Taijialin","Taiga"],清泉道:["Qingquan","Clear Spring"],滴水泉道:["Dishuiquan","Dripping Spring"],狼山道:["Langshan","Wolf Mountain"],白哈巴道:["Baihaba"],白杨道:["Baiyang","Poplar"],白桦道:["Baihua","Birch"],白沙湖道:["Baishahu","White Sand Lake"],白湖道:["Baihu","White Lake"],盘古道:["Pangu"],石泉道:["Shiquan","Stone Spring"],神仙湾道:["Shenxianwan","Immortals' Bay"],神石城道:["Shenshicheng","Stone City"],禾木道:["Hemu"],红柳道:["Hongliu","Red Willow"],美丽峰道:["Meilifeng","Beautiful Peak"],芍药道:["Shaoyao","Peony"],花楸道:["Huaqiu","Rowan"],蔷薇道:["Qiangwei","Wild Rose"],蝴蝶泉道:["Hudiequan","Butterfly Spring"],谷帘泉道:["Gulianquan","Curtain Spring"],贾登峪道:["Jiadengyu"],连接道:["Lianjie","Connector"],野卡峡道:["Yekaxia","Yeka Gorge"],金莲花道:["Jinlianhua","Globeflower"],青格里道:["Qinggeli"],静泉谷:["Jingquangu","Quiet Spring Valley"],驼颈湾道:["Tuojingwan","Camel's Neck Bay"],鸭泽湖道:["Yazehu","Duck Marsh Lake"],黑湖道:["Heihu","Black Lake"]}}function yx(t){return{easy:{label:"Easy",color:"#4f8fd6",rank:0},novice:{label:"Novice",color:"#4f8fd6",rank:0},intermediate:{label:"Intermediate",color:"#d9534a",rank:1},advanced:{label:"Advanced",color:"#23303a",rank:2},expert:{label:"Expert",color:"#23303a",rank:3},freeride:{label:"Freeride",color:"#f08a24",rank:3}}}function Rx(t){return{gondola:"Gondola",chair_lift:"Chairlift",magic_carpet:"Magic carpet",drag_lift:"Drag lift","t-bar":"T-bar"}}function Ax(t){return function(e){let a=t.Gp[e.type]||"Lift",i=e.name&&e.name.match(/(\d+)号/);return{zh:e.name||"魔毯",en:i?`${a} No. ${i[1]}`:a}}}const B={get __vite__mapDeps(){return Fg},get e(){return pa},get t(){return ga},get n(){return ma},get r(){return Gd},get i(){return Oa},get a(){return Kd},get o(){return mc},get Vector3(){return xt},get c(){return Pe},get l(){return Hd},get u(){return xe},get d(){return xp},get f(){return _a},get p(){return Qd},get m(){return Da},get h(){return Na},get g(){return vp},get _(){return va},get v(){return ec},get y(){return oc},get b(){return me},get x(){return Mp},get S(){return pp},get C(){return Se},get w(){return gp},get T(){return ze},get E(){return Ci},get D(){return Yd},get O(){return Wd},get k(){return vi},get ee(){return Qe},get A(){return tc},get j(){return ae},get M(){return We},get N(){return Fa},get te(){return jd},get P(){return xi},get ne(){return ra},get re(){return mp},get ie(){return cp},get ae(){return Pi},get oe(){return $d},get F(){return dp},get se(){return dc},get I(){return Zt},get L(){return de},get ce(){return Re},get le(){return wi},get ue(){return Zd},get de(){return Ei},get fe(){return hp},get pe(){return Ti},get me(){return Ai},get he(){return Vd},get ge(){return fp},get _e(){return up},get ve(){return op},get ye(){return ic},get be(){return da},get xe(){return lp},get Se(){return sp},get Ce(){return rp},get we(){return ne},get Te(){return hc},get MathUtils(){return Ne},get Ee(){return np},get De(){return ip},get z(){return ta},get Oe(){return Mc},get ke(){return qd},get Ae(){return sc},get je(){return ap},get Me(){return pc},get Ne(){return xc},get B(){return ep},get Pe(){return Ri},get Fe(){return tp},get Ie(){return ac},get Le(){return Jg},get V(){return gc},get Re(){return yi},get ze(){return lc},get H(){return wc},get U(){return Xd},get Be(){return nc},get Ve(){return Ma},get W(){return La},get He(){return Qg},get Ue(){return be},get We(){return Zg},get Ge(){return Ye},get Ke(){return Kg},get qe(){return $g},get Je(){return cc},get Ye(){return Li},get Xe(){return jg},get Ze(){return Ae},get Qe(){return Bd},get $e(){return qg},get et(){return ca},get tt(){return Yg},get nt(){return bi},get rt(){return Je},get it(){return Jd},get at(){return ge},get ot(){return vc},get st(){return Xg},get ct(){return uc},get G(){return Xt},get K(){return jt},get lt(){return fc},get ut(){return Wg},get dt(){return rc},get ft(){return Ke},get pt(){return Ep},get mt(){return wp},get isMobileModelProfile(){return Tp},get loadGLTF(){return bp},get toonUniforms(){return yp},get createToonMaterial(){return Le},get vt(){return Cp},get yt(){return Pp},get bt(){return Ap},get xt(){return Rp},get loadingElement(){return Ea},set loadingElement(t){Ea=t},get loadingProgressElement(){return Tl},set loadingProgressElement(t){Tl=t},get loadingFootsteps(){return yl},set loadingFootsteps(t){yl=t},get loadingProgress(){return Rl},set loadingProgress(t){Rl=t},get setLoadingProgress(){return ji},set setLoadingProgress(t){ji=t},get setLoadingArrival(){return $i},set setLoadingArrival(t){$i=t},get finishLoading(){return Ki},set finishLoading(t){Ki=t},get kt(){return Di},get At(){return Ec},get J(){return kt},get Y(){return ct},get jt(){return Ee},get Mt(){return je},get Nt(){return bc},get Pt(){return Ui},get Ft(){return Tc},get It(){return yc},get Lt(){return Rc},get Rt(){return Ac},get zt(){return Pc},get Bt(){return Fe},get Vt(){return Cc},get Ht(){return Lc},get Ut(){return Dc},get Wt(){return Ge},get Gt(){return za},get Kt(){return sa},get qt(){return la},get Jt(){return oa},get Yt(){return ua},get Xt(){return Uc},get Zt(){return Ie},get Qt(){return ka},get $t(){return Ic},get en(){return Ba},get tn(){return Oe},get nn(){return Sc},get rn(){return Nc},get an(){return Ha},get on(){return Ga},get sn(){return ea},get cn(){return Ii},get ln(){return _c},get un(){return Oc},get dn(){return Fc},get fn(){return zc},get pn(){return kc},get mn(){return Bc},get hn(){return Hc},get gn(){return Gc},get _n(){return Vc},get vn(){return Si},get yn(){return xa},get bn(){return Ni},get xn(){return _i},get Sn(){return Oi},get Cn(){return Va},get wn(){return Wa},get Tn(){return Xa},get En(){return Ya},get Dn(){return qa},get On(){return ke},get kn(){return le},get An(){return oe},get jn(){return aa},get Mn(){return Wc},get Nn(){return Xc},get Pn(){return Yc},get Fn(){return qc},get In(){return jc},get Ln(){return $c},get Rn(){return Kc},get zn(){return Zc},get Bn(){return Qc},get Vn(){return Jc},get Hn(){return tm},get Un(){return em},get Wn(){return am},get Gn(){return im},get Kn(){return nm},get qn(){return rm},get Jn(){return sm},get Yn(){return lm},get Xn(){return om},get Zn(){return um},get Qn(){return fm},get $n(){return hm},get er(){return dm},get tr(){return cm},get nr(){return mm},get rr(){return gm},get ir(){return pm},get ar(){return Mm},get or(){return vm},get sr(){return xm},get cr(){return wm},get lr(){return Em},get ur(){return bm},get dr(){return Tm},get fr(){return ym},get pr(){return Rm},get mr(){return Am},get hr(){return Pm},get gr(){return Cm},get _r(){return Lm},get vr(){return Dm},get yr(){return Um},get br(){return Im},get xr(){return fa},get Sr(){return ja},get Cr(){return Sm},get wr(){return Ze},get Tr(){return $a},get Er(){return Nm},get Dr(){return _m},get Or(){return Om},get kr(){return Ka},get Ar(){return Fm},get jr(){return Za},get Mr(){return zm},get Nr(){return km},get Pr(){return Bm},get Fr(){return $e},get Ir(){return Hm},get Lr(){return Gm},get Rr(){return Vm},get zr(){return Wm},get Br(){return Xe},get Vr(){return Qa},get Hr(){return Ja},get Ur(){return Xm},get Wr(){return wa},get Gr(){return Ym},get Kr(){return qm},get qr(){return jm},get Jr(){return ti},get Yr(){return $m},get Xr(){return ei},get Zr(){return Km},get Qr(){return Zm},get $r(){return Qm},get ei(){return Jm},get ti(){return tg},get ni(){return eg},get ri(){return ag},get ii(){return ig},get ai(){return ng},get oi(){return rg},get si(){return sg},get ci(){return lg},get li(){return og},get ui(){return ug},get di(){return fg},get fi(){return hg},get pi(){return dg},get mi(){return ai},get hi(){return ii},get gi(){return cg},get _i(){return mg},get vi(){return gg},get yi(){return pg},get bi(){return Mg},get xi(){return vg},get Si(){return ni},get Ci(){return xg},get wi(){return wg},get Ti(){return Eg},get Ei(){return bg},get Di(){return Tg},get Oi(){return ri},get ki(){return Ve},get Ai(){return ha},get ji(){return yg},get Mi(){return Rg},get Ni(){return Ag},get Pi(){return Pg},get Fi(){return Cg},get Ii(){return Lg},get Li(){return Dg},get Ri(){return Ug},get zi(){return Ig},get Bi(){return Fi},get Vi(){return Sg},get Hi(){return Ng},get Ui(){return _g},get Wi(){return we},get Gi(){return Og},get WebGLRenderer(){return Lp},get qi(){return Al},set qi(t){Al=t},get Ji(){return Pl},set Ji(t){Pl=t},get Yi(){return Cl},set Yi(t){Cl=t},get graphicsSettingOptions(){return Ll},set graphicsSettingOptions(t){Ll=t},get graphicsModes(){return Dl},set graphicsModes(t){Dl=t},get Qi(){return Zi},set Qi(t){Zi=t},get $i(){return Qi},set $i(t){Qi=t},get ea(){return Ji},set ea(t){Ji=t},get createGraphicsController(){return tn},set createGraphicsController(t){tn=t},get liftEndpointPositions(){return en},set liftEndpointPositions(t){en=t},get summitObjectLayout(){return ba},set summitObjectLayout(t){ba=t},get summitObjectIds(){return si},set summitObjectIds(t){si=t},get findSummitObject(){return Ul},set findSummitObject(t){Ul=t},get worldDataBase(){return Il},set worldDataBase(t){Il=t},get decodeHeightU16(){return an},set decodeHeightU16(t){an=t},get editsDataDirectory(){return Sl},set editsDataDirectory(t){Sl=t},get loadOptionalWorldEdits(){return nn},set loadOptionalWorldEdits(t){nn=t},get loadWorldData(){return rn},set loadWorldData(t){rn=t},get Heightfield(){return Nl},set Heightfield(t){Nl=t},get PisteDistanceField(){return _l},set PisteDistanceField(t){_l=t},get serviceCentreLocations(){return li},set serviceCentreLocations(t){li=t},get hotSpringLocation(){return oi},set hotSpringLocation(t){oi=t},get ha(){return ui},set ha(t){ui=t},get ga(){return sn},set ga(t){sn=t},get _a(){return Ol},set _a(t){Ol=t},get va(){return ln},set va(t){ln=t},get ya(){return Ta},set ya(t){Ta=t},get ba(){return Fl},set ba(t){Fl=t},get xa(){return zl},set xa(t){zl=t},get Sa(){return kl},set Sa(t){kl=t},get Ca(){return on},set Ca(t){on=t},get wa(){return un},set wa(t){un=t},get Ta(){return fn},set Ta(t){fn=t},get Ea(){return Bl},set Ea(t){Bl=t},get Da(){return hn},set Da(t){hn=t},get Oa(){return dn},set Oa(t){dn=t},get ka(){return cn},set ka(t){cn=t},get createTerrainLod(){return mn},set createTerrainLod(t){mn=t},get ja(){return gn},set ja(t){gn=t},get Ma(){return pn},set Ma(t){pn=t},get Na(){return Mn},set Na(t){Mn=t},get Pa(){return vn},set Pa(t){vn=t},get Fa(){return xn},set Fa(t){xn=t},get Ia(){return wn},set Ia(t){wn=t},get La(){return En},set La(t){En=t},get createBackdropTerrain(){return bn},set createBackdropTerrain(t){bn=t},get za(){return Hl},set za(t){Hl=t},get Ba(){return Gl},set Ba(t){Gl=t},get raisePisteBanks(){return Tn},set raisePisteBanks(t){Tn=t},get Ha(){return Vl},set Ha(t){Vl=t},get Ua(){return yn},set Ua(t){yn=t},get Wa(){return Wl},set Wa(t){Wl=t},get Ga(){return Xl},set Ga(t){Xl=t},get Ka(){return Rn},set Ka(t){Rn=t},get qa(){return An},set qa(t){An=t},get Ja(){return Pn},set Ja(t){Pn=t},get Ya(){return ya},set Ya(t){ya=t},get X(){return Yl},set X(t){Yl=t},get Xa(){return ql},set Xa(t){ql=t},get Za(){return jl},set Za(t){jl=t},get Qa(){return $l},set Qa(t){$l=t},get Z(){return Cn},set Z(t){Cn=t},get $a(){return Ln},set $a(t){Ln=t},get eo(){return Kl},set eo(t){Kl=t},get to(){return Dn},set to(t){Dn=t},get no(){return Zl},set no(t){Zl=t},get ro(){return Ql},set ro(t){Ql=t},get io(){return Jl},set io(t){Jl=t},get ao(){return Un},set ao(t){Un=t},get oo(){return to},set oo(t){to=t},get so(){return eo},set so(t){eo=t},get createYurtInteriorBounds(){return In},set createYurtInteriorBounds(t){In=t},get lo(){return ao},set lo(t){ao=t},get uo(){return Sn},set uo(t){Sn=t},get fo(){return io},set fo(t){io=t},get po(){return no},set po(t){no=t},get mo(){return Nn},set mo(t){Nn=t},get ho(){return _n},set ho(t){_n=t},get go(){return ro},set go(t){ro=t},get _o(){return On},set _o(t){On=t},get vo(){return Fn},set vo(t){Fn=t},get yo(){return zn},set yo(t){zn=t},get bo(){return so},set bo(t){so=t},get xo(){return lo},set xo(t){lo=t},get So(){return oo},set So(t){oo=t},get Co(){return uo},set Co(t){uo=t},get createCabinInteriorBounds(){return kn},set createCabinInteriorBounds(t){kn=t},get To(){return Bn},set To(t){Bn=t},get Eo(){return fo},set Eo(t){fo=t},get Do(){return Hn},set Do(t){Hn=t},get Oo(){return Gn},set Oo(t){Gn=t},get ko(){return Vn},set ko(t){Vn=t},get Ao(){return ho},set Ao(t){ho=t},get jo(){return Wn},set jo(t){Wn=t},get Mo(){return Xn},set Mo(t){Xn=t},get No(){return Yn},set No(t){Yn=t},get Po(){return qn},set Po(t){qn=t},get Fo(){return co},set Fo(t){co=t},get Io(){return mo},set Io(t){mo=t},get Lo(){return go},set Lo(t){go=t},get Ro(){return po},set Ro(t){po=t},get zo(){return Ra},set zo(t){Ra=t},get Bo(){return Mo},set Bo(t){Mo=t},get Vo(){return vo},set Vo(t){vo=t},get Ho(){return xo},set Ho(t){xo=t},get Uo(){return wo},set Uo(t){wo=t},get Wo(){return Eo},set Wo(t){Eo=t},get Go(){return bo},set Go(t){bo=t},get Ko(){return To},set Ko(t){To=t},get qo(){return yo},set qo(t){yo=t},get Jo(){return Ro},set Jo(t){Ro=t},get Yo(){return Ao},set Yo(t){Ao=t},get Xo(){return jn},set Xo(t){jn=t},get Zo(){return $n},set Zo(t){$n=t},get Qo(){return Po},set Qo(t){Po=t},get $o(){return Kn},set $o(t){Kn=t},get es(){return Co},set es(t){Co=t},get ts(){return Zn},set ts(t){Zn=t},get ns(){return Qn},set ns(t){Qn=t},get rs(){return Jn},set rs(t){Jn=t},get is(){return tr},set is(t){tr=t},get as(){return er},set as(t){er=t},get os(){return Lo},set os(t){Lo=t},get ss(){return Aa},set ss(t){Aa=t},get cs(){return fi},set cs(t){fi=t},get ls(){return hi},set ls(t){hi=t},get us(){return Do},set us(t){Do=t},get ds(){return ar},set ds(t){ar=t},get fs(){return Uo},set fs(t){Uo=t},get ps(){return Io},set ps(t){Io=t},get ms(){return ir},set ms(t){ir=t},get hs(){return nr},set hs(t){nr=t},get gs(){return rr},set gs(t){rr=t},get _s(){return sr},set _s(t){sr=t},get lakeContainingPoint(){return lr},set lakeContainingPoint(t){lr=t},get ys(){return or},set ys(t){or=t},get bs(){return So},set bs(t){So=t},get nearestLakeShore(){return ur},set nearestLakeShore(t){ur=t},get Ss(){return fr},set Ss(t){fr=t},get Cs(){return No},set Cs(t){No=t},get ws(){return hr},set ws(t){hr=t},get Ts(){return dr},set Ts(t){dr=t},get Es(){return cr},set Es(t){cr=t},get Ds(){return mr},set Ds(t){mr=t},get Os(){return _o},set Os(t){_o=t},get ks(){return gr},set ks(t){gr=t},get WaterRipples(){return Oo},set WaterRipples(t){Oo=t},get js(){return Fo},set js(t){Fo=t},get Ms(){return zo},set Ms(t){zo=t},get Ns(){return ko},set Ns(t){ko=t},get Ps(){return Bo},set Ps(t){Bo=t},get Fs(){return Ho},set Fs(t){Ho=t},get Is(){return Go},set Is(t){Go=t},get Ls(){return Vo},set Ls(t){Vo=t},get Rs(){return pr},set Rs(t){pr=t},get zs(){return Mr},set zs(t){Mr=t},get Bs(){return vr},set Bs(t){vr=t},get Vs(){return xr},set Vs(t){xr=t},get loadTreeModelLibrary(){return wr},set loadTreeModelLibrary(t){wr=t},get Us(){return Er},set Us(t){Er=t},get forestPlacementDefaults(){return di},set forestPlacementDefaults(t){di=t},get Gs(){return br},set Gs(t){br=t},get Ks(){return Wo},set Ks(t){Wo=t},get qs(){return Xo},set qs(t){Xo=t},get Js(){return Yo},set Js(t){Yo=t},get Ys(){return Tr},set Ys(t){Tr=t},get Xs(){return yr},set Xs(t){yr=t},get Zs(){return Rr},set Zs(t){Rr=t},get Qs(){return Ar},set Qs(t){Ar=t},get $s(){return Pr},set $s(t){Pr=t},get ec(){return Cr},set ec(t){Cr=t},get placeForestTrees(){return Lr},set placeForestTrees(t){Lr=t},get nc(){return Dr},set nc(t){Dr=t},get createForestBatches(){return Ur},set createForestBatches(t){Ur=t},get ic(){return Ir},set ic(t){Ir=t},get ac(){return Sr},set ac(t){Sr=t},get oc(){return Nr},set oc(t){Nr=t},get sc(){return qo},set sc(t){qo=t},get cc(){return jo},set cc(t){jo=t},get lc(){return _r},set lc(t){_r=t},get crossedCircularDistance(){return Or},set crossedCircularDistance(t){Or=t},get dc(){return Fr},set dc(t){Fr=t},get fc(){return $o},set fc(t){$o=t},get pc(){return Ko},set pc(t){Ko=t},get mc(){return zr},set mc(t){zr=t},get hc(){return Zo},set hc(t){Zo=t},get gc(){return Qo},set gc(t){Qo=t},get _c(){return Jo},set _c(t){Jo=t},get vc(){return tu},set vc(t){tu=t},get yc(){return eu},set yc(t){eu=t},get bc(){return au},set bc(t){au=t},get xc(){return iu},set xc(t){iu=t},get Sc(){return nu},set Sc(t){nu=t},get Cc(){return kr},set Cc(t){kr=t},get wc(){return Br},set wc(t){Br=t},get Tc(){return Hr},set Tc(t){Hr=t},get Ec(){return Gr},set Ec(t){Gr=t},get Dc(){return Vr},set Dc(t){Vr=t},get Oc(){return ru},set Oc(t){ru=t},get kc(){return su},set kc(t){su=t},get Ac(){return lu},set Ac(t){lu=t},get jc(){return ou},set jc(t){ou=t},get Mc(){return uu},set Mc(t){uu=t},get Nc(){return fu},set Nc(t){fu=t},get Pc(){return Wr},set Pc(t){Wr=t},get createCableway(){return Xr},set createCableway(t){Xr=t},get Ic(){return Yr},set Ic(t){Yr=t},get Lc(){return hu},set Lc(t){hu=t},get Rc(){return du},set Rc(t){du=t},get zc(){return qr},set zc(t){qr=t},get Bc(){return jr},set Bc(t){jr=t},get createRideGondola(){return $r},set createRideGondola(t){$r=t},get Hc(){return Kr},set Hc(t){Kr=t},get Uc(){return Zr},set Uc(t){Zr=t},get Wc(){return Qr},set Wc(t){Qr=t},get Gc(){return Jr},set Gc(t){Jr=t},get Kc(){return cu},set Kc(t){cu=t},get qc(){return mu},set qc(t){mu=t},get Jc(){return gu},set Jc(t){gu=t},get Yc(){return pu},set Yc(t){pu=t},get Xc(){return Mu},set Xc(t){Mu=t},get Zc(){return vu},set Zc(t){vu=t},get Qc(){return xu},set Qc(t){xu=t},get $c(){return wu},set $c(t){wu=t},get el(){return Eu},set el(t){Eu=t},get tl(){return bu},set tl(t){bu=t},get nl(){return Tu},set nl(t){Tu=t},get rl(){return ts},set rl(t){ts=t},get il(){return es},set il(t){es=t},get al(){return as},set al(t){as=t},get ol(){return is},set ol(t){is=t},get sl(){return ns},set sl(t){ns=t},get cl(){return yu},set cl(t){yu=t},get ll(){return rs},set ll(t){rs=t},get ul(){return ss},set ul(t){ss=t},get dl(){return ci},set dl(t){ci=t},get fl(){return ls},set fl(t){ls=t},get pl(){return os},set pl(t){os=t},get ml(){return us},set ml(t){us=t},get hl(){return Ru},set hl(t){Ru=t},get gl(){return Au},set gl(t){Au=t},get _l(){return Pu},set _l(t){Pu=t},get vl(){return Cu},set vl(t){Cu=t},get yl(){return fs},set yl(t){fs=t},get bl(){return Lu},set bl(t){Lu=t},get xl(){return hs},set xl(t){hs=t},get Sl(){return Du},set Sl(t){Du=t},get Cl(){return Uu},set Cl(t){Uu=t},get wl(){return Iu},set wl(t){Iu=t},get Tl(){return ds},set Tl(t){ds=t},get El(){return cs},set El(t){cs=t},get Dl(){return ms},set Dl(t){ms=t},get Ol(){return Su},set Ol(t){Su=t},get kl(){return Nu},set kl(t){Nu=t},get Al(){return _u},set Al(t){_u=t},get jl(){return Ou},set jl(t){Ou=t},get Ml(){return gs},set Ml(t){gs=t},get Nl(){return Fu},set Nl(t){Fu=t},get Pl(){return zu},set Pl(t){zu=t},get Fl(){return ku},set Fl(t){ku=t},get Il(){return Bu},set Il(t){Bu=t},get Ll(){return Hu},set Ll(t){Hu=t},get Rl(){return Gu},set Rl(t){Gu=t},get zl(){return Vu},set zl(t){Vu=t},get Bl(){return Wu},set Bl(t){Wu=t},get Vl(){return Xu},set Vl(t){Xu=t},get Hl(){return Yu},set Hl(t){Yu=t},get Ul(){return qu},set Ul(t){qu=t},get Wl(){return ju},set Wl(t){ju=t},get Gl(){return $u},set Gl(t){$u=t},get Kl(){return Ku},set Kl(t){Ku=t},get ql(){return Zu},set ql(t){Zu=t},get Jl(){return Qu},set Jl(t){Qu=t},get Yl(){return Ju},set Yl(t){Ju=t},get Xl(){return tf},set Xl(t){tf=t},get Zl(){return ef},set Zl(t){ef=t},get Ql(){return ps},set Ql(t){ps=t},get $l(){return Ms},set $l(t){Ms=t},get eu(){return af},set eu(t){af=t},get tu(){return nf},set tu(t){nf=t},get nu(){return rf},set nu(t){rf=t},get ru(){return sf},set ru(t){sf=t},get iu(){return lf},set iu(t){lf=t},get au(){return of},set au(t){of=t},get ou(){return uf},set ou(t){uf=t},get su(){return ff},set su(t){ff=t},get cu(){return hf},set cu(t){hf=t},get lu(){return df},set lu(t){df=t},get uu(){return cf},set uu(t){cf=t},get du(){return mf},set du(t){mf=t},get fu(){return gf},set fu(t){gf=t},get pu(){return pf},set pu(t){pf=t},get mu(){return Mf},set mu(t){Mf=t},get hu(){return vf},set hu(t){vf=t},get gu(){return xf},set gu(t){xf=t},get _u(){return wf},set _u(t){wf=t},get vu(){return Ef},set vu(t){Ef=t},get yu(){return bf},set yu(t){bf=t},get bu(){return Tf},set bu(t){Tf=t},get xu(){return yf},set xu(t){yf=t},get Su(){return Rf},set Su(t){Rf=t},get Cu(){return Af},set Cu(t){Af=t},get wu(){return Pf},set wu(t){Pf=t},get Tu(){return vs},set Tu(t){vs=t},get Eu(){return xs},set Eu(t){xs=t},get Du(){return Cf},set Du(t){Cf=t},get Ou(){return ws},set Ou(t){ws=t},get ku(){return Lf},set ku(t){Lf=t},get Au(){return Df},set Au(t){Df=t},get ju(){return Uf},set ju(t){Uf=t},get Mu(){return If},set Mu(t){If=t},get Nu(){return Es},set Nu(t){Es=t},get Pu(){return bs},set Pu(t){bs=t},get Fu(){return Ts},set Fu(t){Ts=t},get Iu(){return Sf},set Iu(t){Sf=t},get Lu(){return Nf},set Lu(t){Nf=t},get Ru(){return _f},set Ru(t){_f=t},get zu(){return ys},set zu(t){ys=t},get Bu(){return Rs},set Bu(t){Rs=t},get Vu(){return Of},set Vu(t){Of=t},get Hu(){return Ff},set Hu(t){Ff=t},get Uu(){return zf},set Uu(t){zf=t},get Wu(){return kf},set Wu(t){kf=t},get Gu(){return Bf},set Gu(t){Bf=t},get Ku(){return Hf},set Ku(t){Hf=t},get qu(){return Gf},set qu(t){Gf=t},get Ju(){return Vf},set Ju(t){Vf=t},get Yu(){return Wf},set Yu(t){Wf=t},get Xu(){return As},set Xu(t){As=t},get Zu(){return Xf},set Zu(t){Xf=t},get Qu(){return Yf},set Qu(t){Yf=t},get treeLineElevation(){return qf},set treeLineElevation(t){qf=t},get defaultRunName(){return jf},set defaultRunName(t){jf=t},get prepareWorldAssets(){return Ps},set prepareWorldAssets(t){Ps=t},get sampleRouteDistance(){return Cs},set sampleRouteDistance(t){Cs=t},get rd(){return Ls},set rd(t){Ls=t},get createWorldScene(){return Ds},set createWorldScene(t){Ds=t},get defaultSkyPalette(){return $f},set defaultSkyPalette(t){$f=t},get createSkyDome(){return Us},set createSkyDome(t){Us=t},get crashDuration(){return Kf},set crashDuration(t){Kf=t},get shakeOffDuration(){return Zf},set shakeOffDuration(t){Zf=t},get ld(){return Qf},set ld(t){Qf=t},get ud(){return Jf},set ud(t){Jf=t},get dd(){return th},set dd(t){th=t},get fd(){return eh},set fd(t){eh=t},get pd(){return Pa},set pd(t){Pa=t},get md(){return ah},set md(t){ah=t},get hd(){return ih},set hd(t){ih=t},get gd(){return nh},set gd(t){nh=t},get _d(){return rh},set _d(t){rh=t},get vd(){return mi},set vd(t){mi=t},get crashPoseKeyframes(){return gi},set crashPoseKeyframes(t){gi=t},get selectCrashMotion(){return Is},set selectCrashMotion(t){Is=t},get xd(){return sh},set xd(t){sh=t},get Sd(){return lh},set Sd(t){lh=t},get Cd(){return Ss},set Cd(t){Ss=t},get wd(){return oh},set wd(t){oh=t},get Td(){return uh},set Td(t){uh=t},get Ed(){return fh},set Ed(t){fh=t},get Dd(){return hh},set Dd(t){hh=t},get Od(){return dh},set Od(t){dh=t},get kd(){return ch},set kd(t){ch=t},get Ad(){return mh},set Ad(t){mh=t},get jd(){return gh},set jd(t){gh=t},get Md(){return ph},set Md(t){ph=t},get Nd(){return Mh},set Nd(t){Mh=t},get Pd(){return vh},set Pd(t){vh=t},get Fd(){return xh},set Fd(t){xh=t},get Id(){return Ns},set Id(t){Ns=t},get Ld(){return _s},set Ld(t){_s=t},get Rd(){return Os},set Rd(t){Os=t},get zd(){return Fs},set zd(t){Fs=t},get Bd(){return zs},set Bd(t){zs=t},get Vd(){return ks},set Vd(t){ks=t},get Hd(){return wh},set Hd(t){wh=t},get Ud(){return Eh},set Ud(t){Eh=t},get Wd(){return Bs},set Wd(t){Bs=t},get Gd(){return Hs},set Gd(t){Hs=t},get Kd(){return bh},set Kd(t){bh=t},get qd(){return Th},set qd(t){Th=t},get Jd(){return yh},set Jd(t){yh=t},get Yd(){return Rh},set Yd(t){Rh=t},get Xd(){return Ah},set Xd(t){Ah=t},get Zd(){return Gs},set Zd(t){Gs=t},get Qd(){return Vs},set Qd(t){Vs=t},get $d(){return Ws},set $d(t){Ws=t},get ef(){return Xs},set ef(t){Xs=t},get tf(){return Ph},set tf(t){Ph=t},get nf(){return Ch},set nf(t){Ch=t},get rf(){return Lh},set rf(t){Lh=t},get af(){return Dh},set af(t){Dh=t},get of(){return Uh},set of(t){Uh=t},get sf(){return Ih},set sf(t){Ih=t},get cf(){return Sh},set cf(t){Sh=t},get lf(){return Nh},set lf(t){Nh=t},get uf(){return _h},set uf(t){_h=t},get df(){return Oh},set df(t){Oh=t},get ff(){return Fh},set ff(t){Fh=t},get pf(){return zh},set pf(t){zh=t},get mf(){return kh},set mf(t){kh=t},get hf(){return Bh},set hf(t){Bh=t},get gf(){return Hh},set gf(t){Hh=t},get _f(){return Gh},set _f(t){Gh=t},get vf(){return Vh},set vf(t){Vh=t},get yf(){return Wh},set yf(t){Wh=t},get bf(){return Ca},set bf(t){Ca=t},get xf(){return Xh},set xf(t){Xh=t},get Sf(){return Yh},set Sf(t){Yh=t},get Cf(){return qh},set Cf(t){qh=t},get wf(){return jh},set wf(t){jh=t},get Tf(){return $h},set Tf(t){$h=t},get Ef(){return Kh},set Ef(t){Kh=t},get Df(){return Zh},set Df(t){Zh=t},get Of(){return Qh},set Of(t){Qh=t},get kf(){return Jh},set kf(t){Jh=t},get Af(){return td},set Af(t){td=t},get vitePreload(){return ed},set vitePreload(t){ed=t},get Mf(){return pi},set Mf(t){pi=t},get Q(){return ad},set Q(t){ad=t},get Nf(){return Ys},set Nf(t){Ys=t},get Pf(){return qs},set Pf(t){qs=t},get Ff(){return id},set Ff(t){id=t},get If(){return nd},set If(t){nd=t},get Lf(){return rd},set Lf(t){rd=t},get Rf(){return sd},set Rf(t){sd=t},get zf(){return ld},set zf(t){ld=t},get Bf(){return od},set Bf(t){od=t},get Vf(){return ud},set Vf(t){ud=t},get Hf(){return fd},set Hf(t){fd=t},get Uf(){return hd},set Uf(t){hd=t},get Wf(){return dd},set Wf(t){dd=t},get Gf(){return cd},set Gf(t){cd=t},get Kf(){return md},set Kf(t){md=t},get qf(){return gd},set qf(t){gd=t},get Jf(){return pd},set Jf(t){pd=t},get Yf(){return Md},set Yf(t){Md=t},get solveArmReachAngle(){return js},set solveArmReachAngle(t){js=t},get $(){return $s},set $(t){$s=t},get Zf(){return vd},set Zf(t){vd=t},get Qf(){return Ks},set Qf(t){Ks=t},get Rider(){return xd},set Rider(t){xd=t},get ep(){return Mi},set ep(t){Mi=t},get tp(){return wd},set tp(t){wd=t},get np(){return Ed},set np(t){Ed=t},get OutlinePostProcessor(){return bd},set OutlinePostProcessor(t){bd=t},get ip(){return Td},set ip(t){Td=t},get ap(){return Zs},set ap(t){Zs=t},get op(){return Qs},set op(t){Qs=t},get sp(){return Js},set sp(t){Js=t},get cp(){return tl},set cp(t){tl=t},get lp(){return el},set lp(t){el=t},get up(){return al},set up(t){al=t},get createPedestalDioramaBase(){return il},set createPedestalDioramaBase(t){il=t},get fp(){return nl},set fp(t){nl=t},get createFloatingDioramaBase(){return rl},set createFloatingDioramaBase(t){rl=t},get mp(){return sl},set mp(t){sl=t},get hp(){return ll},set hp(t){ll=t},get gp(){return yd},set gp(t){yd=t},get _p(){return Rd},set _p(t){Rd=t},get vp(){return Ad},set vp(t){Ad=t},get yp(){return Pd},set yp(t){Pd=t},get bp(){return Cd},set bp(t){Cd=t},get xp(){return Ld},set xp(t){Ld=t},get Sp(){return Dd},set Sp(t){Dd=t},get Cp(){return Ud},set Cp(t){Ud=t},get wp(){return ol},set wp(t){ol=t},get Tp(){return ul},set Tp(t){ul=t},get createTitleLogo(){return fl},set createTitleLogo(t){fl=t},get createTitleSnow(){return hl},set createTitleSnow(t){hl=t},get createTransitionWipe(){return dl},set createTransitionWipe(t){dl=t},get kp(){return Id},set kp(t){Id=t},get encodeDestination(){return cl},set encodeDestination(t){cl=t},get parseDestination(){return ml},set parseDestination(t){ml=t},get readDestinationFromUrl(){return Sd},set readDestinationFromUrl(t){Sd=t},get findRunHighStart(){return gl},set findRunHighStart(t){gl=t},get Pp(){return Nd},set Pp(t){Nd=t},get Fp(){return _d},set Fp(t){_d=t},get encodePlayerPosition(){return pl},set encodePlayerPosition(t){pl=t},get parsePlayerPosition(){return Ml},set parsePlayerPosition(t){Ml=t},get publishPlayerPosition(){return vl},set publishPlayerPosition(t){vl=t},get subscribePlayerPosition(){return xl},set subscribePlayerPosition(t){xl=t},get Bp(){return Od},set Bp(t){Od=t},get writeDioramaHandoff(){return wl},set writeDioramaHandoff(t){wl=t},get consumeDioramaHandoff(){return El},set consumeDioramaHandoff(t){El=t},get bilingualRunNames(){return Fd},set bilingualRunNames(t){Fd=t},get runDifficultyStyles(){return zd},set runDifficultyStyles(t){zd=t},get Gp(){return kd},set Gp(t){kd=t},get liftDisplayName(){return bl},set liftDisplayName(t){bl=t}};var ji=Dp(B),$i=Up(B),Ki=Ip(B),Zi=_p(B),Qi=Op(B),Ji=Fp(B),tn=zp(B),en=kp(),an=y0(),nn=R0(),rn=A0(B),sn=w0(B),ln=E0(B),on=b0(B),un=T0(B),fn=L0(B),hn=U0(),dn=I0(B),cn=S0(B),mn=N0(B),gn=_0(B),pn=O0(B),Mn=F0(),vn=z0(B),xn=k0(B),wn=B0(),En=H0(B),bn=G0(B),Tn=W0(B),yn=Y0(),Rn=$0(B),An=K0(),Pn=Z0(B),Cn=e1(B),Ln=a1(),Dn=n1(B),Un=r1(B),In=s1(B),Sn=o1(B),Nn=u1(B),_n=f1(B),On=h1(B),Fn=d1(B),zn=c1(B),kn=p1(B),Bn=M1(B),Hn=v1(B),Gn=x1(B),Vn=w1(B),Wn=b1(B),Xn=T1(B),Yn=y1(B),qn=Bp(),jn=Gp(B),$n=Vp(B),Kn=Wp(B),Zn=Yp(B),Qn=qp(),Jn=jp(),tr=$p(B),er=Kp(B),ar=C1(B),ir=D1(),nr=U1(),rr=I1(B),sr=S1(B),lr=N1(B),or=_1(B),ur=O1(B),fr=F1(B),hr=z1(B),dr=k1(B),cr=B1(B),mr=H1(B),gr=G1(B),pr=X1(B),Mr=Y1(B),vr=q1(B),xr=j1(B),wr=$1(B),Er=K1(B),br=Q1(),Tr=J1(B),yr=tM(B),Rr=eM(B),Ar=aM(B),Pr=iM(B),Cr=nM(B),Lr=rM(B),Dr=sM(B),Ur=lM(B),Ir=oM(),Sr=Zp(B),Nr=Qp(),_r=Jp(B),Or=t0(),Fr=e0(),zr=n0(B),kr=s0(B),Br=l0(),Hr=o0(B),Gr=u0(B),Vr=f0(B),Wr=h0(B),Xr=d0(B),Yr=c0(B),qr=m0(B),jr=g0(B),$r=p0(B),Kr=uM(B),Zr=R1(B),Qr=A1(B),Jr=P1(B),ts=fM(B),es=hM(),as=dM(),is=cM(B),ns=mM(B),rs=gM(B),ss=pM(B),ls=MM(B),os=vM(B),us=xM(B),fs=wM(B),hs=EM(),ds=TM(),cs=yM(B),ms=RM(B),gs=CM(B),ps=NM(B),Ms=_M(B),vs=kM(B),xs=BM(B),ws=GM(B),Es=WM(B),bs=XM(B),Ts=YM(B),ys=qM(B),Rs=jM(B),As=QM(),Ps=tv(B),Cs=ev(),Ls=av(),Ds=iv(B),Us=rv(B),Is=cv(),Ss=gv(B),Ns=pv(B),_s=Mv(B),Os=vv(B),Fs=xv(B),zs=wv(B),ks=Ev(B),Bs=bv(B),Hs=Tv(B),Gs=Rv(B),Vs=Av(B),Ws=Pv(B),Xs=Cv(B),Ys=Gv(B),qs=Vv(B),js=Wv(),$s=Xv(B),Ks=qv(B),Zs=Kv(B),Qs=Zv(B),Js=Qv(B),tl=Jv(B),el=tx(B),al=ex(B),il=ax(B),nl=ix(),rl=nx(B),sl=rx(B),ll=sx(B),ol=ox(B),ul=ux(B),fl=fx(B),hl=hx(B),dl=dx(B),cl=cx(),ml=mx(B),gl=px(),pl=Mx(),Ml=vx(),vl=xx(B),xl=wx(B),wl=Ex(B),El=bx(B),bl=Ax(B);const Fg=(t,r=Fg,e=r.f||(r.f=["./rider/model-lazy.js","./rider/model.js","../vendor/three/core.js","./assets/model-loader.js","../vendor/three/buffer-geometry-utils.js","./render/toon-materials.js","./rider/throw.js","./rider/gear-mount.js"]))=>t.map(a=>e[a]);(function(){let t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(let a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(let i of a)if(i.type==="childList")for(let n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function r(a){let i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),i.credentials=a.crossOrigin==="use-credentials"?"include":a.crossOrigin==="anonymous"?"omit":"same-origin",i}function e(a){if(a.ep)return;a.ep=!0;let i=r(a);fetch(a.href,i)}})();var Ea=document.getElementById("loading"),Tl=Ea.querySelector('[role="progressbar"]'),yl=[...Ea.querySelectorAll(".step")],Rl=0,Al="hemu-ski.graphics",Pl=Sp(),Cl={fps:30,scale:1,msaa:2,shadowSize:1024,shadows:!0,outline:"medium"},Ll=Np(),Dl=["auto","low","medium","high","custom"],ba=M0(),si=ba.objects.map(t=>t.id),Ul=v0(B),Il="./data/",Sl="edits/",Nl=P0(B),_l=C0(),li=x0(),oi={zh:"温泉",en:"Hot spring",x:638,z:4536,faceTo:[710,4410],clearing:10},ui={pickup:[-16,33],snowmobile:[28,31],jetson:[4,52]},Ol=ba.origin,Ta=[...li.map(t=>[`lodge:${t.id}`,t]),["onsen",oi]],Fl=new Map(Ta.map(([t,r])=>[t,{x:r.x,z:r.z,faceTo:[...r.faceTo]}])),zl=[...Ta.map(([t])=>t),...Object.keys(ui).map(t=>`vehicle:${t}`),...si],kl={},Bl=D0(B),Hl={height:[1.4,2.5],width:[6,10],fade:[12,45],ends:40},Gl=V0(),Vl=X0(B),Wl=q0(),Xl=j0(B),ya=Q0(B),Yl=J0(B),ql=Le({vertexColors:!0,side:2},{hatch:0}),jl=Le({vertexColors:!0,flatShading:!0},{rim:1}),$l=t1(B),Kl=i1(),Zl={R:3.2,wall:2.1,door:[.62,1.95],gap:.85,seat:[0,-1.75]},Ql=Le({color:"#f2eee4",side:2},{rim:0}),Jl=Le({color:"#e6dfd0",side:2},{rim:0}),to=ya("#d8a73e"),eo=ya("#2f5a8a"),ao=l1(),io={scale:5.5,posts:.448,depth:.027,top:.526},no=null,ro=["#2f6fc0","#f4f2ea","#cf3b2e","#3f9a52","#f0c23a"].map(t=>new jt(t)),so={scale:10,floor:.042,room:[-.42,.436,-.25,.16],door:[-.09,.136]},lo=m1(B),oo={home:[.26,.04],roam:.16,via:[.023,.5],door:[.023,.09]},uo=g1(B),fo=1,ho=E1(B),co=["6号索道","7号索道"],mo={mouth:9,floor:1.3,wheel:{u:1,x:.2,r:1.75}},go=4.11,po=3,Ra=Ne.degToRad,Mo=Ra(1),vo=Ra(15),xo=[12,8,25],wo=[28,20,50],Eo=8,bo=[130,40,450],To=6.5,yo=40,Ro=Ne.degToRad(12),Ao=Hp(),Po=200,Co=Xp(),Lo={smooth:3,slope:.12,straight:12,depth:3,bank:.02,shore:50,pad:5},Aa=[[0,9,.03,0],[.45,5.5,.02,1.7],[-.55,3.7,.012,4.1],[.18,14,.022,2.6]],fi=Math.atan2(.38,.92),hi=Aa.map(([t,r,e,a])=>{let i=2*Math.PI/r,n=fi+t;return{kx:Math.cos(n)*i,kz:Math.sin(n)*i,w:Math.sqrt(9.81*i),a:e,p:a}}),Do=Aa.reduce((t,r)=>t+r[2],0),Uo={shallow:"#86cfc9",deep:"#3f8ea6",sky:"#c4e4ea",ripple:"#e6f5f2",foam:"#fbfaf4",ink:"#3d6f7a"},Io=L1(),So={lake:null,d:0,nx:0,nz:0},No=64,_o=`
float wHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float wNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(wHash(i), wHash(i + vec2(1, 0)), u.x), mix(wHash(i + vec2(0, 1)), wHash(i + vec2(1, 1)), u.x), u.y);
}
float waves(vec2 p, float t) {
  return ${hi.map(t=>`${t.a.toFixed(4)} * sin(dot(vec2(${t.kx.toFixed(5)}, ${t.kz.toFixed(5)}), p) - ${t.w.toFixed(5)} * t + ${t.p.toFixed(3)})`).join(`
    + `)};
}
`,Oo=V1(B),Fo=new jt("#4d7560"),zo=new jt("#3d6352"),ko=new jt("#f6f7f2"),Bo=new jt("#6b5248"),Ho=11.8,Go=["spruce","larch","pine","birch"],Vo=W1(B),di=Z1(B),Wo=19,Xo=9,Yo=Ne.smoothstep,qo=new xt,jo=new xt,$o=a0(B),Ko=i0(),Zo={"6号索道":"gray","2号索道":"yellow"},Qo={red:null,yellow:"#f0c24a",gray:"#aeb5b8"},Jo=r0(B),tu=4.2,eu=3,au=18,iu="./models/lifts/",nu=null,ru=6,su=14,lu=5,ou="./models/lift-pylon/lift-pylon-no-sign-v03.glb",uu=Le({vertexColors:!0},{hatch:0,rim:0}),fu,hu=Le({vertexColors:!0},{rim:1}),du=new Map,cu="./models/onsen/",mu=7.2,gu=6,pu=.66,Mu=3,vu={x:-.04,y:.48,from:.1,lip:.488},xu={x:3.3,z:.12},wu=.15,Eu={x:.6,shore:3.5,stone:3.3,water:2.45},bu={deep:"#86cbbf",pale:"#b3e3d8",foam:"#f3faf6"},Tu=new xt(.22,0,.12),yu=96,ci=`
float oHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float oNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(oHash(i), oHash(i + vec2(1, 0)), u.x), mix(oHash(i + vec2(0, 1)), oHash(i + vec2(1, 1)), u.x), u.y);
}
`,Ru=.15,Au=1.5,Pu=.5,Cu=new xt(0,.55,0),Lu=`
  #include <fog_pars_fragment>
  uniform vec3 uShadowTint;
  varying vec2 vCorner;
  varying float vAlpha, vKey, vLife;
  ${ci}
  void main() {
    float d = length(vCorner) + (oNoise(vCorner * 2.2 + vKey) - 0.5) * 0.45;
    float body = 1.0 - smoothstep(0.62, 0.68, d);
    if (body * vAlpha < 0.01) discard;
    float core = 1.0 - smoothstep(0.32, 0.38, d + vCorner.y * 0.25);
    vec3 col = mix(mix(vec3(1.0), uShadowTint, 0.35), vec3(1.0), core);
    col = mix(col * mix(uShadowTint, vec3(1.0), 0.7), col, smoothstep(0.0, 0.4, vLife));
    gl_FragColor = vec4(col, body * vAlpha * (0.75 + 0.25 * core));
    #include <colorspace_fragment>
    #include <fog_fragment>
  }`,Du="./models/truck/pickup.glb",Uu=5.6,Iu=bM(B),Su="./models/snowmobile/snowmobile.glb",Nu=2.6,_u=AM(),Ou=PM(B),Fu=9.81,zu=40,ku=LM(),Bu=DM(),Hu=new xt,Gu=new xt,Vu=new xt,Wu=new Re,Xu=new xt,Yu=new xt,qu=UM(),ju=IM(B),$u="./models/jetson/jetson-one.glb",Ku=3.1,Zu=["17","18","8","26","new_0","new_0_0_0","new_0_1_0","new_0_2"].map(t=>`tripo_part_${t}`),Qu=["tripo_part_new_0_3","tripo_part_new_0_0"],Ju={pads:[.141,-.157,.12],seat:[-.085,.172],feet:[.14,.15,.055],sticks:[.052,.18,.312,.05]},tf=.3,ef=SM(B),af=40,nf=OM(),rf=20,sf=12,lf=new xt,of=new xt,uf=new xt,ff=new Re,hf=new xt,df=new xt,cf=new ze,mf=new Da(0,0,0,"YXZ"),gf=new xt,pf=new xt,Mf=FM(),vf=Ne.clamp,xf=zM(B),wf=3.4,Ef=1.36,bf={seat:[.12,.2],locks:[-.2,.05],feet:[-.36,.14],thwarts:[1.02,-1.18]},Tf={inboard:.6,outboard:1.62,grip:.52},yf=1.35,Rf=.25,Af=-.08,Pf={paint:"#f2ede2",stripe:"#c9473d",wood:"#b98b5a",thwart:"#a2754a",oar:"#dcb683",iron:"#3a4148"},Cf=HM(B),Lf=VM(B),Df={stations:24,around:16,inset:.015},Uf=new xt,If=new xt,Sf=new xt,Nf=new xt,_f=new xt,Of=$M(),Ff={angle:.05,dip:.35,feather:1},zf={angle:-1.25,dip:.55,feather:1},kf=new de(.92,.38).normalize(),Bf=new xt,Hf=new xt,Gf=Ne.clamp,Vf=KM(B),Wf=ZM(),Xf=JM(B),Yf=[[.98,0],[.55,.62],[.55,-.62],[0,1],[0,-1],[-.6,.9],[-.6,-.9],[-1,.62],[-1,-.62]],qf=di.treeline,jf="云霄峰道",$f=nv(B),Kf=3.1,Zf=2.4,Qf=1.05,Jf=1.5,th=sv(),eh=lv(),Pa=ov(),ah={armL:[-1.1,.35,-1.7],armR:[-1.1,.35,-1.7]},ih={armL:[.75,.5,-.15],armR:[.75,.5,-.15]},nh=uv(),rh=fv(),mi=hv(B),gi=dv(B),sh=Object.fromEntries(Object.entries(gi).map(([t,r])=>{let e=Pa;return[t,[[0,Pa],...r.keys,...mi[r.rest]].map(([a,i])=>{let n={...e,...i};return n.spin=e.spin+Math.atan2(Math.sin(n.spin-e.spin),Math.cos(n.spin-e.spin)),[a,e=n]})]})),lh=mv(B),oh=.2,uh=.72,fh=.55,hh=new ze,dh=new ze,ch=new ze().setFromAxisAngle(new xt(0,1,0),Math.PI/2),mh=new Da,gh=new xt,ph=new xt,Mh=new xt,vh=new ze,xh=new xt(1,0,0),wh=new xt,Eh=new xt,bh=yv(),Th={length:1.4,waist:.11,tip:.13,thick:.02,sole:.035},yh={length:.82},Rh=.125,Ah=Object.fromEntries(Object.entries({top:"#3d6fa6",stripe:"#b9d4ee",accent:"#f2a7b9",navy:"#1f2a44",binding:"#efe9dc",steel:"#a9b2b8"}).map(([t,r])=>[t,Le({color:r},{rim:1,hatch:0})])),Ph=Lv(),Ch=Dv(),Lh=Ne,Dh=.15,Uh=.6,Ih=.2,Sh={yaw:.26,out:.17,edge:.14,lift:.07},Nh=Uv(),_h=Iv(B),Oh=Sv(),Fh=Nv(),zh=Ne,kh=.45,Bh=.92,Hh=1.08,Gh=.85,Vh=.19,Wh=[-.5,1.05],Ca=-.015,Xh={ready:[.1,.06,-.28],plant:[.08,Ca,-.28],end:[-.22,Ca,-.27],rest:[-.15,.025,0],swing:.08},Yh=.15,qh=.6,jh=_v(),$h=Ov(B),Kh="modulepreload",Zh=Fv(),Qh={},Jh=zv(),td=kv(),ed=Bv(B),pi=Hv(),ad=Object.fromEntries(Object.entries(pi).map(([t,r])=>[t,Le({color:r},{rim:1,hatch:0})])),id=new xt(0,1,0),nd=new xt(0,-1,0),rd=new xt,sd=new xt,ld=new xt,od=new xt,ud=new Re,fd=new ze,hd=new Da,dd=1.35,cd=.2,md=.02,gd=.22,pd=.25,Md={seat:.15,pivot:.04,shoulder:[.26,.43],reach:.47,leg:.6,ankle:.15,hip:[.12,0]},vd=Yv(B),xd=jv(B),Mi=600,wd=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Ed=`
#include <packing>
uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform sampler2D tNormal;
uniform vec2 uRes;
uniform float uNear;
uniform float uFar;
uniform float uPixelRatio;
uniform float uDepthScale;
uniform float uLineWidth;
uniform float uLineOpacity;
uniform float uNormalStep;
uniform vec3 uInk;
uniform vec3 uFogInk;
uniform vec2 uFogRange;
varying vec2 vUv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float viewDepth(vec2 uv) {
  float z = texture2D(tDepth, uv).x;
  return -perspectiveDepthToViewZ(z, uNear, uFar) * uDepthScale;
}
vec3 nrm(vec2 uv) {
  vec3 n = texture2D(tNormal, uv).xyz * 2.0 - 1.0;
  return n / max(length(n), 0.001);
}
float crease(vec3 centre, vec2 uv, float dc) {
  // A different depth surface belongs to the silhouette pass. Comparing its
  // normal as well paints a second, displaced contour (especially on hair).
  float dz = abs(viewDepth(uv) - dc) / max(dc, 0.001);
  float sameSurface = 1.0 - smoothstep(0.008, 0.025, dz);
  float covered = step(0.5, texture2D(tNormal, vUv).a) * step(0.5, texture2D(tNormal, uv).a);
  return (1.0 - clamp(dot(centre, nrm(uv)), -1.0, 1.0)) * sameSurface * covered;
}

void main() {
  vec2 px = 1.0 / uRes;
  float dc = viewDepth(vUv);
  // Radius in CSS pixels, independent of DPR. Keep sampling fixed in time:
  // moving it at 6 Hz used to make even a stationary model's outline jump.
  float near = 1.0 - smoothstep(4.0, 260.0, dc);
  float w = mix(0.65, 0.95, near) * uLineWidth * uPixelRatio;
  vec2 o = vec2(w) * px;

  float dl = viewDepth(vUv - vec2(o.x, 0.0));
  float dr = viewDepth(vUv + vec2(o.x, 0.0));
  float dd = viewDepth(vUv - vec2(0.0, o.y));
  float du = viewDepth(vUv + vec2(0.0, o.y));
  // Keep the near-surface half of the Laplacian: abs() marked both sides,
  // doubling the band and leaving a halo outside the actual model.
  float lap = max(0.0, dl + dr + dd + du - 4.0 * dc) / max(dc, 0.001);
  float depthEdge = smoothstep(0.035, 0.09, lap);

  // A half-size normal pass (Low outlines) is compared a texel of its own apart.
  vec3 nc = nrm(vUv);
  vec2 on = o * uNormalStep;
  float ndiff = 0.0;
  ndiff += crease(nc, vUv - vec2(on.x, 0.0), dc);
  ndiff += crease(nc, vUv + vec2(on.x, 0.0), dc);
  ndiff += crease(nc, vUv - vec2(0.0, on.y), dc);
  ndiff += crease(nc, vUv + vec2(0.0, on.y), dc);
  float normalEdge = smoothstep(0.55, 0.95, ndiff) * (1.0 - smoothstep(150.0, ${Mi.toFixed(1)}, dc));

  float edge = max(depthEdge, normalEdge * 0.55);
  // Break long lines up a touch, like a dry pen.
  edge *= 0.75 + 0.25 * noise(vUv * uRes / uPixelRatio * 0.12);

  vec3 col = texture2D(tColor, vUv).rgb;
  // Distant lines fade toward the haze color instead of staying black.
  float far = smoothstep(uFogRange.x, uFogRange.y, dc);
  vec3 ink = mix(uInk, uFogInk, far);
  col = mix(col, ink, edge * uLineOpacity * mix(1.0, 0.6, far));

  // Paper grain + soft vignette.
  vec2 sc = gl_FragCoord.xy / uPixelRatio;
  float grain = hash(floor(sc * 0.5)) - 0.5;
  col *= 1.0 + grain * 0.05;
  float vig = smoothstep(1.25, 0.45, length(vUv - 0.5) * 1.6);
  col *= mix(0.9, 1.0, vig);

  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`,bd=$v(B),Td=14,yd=lx(),Rd=["HEMU","SKI"],Ad=10,Pd=1.8,Cd=7.5,Ld=43.9,Dd=21.3,Ud=Object.fromEntries(Object.entries({cream:"#f7f2e4",slot:"#4d6467",top:"#efe9d8",left:"#ddd5c1",right:"#bfb6a1",bottom:"#a39a87",back:"#8f877a"}).map(([t,r])=>[t,new jt(r)])),Id=new Set(["bottom","top","ride"]),Sd=gx(B),Nd="hemu-ski.you",_d=6e5,Od="hemu-ski.arriving",Fd=Tx(),zd=yx(),kd=Rx();export{$r as A,rl as B,fl as C,hl as D,ba as E,vl as F,Sd as G,qf as H,js as I,gi as J,pl as K,cl as L,Dl as M,Ll as N,bd as O,ur as P,ed as Q,xd as R,Or as S,Is as T,en as U,Ru as V,Lp as W,oi as X,Zf as Y,Kf as Z,lr as _,ji as a,Ds as b,El as c,$f as d,il as e,li as f,Us as g,xl as h,Ml as i,tn as j,dl as k,Ki as l,bl as m,Fd as n,gl as o,Ps as p,ml as q,zd as r,$i as s,jf as t,bn as u,Oo as v,wl as w,kn as x,In as y,Cs as z};
//# sourceMappingURL=shared-runtime-CbIO3nCP.js.map
