import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import Paper from './components/Paper'
import {Feeds} from './components/Feeds'
import Search from './components/Search'
import {Tables} from './components/Tables'
import {Mixed} from './components/Mixed'
import Ready from './components/Ready'


const widgetsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Widgets',
    path: '/crafted/widgets/charts',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const WidgetsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='paper'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Paper</PageTitle>
              <Paper />
            </>
          }
        />
        <Route
          path='feeds'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Feeds</PageTitle>
              <Feeds />
            </>
          }
        />
        <Route
          path='search'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Search</PageTitle>
              <Search />
            </>
          }
        />
        <Route
          path='mixed'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Mixed</PageTitle>
              <Mixed />
            </>
          }
        />
        <Route
          path='tables'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Tables</PageTitle>
              <Tables />
            </>
          }
        />
        <Route
          path='ready'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Ready</PageTitle>
              <Ready />
            </>
          }
        />
        <Route index element={<Navigate to='/crafted/widgets/search' />} />
      </Route>
    </Routes>
  )
}

export default WidgetsPage
