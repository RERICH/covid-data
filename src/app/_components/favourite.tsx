import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { trpc } from "../_trpc/client";

export default function Favourite({ slug }: { slug: string }) {
  const getFavourite = trpc.getFavourite.useQuery(slug);
  const setFavourite = trpc.setFavourite.useMutation({
    onSettled: () => {
      getFavourite.refetch();
    },
  });

  return (
    <div>
      <button style={{ border: "0 none", background: "none" }} onClick={async () => setFavourite.mutate({ slug: slug, selected: !getFavourite.data })}>
        {getFavourite.data ? <HeartFilled style={{ color: "red" }} /> : <HeartOutlined />}
      </button>
    </div>
  )
}