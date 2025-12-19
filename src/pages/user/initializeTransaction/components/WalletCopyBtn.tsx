import { CopyIcon } from '@/components/icons/Icons';
import { useState } from 'react'
import { toast } from 'react-toastify';

type Props = {
  wallet:string;
}

export default function WalletCopyBtn({wallet}:Props) {
      const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(wallet);
      setCopied(true);
      toast.success("Copy successfully")
      setTimeout(() => setCopied(false), 5000); // reset after 5s
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <button onClick={handleCopy} className='inline-flex w-auto items-center gap-3 px-3 py-1.5 rounded-md bg-gray-200 text-center justify-center duration-300 hover:bg-gray-300'><CopyIcon className='w-5 h-5' />  {copied ? "Copied!" : "Copy Wallet"}</button>
  )
}

