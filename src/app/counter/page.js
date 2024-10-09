"use client";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "@/libs/features/counter_app/CounterSlice";
import React from "react";
import { useDispatch, useSelector } from "@/libs/hooks/hooks";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        This is Counter Application
      </h1>
      <h2 className="text-2xl text-gray-700 mb-6">
        Count is <span className="font-semibold text-blue-500">{count}</span>
      </h2>
      <div className="flex gap-6">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Increment By Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
