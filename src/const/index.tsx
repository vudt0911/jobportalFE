import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { ItemType } from "antd/es/menu/hooks/useItems";

export const API_URL = "http://localhost:8086" as const;
export const LANGUAGES = ["vi", "en"] as const;
export const LOCALE = "locale" as const;
export const LIST_ITEM_SIDEBAR: ItemType[] = [
  {
    key: "1",
    label: "nav 1",
    icon: <UserOutlined />,
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "nav 2",
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "nav 3",
  },
];
