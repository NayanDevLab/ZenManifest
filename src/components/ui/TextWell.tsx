import { TextInput, type TextInputProps } from "react-native";
import { colors } from "@/theme/tokens";

export function TextWell({ style, multiline = true, ...rest }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={colors.inkSoft}
      multiline={multiline}
      className="rounded-field border border-white/[0.06] bg-black/[0.22] px-[14px] py-3 font-serif-italic text-[14px] text-ink"
      style={style}
      {...rest}
    />
  );
}
