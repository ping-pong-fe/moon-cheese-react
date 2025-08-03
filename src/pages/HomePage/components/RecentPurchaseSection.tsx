import { Flex, styled } from "styled-system/jsx";
import { Spacing, Text } from "@/ui-lib";

function RecentPurchaseSection() {
	return (
		<styled.section css={{ px: 5, pt: 4, pb: 8 }}>
			<Text variant="H1_Bold">최근 구매한 상품</Text>

			<Spacing size={4} />

			<Flex
				css={{
					bg: "background.01_white",
					px: 5,
					py: 4,
					gap: 4,
					rounded: "2xl",
				}}
				direction={"column"}
			>
				<Flex
					css={{
						gap: 4,
					}}
				>
					<styled.img
						src="/moon-cheese-images/cheese-1-1.jpg"
						alt="item"
						css={{
							w: "60px",
							h: "60px",
							objectFit: "cover",
							rounded: "xl",
						}}
					/>
					<Flex flexDir="column" gap={1}>
						<Text variant="B2_Medium">월레스의 오리지널 웬슬리데일</Text>
						<Text variant="H1_Bold">$12.99</Text>
					</Flex>
				</Flex>

				<Flex
					css={{
						gap: 4,
					}}
				>
					<styled.img
						src="/moon-cheese-images/cheese-2-1.jpg"
						alt="item"
						css={{
							w: "60px",
							h: "60px",
							objectFit: "cover",
							rounded: "xl",
						}}
					/>
					<Flex flexDir="column" gap={1}>
						<Text variant="B2_Medium">그랜드 데이 아웃 체다</Text>
						<Text variant="H1_Bold">$14.87</Text>
					</Flex>
				</Flex>
			</Flex>
		</styled.section>
	);
}

export default RecentPurchaseSection;
