import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { brandConfig } from "@/config/brandConfig";

/**
 * Props for `BigText`.
 */
export type BigTextProps = SliceComponentProps<Content.BigTextSlice>;

/**
 * Component for "BigText" Slices.
 */
const BigText = ({ slice }: BigTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen w-screen overflow-hidden"
      style={{
        backgroundColor: brandConfig.colors.blue,
        color: brandConfig.colors.white,
      }}
    >
      <h2 className="mx-auto grid min-h-screen max-w-6xl place-content-center gap-6 px-4 py-16 text-center text-6xl font-black uppercase leading-[0.88] md:text-8xl lg:text-9xl">
        <span>Golden</span>
        <span>Eagle</span>
        <span>Flavours</span>
      </h2>
    </section>
  );
};

export default BigText;
