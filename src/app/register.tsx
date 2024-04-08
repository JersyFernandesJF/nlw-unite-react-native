import { useState } from "react"
import { View, Image, StatusBar, Alert } from "react-native"
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons"
import { Link, router } from "expo-router"
import axios from "axios"

import { colors } from "@/styles/colors";

import { api } from "@/server/api";

import { Input } from "@/components/input";
import { Button } from "@/components/button";


const EVENT_ID = "9e9bd979-9d10-4915-b339-3786b1634f33"

export default function Register() {
  const [ name, setName] = useState("")
  const [ email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar barStyle="light-content" />
      <Image 
        source={require("@/assets/")}
      />
      <View className="w-full mt-12 gap-3">
        <Input>
          <FontAwesome6
            name="user-circle"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="Nome completo" onChangeText={setName} />
        </Input>
        <Input >
           <MaterialIcons
            name="alternate-email"
            color={colors.green[200]}
            size={20}
           />
           <Input.Field
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={setEmail}
           />
        </Input>
        <Button
         title="Realizar inscrição"
         isLoading={isLoading}
        />
        <Link
        href="/"
        className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Já possui ingresso?
        </Link>
      </View>
    </View>
  )
}