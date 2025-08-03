import { Spacing } from "@/ui-lib";
import ProductDetailSection from "./components/ProductDetailSection";
import ProductInfoSection from "./components/ProductInfoSection";
import RecommendationSection from "./components/RecommendationSection";
import ThumbnailSection from "./components/ThumbnailSection";

function ProductDetailPage() {
	return (
		<>
			<ThumbnailSection
				images={[
					"/moon-cheese-images/cracker-1-1.jpg",
					"/moon-cheese-images/cracker-1-2.jpg",
					"/moon-cheese-images/cracker-1-3.jpg",
					"/moon-cheese-images/cracker-1-4.jpg",
				]}
			/>
			<ProductInfoSection
				name={"치즈홀 크래커"}
				category={"cracker"}
				rating={4.0}
				price={10.85}
				quantity={2}
			/>

			<Spacing size={2.5} />

			<ProductDetailSection
				description={
					'"달 표면에서 가 수확한 특별한 구멍낸 크래커." 달의 분화구를 연상시키는 다지한과 고소한 풍미가 특징인 크래커. 치즈와의 궁합을 고려한 절묘한 비율로, 어느 데어링 메뉴도 잘 어울립니다.'
				}
			/>

			<Spacing size={2.5} />

			<RecommendationSection />
		</>
	);
}

export default ProductDetailPage;
