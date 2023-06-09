"use client";
import React from "react";

import AppLayout from "@cloudscape-design/components/app-layout";
import Header from "@cloudscape-design/components/header";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import Link from "@cloudscape-design/components/link";

import "@/styles/globals.css";
import "@cloudscape-design/global-styles/index.css";
import TopNavigation from "@/components/layout/TopNavigation";
import SideNavigation from "@/components/layout/SideNavigation";
import HelpPanel from "@/components/layout/HelpPanel";
import Notifications from "@/components/layout/Notification";
import {
  Density,
  Mode,
  applyDensity,
  applyMode,
} from "@cloudscape-design/global-styles";
import SplitPanel from "@cloudscape-design/components/split-panel";

export default function Layout({ children }: { children: React.ReactNode }) {
  applyDensity(Density.Compact);
  applyMode(Mode.Light);

  return (
    <>
      <TopNavigation />
      <AppLayout
        splitPanelOpen={true}
        splitPanelSize={90}
        contentType="cards"
        breadcrumbs={
          <BreadcrumbGroup
            items={[
              { text: "System", href: "#" },
              { text: "Components", href: "#components" },
              {
                text: "Breadcrumb group",
                href: "#components/breadcrumb-group",
              },
            ]}
            ariaLabel="Breadcrumbs"
          />
        }
        content={children}
        notifications={<Notifications />}
        navigation={<SideNavigation />}
        tools={<HelpPanel />}
      />
    </>
  );
}
