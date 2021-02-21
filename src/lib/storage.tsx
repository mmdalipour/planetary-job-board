import { Settings } from "providers/SettingsProvider";

export const setSettingInStorage = (settings: Settings) => {
  localStorage.setItem("settings", JSON.stringify(settings));
};

export const getSettingsInStorage = (): Settings => {
  return JSON.parse(localStorage.getItem("settings") as string) as Settings;
};

export const removeSettingsInStorage = () => {
  localStorage.removeItem("settings");
};
