import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/store";
import { removeFromDrafts } from "../../../store/slices/draft.slice";

const MyDrafts: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { listingDrafts } = useSelector((state: RootState) => state.drafts);

  return (
    <section className="py-8 lg:py-12 bg-foreground">
      <div className="max-w-7xl flex flex-col gap-4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-background/90 mb-2">
            My Drafts
          </h2>
          <p className="font-body text-background/40">
            Here you can find all your saved drafts. Continue editing or publish
            them whenever you're ready.
          </p>
        </div>
        <div className="mt-5 max-w-2xl flex flex-wrap w-full mx-auto justify-center gap-8 items-center">
          {listingDrafts.slice(0, 2).map((draft, i) => (
            <div
              key={i}
              className="rounded-lg flex flex-col justify-between w-[240px] items-center bg-foreground border-2 border-background/20 shadow-2xl"
            >
              {draft.image && (
                <img
                  src={draft.image}
                  className="h-40 w-full rounded-t-md object-cover"
                />
              )}
              <div className="p-4 flex w-full flex-col items-start gap-2">
                <p className="font-semibold text-background font-heading">
                  {draft.name || "Untitled Product"}
                </p>
                <p className="text-sm text-gray-500">
                  ₦{draft.price?.toLocaleString() || "0.00"}
                </p>
              </div>
              <div className="flex items-center gap-4 w-full p-2">
                <button
                  onClick={() => dispatch(removeFromDrafts(draft))}
                  className="text-red-500 text-sm border border-background/20 hover:bg-red-500 hover:text-background  px-2 py-1 w-full rounded-md font-body"
                >
                  Remove
                </button>
                <button
                  onClick={() => dispatch(removeFromDrafts(draft))}
                  className="text-green-500 text-sm border border-background/20 hover:bg-green-500 hover:text-background px-2 py-1 w-full rounded-md font-body"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
        {listingDrafts.length > 1 && <button className="px-3 py-1.5 rounded-md border w-fit flex mx-auto mt-8 border-primary text-primary font-body font-bold hover:bg-primary hover:text-background">Expand</button>}
      </div>
    </section>
  );
};

export default MyDrafts;
