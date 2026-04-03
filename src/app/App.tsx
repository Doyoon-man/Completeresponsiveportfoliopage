import Desktop from "../imports/Desktop/Desktop";
import Tablet from "../imports/Tablet/Tablet";
import Mobile from "../imports/Mobile/Mobile";

export default function App() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Mobile: 768px 미만 */}
      <div className="block md:hidden w-full">
        <Mobile />
      </div>

      {/* Tablet: 768px ~ 1279px */}
      <div className="hidden md:block xl:hidden w-full">
        <Tablet />
      </div>

      {/* Desktop: 1280px 이상 */}
      <div className="hidden xl:block w-full">
        <Desktop />
      </div>
    </div>
  );
}
