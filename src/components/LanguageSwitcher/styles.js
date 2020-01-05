// LanguageSwitcher: Styling here
const styles = () => ({
  container: {
    position: "relative",
    overflow: "hidden",
    height: "48px"
  },

  menuContainer: {
    display: "flex",
    flexDirection: "column",
    transition: "0.3s",
    background: "transparent"
  },

  arrowIcon: {
    transition: "transform 0.3s",
    transform: "rotate(0deg)"
  },

  containerOpenMenu: {
    overflow: "visible",

    "& $menuContainer": {
      background: "#fff"
    },

    "& $arrowIcon": {
      transform: "rotate(180deg)"
    }
  },

  menu: {
    width: "100%"
  },

  flagIconBackground: {
    backgroundSize: "contain",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat"
  },
  flagIcon: {
    backgroundSize: "contain",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "inline-block",
    width: "1.33333333em",
    lineHeight: "1em",
    "&:before": { content: "\"\\00a0\"" }
  },
  flagIconSquared: { width: "1em" },
  ".flag-icon-ad": { backgroundImage: "url(/images/flags/4x3/ad.svg)" },
  ".flag-icon-ad.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ad.svg)"
  },
  ".flag-icon-ae": { backgroundImage: "url(/images/flags/4x3/ae.svg)" },
  ".flag-icon-ae.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ae.svg)"
  },
  ".flag-icon-af": { backgroundImage: "url(/images/flags/4x3/af.svg)" },
  ".flag-icon-af.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/af.svg)"
  },
  ".flag-icon-ag": { backgroundImage: "url(/images/flags/4x3/ag.svg)" },
  ".flag-icon-ag.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ag.svg)"
  },
  ".flag-icon-ai": { backgroundImage: "url(/images/flags/4x3/ai.svg)" },
  ".flag-icon-ai.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ai.svg)"
  },
  ".flag-icon-al": { backgroundImage: "url(/images/flags/4x3/al.svg)" },
  ".flag-icon-al.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/al.svg)"
  },
  ".flag-icon-am": { backgroundImage: "url(/images/flags/4x3/am.svg)" },
  ".flag-icon-am.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/am.svg)"
  },
  ".flag-icon-ao": { backgroundImage: "url(/images/flags/4x3/ao.svg)" },
  ".flag-icon-ao.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ao.svg)"
  },
  ".flag-icon-aq": { backgroundImage: "url(/images/flags/4x3/aq.svg)" },
  ".flag-icon-aq.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/aq.svg)"
  },
  ".flag-icon-ar": { backgroundImage: "url(/images/flags/4x3/ar.svg)" },
  ".flag-icon-ar.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ar.svg)"
  },
  ".flag-icon-as": { backgroundImage: "url(/images/flags/4x3/as.svg)" },
  ".flag-icon-as.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/as.svg)"
  },
  ".flag-icon-at": { backgroundImage: "url(/images/flags/4x3/at.svg)" },
  ".flag-icon-at.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/at.svg)"
  },
  ".flag-icon-au": { backgroundImage: "url(/images/flags/4x3/au.svg)" },
  ".flag-icon-au.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/au.svg)"
  },
  ".flag-icon-aw": { backgroundImage: "url(/images/flags/4x3/aw.svg)" },
  ".flag-icon-aw.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/aw.svg)"
  },
  ".flag-icon-ax": { backgroundImage: "url(/images/flags/4x3/ax.svg)" },
  ".flag-icon-ax.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ax.svg)"
  },
  ".flag-icon-az": { backgroundImage: "url(/images/flags/4x3/az.svg)" },
  ".flag-icon-az.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/az.svg)"
  },
  ".flag-icon-ba": { backgroundImage: "url(/images/flags/4x3/ba.svg)" },
  ".flag-icon-ba.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ba.svg)"
  },
  ".flag-icon-bb": { backgroundImage: "url(/images/flags/4x3/bb.svg)" },
  ".flag-icon-bb.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bb.svg)"
  },
  ".flag-icon-bd": { backgroundImage: "url(/images/flags/4x3/bd.svg)" },
  ".flag-icon-bd.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bd.svg)"
  },
  ".flag-icon-be": { backgroundImage: "url(/images/flags/4x3/be.svg)" },
  ".flag-icon-be.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/be.svg)"
  },
  ".flag-icon-bf": { backgroundImage: "url(/images/flags/4x3/bf.svg)" },
  ".flag-icon-bf.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bf.svg)"
  },
  ".flag-icon-bg": { backgroundImage: "url(/images/flags/4x3/bg.svg)" },
  ".flag-icon-bg.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bg.svg)"
  },
  ".flag-icon-bh": { backgroundImage: "url(/images/flags/4x3/bh.svg)" },
  ".flag-icon-bh.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bh.svg)"
  },
  ".flag-icon-bi": { backgroundImage: "url(/images/flags/4x3/bi.svg)" },
  ".flag-icon-bi.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bi.svg)"
  },
  ".flag-icon-bj": { backgroundImage: "url(/images/flags/4x3/bj.svg)" },
  ".flag-icon-bj.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bj.svg)"
  },
  ".flag-icon-bl": { backgroundImage: "url(/images/flags/4x3/bl.svg)" },
  ".flag-icon-bl.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bl.svg)"
  },
  ".flag-icon-bm": { backgroundImage: "url(/images/flags/4x3/bm.svg)" },
  ".flag-icon-bm.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bm.svg)"
  },
  ".flag-icon-bn": { backgroundImage: "url(/images/flags/4x3/bn.svg)" },
  ".flag-icon-bn.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bn.svg)"
  },
  ".flag-icon-bo": { backgroundImage: "url(/images/flags/4x3/bo.svg)" },
  ".flag-icon-bo.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bo.svg)"
  },
  ".flag-icon-bq": { backgroundImage: "url(/images/flags/4x3/bq.svg)" },
  ".flag-icon-bq.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bq.svg)"
  },
  ".flag-icon-br": { backgroundImage: "url(/images/flags/4x3/br.svg)" },
  ".flag-icon-br.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/br.svg)"
  },
  ".flag-icon-bs": { backgroundImage: "url(/images/flags/4x3/bs.svg)" },
  ".flag-icon-bs.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bs.svg)"
  },
  ".flag-icon-bt": { backgroundImage: "url(/images/flags/4x3/bt.svg)" },
  ".flag-icon-bt.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bt.svg)"
  },
  ".flag-icon-bv": { backgroundImage: "url(/images/flags/4x3/bv.svg)" },
  ".flag-icon-bv.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bv.svg)"
  },
  ".flag-icon-bw": { backgroundImage: "url(/images/flags/4x3/bw.svg)" },
  ".flag-icon-bw.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bw.svg)"
  },
  ".flag-icon-by": { backgroundImage: "url(/images/flags/4x3/by.svg)" },
  ".flag-icon-by.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/by.svg)"
  },
  ".flag-icon-bz": { backgroundImage: "url(/images/flags/4x3/bz.svg)" },
  ".flag-icon-bz.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/bz.svg)"
  },
  ".flag-icon-ca": { backgroundImage: "url(/images/flags/4x3/ca.svg)" },
  ".flag-icon-ca.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ca.svg)"
  },
  ".flag-icon-cc": { backgroundImage: "url(/images/flags/4x3/cc.svg)" },
  ".flag-icon-cc.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/cc.svg)"
  },
  ".flag-icon-cd": { backgroundImage: "url(/images/flags/4x3/cd.svg)" },
  ".flag-icon-cd.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/cd.svg)"
  },
  ".flag-icon-cf": { backgroundImage: "url(/images/flags/4x3/cf.svg)" },
  ".flag-icon-cf.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/cf.svg)"
  },
  ".flag-icon-cg": { backgroundImage: "url(/images/flags/4x3/cg.svg)" },
  ".flag-icon-cg.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/cg.svg)"
  },
  ".flag-icon-ch": { backgroundImage: "url(/images/flags/4x3/ch.svg)" },
  ".flag-icon-ch.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ch.svg)"
  },
  ".flag-icon-ci": { backgroundImage: "url(/images/flags/4x3/ci.svg)" },
  ".flag-icon-ci.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ci.svg)"
  },
  ".flag-icon-ck": { backgroundImage: "url(/images/flags/4x3/ck.svg)" },
  ".flag-icon-ck.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ck.svg)"
  },
  ".flag-icon-cl": { backgroundImage: "url(/images/flags/4x3/cl.svg)" },
  ".flag-icon-cl.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/cl.svg)"
  },
  ".flag-icon-cm": { backgroundImage: "url(/images/flags/4x3/cm.svg)" },
  ".flag-icon-cm.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/cm.svg)"
  },
  ".flag-icon-cn": { backgroundImage: "url(/images/flags/4x3/cn.svg)" },
  ".flag-icon-cn.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/cn.svg)"
  },
  ".flag-icon-co": { backgroundImage: "url(/images/flags/4x3/co.svg)" },
  ".flag-icon-co.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/co.svg)"
  },
  ".flag-icon-cr": { backgroundImage: "url(/images/flags/4x3/cr.svg)" },
  ".flag-icon-cr.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/cr.svg)"
  },
  ".flag-icon-cu": { backgroundImage: "url(/images/flags/4x3/cu.svg)" },
  ".flag-icon-cu.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/cu.svg)"
  },
  ".flag-icon-cv": { backgroundImage: "url(/images/flags/4x3/cv.svg)" },
  ".flag-icon-cv.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/cv.svg)"
  },
  ".flag-icon-cw": { backgroundImage: "url(/images/flags/4x3/cw.svg)" },
  ".flag-icon-cw.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/cw.svg)"
  },
  ".flag-icon-cx": { backgroundImage: "url(/images/flags/4x3/cx.svg)" },
  ".flag-icon-cx.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/cx.svg)"
  },
  ".flag-icon-cy": { backgroundImage: "url(/images/flags/4x3/cy.svg)" },
  ".flag-icon-cy.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/cy.svg)"
  },
  ".flag-icon-cz": { backgroundImage: "url(/images/flags/4x3/cz.svg)" },
  ".flag-icon-cz.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/cz.svg)"
  },
  ".flag-icon-de": { backgroundImage: "url(/images/flags/4x3/de.svg)" },
  ".flag-icon-de.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/de.svg)"
  },
  ".flag-icon-dj": { backgroundImage: "url(/images/flags/4x3/dj.svg)" },
  ".flag-icon-dj.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/dj.svg)"
  },
  ".flag-icon-dk": { backgroundImage: "url(/images/flags/4x3/dk.svg)" },
  ".flag-icon-dk.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/dk.svg)"
  },
  ".flag-icon-dm": { backgroundImage: "url(/images/flags/4x3/dm.svg)" },
  ".flag-icon-dm.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/dm.svg)"
  },
  ".flag-icon-do": { backgroundImage: "url(/images/flags/4x3/do.svg)" },
  ".flag-icon-do.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/do.svg)"
  },
  ".flag-icon-dz": { backgroundImage: "url(/images/flags/4x3/dz.svg)" },
  ".flag-icon-dz.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/dz.svg)"
  },
  ".flag-icon-ec": { backgroundImage: "url(/images/flags/4x3/ec.svg)" },
  ".flag-icon-ec.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ec.svg)"
  },
  ".flag-icon-ee": { backgroundImage: "url(/images/flags/4x3/ee.svg)" },
  ".flag-icon-ee.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ee.svg)"
  },
  ".flag-icon-eg": { backgroundImage: "url(/images/flags/4x3/eg.svg)" },
  ".flag-icon-eg.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/eg.svg)"
  },
  ".flag-icon-eh": { backgroundImage: "url(/images/flags/4x3/eh.svg)" },
  ".flag-icon-eh.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/eh.svg)"
  },
  ".flag-icon-er": { backgroundImage: "url(/images/flags/4x3/er.svg)" },
  ".flag-icon-er.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/er.svg)"
  },
  ".flag-icon-es": { backgroundImage: "url(/images/flags/4x3/es.svg)" },
  ".flag-icon-es.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/es.svg)"
  },
  ".flag-icon-et": { backgroundImage: "url(/images/flags/4x3/et.svg)" },
  ".flag-icon-et.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/et.svg)"
  },
  ".flag-icon-fi": { backgroundImage: "url(/images/flags/4x3/fi.svg)" },
  ".flag-icon-fi.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/fi.svg)"
  },
  ".flag-icon-fj": { backgroundImage: "url(/images/flags/4x3/fj.svg)" },
  ".flag-icon-fj.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/fj.svg)"
  },
  ".flag-icon-fk": { backgroundImage: "url(/images/flags/4x3/fk.svg)" },
  ".flag-icon-fk.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/fk.svg)"
  },
  ".flag-icon-fm": { backgroundImage: "url(/images/flags/4x3/fm.svg)" },
  ".flag-icon-fm.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/fm.svg)"
  },
  ".flag-icon-fo": { backgroundImage: "url(/images/flags/4x3/fo.svg)" },
  ".flag-icon-fo.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/fo.svg)"
  },
  ".flag-icon-fr": { backgroundImage: "url(/images/flags/4x3/fr.svg)" },
  ".flag-icon-fr.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/fr.svg)"
  },
  ".flag-icon-ga": { backgroundImage: "url(/images/flags/4x3/ga.svg)" },
  ".flag-icon-ga.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ga.svg)"
  },
  ".flag-icon-gb": { backgroundImage: "url(/images/flags/4x3/gb.svg)" },
  ".flag-icon-gb.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gb.svg)"
  },
  ".flag-icon-gd": { backgroundImage: "url(/images/flags/4x3/gd.svg)" },
  ".flag-icon-gd.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gd.svg)"
  },
  ".flag-icon-ge": { backgroundImage: "url(/images/flags/4x3/ge.svg)" },
  ".flag-icon-ge.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ge.svg)"
  },
  ".flag-icon-gf": { backgroundImage: "url(/images/flags/4x3/gf.svg)" },
  ".flag-icon-gf.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gf.svg)"
  },
  ".flag-icon-gg": { backgroundImage: "url(/images/flags/4x3/gg.svg)" },
  ".flag-icon-gg.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gg.svg)"
  },
  ".flag-icon-gh": { backgroundImage: "url(/images/flags/4x3/gh.svg)" },
  ".flag-icon-gh.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gh.svg)"
  },
  ".flag-icon-gi": { backgroundImage: "url(/images/flags/4x3/gi.svg)" },
  ".flag-icon-gi.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gi.svg)"
  },
  ".flag-icon-gl": { backgroundImage: "url(/images/flags/4x3/gl.svg)" },
  ".flag-icon-gl.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gl.svg)"
  },
  ".flag-icon-gm": { backgroundImage: "url(/images/flags/4x3/gm.svg)" },
  ".flag-icon-gm.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gm.svg)"
  },
  ".flag-icon-gn": { backgroundImage: "url(/images/flags/4x3/gn.svg)" },
  ".flag-icon-gn.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gn.svg)"
  },
  ".flag-icon-gp": { backgroundImage: "url(/images/flags/4x3/gp.svg)" },
  ".flag-icon-gp.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gp.svg)"
  },
  ".flag-icon-gq": { backgroundImage: "url(/images/flags/4x3/gq.svg)" },
  ".flag-icon-gq.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gq.svg)"
  },
  ".flag-icon-gr": { backgroundImage: "url(/images/flags/4x3/gr.svg)" },
  ".flag-icon-gr.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gr.svg)"
  },
  ".flag-icon-gs": { backgroundImage: "url(/images/flags/4x3/gs.svg)" },
  ".flag-icon-gs.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gs.svg)"
  },
  ".flag-icon-gt": { backgroundImage: "url(/images/flags/4x3/gt.svg)" },
  ".flag-icon-gt.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gt.svg)"
  },
  ".flag-icon-gu": { backgroundImage: "url(/images/flags/4x3/gu.svg)" },
  ".flag-icon-gu.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gu.svg)"
  },
  ".flag-icon-gw": { backgroundImage: "url(/images/flags/4x3/gw.svg)" },
  ".flag-icon-gw.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gw.svg)"
  },
  ".flag-icon-gy": { backgroundImage: "url(/images/flags/4x3/gy.svg)" },
  ".flag-icon-gy.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gy.svg)"
  },
  ".flag-icon-hk": { backgroundImage: "url(/images/flags/4x3/hk.svg)" },
  ".flag-icon-hk.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/hk.svg)"
  },
  ".flag-icon-hm": { backgroundImage: "url(/images/flags/4x3/hm.svg)" },
  ".flag-icon-hm.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/hm.svg)"
  },
  ".flag-icon-hn": { backgroundImage: "url(/images/flags/4x3/hn.svg)" },
  ".flag-icon-hn.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/hn.svg)"
  },
  ".flag-icon-hr": { backgroundImage: "url(/images/flags/4x3/hr.svg)" },
  ".flag-icon-hr.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/hr.svg)"
  },
  ".flag-icon-ht": { backgroundImage: "url(/images/flags/4x3/ht.svg)" },
  ".flag-icon-ht.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ht.svg)"
  },
  ".flag-icon-hu": { backgroundImage: "url(/images/flags/4x3/hu.svg)" },
  ".flag-icon-hu.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/hu.svg)"
  },
  ".flag-icon-id": { backgroundImage: "url(/images/flags/4x3/id.svg)" },
  ".flag-icon-id.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/id.svg)"
  },
  ".flag-icon-ie": { backgroundImage: "url(/images/flags/4x3/ie.svg)" },
  ".flag-icon-ie.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ie.svg)"
  },
  ".flag-icon-il": { backgroundImage: "url(/images/flags/4x3/il.svg)" },
  ".flag-icon-il.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/il.svg)"
  },
  ".flag-icon-im": { backgroundImage: "url(/images/flags/4x3/im.svg)" },
  ".flag-icon-im.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/im.svg)"
  },
  ".flag-icon-in": { backgroundImage: "url(/images/flags/4x3/in.svg)" },
  ".flag-icon-in.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/in.svg)"
  },
  ".flag-icon-io": { backgroundImage: "url(/images/flags/4x3/io.svg)" },
  ".flag-icon-io.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/io.svg)"
  },
  ".flag-icon-iq": { backgroundImage: "url(/images/flags/4x3/iq.svg)" },
  ".flag-icon-iq.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/iq.svg)"
  },
  ".flag-icon-ir": { backgroundImage: "url(/images/flags/4x3/ir.svg)" },
  ".flag-icon-ir.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ir.svg)"
  },
  ".flag-icon-is": { backgroundImage: "url(/images/flags/4x3/is.svg)" },
  ".flag-icon-is.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/is.svg)"
  },
  ".flag-icon-it": { backgroundImage: "url(/images/flags/4x3/it.svg)" },
  ".flag-icon-it.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/it.svg)"
  },
  ".flag-icon-je": { backgroundImage: "url(/images/flags/4x3/je.svg)" },
  ".flag-icon-je.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/je.svg)"
  },
  ".flag-icon-jm": { backgroundImage: "url(/images/flags/4x3/jm.svg)" },
  ".flag-icon-jm.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/jm.svg)"
  },
  ".flag-icon-jo": { backgroundImage: "url(/images/flags/4x3/jo.svg)" },
  ".flag-icon-jo.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/jo.svg)"
  },
  ".flag-icon-jp": { backgroundImage: "url(/images/flags/4x3/jp.svg)" },
  ".flag-icon-jp.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/jp.svg)"
  },
  ".flag-icon-ke": { backgroundImage: "url(/images/flags/4x3/ke.svg)" },
  ".flag-icon-ke.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ke.svg)"
  },
  ".flag-icon-kg": { backgroundImage: "url(/images/flags/4x3/kg.svg)" },
  ".flag-icon-kg.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/kg.svg)"
  },
  ".flag-icon-kh": { backgroundImage: "url(/images/flags/4x3/kh.svg)" },
  ".flag-icon-kh.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/kh.svg)"
  },
  ".flag-icon-ki": { backgroundImage: "url(/images/flags/4x3/ki.svg)" },
  ".flag-icon-ki.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ki.svg)"
  },
  ".flag-icon-km": { backgroundImage: "url(/images/flags/4x3/km.svg)" },
  ".flag-icon-km.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/km.svg)"
  },
  ".flag-icon-kn": { backgroundImage: "url(/images/flags/4x3/kn.svg)" },
  ".flag-icon-kn.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/kn.svg)"
  },
  ".flag-icon-kp": { backgroundImage: "url(/images/flags/4x3/kp.svg)" },
  ".flag-icon-kp.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/kp.svg)"
  },
  ".flag-icon-kr": { backgroundImage: "url(/images/flags/4x3/kr.svg)" },
  ".flag-icon-kr.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/kr.svg)"
  },
  ".flag-icon-kw": { backgroundImage: "url(/images/flags/4x3/kw.svg)" },
  ".flag-icon-kw.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/kw.svg)"
  },
  ".flag-icon-ky": { backgroundImage: "url(/images/flags/4x3/ky.svg)" },
  ".flag-icon-ky.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ky.svg)"
  },
  ".flag-icon-kz": { backgroundImage: "url(/images/flags/4x3/kz.svg)" },
  ".flag-icon-kz.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/kz.svg)"
  },
  ".flag-icon-la": { backgroundImage: "url(/images/flags/4x3/la.svg)" },
  ".flag-icon-la.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/la.svg)"
  },
  ".flag-icon-lb": { backgroundImage: "url(/images/flags/4x3/lb.svg)" },
  ".flag-icon-lb.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/lb.svg)"
  },
  ".flag-icon-lc": { backgroundImage: "url(/images/flags/4x3/lc.svg)" },
  ".flag-icon-lc.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/lc.svg)"
  },
  ".flag-icon-li": { backgroundImage: "url(/images/flags/4x3/li.svg)" },
  ".flag-icon-li.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/li.svg)"
  },
  ".flag-icon-lk": { backgroundImage: "url(/images/flags/4x3/lk.svg)" },
  ".flag-icon-lk.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/lk.svg)"
  },
  ".flag-icon-lr": { backgroundImage: "url(/images/flags/4x3/lr.svg)" },
  ".flag-icon-lr.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/lr.svg)"
  },
  ".flag-icon-ls": { backgroundImage: "url(/images/flags/4x3/ls.svg)" },
  ".flag-icon-ls.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ls.svg)"
  },
  ".flag-icon-lt": { backgroundImage: "url(/images/flags/4x3/lt.svg)" },
  ".flag-icon-lt.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/lt.svg)"
  },
  ".flag-icon-lu": { backgroundImage: "url(/images/flags/4x3/lu.svg)" },
  ".flag-icon-lu.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/lu.svg)"
  },
  ".flag-icon-lv": { backgroundImage: "url(/images/flags/4x3/lv.svg)" },
  ".flag-icon-lv.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/lv.svg)"
  },
  ".flag-icon-ly": { backgroundImage: "url(/images/flags/4x3/ly.svg)" },
  ".flag-icon-ly.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ly.svg)"
  },
  ".flag-icon-ma": { backgroundImage: "url(/images/flags/4x3/ma.svg)" },
  ".flag-icon-ma.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ma.svg)"
  },
  ".flag-icon-mc": { backgroundImage: "url(/images/flags/4x3/mc.svg)" },
  ".flag-icon-mc.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mc.svg)"
  },
  ".flag-icon-md": { backgroundImage: "url(/images/flags/4x3/md.svg)" },
  ".flag-icon-md.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/md.svg)"
  },
  ".flag-icon-me": { backgroundImage: "url(/images/flags/4x3/me.svg)" },
  ".flag-icon-me.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/me.svg)"
  },
  ".flag-icon-mf": { backgroundImage: "url(/images/flags/4x3/mf.svg)" },
  ".flag-icon-mf.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mf.svg)"
  },
  ".flag-icon-mg": { backgroundImage: "url(/images/flags/4x3/mg.svg)" },
  ".flag-icon-mg.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mg.svg)"
  },
  ".flag-icon-mh": { backgroundImage: "url(/images/flags/4x3/mh.svg)" },
  ".flag-icon-mh.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mh.svg)"
  },
  ".flag-icon-mk": { backgroundImage: "url(/images/flags/4x3/mk.svg)" },
  ".flag-icon-mk.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mk.svg)"
  },
  ".flag-icon-ml": { backgroundImage: "url(/images/flags/4x3/ml.svg)" },
  ".flag-icon-ml.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ml.svg)"
  },
  ".flag-icon-mm": { backgroundImage: "url(/images/flags/4x3/mm.svg)" },
  ".flag-icon-mm.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mm.svg)"
  },
  ".flag-icon-mn": { backgroundImage: "url(/images/flags/4x3/mn.svg)" },
  ".flag-icon-mn.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mn.svg)"
  },
  ".flag-icon-mo": { backgroundImage: "url(/images/flags/4x3/mo.svg)" },
  ".flag-icon-mo.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mo.svg)"
  },
  ".flag-icon-mp": { backgroundImage: "url(/images/flags/4x3/mp.svg)" },
  ".flag-icon-mp.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mp.svg)"
  },
  ".flag-icon-mq": { backgroundImage: "url(/images/flags/4x3/mq.svg)" },
  ".flag-icon-mq.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mq.svg)"
  },
  ".flag-icon-mr": { backgroundImage: "url(/images/flags/4x3/mr.svg)" },
  ".flag-icon-mr.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mr.svg)"
  },
  ".flag-icon-ms": { backgroundImage: "url(/images/flags/4x3/ms.svg)" },
  ".flag-icon-ms.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ms.svg)"
  },
  ".flag-icon-mt": { backgroundImage: "url(/images/flags/4x3/mt.svg)" },
  ".flag-icon-mt.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mt.svg)"
  },
  ".flag-icon-mu": { backgroundImage: "url(/images/flags/4x3/mu.svg)" },
  ".flag-icon-mu.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mu.svg)"
  },
  ".flag-icon-mv": { backgroundImage: "url(/images/flags/4x3/mv.svg)" },
  ".flag-icon-mv.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mv.svg)"
  },
  ".flag-icon-mw": { backgroundImage: "url(/images/flags/4x3/mw.svg)" },
  ".flag-icon-mw.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mw.svg)"
  },
  ".flag-icon-mx": { backgroundImage: "url(/images/flags/4x3/mx.svg)" },
  ".flag-icon-mx.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mx.svg)"
  },
  ".flag-icon-my": { backgroundImage: "url(/images/flags/4x3/my.svg)" },
  ".flag-icon-my.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/my.svg)"
  },
  ".flag-icon-mz": { backgroundImage: "url(/images/flags/4x3/mz.svg)" },
  ".flag-icon-mz.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/mz.svg)"
  },
  ".flag-icon-na": { backgroundImage: "url(/images/flags/4x3/na.svg)" },
  ".flag-icon-na.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/na.svg)"
  },
  ".flag-icon-nc": { backgroundImage: "url(/images/flags/4x3/nc.svg)" },
  ".flag-icon-nc.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/nc.svg)"
  },
  ".flag-icon-ne": { backgroundImage: "url(/images/flags/4x3/ne.svg)" },
  ".flag-icon-ne.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ne.svg)"
  },
  ".flag-icon-nf": { backgroundImage: "url(/images/flags/4x3/nf.svg)" },
  ".flag-icon-nf.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/nf.svg)"
  },
  ".flag-icon-ng": { backgroundImage: "url(/images/flags/4x3/ng.svg)" },
  ".flag-icon-ng.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ng.svg)"
  },
  ".flag-icon-ni": { backgroundImage: "url(/images/flags/4x3/ni.svg)" },
  ".flag-icon-ni.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ni.svg)"
  },
  ".flag-icon-nl": { backgroundImage: "url(/images/flags/4x3/nl.svg)" },
  ".flag-icon-nl.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/nl.svg)"
  },
  ".flag-icon-no": { backgroundImage: "url(/images/flags/4x3/no.svg)" },
  ".flag-icon-no.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/no.svg)"
  },
  ".flag-icon-np": { backgroundImage: "url(/images/flags/4x3/np.svg)" },
  ".flag-icon-np.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/np.svg)"
  },
  ".flag-icon-nr": { backgroundImage: "url(/images/flags/4x3/nr.svg)" },
  ".flag-icon-nr.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/nr.svg)"
  },
  ".flag-icon-nu": { backgroundImage: "url(/images/flags/4x3/nu.svg)" },
  ".flag-icon-nu.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/nu.svg)"
  },
  ".flag-icon-nz": { backgroundImage: "url(/images/flags/4x3/nz.svg)" },
  ".flag-icon-nz.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/nz.svg)"
  },
  ".flag-icon-om": { backgroundImage: "url(/images/flags/4x3/om.svg)" },
  ".flag-icon-om.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/om.svg)"
  },
  ".flag-icon-pa": { backgroundImage: "url(/images/flags/4x3/pa.svg)" },
  ".flag-icon-pa.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/pa.svg)"
  },
  ".flag-icon-pe": { backgroundImage: "url(/images/flags/4x3/pe.svg)" },
  ".flag-icon-pe.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/pe.svg)"
  },
  ".flag-icon-pf": { backgroundImage: "url(/images/flags/4x3/pf.svg)" },
  ".flag-icon-pf.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/pf.svg)"
  },
  ".flag-icon-pg": { backgroundImage: "url(/images/flags/4x3/pg.svg)" },
  ".flag-icon-pg.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/pg.svg)"
  },
  ".flag-icon-ph": { backgroundImage: "url(/images/flags/4x3/ph.svg)" },
  ".flag-icon-ph.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ph.svg)"
  },
  ".flag-icon-pk": { backgroundImage: "url(/images/flags/4x3/pk.svg)" },
  ".flag-icon-pk.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/pk.svg)"
  },
  ".flag-icon-pl": { backgroundImage: "url(/images/flags/4x3/pl.svg)" },
  ".flag-icon-pl.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/pl.svg)"
  },
  ".flag-icon-pm": { backgroundImage: "url(/images/flags/4x3/pm.svg)" },
  ".flag-icon-pm.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/pm.svg)"
  },
  ".flag-icon-pn": { backgroundImage: "url(/images/flags/4x3/pn.svg)" },
  ".flag-icon-pn.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/pn.svg)"
  },
  ".flag-icon-pr": { backgroundImage: "url(/images/flags/4x3/pr.svg)" },
  ".flag-icon-pr.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/pr.svg)"
  },
  ".flag-icon-ps": { backgroundImage: "url(/images/flags/4x3/ps.svg)" },
  ".flag-icon-ps.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ps.svg)"
  },
  ".flag-icon-pt": { backgroundImage: "url(/images/flags/4x3/pt.svg)" },
  ".flag-icon-pt.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/pt.svg)"
  },
  ".flag-icon-pw": { backgroundImage: "url(/images/flags/4x3/pw.svg)" },
  ".flag-icon-pw.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/pw.svg)"
  },
  ".flag-icon-py": { backgroundImage: "url(/images/flags/4x3/py.svg)" },
  ".flag-icon-py.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/py.svg)"
  },
  ".flag-icon-qa": { backgroundImage: "url(/images/flags/4x3/qa.svg)" },
  ".flag-icon-qa.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/qa.svg)"
  },
  ".flag-icon-re": { backgroundImage: "url(/images/flags/4x3/re.svg)" },
  ".flag-icon-re.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/re.svg)"
  },
  ".flag-icon-ro": { backgroundImage: "url(/images/flags/4x3/ro.svg)" },
  ".flag-icon-ro.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ro.svg)"
  },
  ".flag-icon-rs": { backgroundImage: "url(/images/flags/4x3/rs.svg)" },
  ".flag-icon-rs.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/rs.svg)"
  },
  ".flag-icon-ru": { backgroundImage: "url(/images/flags/4x3/ru.svg)" },
  ".flag-icon-ru.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ru.svg)"
  },
  ".flag-icon-rw": { backgroundImage: "url(/images/flags/4x3/rw.svg)" },
  ".flag-icon-rw.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/rw.svg)"
  },
  ".flag-icon-sa": { backgroundImage: "url(/images/flags/4x3/sa.svg)" },
  ".flag-icon-sa.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/sa.svg)"
  },
  ".flag-icon-sb": { backgroundImage: "url(/images/flags/4x3/sb.svg)" },
  ".flag-icon-sb.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/sb.svg)"
  },
  ".flag-icon-sc": { backgroundImage: "url(/images/flags/4x3/sc.svg)" },
  ".flag-icon-sc.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/sc.svg)"
  },
  ".flag-icon-sd": { backgroundImage: "url(/images/flags/4x3/sd.svg)" },
  ".flag-icon-sd.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/sd.svg)"
  },
  ".flag-icon-se": { backgroundImage: "url(/images/flags/4x3/se.svg)" },
  ".flag-icon-se.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/se.svg)"
  },
  ".flag-icon-sg": { backgroundImage: "url(/images/flags/4x3/sg.svg)" },
  ".flag-icon-sg.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/sg.svg)"
  },
  ".flag-icon-sh": { backgroundImage: "url(/images/flags/4x3/sh.svg)" },
  ".flag-icon-sh.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/sh.svg)"
  },
  ".flag-icon-si": { backgroundImage: "url(/images/flags/4x3/si.svg)" },
  ".flag-icon-si.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/si.svg)"
  },
  ".flag-icon-sj": { backgroundImage: "url(/images/flags/4x3/sj.svg)" },
  ".flag-icon-sj.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/sj.svg)"
  },
  ".flag-icon-sk": { backgroundImage: "url(/images/flags/4x3/sk.svg)" },
  ".flag-icon-sk.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/sk.svg)"
  },
  ".flag-icon-sl": { backgroundImage: "url(/images/flags/4x3/sl.svg)" },
  ".flag-icon-sl.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/sl.svg)"
  },
  ".flag-icon-sm": { backgroundImage: "url(/images/flags/4x3/sm.svg)" },
  ".flag-icon-sm.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/sm.svg)"
  },
  ".flag-icon-sn": { backgroundImage: "url(/images/flags/4x3/sn.svg)" },
  ".flag-icon-sn.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/sn.svg)"
  },
  ".flag-icon-so": { backgroundImage: "url(/images/flags/4x3/so.svg)" },
  ".flag-icon-so.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/so.svg)"
  },
  ".flag-icon-sr": { backgroundImage: "url(/images/flags/4x3/sr.svg)" },
  ".flag-icon-sr.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/sr.svg)"
  },
  ".flag-icon-ss": { backgroundImage: "url(/images/flags/4x3/ss.svg)" },
  ".flag-icon-ss.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ss.svg)"
  },
  ".flag-icon-st": { backgroundImage: "url(/images/flags/4x3/st.svg)" },
  ".flag-icon-st.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/st.svg)"
  },
  ".flag-icon-sv": { backgroundImage: "url(/images/flags/4x3/sv.svg)" },
  ".flag-icon-sv.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/sv.svg)"
  },
  ".flag-icon-sx": { backgroundImage: "url(/images/flags/4x3/sx.svg)" },
  ".flag-icon-sx.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/sx.svg)"
  },
  ".flag-icon-sy": { backgroundImage: "url(/images/flags/4x3/sy.svg)" },
  ".flag-icon-sy.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/sy.svg)"
  },
  ".flag-icon-sz": { backgroundImage: "url(/images/flags/4x3/sz.svg)" },
  ".flag-icon-sz.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/sz.svg)"
  },
  ".flag-icon-tc": { backgroundImage: "url(/images/flags/4x3/tc.svg)" },
  ".flag-icon-tc.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/tc.svg)"
  },
  ".flag-icon-td": { backgroundImage: "url(/images/flags/4x3/td.svg)" },
  ".flag-icon-td.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/td.svg)"
  },
  ".flag-icon-tf": { backgroundImage: "url(/images/flags/4x3/tf.svg)" },
  ".flag-icon-tf.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/tf.svg)"
  },
  ".flag-icon-tg": { backgroundImage: "url(/images/flags/4x3/tg.svg)" },
  ".flag-icon-tg.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/tg.svg)"
  },
  ".flag-icon-th": { backgroundImage: "url(/images/flags/4x3/th.svg)" },
  ".flag-icon-th.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/th.svg)"
  },
  ".flag-icon-tj": { backgroundImage: "url(/images/flags/4x3/tj.svg)" },
  ".flag-icon-tj.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/tj.svg)"
  },
  ".flag-icon-tk": { backgroundImage: "url(/images/flags/4x3/tk.svg)" },
  ".flag-icon-tk.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/tk.svg)"
  },
  ".flag-icon-tl": { backgroundImage: "url(/images/flags/4x3/tl.svg)" },
  ".flag-icon-tl.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/tl.svg)"
  },
  ".flag-icon-tm": { backgroundImage: "url(/images/flags/4x3/tm.svg)" },
  ".flag-icon-tm.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/tm.svg)"
  },
  ".flag-icon-tn": { backgroundImage: "url(/images/flags/4x3/tn.svg)" },
  ".flag-icon-tn.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/tn.svg)"
  },
  ".flag-icon-to": { backgroundImage: "url(/images/flags/4x3/to.svg)" },
  ".flag-icon-to.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/to.svg)"
  },
  ".flag-icon-tr": { backgroundImage: "url(/images/flags/4x3/tr.svg)" },
  ".flag-icon-tr.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/tr.svg)"
  },
  ".flag-icon-tt": { backgroundImage: "url(/images/flags/4x3/tt.svg)" },
  ".flag-icon-tt.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/tt.svg)"
  },
  ".flag-icon-tv": { backgroundImage: "url(/images/flags/4x3/tv.svg)" },
  ".flag-icon-tv.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/tv.svg)"
  },
  ".flag-icon-tw": { backgroundImage: "url(/images/flags/4x3/tw.svg)" },
  ".flag-icon-tw.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/tw.svg)"
  },
  ".flag-icon-tz": { backgroundImage: "url(/images/flags/4x3/tz.svg)" },
  ".flag-icon-tz.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/tz.svg)"
  },
  ".flag-icon-ua": { backgroundImage: "url(/images/flags/4x3/ua.svg)" },
  ".flag-icon-ua.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ua.svg)"
  },
  ".flag-icon-ug": { backgroundImage: "url(/images/flags/4x3/ug.svg)" },
  ".flag-icon-ug.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ug.svg)"
  },
  ".flag-icon-um": { backgroundImage: "url(/images/flags/4x3/um.svg)" },
  ".flag-icon-um.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/um.svg)"
  },
  ".flag-icon-us": { backgroundImage: "url(/images/flags/4x3/us.svg)" },
  ".flag-icon-us.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/us.svg)"
  },
  ".flag-icon-uy": { backgroundImage: "url(/images/flags/4x3/uy.svg)" },
  ".flag-icon-uy.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/uy.svg)"
  },
  ".flag-icon-uz": { backgroundImage: "url(/images/flags/4x3/uz.svg)" },
  ".flag-icon-uz.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/uz.svg)"
  },
  ".flag-icon-va": { backgroundImage: "url(/images/flags/4x3/va.svg)" },
  ".flag-icon-va.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/va.svg)"
  },
  ".flag-icon-vc": { backgroundImage: "url(/images/flags/4x3/vc.svg)" },
  ".flag-icon-vc.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/vc.svg)"
  },
  ".flag-icon-ve": { backgroundImage: "url(/images/flags/4x3/ve.svg)" },
  ".flag-icon-ve.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ve.svg)"
  },
  ".flag-icon-vg": { backgroundImage: "url(/images/flags/4x3/vg.svg)" },
  ".flag-icon-vg.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/vg.svg)"
  },
  ".flag-icon-vi": { backgroundImage: "url(/images/flags/4x3/vi.svg)" },
  ".flag-icon-vi.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/vi.svg)"
  },
  ".flag-icon-vn": { backgroundImage: "url(/images/flags/4x3/vn.svg)" },
  ".flag-icon-vn.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/vn.svg)"
  },
  ".flag-icon-vu": { backgroundImage: "url(/images/flags/4x3/vu.svg)" },
  ".flag-icon-vu.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/vu.svg)"
  },
  ".flag-icon-wf": { backgroundImage: "url(/images/flags/4x3/wf.svg)" },
  ".flag-icon-wf.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/wf.svg)"
  },
  ".flag-icon-ws": { backgroundImage: "url(/images/flags/4x3/ws.svg)" },
  ".flag-icon-ws.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ws.svg)"
  },
  ".flag-icon-ye": { backgroundImage: "url(/images/flags/4x3/ye.svg)" },
  ".flag-icon-ye.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/ye.svg)"
  },
  ".flag-icon-yt": { backgroundImage: "url(/images/flags/4x3/yt.svg)" },
  ".flag-icon-yt.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/yt.svg)"
  },
  ".flag-icon-za": { backgroundImage: "url(/images/flags/4x3/za.svg)" },
  ".flag-icon-za.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/za.svg)"
  },
  ".flag-icon-zm": { backgroundImage: "url(/images/flags/4x3/zm.svg)" },
  ".flag-icon-zm.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/zm.svg)"
  },
  ".flag-icon-zw": { backgroundImage: "url(/images/flags/4x3/zw.svg)" },
  ".flag-icon-zw.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/zw.svg)"
  },
  ".flag-icon-es-ca": { backgroundImage: "url(/images/flags/4x3/es-ca.svg)" },
  ".flag-icon-es-ca.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/es-ca.svg)"
  },
  ".flag-icon-eu": { backgroundImage: "url(/images/flags/4x3/eu.svg)" },
  ".flag-icon-eu.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/eu.svg)"
  },
  ".flag-icon-gb-eng": { backgroundImage: "url(/images/flags/4x3/gb-eng.svg)" },
  ".flag-icon-gb-eng.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gb-eng.svg)"
  },
  ".flag-icon-gb-nir": { backgroundImage: "url(/images/flags/4x3/gb-nir.svg)" },
  ".flag-icon-gb-nir.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gb-nir.svg)"
  },
  ".flag-icon-gb-sct": { backgroundImage: "url(/images/flags/4x3/gb-sct.svg)" },
  ".flag-icon-gb-sct.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gb-sct.svg)"
  },
  ".flag-icon-gb-wls": { backgroundImage: "url(/images/flags/4x3/gb-wls.svg)" },
  ".flag-icon-gb-wls.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/gb-wls.svg)"
  },
  ".flag-icon-un": { backgroundImage: "url(/images/flags/4x3/un.svg)" },
  ".flag-icon-un.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/un.svg)"
  },
  ".flag-icon-xk": { backgroundImage: "url(/images/flags/4x3/xk.svg)" },
  ".flag-icon-xk.flag-icon-squared": {
    backgroundImage: "url(/images/flags/1x1/xk.svg)"
  }
})

export default styles
