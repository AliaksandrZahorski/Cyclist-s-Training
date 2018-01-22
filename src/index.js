module.exports = function temps(v0, slope, dTot) {
  const GRAVITY_ACC = 9.81 * 3.6 * 60.0;
  const DRAG = 60.0 * 0.3 / 3.6;
  const DELTA_T = 1;
  const G_THRUST = 60 * 3.6 * 3.6;
  const MASS = 80.0;
  const WATTS0 = 225.0;
  const D_WATTS = 0.5;

  let watt = WATTS0;
  let t = 0;
  for (let i = 0; i < 10; i++) {
    watt = watt - D_WATTS * DELTA_T;
    t+=DELTA_T;

    console.log(t, watt);
  }

}
