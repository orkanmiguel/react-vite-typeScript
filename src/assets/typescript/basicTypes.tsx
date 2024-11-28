export const BasicTypes = () => {
  const name: string = "OrkaN";
  const age: number = 38;
  const isActive: boolean = false;

  const powers: string[] = ["React", "ReactNative", "astro", "js"];

  return (
    <>
      <div>basicTypes</div>
      {name}-{age} - {isActive ? "Activo" : "No Activo"}
      <p>{powers.join(", ")}</p>
    </>
  );
};
