import ClientRedirect from '@/src/components/ClientRedirect';
import { defaultLocale } from '@/src/lib/i18n';

export default () => <ClientRedirect to={`/${defaultLocale}`} />;
