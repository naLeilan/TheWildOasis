import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${newCabin.image.name}-${Math.random()}`.replaceAll(
    "/",
    ""
  );

  const imagePath = ` ${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // https://gbnfgbnpgktqkdboczvv.supabase.co/
  //storage/v1/object/public/cabin-images/cabin-001.jpg

  //1.create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  //2.upload image
  const { error: sorageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (sorageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(sorageError);
    throw new Error(
      "Cabins image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
}
