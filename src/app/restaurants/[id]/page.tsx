import type { Restaurant } from "@/types/Restaurant";
import RestaurantData from "@/data/부산맛집.json";
import { notFound } from "next/navigation";
import Link from "next/link";

interface RestaurantDetailProps {
    params: Promise<{ id: string }>
}
export default async function RestaurantDetail({ params }:
    RestaurantDetailProps) {
    const { id } = await params;
    const restaurants: Restaurant[] = RestaurantData;
    const restaurant = restaurants.find(item => item.UC_SEQ === Number(id));
    if (!restaurant) {
        notFound();
    }
    return (
        <div className="w-full h-full flex justify-center items-center">
            <h1>Restaurant Detail Page</h1>
            <p>Restaurant ID: {id}</p>
            <Link href="/restaurants">목록으로</Link>
        </div>
    );
}