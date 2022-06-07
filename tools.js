function sinLerp(a,b,t) {
	return Math.sin(t*Math.PI*0.5)*(b-a)+a
}

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms)) //https://thewebdev.info/2022/02/09/how-to-create-pause-or-delay-in-a-javascript-for-loop

function qrs2xy(q,r,s) { //https://www.reddit.com/r/askmath/comments/s6u33s/converting_cube_coordinates_to_cartesian/
	return [
		(r+s)*sqrt3/2,
		r/2 - s/2
	]
}

function clamp(t,min=0,max=1) {
    return Math.max(Math.min(t,max),min);
}