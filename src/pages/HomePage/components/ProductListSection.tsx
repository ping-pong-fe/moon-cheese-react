import { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Flex, Grid, HStack, Stack, styled } from "styled-system/jsx";
import { Counter, RatingGroup, Spacing, SubGNB, Text } from "@/ui-lib";

function ProductListSection() {
	const [currentTab, setCurrentTab] = useState("all");
	const navigate = useNavigate();

	const handleClickProduct = (productId: number) => {
		navigate(`/product/${productId}`);
	};

	return (
		<styled.section bg="background.01_white">
			<Box css={{ px: 5, pt: 5, pb: 4 }}>
				<Text variant="H1_Bold">판매중인 상품</Text>
			</Box>
			<SubGNB.Root
				value={currentTab}
				onValueChange={(details) => setCurrentTab(details.value)}
			>
				<SubGNB.List>
					<SubGNB.Trigger value="all">전체</SubGNB.Trigger>
					<SubGNB.Trigger value="cheese">치즈</SubGNB.Trigger>
					<SubGNB.Trigger value="cracker">크래커</SubGNB.Trigger>
					<SubGNB.Trigger value="tea">티</SubGNB.Trigger>
				</SubGNB.List>
			</SubGNB.Root>
			<Grid gridTemplateColumns="repeat(2, 1fr)" rowGap={9} columnGap={4} p={5}>
				<ProductItem
					image="/moon-cheese-images/cheese-1-1.jpg"
					name="월레스의 오리지널 웬슬리데일"
					description="월레스가 아침마다 찾는 바로 그 치즈!"
					price={12.99}
					rating={4}
					onClick={() => handleClickProduct(1)}
				/>
				<ProductItem
					image="/moon-cheese-images/cracker-1-1.jpg"
					name="로봇 크런치 비스킷"
					description="로봇 캐릭터 모양의 귀리 비스킷"
					price={5}
					rating={3}
					freeTag="gluten"
					onClick={() => handleClickProduct(2)}
				/>
				<ProductItem
					image="/moon-cheese-images/tea-1-1.jpg"
					name="문라이트 카모마일 티"
					description="달빛 같은 부드러운 허브차"
					price={7}
					rating={5}
					freeTag="caffeine"
					onClick={() => handleClickProduct(3)}
				/>
			</Grid>
		</styled.section>
	);
}

function ProductItem({
	image,
	name,
	description,
	price,
	rating,
	freeTag,
	onClick,
}: {
	image: string;
	name: string;
	description: string;
	price: number;
	rating: number;
	freeTag?: "milk" | "caffeine" | "gluten";
	onClick?: () => void;
}) {
	const [count, setCount] = useState(0);

	return (
		<Box>
			<Box role="button" onClick={onClick} cursor="pointer">
				<styled.img
					src={image}
					alt={name}
					css={{
						w: "full",
						aspectRatio: 1,
						objectFit: "cover",
						rounded: "2xl",
					}}
				/>

				<Spacing size={4} />

				<Flex flexDir="column" gap={0.5}>
					<Text variant="B2_Bold">{name}</Text>
					<Text variant="C1_Medium" color="neutral.02_gray">
						{description}
					</Text>
				</Flex>

				<Spacing size={2} />

				<HStack justify="space-between" alignItems={"start"}>
					<Stack gap={2}>
						<RatingGroup
							label={`${rating.toFixed(1)}`}
							readOnly
							value={rating}
						/>
						<Text variant="B1_Bold">${price.toFixed(2).toLocaleString()}</Text>
					</Stack>
					{freeTag && <IconFree type={freeTag} />}
				</HStack>
			</Box>

			<Spacing size={3} />

			<Counter value={count} onValueChange={setCount} max={3} />
		</Box>
	);
}

function IconFree({ type }: { type: "milk" | "caffeine" | "gluten" }) {
	if (type === "milk") {
		return (
			<img src="/icons/no-milk.png" alt="no-milk" width={32} height={32} />
		);
	}
	if (type === "caffeine") {
		return (
			<img
				src="/icons/decaffeine.png"
				alt="decaffeine"
				width={32}
				height={32}
			/>
		);
	}
	if (type === "gluten") {
		return (
			<img
				src="/icons/gluten-free.png"
				alt="gluten-free"
				width={32}
				height={32}
			/>
		);
	}
}

export default ProductListSection;
