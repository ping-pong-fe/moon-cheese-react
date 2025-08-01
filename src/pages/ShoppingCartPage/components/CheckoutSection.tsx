import { Button, DeliveryIcon, Spacing, Text } from '@/ui-lib';
import { Box, Divider, Flex, HStack, Stack, styled } from 'styled-system/jsx';

function CheckoutSection() {
  return (
    <styled.section css={{ p: 5, bgColor: 'background.01_white' }}>
      <Text variant="H2_Bold">결제금액</Text>

      <Spacing size={4} />

      <Stack gap={6} css={{ p: 5, border: '1px solid', borderColor: 'border.01_gray', rounded: '2xl' }}>
        <Stack gap={5}>
          <Box gap={3}>
            <Flex justify="space-between">
              <Text variant="B2_Regular">주문금액(3개)</Text>
              <Text variant="B2_Bold" color="state.green">
                무료배송
              </Text>
            </Flex>
            <Spacing size={3} />
            <Flex justify="space-between">
              <Text variant="B2_Regular">배송비</Text>
              <Text variant="B2_Bold">무료</Text>
            </Flex>
          </Box>

          <Divider color="border.01_gray" />

          <HStack justify="space-between">
            <Text variant="H2_Bold">총 금액</Text>
            <Text variant="H2_Bold">$30.59</Text>
          </HStack>
        </Stack>

        <Button fullWidth size="lg">
          결제 진행
        </Button>

        <Text variant="C2_Regular" color="neutral.03_gray">
          {`우리는 신용카드, 은행 송금, 모바일 결제, 현금을 받아들입니다\n안전한 체크아웃\n귀하의 결제 정보는 암호화되어 안전합니다.`}
        </Text>
      </Stack>

      <Spacing size={4} />

      <Flex gap={3} css={{ p: 5, py: 4, bgColor: 'background.02_light-gray', rounded: '2xl' }}>
        <DeliveryIcon size={28} />

        <Flex flexDir="column" gap={1}>
          <Text variant="B2_Regular" fontWeight={'semibold'}>
            3-5일 후 도착 예정
          </Text>
          <Text variant="C2_Medium" color={'neutral.02_gray'}>
            결제 시 익스프레스 배송 가능
          </Text>
        </Flex>
      </Flex>
    </styled.section>
  );
}

export default CheckoutSection;
