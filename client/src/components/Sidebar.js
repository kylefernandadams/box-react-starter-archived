import React from 'react';
import { CollapsibleSidebar, CollapsibleSidebarNav, CollapsibleSidebarItem, CollapsibleSidebarMenuItem, CollapsibleSidebarFooter } from 'box-ui-elements/es/features/collapsible-sidebar';
import { ThemeProvider } from 'styled-components';
import { boolean, color } from '@storybook/addon-knobs';
import Code16 from 'box-ui-elements/es/icon/fill/Code16';
import Relay16 from 'box-ui-elements/es/icon/fill/Relay16';
import Folder16 from 'box-ui-elements/es/icon/fill/Folder16';
import Search16 from 'box-ui-elements/es/icon/fill/Search16';
import CloudUpload16 from 'box-ui-elements/es/icon/fill/CloudUpload16';
import FileDefault16 from 'box-ui-elements/es/icon/fill/FileDefault16';
import BoxDev16 from 'box-ui-elements/es/icon/fill/BoxDev16';
import ClockBadge16 from 'box-ui-elements/es/icon/fill/ClockBadge16';
import GlobeBadge16 from 'box-ui-elements/es/icon/fill/GlobeBadge16';
import { THEME_COLOR } from '../Constants';


import BarChart16 from 'box-ui-elements/es/icon/fill/BarChart16';
import { createTheme } from 'box-ui-elements/es/utils/createTheme';

export default () => {
    const hexColor = color('Theme Color', THEME_COLOR);

    const theme = createTheme(hexColor);

    return (
        <ThemeProvider theme={theme}>
            <CollapsibleSidebar expanded={boolean('isExpanded', true)}>
                <CollapsibleSidebarNav>
                    <ul>
                        <li className="nav-menu-item">
                                    <CollapsibleSidebarItem
                                        collapsedElement={
                                            <CollapsibleSidebarMenuItem icon={<BarChart16 height={20} width={20} />} />
                                        }
                                        expanded={boolean('isExpanded', true)}
                                        expandedElement={
                                            <CollapsibleSidebarMenuItem
                                                href="/content-explorer"
                                                icon={<Folder16 height={20} width={20} />}
                                                text="Content Explorer"
                                            />
                                        }
                                        tooltipMessage="Content Explorer"
                                    />
                                
                            </li>
                            <li className="nav-menu-item">
                                    <CollapsibleSidebarItem
                                        collapsedElement={
                                            <CollapsibleSidebarMenuItem icon={<BarChart16 height={20} width={20} />} />
                                        }
                                        expanded={boolean('isExpanded', true)}
                                        expandedElement={
                                            <CollapsibleSidebarMenuItem
                                                href="/content-explorer-recents"
                                                icon={<ClockBadge16 height={20} width={20} />}
                                                text="Recents"
                                            />
                                        }
                                        tooltipMessage="recents"
                                    />
                                
                            </li>
                        <li className="nav-menu-item">
                                    <CollapsibleSidebarItem
                                        collapsedElement={
                                            <CollapsibleSidebarMenuItem icon={<BarChart16 height={20} width={20} />} />
                                        }
                                        expanded={boolean('isExpanded', true)}
                                        expandedElement={
                                            <CollapsibleSidebarMenuItem
                                                href="/metadata-query"
                                                icon={<BoxDev16 height={20} width={20} />}
                                                text="Metadata Query"
                                            />
                                        }
                                        tooltipMessage="Metadata Query"
                                    />
                                
                            </li>
                        <li className="nav-menu-item">
                                <CollapsibleSidebarItem
                                    collapsedElement={
                                        <CollapsibleSidebarMenuItem icon={<Relay16 height={20} width={20} />} />
                                    }
                                    expanded={boolean('isExpanded', true)}
                                    expandedElement={
                                        <CollapsibleSidebarMenuItem
                                            href="/content-picker"
                                            icon={<Search16 height={20} width={20} />}
                                            text="Content Picker"
                                        />
                                    }
                                    tooltipMessage="Content Picker Link"
                                />
                        </li>
                        <li className="nav-menu-item">
                                <CollapsibleSidebarItem
                                    collapsedElement={
                                        <CollapsibleSidebarMenuItem icon={<Relay16 height={20} width={20} />} />
                                    }
                                    expanded={boolean('isExpanded', true)}
                                    expandedElement={
                                        <CollapsibleSidebarMenuItem
                                            href="/content-uploader"
                                            icon={<CloudUpload16 height={20} width={20} />}
                                            text="Content Uploader"
                                        />
                                    }
                                    tooltipMessage="Content Uploader Link"
                                />
                        </li>
                        <li className="nav-menu-item">
                                <CollapsibleSidebarItem
                                    collapsedElement={
                                        <CollapsibleSidebarMenuItem icon={<Relay16 height={20} width={20} />} />
                                    }
                                    expanded={boolean('isExpanded', true)}
                                    expandedElement={
                                        <CollapsibleSidebarMenuItem
                                            href="/content-preview"
                                            icon={<FileDefault16 height={20} width={20} />}
                                            text="Content Preview"
                                        />
                                    }
                                    tooltipMessage="Content Preview Link"
                                />
                        </li>
                    </ul>
                </CollapsibleSidebarNav>
                <CollapsibleSidebarFooter>
                    <ul>
                        <li key="djb-leftnav-menu-item-all-files">
                            <CollapsibleSidebarItem
                                collapsedElement={
                                    <CollapsibleSidebarMenuItem icon={<Code16 height={20} width={20} />} />
                                }
                                expanded={boolean('isExpanded', true)}
                                expandedElement={
                                    <CollapsibleSidebarMenuItem
                                        href="https://developer.box.com"
                                        icon={<Code16 height={20} width={20} />}
                                        text="Box Design System"
                                    />
                                }
                                tooltipMessage="Developer Console Link"
                            />
                        </li>
                    </ul>
                </CollapsibleSidebarFooter>
            </CollapsibleSidebar>
        </ThemeProvider>
    );
};
