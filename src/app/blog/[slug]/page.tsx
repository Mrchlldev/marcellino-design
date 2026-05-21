type Props = {
  params: {
    slug: string;
  };
};

export default function PostPage({
  params,
}: Props) {
  return (
    <div>
      {params.slug}
    </div>
  );
}