import { VStack, Heading, Center, HStack } from 'native-base';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Glicemia } from '../components/Glicemia';
import { Bolus } from '../components/Bolus';
import { SmallCard } from '../components/SmallCard';

export function ScheduleMeal() {
  return (
    <VStack bgColor="#CADCBB" flex={1} px={10}>
      <Center>
        <Glicemia />
        <Bolus />
        <HStack>
          Hora da refeição
        </HStack>
        {/* 
          <Input placeholder='Confirme a senha' /> */}
        {/* <Button title="Cadastrar" /> */}
      </Center>
    </VStack>
  );
}
