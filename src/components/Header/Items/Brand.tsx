interface BrandProps {
  name: string;
}

export function Brand(props: BrandProps) {
  return (
    <h1 className="text-amber-600 font-black text-3xl font-brand tracking-tight">
      {props.name.toUpperCase()}
    </h1>
  );
}
