new FingerBlast('body');

function is(n) { return !isNaN(n); };

$('input').change(function(event) {
  const nodata = 'no data';

  const sex = parseFloat($('#sex').val());
  const age = parseFloat($('#age').val());
  const height = parseFloat($('#height').val());
  const rccaimt = parseFloat($('#rccaimt').val());
  const rdd = parseFloat($('#rdd').val());
  const lccaimt = parseFloat($('#lccaimt').val());
  const ldd = parseFloat($('#ldd').val());
  const ivsd = parseFloat($('#ivsd').val());
  const lvidd = parseFloat($('#lvidd').val());
  const lvpwd = parseFloat($('#lvpwd').val());
  const aobp = parseFloat($('#aobp').val());
  const pwv = parseFloat($('#pwv').val());

  if (is(age) && is(rccaimt) && is(lccaimt)) {
    const cimt = ((rccaimt + lccaimt) / 2).toFixed(2);
    $('#cimt').html(cimt_aobp_ms[cIMT(sex, age, cimt)]);
  } else $('#cimt').html(nodata);

  if (is(rccaimt) && is(lccaimt) && is(rdd) && is(ldd)) {
    const lwcsa = 3.14 * (ldd / 2 + lccaimt) * (ldd / 2 + lccaimt) - 3.14 * (ldd / 2) * (ldd / 2);
    const rwcsa = 3.14 * (rdd / 2 + rccaimt) * (rdd / 2 + rccaimt) - 3.14 * (rdd / 2) * (rdd / 2);
    $('#mwcsa').html(((lwcsa + rwcsa) / 2).toFixed(2));
  } else $('#mwcsa').html(nodata);


  if (is(ivsd) && is(lvidd) && is(lvpwd)) {
      const rwt = (lvpwd + ivsd) / lvidd;
      $('#rwt').html(rwt.toFixed(2));

      if (is(height)) {
          const lvmdev = 0.8 * (1.04 * (Math.pow((ivsd + lvidd + lvpwd), 3.0) - Math.pow(lvidd, 3.0))) + 0.6;
          const lvmis = lvmdev / Math.pow((height / 100), 2.7);
          $('#lvmis').html(lvmis.toFixed(2));
          if (is(age)) $('#lvmispc').html(cc[centyle(sex, age, lvmis)]);
          else         $('#lvmispc').html(nodata);
      } else {
        $('#lvmis').html(nodata);
        $('#lvmispc').html(nodata);
      }
  } else {
    $('#rwt').html(nodata);
    $('#lvmis').html(nodata);
    $('#lvmispc').html(nodata);
  }

  if (is(age) && is(aobp)) $('#aobp-value').html(cimt_aobp_ms[AoBP(sex, age, aobp.toFixed(2))]);
  else                     $('#aobp-value').html(nodata);

  if (is(age) && is(pwv)) $('#pwv-value').html(pwv_ms[PWV(sex, age, pwv)]);
  else                    $('#pwv-value').html(nodata);
});

function cIMT(sex, age, cimt) {
  if (sex === 'male') {
    if (age < 6)         return 0;
    if (age < 9) {
      if (cimt < 0.44)   return 1;
      if (cimt === 0.44) return 2;
                         return 3;
    }
    if (age < 12) {
      if (cimt < 0.45)   return 1;
      if (cimt === 0.45) return 2;
                         return 3;
    }
    if (age < 14) {
      if (cimt < 0.46)   return 1;
      if (cimt === 0.46) return 2;
                         return 3;
    }
    if (age < 16) {
      if (cimt < 0.47)   return 1;
      if (cimt === 0.47) return 2;
                         return 3;
    }
    if (age < 19) {
      if (cimt < 0.48)   return 1;
      if (cimt === 0.48) return 2;
                         return 3;
    }
                         return 4;
  } else {
    if (age < 6)         return 0;
    if (age < 8) {
      if (cimt < 0.43)   return 1;
      if (cimt === 0.43) return 2;
                         return 3;
    }
    if (age < 13) {
      if (cimt < 0.44)   return 1;
      if (cimt === 0.44) return 2;
                         return 3;
    }
    if (age < 14) {
      if (cimt < 0.45)   return 1;
      if (cimt === 0.45) return 2;
                         return 3;
    }
    if (age < 18) {
      if (cimt < 0.46)   return 1;
      if (cimt === 0.46) return 2;
                         return 3;
    }
    if (age < 19) {
      if (cimt < 0.47)   return 1;
      if (cimt === 0.47) return 2;
                         return 3;
    }
                         return 4;
  }
};

function AoBP(sex, age, aobp) {
  if (sex === "male") {
    if (age < 8)       return 0;
    if (age < 9) {
      if (aobp < 98)   return 1;
      if (aobp === 98) return 2;
                       return 3;
    }
    if (age < 10) {
      if (aobp < 100)   return 1;
      if (aobp === 100) return 2;
                        return 3;
    }
    if (age < 11) {
      if (aobp < 103)   return 1;
      if (aobp === 103) return 2;
                        return 3;
    }
    if (age < 12) {
      if (aobp < 105)   return 1;
      if (aobp === 105) return 2;
                        return 3;
    }
    if (age < 13) {
      if (aobp < 108)   return 1;
      if (aobp === 108) return 2;
                        return 3;
    }
    if (age < 14) {
      if (aobp < 112)   return 1;
      if (aobp === 112) return 2;
                        return 3;
    }
    if (age < 15) {
      if (aobp < 115)   return 1;
      if (aobp === 115) return 2;
                        return 3;
    }
    if (age < 16) {
      if (aobp < 119)   return 1;
      if (aobp === 119) return 2;
                        return 3;
    }
    if (age < 17) {
      if (aobp < 122)   return 1;
      if (aobp === 122) return 2;
                        return 3;
    }
    if (age < 18) {
      if (aobp < 124)   return 1;
      if (aobp === 124) return 2;
                        return 3;
    }
    if (age < 19) {
      if (aobp < 126)   return 1;
      if (aobp === 126) return 2;
                        return 3;
    }
                        return 4;
} else {
// sex === 'female'
    if (age < 8)          return 0;
    if (age < 9) {
        if (aobp < 98)    return 1;
        if (aobp === 98)  return 2;
                          return 3;
    }
    if (age < 10) {
        if (aobp < 101)   return 1;
        if (aobp === 101) return 2;
                          return 3;
    }
    if (age < 11) {
        if (aobp < 104)   return 1;
        if (aobp === 104) return 2;
                          return 3;
    }
    if (age < 12) {
        if (aobp < 106)   return 1;
        if (aobp === 106) return 2;
                          return 3;
    }
    if (age < 13) {
        if (aobp < 108)   return 1;
        if (aobp === 108) return 2;
                          return 3;
    }
    if (age < 14) {
        if (aobp < 110)   return 1;
        if (aobp === 110) return 2;
                          return 3;
    }
    if (age < 15) {
        if (aobp < 112)   return 1;
        if (aobp === 112) return 2;
                          return 3;
    }
    if (age < 16) {
        if (aobp < 114)   return 1;
        if (aobp === 114) return 2;
                          return 3;
    }
    if (age < 17) {
        if (aobp < 115)   return 1;
        if (aobp === 115) return 2;
                          return 3;
    }
    if (age < 18) {
        if (aobp < 116)   return 1;
        if (aobp === 116) return 2;
                          return 3;
    }
    if (age < 19) {
        if (aobp < 117)   return 1;
        if (aobp === 117) return 2;
                          return 3;
    }
                          return 4;
  }
}

function PWV(sex, age, pwv) {
  if ((sex === "male")) {
    if (age < 7)          return 0;
    if (age < 8) {
      if (pwv < 4.82)   return 1;
      if (pwv === 4.82) return 2;
                        return 3;
    }
    if (age < 9) {
      if (pwv < 4.96)   return 1;
      if (pwv === 4.96) return 2;
                        return 3;
    }
    if (age < 10) {
      if (pwv < 5.1)    return 1;
      if (pwv === 5.1)  return 2;
                        return 3;
    }
    if (age < 11) {
      if (pwv < 5.24)   return 1;
      if (pwv === 5.24) return 2;
                        return 3;
    }
    if (age < 12) {
      if (pwv < 5.38)   return 1;
      if (pwv === 5.38) return 2;
                        return 3;
    }
    if (age < 13) {
      if (pwv < 5.52)   return 1;
      if (pwv === 5.52) return 2;
                        return 3;
    }
    if (age < 14) {
      if (pwv < 5.67)   return 1;
      if (pwv === 5.67) return 2;
                        return 3;
    }
    if (age < 15) {
      if (pwv < 5.82)   return 1;
      if (pwv === 5.82) return 2;
                        return 3;
    }
    if (age < 16) {
      if (pwv < 5.98)   return 1;
      if (pwv === 5.98) return 2;
                        return 3;
    }
    if (age < 17) {
      if (pwv < 6.16)   return 1;
      if (pwv === 6.16) return 2;
                        return 3;
    }
    if (age < 18) {
      if (pwv < 6.34)   return 1;
      if (pwv === 6.34) return 2;
                        return 3;
    }
                        return 4;
  } else {
    // sex === 'female'
    if (age < 7)        return 0;
    if (age < 8) {
      if (pwv < 4.82)   return 1;
      if (pwv === 4.82) return 2;
                        return 3;
    }
    if (age < 9) {
      if (pwv < 4.98)   return 1;
      if (pwv === 4.98) return 2;
                        return 3;
    }
    if (age < 10) {
      if (pwv < 5.14)   return 1;
      if (pwv === 5.14) return 2;
                        return 3;
    }
    if (age < 11) {
      if (pwv < 5.27)   return 1;
      if (pwv === 5.27) return 2;
                        return 3;
    }
    if (age < 12) {
      if (pwv < 5.39)   return 1;
      if (pwv === 5.39) return 2;
                        return 3;
    }
    if (age < 13) {
      if (pwv < 5.5)    return 1;
      if (pwv === 5.5)  return 2;
                        return 3;
    }
    if (age < 14) {
      if (pwv < 5.59)   return 1;
      if (pwv === 5.59) return 2;
                        return 3;
    }
    if (age < 15) {
      if (pwv < 5.66)   return 1;
      if (pwv === 5.66) return 2;
                        return 3;
    }
    if (age < 16) {
      if (pwv < 5.67)   return 1;
      if (pwv === 5.67) return 2;
                        return 3;
    }
    if (age < 17) {
      if (pwv < 5.65)   return 1;
      if (pwv === 5.65) return 2;
                        return 3;
    }
    if (age < 18) {
      if (pwv < 5.63)   return 1;
      if (pwv === 5.63) return 2;
                        return 3;
    }
                        return 4;
  }
};

function centyle(sex, age, lvmis) {
  // sex === male
  if (sex === 'male') {
    if (age <= 0.5) {
      if (lvmis < 32.41) return 0;
      if (lvmis < 40.19) return 1;
      if (lvmis < 46.92) return 2;
      if (lvmis < 56.44) return 3;
      if (lvmis < 66.41) return 4;
      if (lvmis < 75.72) return 5;
      if (lvmis < 80.1)  return 6;
                         return 7;
    }
    if (age <= 2.0) {
      if (lvmis < 26.71) return 0;
      if (lvmis < 36.17) return 1;
      if (lvmis < 40.66) return 2;
      if (lvmis < 44.95) return 3;
      if (lvmis < 53.29) return 4;
      if (lvmis < 61.27) return 5;
      if (lvmis < 68.6)  return 6;
                         return 7;
    }
    if (age <= 4.0) {
      if (lvmis < 21.25) return 0;
      if (lvmis < 28.44) return 1;
      if (lvmis < 33.88) return 2;
      if (lvmis < 39.5)  return 3;
      if (lvmis < 45.19) return 4;
      if (lvmis < 48.74) return 5;
      if (lvmis < 52.4)  return 6;
                         return 7;
    }
    if (age <= 6.0) {
      if (lvmis < 18.76) return 0;
      if (lvmis < 27.68) return 1;
      if (lvmis < 30.68) return 2;
      if (lvmis < 36.96) return 3;
      if (lvmis < 40.2)  return 4;
      if (lvmis < 45.12) return 5;
      if (lvmis < 48.1)  return 6;
                         return 7;
    }
    if (age <= 8.0) {
      if (lvmis < 20.27) return 0;
      if (lvmis < 24.47) return 1;
      if (lvmis < 28.56) return 2;
      if (lvmis < 31.79) return 3;
      if (lvmis < 36.28) return 4;
      if (lvmis < 40.18) return 5;
      if (lvmis < 44.6)  return 6;
                         return 7;
    }
    if (age <= 10.0) {
      if (lvmis < 15.24) return 0;
      if (lvmis < 22.45) return 1;
      if (lvmis < 24.85) return 2;
      if (lvmis < 29.11) return 3;
      if (lvmis < 34.57) return 4;
      if (lvmis < 38.25) return 5;
      if (lvmis < 41.0)  return 6;
                         return 7;
    }
    if (age <= 12.0) {
      if (lvmis < 14.72) return 0;
      if (lvmis < 21.88) return 1;
      if (lvmis < 24.71) return 2;
      if (lvmis < 28.18) return 3;
      if (lvmis < 31.87) return 4;
      if (lvmis < 36.42) return 5;
      if (lvmis < 38.2)  return 6;
                         return 7;
    }
    if (age <= 14.0) {
      if (lvmis < 12.61) return 0;
      if (lvmis < 21.02) return 1;
      if (lvmis < 24.38) return 2;
      if (lvmis < 28.8)  return 3;
      if (lvmis < 32.84) return 4;
      if (lvmis < 39.08) return 5;
      if (lvmis < 41.4)  return 6;
                         return 7;
    }
    if (age <= 16.0) {
      if (lvmis < 8.9)   return 0;
      if (lvmis < 22.22) return 1;
      if (lvmis < 25.11) return 2;
      if (lvmis < 28.77) return 3;
      if (lvmis < 33.49) return 4;
      if (lvmis < 38.47) return 5;
      if (lvmis < 40.5)  return 6;
                         return 7;
    }
    if (age <= 18.0) {
      if (lvmis < 13.86) return 0;
      if (lvmis < 20.72) return 1;
      if (lvmis < 24.62) return 2;
      if (lvmis < 29.0)  return 3;
      if (lvmis < 32.81) return 4;
      if (lvmis < 37.73) return 5;
      if (lvmis < 39.4)  return 6;
                         return 7;
    }
                         return 8;
  } else {
  // sex === 'female'
    if (age <= 0.5) {
      if (lvmis < 21.22) return 0;
      if (lvmis < 39.05) return 1;
      if (lvmis < 48.62) return 2;
      if (lvmis < 55.38) return 3;
      if (lvmis < 65.98) return 4;
      if (lvmis < 73.47) return 5;
      if (lvmis < 85.6)  return 6;
                         return 7;
    }
    if (age <= 2.0) {
      if (lvmis < 24.18) return 0;
      if (lvmis < 32.91) return 1;
      if (lvmis < 38.67) return 2;
      if (lvmis < 42.04) return 3;
      if (lvmis < 49.85) return 4;
      if (lvmis < 52.86) return 5;
      if (lvmis < 57.1)  return 6;
                         return 7;
    }
    if (age <= 4.0) {
      if (lvmis < 20.63) return 0;
      if (lvmis < 28.87) return 1;
      if (lvmis < 31.85) return 2;
      if (lvmis < 37.88) return 3;
      if (lvmis < 43.11) return 4;
      if (lvmis < 47.65) return 5;
      if (lvmis < 55.3)  return 6;
                         return 7;
    }
    if (age <= 6.0) {
      if (lvmis < 18.17) return 0;
      if (lvmis < 25.85) return 1;
      if (lvmis < 28.06) return 2;
      if (lvmis < 32.29) return 3;
      if (lvmis < 36.43) return 4;
      if (lvmis < 43.47) return 5;
      if (lvmis < 44.3)  return 6;
                         return 7;
    }
    if (age <= 8.0) {
      if (lvmis < 20.11) return 0;
      if (lvmis < 23.15) return 1;
      if (lvmis < 25.77) return 2;
      if (lvmis < 29.71) return 3;
      if (lvmis < 33.15) return 4;
      if (lvmis < 37.73) return 5;
      if (lvmis < 43.5)  return 6;
                         return 7;
    }
    if (age <= 10.0) {
      if (lvmis < 13.46) return 0;
      if (lvmis < 19.07) return 1;
      if (lvmis < 22.12) return 2;
      if (lvmis < 26.63) return 3;
      if (lvmis < 30.37) return 4;
      if (lvmis < 34.3)  return 5;
      if (lvmis < 36.0)  return 6;
                         return 7;
    }
    if (age <= 12.0) {
      if (lvmis < 13.06) return 0;
      if (lvmis < 20.22) return 1;
      if (lvmis < 23.25) return 2;
      if (lvmis < 26.11) return 3;
      if (lvmis < 29.63) return 4;
      if (lvmis < 33.05) return 5;
      if (lvmis < 35.7)  return 6;
                         return 7;
    }
    if (age <= 14.0) {
      if (lvmis < 10.21) return 0;
      if (lvmis < 20.47) return 1;
      if (lvmis < 23.63) return 2;
      if (lvmis < 26.68) return 3;
      if (lvmis < 29.86) return 4;
      if (lvmis < 34.65) return 5;
      if (lvmis < 38.2)  return 6;
                         return 7;
    }
    if (age <= 16.0) {
      if (lvmis < 12.31) return 0;
      if (lvmis < 20.69) return 1;
      if (lvmis < 23.55) return 2;
      if (lvmis < 26.51) return 3;
      if (lvmis < 29.97) return 4;
      if (lvmis < 34.89) return 5;
      if (lvmis < 36.9)  return 6;
                         return 7;
    }
    if (age <= 18.0) {
      if (lvmis < 11.21) return 0;
      if (lvmis < 20.06) return 1;
      if (lvmis < 22.94) return 2;
      if (lvmis < 26.35) return 3;
      if (lvmis < 31.4)  return 4;
      if (lvmis < 37.93) return 5;
      if (lvmis < 40.0)  return 6;
                         return 7;
    }
                         return 8;
  }
};

const cimt_aobp_ms = [
  "Below the age",
  "Below 95cc",
  "Equal 95cc",
  "Above 95cc",
  "Above the age",
];

const pwv_ms = [
  "Below the age",
  "Below 97cc",
  "Equal 97cc",
  "Above 97cc",
  "Above the age",
];

const cc = [
  "Below 10cc",
  " 0cc - 10cc",
  "10cc - 25cc",
  "25cc - 50cc",
  "50cc - 75cc",
  "75cc - 90cc",
  "90cc - 95cc",
  "95cc - 100cc",
  "Above the age",
];
