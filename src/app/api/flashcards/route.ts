export async function GET() {
  const data = [
    { front: "गुरुः", back: "Teacher", image: "/images/teacher.png" },
    { front: "शान्तिः", back: "Peace", image: "/images/peace.png"  },
    { front: "अग्निः", back: "Fire", image: "/images/fire.png"  },
    { front: "पुस्तकं", back: "Book", image: "/images/book.png"  },
    { front: "मित्रम्", back: "Friend", image: "/images/friend.png"  },
    { front: "मातृ", back: "Mother", image: "/images/mother.png"  },
    { front: "पिता", back: "Father", image: "/images/father.png"  },
    { front: "क्रीडम्", back: "Play", image: "/images/play.png"  },
  ];
  return new Response(JSON.stringify(data), { status: 200 });
}
