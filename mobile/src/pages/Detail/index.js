import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../pages/assets/logo.png';
import styles from './styles';

export default function Detail() {

  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;

  const subject = `Herói do caso: ${incident.title}`;
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso da "${incident.title}" com o valor de R$ ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}}}`;
  function navigationBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: subject,
      recipients: [incident.email],
      body: message
    });
  }
  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} alt="Be The Hero" />

        <TouchableOpacity onPress={navigationBack}  >
          <Feather name="arrow-right" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentProperty}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentProperty}>{Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
          .format(incident.value)}}</Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}