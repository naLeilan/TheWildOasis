// const queryClient = useQueryClient();

// //Edit Form
// const { mutate: editCabin, isLoading: isEditing } = useMutation({
//   mutationFn: ({ newCbinData, id }) => createEditCabin(newCbinData, id),
//   onSuccess: () => {
//     toast.success("Cabin successfully edited");
//     queryClient.invalidateQueries({ queryKey: ["cabins"] });
//     reset();
//   },
//   onError: (err) => toast.error(err.message),
// });
