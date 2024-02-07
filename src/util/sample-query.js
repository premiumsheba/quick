import { useRouter } from "next/router";

export default function getParams() {
  const router = useRouter();
  const { query } = router;

  return { params: query.params };
}
