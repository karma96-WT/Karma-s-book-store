'use client';
import Nar_bar from "../components/nab_bar/page";
import Footer from "../components/footer/page";
import FictionBook from "../components/FictionBooks/page";
import SciencefictionBook from "../components/ScienceFictionBooks/page";
import AdvantureBook from "../components/Advanture/page";
import BiographyBook from "../components/Biography/page";
import ThrillerBook from "../components/Thriller/page";
import LoveBook from "../components/LoveBook/page";
import HistoryBook from "../components/HistoryBooks/page";
import AdultBook from "../components/AdultBooks/page";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

export default function Online_ordering() {
  const router = useRouter();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch('/api/getsession');
        const data = await res.json();

        if (data?.user) {
          setStatus(data.user);
        } else {
          router.push('/Login');
        }
      } catch (err) {
        console.error("Session check failed:", err);
        router.push('/Login');
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, [router]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {/* If needed: <Nar_bar /> */}
      <div className="Online-ordering-book-container"></div>
      <div className="searched-books"></div>
      <div className="trending-container">
        <div className="trending" id="Fiction">Fiction</div>
        <FictionBook />
        <div className="trending-container">
          <div className="trending-books-container" id="fiction-books"></div>
        </div>
      </div>
      <hr />
      <div className="trending-container">
        <div className="trending" id="Science-fiction">Science-Fiction</div>
        <SciencefictionBook />
        <div className="trending-container">
          <div className="trending-books-container" id="science-fiction-books"></div>
        </div>
      </div>
      <hr />
      <div className="trending-container">
        <div className="trending" id="Advanture">Advanture</div>
        <AdvantureBook />
        <div className="trending-container">
          <div className="trending-books-container" id="advanture-books"></div>
        </div>
      </div>
      <hr />
      <div className="trending-container">
        <div className="trending" id="Biography">Biography</div>
        <BiographyBook />
        <div className="trending-container">
          <div className="trending-books-container" id="biography-books"></div>
        </div>
      </div>
      <hr />
      <div className="trending-container">
        <div className="trending" id="Thriller">Thriller</div>
        <ThrillerBook />
        <div className="trending-container">
          <div className="trending-books-container" id="thriller-books"></div>
        </div>
      </div>
      <hr />
      <div className="trending-container">
        <div className="trending" id="Love">Love</div>
        <LoveBook />
        <div className="trending-container">
          <div className="trending-books-container" id="love-books"></div>
        </div>
      </div>
      <hr />
      <div className="trending-container">
        <div className="trending" id="History">History</div>
        <HistoryBook />
        <div className="trending-container">
          <div className="trending-books-container" id="history-books"></div>
        </div>
      </div>
      <hr />
      <div className="trending-container">
        <div className="trending" id="Adult">Adult</div>
        <AdultBook />
        <div className="trending-container">
          <div className="trending-books-container" id="adult-books"></div>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
}
