import { HeartFilled, HeartOutlined } from "@ant-design/icons";

export default function Favourite({slug} : {slug: string}) {

    return (
        true ? <HeartOutlined /> : <HeartFilled />
    )
}