import { VStack, Heading, Center, HStack } from 'native-base';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Glicemia } from '../components/Glicemia';
import { Bolus } from '../components/Bolus';
import { SmallCard } from '../components/SmallCard';

export function Home() {
  return (
    <VStack bgColor="#CADCBB" flex={1} px={10}>
      <Center>
        <Glicemia />
        <Bolus />
        <HStack>
          <SmallCard title="Agendar doses" />
          <SmallCard title="Hora da refeição" />
        </HStack>
        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('ScheduleMeal')
          }
        />
        {/* 
          <Input placeholder='Confirme a senha' /> */}
        {/* <Button title="Cadastrar" /> */}
      </Center>
    </VStack>
  );
}
