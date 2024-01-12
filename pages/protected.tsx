import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

const ProtectedPage: React.FC<{ session: any }> = ({ session }) => {
  return (
    <div>
      <h1>Protected Page</h1>
      {session ? (
        <p>Welcome, {session.user.name}!</p>
      ) : (
        <p>You are not authenticated.</p>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default ProtectedPage;
