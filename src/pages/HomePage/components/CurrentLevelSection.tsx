import { Box, Flex, styled } from "styled-system/jsx";
import { ProgressBar, Spacing, Text } from "@/ui-lib";

function CurrentLevelSection() {
	return (
		<styled.section css={{ px: 5, py: 4 }}>
			<Text variant="H1_Bold">현재 등급</Text>

			<Spacing size={4} />

			<Box bg="background.01_white" css={{ px: 5, py: 4, rounded: "2xl" }}>
				<Flex flexDir="column" gap={2}>
					<Text variant="H2_Bold">Explorer</Text>

					<ProgressBar value={0.6} size="xs" />

					<Flex justifyContent="space-between">
						<Box textAlign="left">
							<Text variant="C1_Bold">현재 포인트</Text>
							<Text variant="C2_Regular" color="neutral.03_gray">
								6p
							</Text>
						</Box>
						<Box textAlign="right">
							<Text variant="C1_Bold">다음 등급까지</Text>
							<Text variant="C2_Regular" color="neutral.03_gray">
								1.5p
							</Text>
						</Box>
					</Flex>
				</Flex>
			</Box>
		</styled.section>
	);
}

export default CurrentLevelSection;
