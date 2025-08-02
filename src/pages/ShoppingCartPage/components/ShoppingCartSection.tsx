import { Button, Counter, Spacing, Tag, Text, XIcon, type TagType } from '@/ui-lib';
import { Center, Divider, Flex, Stack, styled } from 'styled-system/jsx';

function ShoppingCartSection() {
  return (
    <styled.section css={{ p: 5, bgColor: 'background.01_white' }}>
      <Flex justify="space-between">
        <Text variant="H2_Bold">장바구니</Text>
        <Button color={'neutral'} size="sm">
          전체삭제
        </Button>
      </Flex>
      <Spacing size={4} />
      <Stack gap={5} css={{ p: 5, border: '1px solid', borderColor: 'border.01_gray', rounded: '2xl' }}>
        <ShoppingCartItem
          type="cheese"
          image="/moon-cheese-images/cheese-1.jpg"
          name="월레스의 오리지널 웬슬리데일"
          price={12.99}
          quantity={1}
          description="월레스의 오리지널 웬슬리데일"
          onDelete={() => {}}
        />
        <Divider color="border.01_gray" />
        <ShoppingCartItem
          type="cracker"
          image="/moon-cheese-images/cheese-2.jpg"
          name="월레스의 오리지널 웬슬리데일"
          price={12.99}
          quantity={1}
          description="월레스의 오리지널 웬슬리데일"
          onDelete={() => {}}
        />
        <Divider color="border.01_gray" />
        <ShoppingCartItem
          type="tea"
          image="/moon-cheese-images/cheese-3.jpg"
          name="월레스의 오리지널 웬슬리데일"
          price={12.99}
          quantity={1}
          description="월레스의 오리지널 웬슬리데일"
          onDelete={() => {}}
        />
      </Stack>
    </styled.section>
  );
}

function ShoppingCartItem({
  type,
  image,
  name,
  description,
  price,
  quantity,
  onDelete,
}: {
  type: TagType;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  onDelete?: () => void;
}) {
  return (
    <Flex gap={4}>
      <styled.img src={image} alt={name} css={{ w: '60px', h: '60px', rounded: 'lg' }} />
      <Flex flexDir="column" gap={2} flex={1}>
        <Flex flexDir="column" gap={1}>
          <Flex alignItems="center" justify="space-between">
            <Tag type={type} />
            <Center onClick={onDelete} color="neutral.03_gray">
              <XIcon size={16} />
            </Center>
          </Flex>
          <Text variant="B2_Bold">{name}</Text>
          <Text variant="C1_Medium" color="neutral.02_gray">
            {description}
          </Text>
        </Flex>
        <Flex alignItems="center" justify="space-between">
          <Text variant="H1_Bold">${price.toFixed(2)}</Text>
          <Counter value={quantity} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ShoppingCartSection;
