// Libraries
import { useRouter } from 'next/router';
import {
  ProductWidget,
  Balance,
  HStack,
  Button,
  Avatar,
} from '@revolut/ui-kit';
import * as Icons from '@revolut/icons';

export const Equity: React.FC = () => {
  const router = useRouter();

  return (
    <ProductWidget>
      <ProductWidget.Header>
        <ProductWidget.Avatar>
          <Avatar color="deep-grey" useIcon={Icons.Cash} />
        </ProductWidget.Avatar>
        <ProductWidget.Title>
          <Balance value={100.11} currency="PEN" />
        </ProductWidget.Title>
        <ProductWidget.Description>Patrimonio</ProductWidget.Description>
      </ProductWidget.Header>
      <HStack>
        <Button
          size="sm"
          variant="black"
          useIcon={Icons.Plus}
          width="fit-content"
          marginLeft="auto"
          onClick={() => router.push('/new')}
        >
          Nuevo movimiento
        </Button>
      </HStack>
    </ProductWidget>
  );
};
