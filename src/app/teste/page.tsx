"use client";
import Header from "@cloudscape-design/components/header";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Input from "@cloudscape-design/components/input";
import Button from "@cloudscape-design/components/button";

import { useStore } from "@/providers/StoreProvider";
import { observer } from "mobx-react-lite";
import NoSSR from "@/components/layout/NoSSR";
import Table from "@cloudscape-design/components/table";
import Tabs from "@cloudscape-design/components/tabs";
import { ContentLayout, Link } from "@cloudscape-design/components";

const Page = () => {
  const { githubStore } = useStore();
  githubStore.getPatrimony(12);

  const DataView = observer(() => {
    return (
      <pre key={githubStore.patrimony.page}>
        {githubStore.patrimony.results.map((item) => (
          <div key={item.id}>{item.emission_name}</div>
        ))}
      </pre>
    );
  });

  return (
    // <Tabs
    //   tabs={[
    //     {
    //       label: "First tab label",
    //       id: "first",
    //       content: "First tab content area",
    //     },
    //     {
    //       label: "Second tab label",
    //       id: "second",
    //       content: "Second tab content area",
    //     },
    //     {
    //       label: "Third tab label",
    //       id: "third",
    //       content: "Third tab content area",
    //       disabled: true,
    //     },
    //   ]}
    // />
    <>
      <ContentLayout
        header={
          <Header
            variant="h1"
            description="When you create an Amazon CloudFront distribution, you tell CloudFront where to find your content by specifying your origin servers."
            info={<Link variant="info">Info</Link>}
          >
            Create distribution
          </Header>
        }
        disableOverlap={true}
      >
        <Container header={<Header variant="h1">Hello World!</Header>}>
          <SpaceBetween size="s">
            <DataView />
          </SpaceBetween>
        </Container>
      </ContentLayout>
    </>
  );
};

export default Page;
