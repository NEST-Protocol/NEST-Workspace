import React from "react";

import LoadingAndErrorWrapper from "metabase/components/LoadingAndErrorWrapper";
import {
  PermissionsSidebarContent,
  PermissionsSidebarContentProps,
} from "./PermissionsSidebarContent";
import { SidebarRoot } from "./PermissionsSidebar.styled";

interface PermissionsSidebar extends PermissionsSidebarContentProps {
  isLoading?: boolean;
  error: string;
}

export const PermissionsSidebar = ({
  isLoading,
  error,
  ...contentProps
}: PermissionsSidebar) => {
  return (
    <SidebarRoot>
      <LoadingAndErrorWrapper loading={isLoading} error={error} noWrapper>
        <PermissionsSidebarContent {...contentProps} />
      </LoadingAndErrorWrapper>
    </SidebarRoot>
  );
};
