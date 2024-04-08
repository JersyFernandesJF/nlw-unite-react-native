import { useState } from "react"
import {
  Text,
  View,
  Alert,
  Modal,
  Share,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import { MotiView } from "moti"
import { FontAwesome } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"
import { Redirect } from "expo-router"

import { useBadgeStore } from "@/store/badge-store"

import { colors } from "@/styles/colors"

import { Header } from "@/components/header"
import { Button } from "@/components/button"
import { QRCode } from "@/components/qrcode"
import { Credencial } from "@/components/credential"

export default function Ticket() {
  const [expandQRCode, setExpandQRCode ] = useState(false)

  const badgeStore = useBadgeStore()

  return(
    <View className="flex-1 bg-green-500">
      <Header title="Minha Credencial"/>
    
    </View>
  )
}