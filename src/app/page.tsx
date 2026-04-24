import { PortfolioPage } from "@/features/portfolio/portfolio-page";
import { portfolioData } from "@/features/portfolio/data/portfolio-data";

export default function Home() {
  return <PortfolioPage data={portfolioData} />;
}
