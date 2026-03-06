import SingleCardSkeleto from "./SingleCardSkeleto";

export default function CardSkeleton() {
  /** 
   * I know not good but I will fix it later 
   * 
  */
  return (
    <>
    <div className="flex gap-3">
      <SingleCardSkeleto />
      <SingleCardSkeleto />
      <SingleCardSkeleto />
      <SingleCardSkeleto />
    </div>
    <div className="flex gap-3">
      <SingleCardSkeleto />
      <SingleCardSkeleto />
      <SingleCardSkeleto />
      <SingleCardSkeleto />
    </div>
    </>
  );
}