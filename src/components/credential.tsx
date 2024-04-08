import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";

import { BadgeStore } from "@/store/badge-store";

import { colors } from "@/styles/colors";

import { QRCode } from "@/components/qrcode";

type Props = {
  data: BadgeStore;
  image?: string;
  onChangeAvatar?: () => void;
  onExpandQRCode?: () => void;
};

export function Credencial({ data, onChangeAvatar, onExpandQRCode }: Props) {
  const { height } = useWindowDimensions();

  return (
    <MotiView>
      <Image
        source={require("@/assets/ticket/band.png")}
        className="w-24 h-52 z-10"
      />
      <View>
      <ImageBackground
          source={require("@/assets/ticket/header.png")}
          className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-zinc-50 text-sm font-bold">
              {data.eventTitle}
            </Text>
          </View>
        </ImageBackground>
        {data.image?(
          <TouchableOpacity activeOpacity={0.9}>
                       <Image
              source={{ uri: data.image }}
              className="w-36 h-36 rounded-full -mt-24"
            />
          </TouchableOpacity>
        ):(
          <TouchableOpacity
          activeOpacity={0.9}
          className="w-36 h-36 rounded-full -mt-24 bg-gray-400 items-center justify-center"
          >
            <Feather name="camera" color={colors.green[400]} size={32} />
          </TouchableOpacity>
        )}

<Text className="font-bold text-2xl text-zinc-50 mt-4">
          {data.name}
        </Text>

        <Text className="font-regular text-base text-zinc-300 mb-4">
          {data.email}
        </Text>

        <QRCode value={data.checkInURL} size={120} />

        <TouchableOpacity
          activeOpacity={0.7}
          className="mt-6"
          onPress={onExpandQRCode}
        >
          <Text className="font-body text-orange-500 text-sm">
            Ampliar QRCode
          </Text>
        </TouchableOpacity>
      </View>
    </MotiView>
  );
}
