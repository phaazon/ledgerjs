import Ada from "@ledgerhq/hw-app-ada";

export default async transport => {
  const ada = new Ada(transport);
  const result = await ada.isConnected();
  return result;
};
