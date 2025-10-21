/**
 * Renders the header section of the website.
 * @returns {JSX.Element} The rendered header component.
 */
export const Header = () => (
  <div className="flex flex-row justify-between items-center px-32 py-2 border-b border-neutral-700">
    <div className="text-2xl text-red-600">SyncJS</div>
    <div className="flex flex-row gap-4">
      <button className="button-primary">Ana Sayfa</button>
      <button className="button-primary">Giriş Yap</button>
    </div>
  </div>
);
