import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import InfoHeader from "../../components/InfoHeader";
import PersonalInfo from "../../components/PersonalInfo";
import Skills from "../../components/Skills";

const drawerWidth = 320;

function Panel({ children }) {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer open sx={{ display: { xs: "none", sm: "block" } }} variant="permanent">
          <InfoHeader />
          <Divider />
          <PersonalInfo />
          <Divider />
          <Skills
            heading={t("hard_skills")}
            skills={[
              { title: t("coding"), level: 100, order: 1 },
              { title: t("debugging"), level: 90, order: 2 },
              { title: t("database_knowledge"), level: 80, order: 3 },
            ]}
          />
          <Divider />
          <Skills
            heading={t("languages")}
            skills={[
              { title: t("javascript"), level: 100, order: 1 },
              { title: t("php"), level: 90, order: 2 },
              { title: t("node_js"), level: 80, order: 3 },
            ]}
          />
          <Divider />
          <Skills
            heading={t("soft_skill")}
            skills={[
              { title: t("code_optimization"), level: 100, order: 1 },
              { title: t("requirement_gathering"), level: 90, order: 2 },
              { title: t("documentation_reporting"), level: 80, order: 3 },
            ]}
          />
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        {children}
      </Box>
    </Box>
  );
}

Panel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape([])).isRequired,
};

Panel.defaultProps = {};

export default Panel;
