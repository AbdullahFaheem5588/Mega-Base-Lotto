import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubHeader from "../../components/SubHeader";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../../store/globalSlices";

export default function Create() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useSelector((state) => state.globalStates.lotteries).length + 1;
  const wallet = useSelector((state) => state.globalStates.wallet);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [prize, setPrize] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [expiresAt, setExpiresAt] = useState("");

  const handleSubmit = async (e) => {
    if (wallet.length > 0) {
      e.preventDefault();

      if (
        !title ||
        !description ||
        !imageUrl ||
        !prize ||
        !ticketPrice ||
        !expiresAt
      ) {
        toast.error("Please fill out all fields.");
        return;
      }

      const params = {
        id: id,
        title: title,
        description: description,
        owner: wallet,
        prize: prize,
        ticketPrice: ticketPrice,
        image: imageUrl,
        createdAt: new Date().getTime(),
        drawsAt: new Date(expiresAt).getTime(),
        expiresAt: new Date(expiresAt).getTime(),
        participants: 0,
        drawn: false,
      };

      try {
        // Dispatch the addLottery action with the params
        dispatch(globalActions.addLottery(params));

        toast.success("Lottery created successfully 👌");
        console.log(params);
        navigate("/");
        onReset();
      } catch (error) {
        toast.error("Encountered an error 🤯");
      }
    } else {
      toast.error("Please, connect wallet, no accounts found.");
    }
  };

  const onReset = () => {
    setTitle("");
    setDescription("");
    setImageUrl("");
    setPrize("");
    setTicketPrice("");
    setExpiresAt("");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Helmet>
        <title>Create Lottery - Mega Base Lotto</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <div className="relative z-10 min-h-screen flex flex-col">
        <SubHeader />
        <div className="flex flex-col justify-center items-center mt-5 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-purple-400 py-5">
              Create Your Very Own Lottery
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Create your own lottery with Mega Base Lotto. Set prizes, token
              prices, and manage everything easily through our platform. Start
              bringing your lottery vision to life today.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg space-y-6 mb-6"
          >
            <div className="relative mb-6">
              <input
                className="peer mt-2 block w-full border-2 border-gray-300 rounded-md shadow-sm p-4 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:ring-0"
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <label
                htmlFor="title"
                className="absolute left-4 -top-3 text-indigo-500 text-xs transform -translate-y-1/2 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-indigo-500 peer-focus:text-xs"
              >
                Title
              </label>
            </div>
            <div className="relative mb-6">
              <input
                className="peer mt-2 block w-full border-2 border-gray-300 rounded-md shadow-sm p-4 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:ring-0"
                id="imageUrl"
                type="url"
                placeholder="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
              <label
                htmlFor="imageUrl"
                className="absolute left-4 -top-3 text-indigo-500 text-xs transform -translate-y-1/2 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-indigo-500 peer-focus:text-xs"
              >
                Image URL
              </label>
            </div>
            <div className="relative mb-6">
              <input
                className="peer mt-2 block w-full border-2 border-gray-300 rounded-md shadow-sm p-4 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:ring-0"
                id="prize"
                type="number"
                step={0.01}
                min={0.01}
                placeholder="Prize"
                value={prize}
                onChange={(e) => setPrize(e.target.value)}
                required
              />
              <label
                htmlFor="prize"
                className="absolute left-4 -top-3 text-indigo-500 text-xs transform -translate-y-1/2 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-indigo-500 peer-focus:text-xs"
              >
                Prize
              </label>
            </div>
            <div className="relative mb-6">
              <input
                className="peer mt-2 block w-full border-2 border-gray-300 rounded-md shadow-sm p-4 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:ring-0"
                id="ticketPrice"
                type="number"
                step={0.01}
                min={0.01}
                placeholder="Ticket Price"
                value={ticketPrice}
                onChange={(e) => setTicketPrice(e.target.value)}
                required
              />
              <label
                htmlFor="ticketPrice"
                className="absolute left-4 -top-3 text-indigo-500 text-xs transform -translate-y-1/2 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-indigo-500 peer-focus:text-xs"
              >
                Ticket Price
              </label>
            </div>
            <div className="relative mb-6">
              <input
                className="peer mt-2 block w-full border-2 border-gray-300 rounded-md shadow-sm p-4 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:ring-0"
                id="expiresAt"
                type="datetime-local"
                value={expiresAt}
                onChange={(e) => setExpiresAt(e.target.value)}
                required
              />
              <label
                htmlFor="expiresAt"
                className="absolute left-4 -top-3 text-indigo-500 text-xs transform -translate-y-1/2 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-indigo-500 peer-focus:text-xs"
              >
                Expiration Date
              </label>
            </div>
            <div className="relative mb-6">
              <textarea
                className="peer mt-2 block w-full border-2 border-gray-300 rounded-md shadow-sm p-4 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:ring-0"
                id="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              <label
                htmlFor="description"
                className="absolute left-4 -top-3 text-indigo-500 text-xs transform -translate-y-1/2 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-indigo-500 peer-focus:text-xs"
              >
                Description
              </label>
            </div>
            <div className="flex justify-center">
              <button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit Lottery
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
