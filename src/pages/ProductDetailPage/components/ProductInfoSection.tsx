import { Button, Counter, RatingGroup, Spacing, Text } from "@/ui-lib";
import Tag, { type TagType } from "@/ui-lib/components/tag";
import { Box, Divider, Flex, Stack, styled } from "styled-system/jsx";

type ProductInfoSectionProps = {
	name: string;
	category: TagType;
	rating: number;
	price: number;
	quantity: number;
};

function ProductInfoSection({
	name,
	category,
	rating,
	price,
	quantity,
}: ProductInfoSectionProps) {
	return (
		<styled.section css={{ bg: "background.01_white", p: 5 }}>
			{/* 상품 정보 */}
			<Box>
				<Stack gap={2}>
					<Tag type={category} />
					<Text variant="B1_Bold">{name}</Text>
					<RatingGroup value={rating} readOnly label={`${rating.toFixed(1)}`} />
				</Stack>
				<Spacing size={4} />
				<Text variant="H1_Bold">${price.toFixed(2)}</Text>
			</Box>

			<Spacing size={5} />

			{/* 재고 및 수량 조절 */}
			<Flex justify="space-between" alignItems="center">
				<Flex alignItems="center" gap={2}>
					<Text variant="C1_Medium">재고</Text>
					<Divider orientation="vertical" color="border.01_gray" h={4} />
					<Text variant="C1_Medium" color="secondary.02_orange">
						{quantity}EA
					</Text>
				</Flex>
				<Counter />
			</Flex>

			<Spacing size={5} />

			{/* 장바구니 버튼 */}
			<Button fullWidth color="primary" size="lg">
				장바구니
			</Button>
		</styled.section>
	);
}

export default ProductInfoSection;
